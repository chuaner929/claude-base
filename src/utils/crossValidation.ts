import type { CrossValidationResult } from '../types';
import type { ScoringResult, Answers } from './scoring';

// 轴一 × 轴三 匹配度矩阵
const AXIS1x3_MATRIX: Record<string, Record<string, { type: 'perfect' | 'ok' | 'tension'; message: string; bonus: number }>> = {
  entity_volume: {
    ecommerce_direct: { type: 'perfect', message: '实体走量 + 电商直转：天生匹配，线下做信任背书，线上做获客复购', bonus: 0.1 },
    private_domain: { type: 'ok', message: '实体走量 + 私域沉淀：合理组合，私域适合做复购和老客维护', bonus: 0 },
    local_referral: { type: 'perfect', message: '实体走量 + 本地引流：天生匹配，门店即内容、即转化场景', bonus: 0.1 },
    knowledge_ip: { type: 'tension', message: '实体走量 + 知识/IP：存在张力，走量业务和知识变现的目标客户及内容逻辑差异较大', bonus: -0.2 },
  },
  entity_premium: {
    ecommerce_direct: { type: 'tension', message: '实体高客单 + 电商直转：存在张力，高客单产品不适合冲动消费逻辑', bonus: -0.2 },
    private_domain: { type: 'perfect', message: '实体高客单 + 私域沉淀：天生绝配，长周期信任建设 + 一对一高客单成交', bonus: 0.1 },
    local_referral: { type: 'perfect', message: '实体高客单 + 本地引流：天生匹配，线上种草到店体验是高端服务业的标准路径', bonus: 0.1 },
    knowledge_ip: { type: 'ok', message: '实体高客单 + 知识/IP：合理组合，专业内容可以建立行业权威，反哺实体业务', bonus: 0 },
  },
  online_volume: {
    ecommerce_direct: { type: 'perfect', message: '线上走量 + 电商直转：最主流的变现模型，内容即货架', bonus: 0.1 },
    private_domain: { type: 'ok', message: '线上走量 + 私域沉淀：合理组合，适合有复购属性的标品', bonus: 0 },
    local_referral: { type: 'tension', message: '线上走量 + 本地引流：存在逻辑矛盾，标品不需要到店环节', bonus: -0.2 },
    knowledge_ip: { type: 'tension', message: '线上走量 + 知识/IP：存在张力，走量客户和知识付费客户是两个人群', bonus: -0.2 },
  },
  online_premium: {
    ecommerce_direct: { type: 'tension', message: '线上高客单 + 电商直转：存在明显张力，高客单非标品与冲动消费逻辑冲突', bonus: -0.2 },
    private_domain: { type: 'perfect', message: '线上高客单 + 私域沉淀：最佳匹配，高客单需要长期信任，私域是唯一承载的场域', bonus: 0.1 },
    local_referral: { type: 'tension', message: '线上高客单 + 本地引流：存在张力，高客单线上业务的优势是突破地域限制', bonus: -0.2 },
    knowledge_ip: { type: 'perfect', message: '线上高客单 + 知识/IP：天然最强组合，用知识建立权威，把内容产品化变现', bonus: 0.1 },
  },
};

// 轴二 × 轴四 匹配度矩阵
const AXIS2x4_MATRIX: Record<string, Record<string, { type: 'perfect' | 'ok' | 'tension'; message: string; bonus: number }>> = {
  talk_output: {
    high_freq: { type: 'perfect', message: '口播输出 + 高频快更：天生匹配，口播内容制作轻量化，适合日更', bonus: 0.1 },
    quality_slow: { type: 'ok', message: '口播输出 + 精品慢更：合理组合，适合需要深度策划的选题', bonus: 0 },
    livestream_driven: { type: 'perfect', message: '口播输出 + 直播驱动：天生匹配，口才好的天然适合直播场景', bonus: 0.1 },
    matrix_replicate: { type: 'ok', message: '口播输出 + 矩阵复制：合理组合，口播模板化相对容易', bonus: 0 },
  },
  story_narrative: {
    high_freq: { type: 'tension', message: '故事叙事 + 高频快更：存在张力，好故事需要时间酝酿，日更会牺牲质量', bonus: -0.2 },
    quality_slow: { type: 'perfect', message: '故事叙事 + 精品慢更：天生匹配，好故事值得打磨', bonus: 0.1 },
    livestream_driven: { type: 'ok', message: '故事叙事 + 直播驱动：合理组合，直播可以延续日常故事的互动感', bonus: 0 },
    matrix_replicate: { type: 'tension', message: '故事叙事 + 矩阵复制：存在张力，故事需要人格一致性，不适合模板化', bonus: -0.2 },
  },
  visual_aesthetic: {
    high_freq: { type: 'tension', message: '视觉美学 + 高频快更：存在明显张力，高质量画面不可能每天产出', bonus: -0.2 },
    quality_slow: { type: 'perfect', message: '视觉美学 + 精品慢更：天生匹配，高质量视觉内容天然需要长周期', bonus: 0.1 },
    livestream_driven: { type: 'tension', message: '视觉美学 + 直播驱动：存在张力，视觉型创作者的优势在录播而非直播', bonus: -0.2 },
    matrix_replicate: { type: 'tension', message: '视觉美学 + 矩阵复制：存在张力，高品质内容难以模板化量产', bonus: -0.2 },
  },
  process_immersive: {
    high_freq: { type: 'ok', message: '过程沉浸 + 高频快更：部分可行，简单制作过程可日常更新', bonus: 0 },
    quality_slow: { type: 'perfect', message: '过程沉浸 + 精品慢更：天生匹配，好的制作过程需要时间积累素材', bonus: 0.1 },
    livestream_driven: { type: 'tension', message: '过程沉浸 + 直播驱动：存在张力，制作过程类内容更适合精剪录播', bonus: -0.2 },
    matrix_replicate: { type: 'tension', message: '过程沉浸 + 矩阵复制：存在张力，手工/制作类需要独特性和创意', bonus: -0.2 },
  },
};

