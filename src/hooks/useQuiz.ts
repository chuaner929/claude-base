import { useReducer, useCallback, useRef, useEffect } from 'react';
import type { AppStep, IPPortrait, BoundaryCase } from '../types';
import { questions } from '../data/questions';
import { calculateScores } from '../utils/scoring';
import { crossValidate } from '../utils/crossValidation';
import { generateResult } from '../utils/resultGenerator';

type Answers = Record<number, 'A' | 'B' | 'C' | 'D'>;

interface QuizState {
  step: AppStep;
  currentQuestion: number;
  answers: Answers;
  portrait: IPPortrait | null;
  boundaryCase: BoundaryCase | null;
  matchScore: number;
}

type Action =
  | { type: 'START_QUIZ' }
  | { type: 'SELECT_ANSWER'; questionId: number; optionId: 'A' | 'B' | 'C' | 'D' }
  | { type: 'NEXT' }
  | { type: 'PREV' }
  | { type: 'GO_TO_RESULT' }
  | { type: 'RESTART' }
  | { type: 'GO_TO_QUESTION'; index: number };

function computeResult(answers: Answers) {
  const scoring = calculateScores(answers);
  const cv = crossValidate(scoring, answers);
  return generateResult(scoring, cv);
}

function safeComputeResult(answers: Answers): { portrait: IPPortrait; boundaryCase: BoundaryCase; matchScore: number } | null {
  try {
    return computeResult(answers);
  } catch (e) {
    console.error('Result computation failed:', e);
    return null;
  }
}

function reducer(state: QuizState, action: Action): QuizState {
  switch (action.type) {
    case 'START_QUIZ':
      return { ...initialState, step: 'quiz' };

    case 'SELECT_ANSWER': {
      const newAnswers = { ...state.answers, [action.questionId]: action.optionId };
      return { ...state, answers: newAnswers };
    }
    case 'NEXT': {
      if (state.currentQuestion < questions.length - 1) {
        return { ...state, currentQuestion: state.currentQuestion + 1 };
      }
      const result = safeComputeResult(state.answers);
      if (!result) return { ...initialState, step: 'welcome' };
      return {
        ...state,
        step: 'result',
        portrait: result.portrait,
        boundaryCase: result.boundaryCase,
        matchScore: result.matchScore,
      };
    }
    case 'PREV': {
      if (state.currentQuestion > 0) {
        return { ...state, currentQuestion: state.currentQuestion - 1 };
      }
      return state;
    }
    case 'GO_TO_RESULT': {
      const result = safeComputeResult(state.answers);
      if (!result) return { ...initialState, step: 'welcome' };
      return {
        ...state,
        step: 'result',
        portrait: result.portrait,
        boundaryCase: result.boundaryCase,
        matchScore: result.matchScore,
      };
    }
    case 'GO_TO_QUESTION':
      return { ...state, currentQuestion: action.index };

    case 'RESTART':
      return { ...initialState, step: 'welcome' };

    default:
      return state;
  }
}

const initialState: QuizState = {
  step: 'welcome',
  currentQuestion: 0,
  answers: {},
  portrait: null,
  boundaryCase: null,
  matchScore: 0,
};

export function useQuiz() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    return () => clearTimer();
  }, [clearTimer]);

  const startQuiz = useCallback(() => {
    clearTimer();
    dispatch({ type: 'START_QUIZ' });
  }, [clearTimer]);

  const selectAnswer = useCallback((questionId: number, optionId: 'A' | 'B' | 'C' | 'D') => {
    dispatch({ type: 'SELECT_ANSWER', questionId, optionId });
    clearTimer();
    timerRef.current = setTimeout(() => {
      timerRef.current = null;
      dispatch({ type: 'NEXT' });
    }, 400);
  }, [clearTimer]);

  const goNext = useCallback(() => dispatch({ type: 'NEXT' }), []);
  const goPrev = useCallback(() => dispatch({ type: 'PREV' }), []);
  const goToResult = useCallback(() => dispatch({ type: 'GO_TO_RESULT' }), []);
  const restart = useCallback(() => {
    clearTimer();
    dispatch({ type: 'RESTART' });
  }, [clearTimer]);
  const goToQuestion = useCallback((index: number) => dispatch({ type: 'GO_TO_QUESTION', index }), []);

  const currentQuestion = questions[state.currentQuestion];
  const totalQuestions = questions.length;
  const progress = ((state.currentQuestion + 1) / totalQuestions) * 100;
  const isLastQuestion = state.currentQuestion === totalQuestions - 1;
  const hasAnswer = state.answers[currentQuestion?.id] !== undefined;

  return {
    step: state.step,
    currentQuestion,
    currentQuestionIndex: state.currentQuestion,
    totalQuestions,
    progress,
    answers: state.answers,
    portrait: state.portrait,
    boundaryCase: state.boundaryCase,
    matchScore: state.matchScore,
    isLastQuestion,
    hasAnswer,
    startQuiz,
    selectAnswer,
    goNext,
    goPrev,
    goToResult,
    restart,
    goToQuestion,
  };
}
