// ===== 四轴类型定义 =====

// 轴一：商业逻辑
export type Axis1Type = 'entity_volume' | 'entity_premium' | 'online_volume' | 'online_premium';
export const AXIS1_TYPES: Axis1Type[] = ['entity_volume', 'entity_premium', 'online_volume', 'online_premium'];
export const AXIS1_LABELS: Record<Axis1Type, string> = {
  entity_volume: '实体走量型',
  entity_premium: '实体高客单型',
  online_volume: '线上走量型',
  online_premium: '线上高客单型',
};

// 轴二：内容基因
export type Axis2Type = 'talk_output' | 'story_narrative' | 'visual_aesthetic' | 'process_immersive';
export const AXIS2_TYPES: Axis2Type[] = ['talk_output', 'story_narrative', 'visual_aesthetic', 'process_immersive'];
export const AXIS2_LABELS: Record<Axis2Type, string> = {
  talk_output: '口播输出型',
  story_narrative: '故事叙事型',
  visual_aesthetic: '视觉美学型',
  process_immersive: '过程沉浸型',
};

// 轴三：变现模式
export type Axis3Type = 'ecommerce_direct' | 'private_domain' | 'local_referral' | 'knowledge_ip';
export const AXIS3_TYPES: Axis3Type[] = ['ecommerce_direct', 'private_domain', 'local_referral', 'knowledge_ip'];
export const AXIS3_LABELS: Record<Axis3Type, string> = {
  ecommerce_direct: '电商直转型',
  private_domain: '私域沉淀型',
  local_referral: '本地引流型',
  knowledge_ip: '知识/IP型',
};

// 轴四：运营节奏
export type Axis4Type = 'high_freq' | 'quality_slow' | 'livestream_driven' | 'matrix_replicate';
export const AXIS4_TYPES: Axis4Type[] = ['high_freq', 'quality_slow', 'livestream_driven', 'matrix_replicate'];
export const AXIS4_LABELS: Record<Axis4Type, string> = {
  high_freq: '高频快更型',
  quality_slow: '精品慢更型',
  livestream_driven: '直播驱动型',
  matrix_replicate: '矩阵复制型',
};

// ===== 题目相关类型 =====

export type AxisId = 1 | 2 | 3 | 4;

export interface Option {
  id: 'A' | 'B' | 'C' | 'D';
  text: string;
  scores: Record<string, number>; // typeId -> score
}

export interface Question {
  id: number;
  axis: AxisId;
  text: string;
  options: Option[];
  isReversed: boolean;
}

// ===== 答题状态 =====

export type AppStep = 'welcome' | 'quiz' | 'result';

export interface AxisScores {
  [typeId: string]: number;
}

export interface QuizResult {
  axis1: { primary: Axis1Type; secondary: Axis1Type | null; scores: AxisScores };
  axis2: { primary: Axis2Type; secondary: Axis2Type | null; scores: AxisScores };
  axis3: { primary: Axis3Type; secondary: Axis3Type | null; scores: AxisScores };
  axis4: { primary: Axis4Type; secondary: Axis4Type | null; scores: AxisScores };
  crossValidation: CrossValidationResult;
  matchScore: number;
  boundaryCase: BoundaryCase;
}

export interface CrossValidationResult {
  axis2Contradiction: string | null;
  axis3Contradiction: string | null;
  axis4Contradiction: string | null;
  axis1x3Match: { type: 'perfect' | 'ok' | 'tension'; message: string; bonus: number };
  axis2x4Match: { type: 'perfect' | 'ok' | 'tension'; message: string; bonus: number };
  axis2x3Match: { type: 'perfect' | 'ok' | 'tension'; message: string; bonus: number };
}

export type BoundaryCase =
  | { type: 'clear'; confidence: 'high' | 'medium' }
  | { type: 'mixed'; types: string[] }
  | { type: 'scattered' }
  | { type: 'contradictory'; issues: string[] };

// ===== 结果画像 =====

export interface IPPortrait {
  businessBase: BusinessBase;
  contentDirection: ContentDirection;
  operationRhythm: OperationRhythm;
  overallMatch: OverallMatch;
}

export interface BusinessBase {
  businessType: string;
  monetizationType: string;
  modelName: string;
  confidence: string;
  description: string;
  recommendation: string;
  warning: string | null;
}

export interface ContentDirection {
  contentType: string;
  contentForm: string;
  description: string;
  advantage: string;
}

export interface OperationRhythm {
  rhythmType: string;
  frequency: string;
  description: string;
  teamAdvice: string;
}

export interface OverallMatch {
  score: number;
  items: { icon: string; text: string }[];
}
