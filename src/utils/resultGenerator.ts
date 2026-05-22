import type {
  CrossValidationResult,
  IPPortrait,
  BusinessBase,
  ContentDirection,
  OperationRhythm,
  OverallMatch,
  BoundaryCase,
} from '../types';
import {
  AXIS1_LABELS, AXIS3_LABELS,
} from '../types';
import type { ScoringResult } from './scoring';
import {
  AXIS1_DETAIL, AXIS2_DETAIL, AXIS3_DETAIL, AXIS4_DETAIL,
  BUSINESS_MODELS,
} from '../data/axisResults';

export function generateResult(
  scoring: ScoringResult,
  crossValidation: CrossValidationResult
): { portrait: IPPortrait; boundaryCase: BoundaryCase; matchScore: number } {
  const boundaryCase = determineBoundaryCase(scoring, crossValidation);
  const matchScore = calculateMatchScore(scoring, crossValidation);
  const portrait = buildPortrait(scoring, crossValidation);

  return { portrait, boundaryCase, matchScore };
}

function determineBoundaryCase(
  scoring: ScoringResult,
  cv: CrossValidationResult
): BoundaryCase {
  const allAxes = [scoring.axis1, scoring.axis2, scoring.axis3, scoring.axis4];
  const mixedAxes = allAxes.filter(a => a.isMixed);
  const lowConfAxes = allAxes.filter(a => a.confidence < 0.7);

  // Count tensions
  let tensionCount = 0;
  const issues: string[] = [];
  for (const match of [cv.axis1x3Match, cv.axis2x4Match, cv.axis2x3Match]) {
    if (match.type === 'tension') {
      tensionCount++;
      issues.push(match.message);
    }
  }

  if (tensionCount >= 3) {
    return { type: 'contradictory', issues };
  }

  if (mixedAxes.length >= 3 || lowConfAxes.length >= 4) {
    return { type: 'scattered' };
  }

  if (mixedAxes.length >= 2) {
    const mixedTypes = mixedAxes.flatMap(a => [
      (Object.entries(a.scores) as [string, number][]).sort(([, s1], [, s2]) => s2 - s1)[0][0],
      (Object.entries(a.scores) as [string, number][]).sort(([, s1], [, s2]) => s2 - s1)[1][0],
    ]);
    return { type: 'mixed', types: [...new Set(mixedTypes)] };
  }

  // Determine confidence level
  const avgConf = allAxes.reduce((s, a) => s + a.confidence, 0) / 4;
  const confidence = avgConf >= 0.85 ? 'high' as const : 'medium' as const;

  return { type: 'clear', confidence };
}

function calculateMatchScore(
  scoring: ScoringResult,
  cv: CrossValidationResult
): number {
  const baseScore = 75; // baseline
  let score = baseScore;

  // Axis confidence adjustments
  score += (scoring.axis1.confidence - 0.75) * 20;
  score += (scoring.axis2.confidence - 0.75) * 20;
  score += (scoring.axis3.confidence - 0.75) * 20;
  score += (scoring.axis4.confidence - 0.75) * 20;

  // Cross-axis match adjustments
  score += cv.axis1x3Match.bonus * 15;
  score += cv.axis2x4Match.bonus * 15;
  score += cv.axis2x3Match.bonus * 15;

  // Clamp to 0-100
  return Math.max(0, Math.min(100, Math.round(score)));
}

function buildPortrait(
  scoring: ScoringResult,
  cv: CrossValidationResult
): IPPortrait {
  const a1Type = scoring.axis1.primary;
  const a2Type = scoring.axis2.primary;
  const a3Type = scoring.axis3.primary;
  const a4Type = scoring.axis4.primary;

  const a1Detail = AXIS1_DETAIL[a1Type];
  const a2Detail = AXIS2_DETAIL[a2Type];
  const a3Detail = AXIS3_DETAIL[a3Type];
  const a4Detail = AXIS4_DETAIL[a4Type];

  // Build business model key
  const modelKey = `${a1Type}_${a3Type}`;
  const model = BUSINESS_MODELS[modelKey] || {
    modelName: `${AXIS1_LABELS[a1Type]} × ${AXIS3_LABELS[a3Type]}`,
    description: `你的业务属于${AXIS1_LABELS[a1Type]}，变现路径偏向${AXIS3_LABELS[a3Type]}。`,
    recommendation: '按照左侧画像中的建议逐步推进。',
    warning: null,
  };

  const businessBase: BusinessBase = {
    businessType: a1Detail.title,
    monetizationType: a3Detail.title,
    modelName: model.modelName,
    confidence: scoring.axis1.confidence >= 0.8 && scoring.axis3.confidence >= 0.8 ? '高' : '中',
    description: model.description,
    recommendation: model.recommendation,
    warning: model.warning,
  };

  const contentDirection: ContentDirection = {
    contentType: a2Detail.title,
    contentForm: a2Detail.contentForm,
    description: a2Detail.tagline,
    advantage: a2Detail.bestAt,
  };

  const operationRhythm: OperationRhythm = {
    rhythmType: a4Detail.title,
    frequency: a4Detail.frequency,
    description: a4Detail.tagline,
    teamAdvice: a4Detail.teamAdvice,
  };

  const items: { icon: string; text: string }[] = [];

  items.push({
    icon: cv.axis1x3Match.type === 'perfect' ? '✓' : cv.axis1x3Match.type === 'tension' ? '✗' : '○',
    text: `商业逻辑 × 变现模式：${cv.axis1x3Match.message}`,
  });
  items.push({
    icon: cv.axis2x4Match.type === 'perfect' ? '✓' : cv.axis2x4Match.type === 'tension' ? '✗' : '○',
    text: `内容基因 × 运营节奏：${cv.axis2x4Match.message}`,
  });
  items.push({
    icon: cv.axis2x3Match.type === 'perfect' ? '✓' : cv.axis2x3Match.type === 'tension' ? '✗' : '○',
    text: `内容基因 × 变现模式：${cv.axis2x3Match.message}`,
  });

  if (cv.axis2Contradiction) {
    items.push({ icon: '⚠', text: cv.axis2Contradiction });
  }
  if (cv.axis3Contradiction) {
    items.push({ icon: '⚠', text: cv.axis3Contradiction });
  }
  if (cv.axis4Contradiction) {
    items.push({ icon: '⚠', text: cv.axis4Contradiction });
  }

  const overallMatch: OverallMatch = {
    score: calculateMatchScore(scoring, cv),
    items,
  };

  return {
    businessBase,
    contentDirection,
    operationRhythm,
    overallMatch,
  };
}
