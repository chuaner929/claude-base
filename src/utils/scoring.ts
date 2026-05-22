import type { Question, Axis1Type, Axis2Type, Axis3Type, Axis4Type, AxisScores } from '../types';
import { questions } from '../data/questions';
import { AXIS1_TYPES, AXIS2_TYPES, AXIS3_TYPES, AXIS4_TYPES } from '../types';

export type Answers = Record<number, 'A' | 'B' | 'C' | 'D'>;

interface AxisResult<T> {
  primary: T;
  secondary: T | null;
  scores: AxisScores;
  rawScores: AxisScores;
  confidence: number;
  isMixed: boolean;
}

export interface ScoringResult {
  axis1: AxisResult<Axis1Type>;
  axis2: AxisResult<Axis2Type>;
  axis3: AxisResult<Axis3Type>;
  axis4: AxisResult<Axis4Type>;
}

function computeAxisScores(
  axisQuestions: Question[],
  answers: Answers,
  typeIds: string[]
): AxisScores {
  const scores: AxisScores = {};
  for (const tid of typeIds) {
    scores[tid] = 0;
  }

  for (const q of axisQuestions) {
    const answer = answers[q.id];
    if (!answer) continue; // skip unanswered
    const option = q.options.find(o => o.id === answer);
    if (!option) continue;
    for (const tid of typeIds) {
      scores[tid] += option.scores[tid] || 0;
    }
  }

  return scores;
}

function determineType<T extends string>(
  scores: AxisScores,
  typeIds: T[]
): { primary: T; secondary: T | null; confidence: number; isMixed: boolean } {
  const sorted = typeIds
    .map(id => ({ id, score: scores[id] || 0 }))
    .sort((a, b) => b.score - a.score);

  const primary = sorted[0];
  const secondary = sorted[1];

  const maxPossible = typeIds.length * 3 * 6; // rough max per axis
  const primaryPct = primary.score / (maxPossible / 4);
  const gap = secondary.score > 0
    ? (primary.score - secondary.score) / primary.score
    : 1;

  const isMixed = gap <= 0.1; // within 10% = mixed
  const confidence = primaryPct > 0.7 ? 1 : primaryPct > 0.4 ? 0.8 : 0.6;

  return {
    primary: primary.id as T,
    secondary: isMixed ? secondary.id as T : null,
    confidence: isMixed ? confidence * 0.7 : confidence,
    isMixed,
  };
}

// Apply internal consistency check (正反向题矛盾检测)
function applyInternalConsistency(
  axisId: number,
  scores: AxisScores,
  answers: Answers,
  typeIds: string[],
  reversedQId: number
): AxisScores {
  const adjusted = { ...scores };
  const revQ = questions.find(q => q.id === reversedQId);
  if (!revQ) return adjusted;

  const revAnswer = answers[reversedQId];
  if (!revAnswer) return adjusted;

  const revOption = revQ.options.find(o => o.id === revAnswer);
  if (!revOption) return adjusted;

  // Check: did the reversed question's weakest type match the current strongest?
  // The reversed question gives 0 to the "weakness" type
  // If that type is actually strong in forward questions → contradiction
  const forwardQs = questions.filter(q => q.axis === axisId && q.id !== reversedQId && !q.isReversed);

  for (const tid of typeIds) {
    const forwardScore = forwardQs.reduce((sum, fq) => {
      const ans = answers[fq.id];
      if (!ans) return sum;
      const opt = fq.options.find(o => o.id === ans);
      return sum + (opt?.scores[tid] || 0);
    }, 0);

    // If forward score is high (strong type) but reversed gives 0 to this type → contradiction
    // Reversed question: type gets 0 means it's the WEAKNESS
    const revScore = revOption.scores[tid] || 0;
    if (forwardScore >= 10 && revScore === 0) {
      adjusted[tid] = Math.round(adjusted[tid] * 0.7);
    }
  }

  return adjusted;
}

export function calculateScores(answers: Answers): ScoringResult {
  // Axis 1
  const axis1Questions = questions.filter(q => q.axis === 1);
  const axis1Scores = computeAxisScores(axis1Questions, answers, AXIS1_TYPES);
  const axis1Type = determineType(axis1Scores, AXIS1_TYPES);
  const axis1: AxisResult<Axis1Type> = {
    ...axis1Type,
    scores: axis1Scores,
    rawScores: { ...axis1Scores },
  };

  // Axis 2 with internal consistency
  const axis2Questions = questions.filter(q => q.axis === 2);
  const axis2Raw = computeAxisScores(axis2Questions, answers, AXIS2_TYPES);
  const axis2Adjusted = applyInternalConsistency(2, axis2Raw, answers, AXIS2_TYPES, 9);
  const axis2Type = determineType(axis2Adjusted, AXIS2_TYPES);
  const axis2: AxisResult<Axis2Type> = {
    ...axis2Type,
    scores: axis2Adjusted,
    rawScores: axis2Raw,
  };

  // Axis 3 with internal consistency
  const axis3Questions = questions.filter(q => q.axis === 3);
  const axis3Raw = computeAxisScores(axis3Questions, answers, AXIS3_TYPES);
  const axis3Adjusted = applyInternalConsistency(3, axis3Raw, answers, AXIS3_TYPES, 16);
  const axis3Type = determineType(axis3Adjusted, AXIS3_TYPES);
  const axis3: AxisResult<Axis3Type> = {
    ...axis3Type,
    scores: axis3Adjusted,
    rawScores: axis3Raw,
  };

  // Axis 4 with internal consistency
  const axis4Questions = questions.filter(q => q.axis === 4);
  const axis4Raw = computeAxisScores(axis4Questions, answers, AXIS4_TYPES);
  const axis4Adjusted = applyInternalConsistency(4, axis4Raw, answers, AXIS4_TYPES, 22);
  const axis4Type = determineType(axis4Adjusted, AXIS4_TYPES);
  const axis4: AxisResult<Axis4Type> = {
    ...axis4Type,
    scores: axis4Adjusted,
    rawScores: axis4Raw,
  };

  return { axis1, axis2, axis3, axis4 };
}