// 轴二 × 轴三 匹配度矩阵
const AXIS2x3_MATRIX: Record<string, Record<string, { type: 'perfect' | 'ok' | 'tension'; message: string; bonus: number }>> = {
  talk_output: {
    ecommerce_direct: { type: 'tension', message: '口播输出做电商直转有难度——你更擅长讲道理而非卖货', bonus: -0.2 },
    private_domain: { type: 'ok', message: '口播输出配合私域沉淀：用专业观点把人吸引到私域', bonus: 0 },
    local_referral: { type: 'tension', message: '口播输出做本地引流不太对口——你的优势在观点而非本地内容', bonus: -0.2 },
    knowledge_ip: { type: 'perfect', message: '口播输出 + 知识/IP：天生最强组合，你的口才和知识储备可以直接变现', bonus: 0.1 },
  },
  story_narrative: {
    ecommerce_direct: { type: 'ok', message: '故事叙事配合电商直转：用故事包装产品，情绪驱动购买', bonus: 0 },
    private_domain: { type: 'perfect', message: '故事叙事 + 私域沉淀：天生匹配，你的故事让客户愿意了解你、信任你', bonus: 0.1 },
    local_referral: { type: 'ok', message: '故事叙事配合本地引流：用本地人物故事吸引同城粉丝', bonus: 0 },
    knowledge_ip: { type: 'ok', message: '故事叙事配合知识/IP：用故事承载知识，比纯干货更有传播力', bonus: 0 },
  },
  visual_aesthetic: {
    ecommerce_direct: { type: 'ok', message: '视觉美学配合电商直转：高质感产品展示天然适合带货', bonus: 0 },
    private_domain: { type: 'ok', message: '视觉美学配合私域沉淀：高质感内容给你品牌溢价', bonus: 0 },
    local_referral: { type: 'ok', message: '视觉美学配合本地引流：用高级感本地内容吸引消费升级人群', bonus: 0 },
    knowledge_ip: { type: 'tension', message: '视觉美学做知识变现较弱——你的优势在画面而非体系化知识输出', bonus: -0.2 },
  },
  process_immersive: {
    ecommerce_direct: { type: 'perfect', message: '过程沉浸 + 电商直转：天生匹配，制作过程本身就是最好的产品种草', bonus: 0.1 },
    private_domain: { type: 'ok', message: '过程沉浸配合私域沉淀：制作过程吸引精准同好进社群', bonus: 0 },
    local_referral: { type: 'ok', message: '过程沉浸配合本地引流：用本地元素融入制作过程吸引同城', bonus: 0 },
    knowledge_ip: { type: 'tension', message: '过程沉浸做知识变现较弱——你的护城河是技能展示而非体系化教学', bonus: -0.2 },
  },
};

// 轴一内部验证 (Q1-Q6)
function validateAxis1(answers: Answers): string | null {
  const q1 = answers[1];
  const q6 = answers[6];
  // Q1A/B/D = has entity, Q6A = pure online funnel
  if ((q1 === 'A' || q1 === 'B' || q1 === 'D') && q6 === 'A') {
    return '你有实体场所但选择了纯线上获客模式。线下与线上的获客逻辑差异较大，建议思考两者如何协同。';
  }
  const q4 = answers[4];
  const q6a = answers[6];
  // Q4D (high ticket) + Q6A (volume funnel) = contradiction
  if (q4 === 'D' && q6a === 'A') {
    return '高客单价产品走流量漏斗逻辑——你的产品和获客模式之间存在张力。高客单客户需要精准获取而非广撒网。';
  }
  return null;
}

export function crossValidate(
  scoring: ScoringResult,
  answers: Answers
): CrossValidationResult {
  // 轴内矛盾检测
  const axis2Contradiction = scoring.axis2.confidence < 0.7 && scoring.axis2.isMixed
    ? '你的内容基因测评中存在矛盾信号——你可能同时对多种内容形式有强烈偏好，也可能是某些回答之间存在不一致。建议回顾你的回答。'
    : null;

  const axis3Contradiction = scoring.axis3.confidence < 0.7 && scoring.axis3.isMixed
    ? '你的变现模式测评中存在矛盾信号——你在「最舒适的方式」和「实际选择的路径」之间可能存在不一致。'
    : null;

  const axis4Contradiction = scoring.axis4.confidence < 0.7 && scoring.axis4.isMixed
    ? '你的运营节奏测评中存在矛盾信号——你的理想产能和精力所限之间存在差距。建议重新评估真实的可持续产出能力。'
    : null;

  // 轴间匹配度
  const a1 = scoring.axis1.primary;
  const a3 = scoring.axis3.primary;
  const a2 = scoring.axis2.primary;
  const a4 = scoring.axis4.primary;

  const axis1x3Match = AXIS1x3_MATRIX[a1]?.[a3] || { type: 'ok' as const, message: '', bonus: 0 };
  const axis2x4Match = AXIS2x4_MATRIX[a2]?.[a4] || { type: 'ok' as const, message: '', bonus: 0 };
  const axis2x3Match = AXIS2x3_MATRIX[a2]?.[a3] || { type: 'ok' as const, message: '', bonus: 0 };

  // 轴一内部验证
  const axis1Internal = validateAxis1(answers);

  return {
    axis2Contradiction: axis2Contradiction || axis1Internal,
    axis3Contradiction,
    axis4Contradiction,
    axis1x3Match,
    axis2x4Match,
    axis2x3Match,
  };
}
