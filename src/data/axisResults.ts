import type { Axis1Type, Axis2Type, Axis3Type, Axis4Type } from '../types';

// ===== 轴一：商业逻辑 详细描述 =====
export const AXIS1_DETAIL: Record<Axis1Type, {
  title: string;
  tagline: string;
  traits: string;
  customerProfile: string;
  salesLogic: string;
}> = {
  entity_volume: {
    title: '实体走量型',
    tagline: '你有门店/固定经营场所，产品标准化、客单价低、走量逻辑，客户对价格敏感。',
    traits: '标品、走量、低客单、到店消费、价格驱动',
    customerProfile: '大众消费者，对价格敏感，决策快，到店频率高',
    salesLogic: '靠流量规模 + 转化率，铺量曝光 → 筛选意向 → 快速成交',
  },
  entity_premium: {
    title: '实体高客单型',
    tagline: '你有门店或工作室，提供定制化产品或服务，客单价高，客户决策周期长，信任是关键。',
    traits: '定制/非标、高客单、到店体验、信任驱动',
    customerProfile: '中高端消费者/企业客户，重视品质和体验，决策审慎，愿意为信任买单',
    salesLogic: '线上种草 → 到店体验 → 当面建立信任 → 深度成交 → 长期复购',
  },
  online_volume: {
    title: '线上走量型',
    tagline: '你纯线上经营，产品标准化、轻决策，靠流量转化，冲动消费是主要驱动力。',
    traits: '纯线上、标品、低客单、冲动消费、流量驱动',
    customerProfile: '年轻消费者为主，刷到就买，对价格和口碑敏感，复购靠持续曝光',
    salesLogic: '短视频内容挂车 + 直播带货，靠流量规模 × 转化率赚钱',
  },
  online_premium: {
    title: '线上高客单型',
    tagline: '你纯线上经营，但提供的是知识/服务/定制化产品，客单价高、决策周期长、强信任需求。',
    traits: '纯线上、非标/知识、高客单、长决策、信任驱动',
    customerProfile: '有明确需求或痛点的精准人群，愿意为专业度和解决方案付费，决策前会深入研究你',
    salesLogic: '内容建立权威 → 私域承接 → 长期培养信任 → 一对一高客单转化',
  },
};

// ===== 轴二：内容基因 详细描述 =====
export const AXIS2_DETAIL: Record<Axis2Type, {
  title: string;
  tagline: string;
  contentForm: string;
  bestAt: string;
  challenge: string;
  suitableTopics: string;
}> = {
  talk_output: {
    title: '口播输出型',
    tagline: '你靠观点、知识和口才驱动内容，一个人、一张嘴就能产出有价值的信息。',
    contentForm: '单人出镜口播为主，可辅以图表、截图、道具。画面简洁，信息密度是核心竞争力。',
    bestAt: '把复杂问题讲清楚、提炼观点、输出认知、建立专业可信的人设',
    challenge: '选题枯竭、观点不够深、画面单调缺乏吸引力',
    suitableTopics: '行业洞察、方法论分享、趋势分析、案例拆解、读书/学习心得、职场经验',
  },
  story_narrative: {
    title: '故事叙事型',
    tagline: '你靠叙事结构和情感连接驱动，把平凡的生活讲成让人追下去的故事。',
    contentForm: 'Vlog 形式，手持/第一人称视角，生活化场景，自然光线。注重真实感、情绪节奏和人格一致性。',
    bestAt: '建立情感连接、让人产生「被理解」的共鸣、把日常变成有叙事张力的内容',
    challenge: '选题素材不够、平淡期缺乏冲突、容易被算法认为「内容不刺激」',
    suitableTopics: '日常记录、成长故事、家庭关系、创业历程、旅行日记、生活方式',
  },
  visual_aesthetic: {
    title: '视觉美学型',
    tagline: '你靠画面质量和审美驱动，每一条都追求视觉上的极致体验。',
    contentForm: '高质感拍摄，精心布光/布景/服化道，注重构图、色彩和节奏。制作周期较长，但每条都有收藏价值。',
    bestAt: '打造视觉冲击力、建立高级感品牌调性、让内容自带传播属性',
    challenge: '制作成本高、产出慢、容易流于形式而缺乏内容深度',
    suitableTopics: '时尚大片、美学短片、才艺展示、品牌形象片、创意广告、视觉叙事',
  },
  process_immersive: {
    title: '过程沉浸型',
    tagline: '你靠制作过程和体验感驱动，观众看你做事本身就是一种享受。',
    contentForm: '沉浸式制作过程记录，前后强烈对比，B-Roll为主，旁白辅助。注重解压感、ASMR元素和满足感。',
    bestAt: '创造解压/治愈/满足的观看体验、让人停不下来的沉浸感、展示独特技能',
    challenge: '制作周期长、过程可能枯燥需要精心剪辑、选题同质化严重',
    suitableTopics: '手工制作、美食烹饪、旧物改造、家居装修、DIY项目、绘画设计',
  },
};

// ===== 轴三：变现模式 详细描述 =====
export const AXIS3_DETAIL: Record<Axis3Type, {
  title: string;
  tagline: string;
  coreAction: string;
  keySkill: string;
  bestFor: string;
  notRecommended: string;
}> = {
  ecommerce_direct: {
    title: '电商直转型',
    tagline: '在平台上直接完成交易——短视频挂车或直播带货，客户看中就下单。',
    coreAction: '短视频挂车 + 直播带货，在平台内完成浏览→下单→支付全流程',
    keySkill: '选品眼光、话术感染力、价格谈判、直播节奏把控',
    bestFor: '标品/快消品、低客单冲动消费、有供应链优势或自有品牌的人',
    notRecommended: '高客单非标品、强信任需求的服务类、决策周期超过一周的业务',
  },
  private_domain: {
    title: '私域沉淀型',
    tagline: '用短视频把人引到微信/社群，在私域里长期维护关系，一对一高客单转化。',
    coreAction: '短视频引流 → 微信/社群承接 → 朋友圈长期影响 → 一对一跟单成交',
    keySkill: '信任建设、朋友圈文案、社群运营、一对一沟通说服能力',
    bestFor: '高客单产品/服务、大健康/金融/教育、定制化方案、需要深度信任的行业',
    notRecommended: '低客单快消品（私域运营成本不划算）、纯冲动消费型产品',
  },
  local_referral: {
    title: '本地引流型',
    tagline: '线上做内容种草，最终靠客户到店体验或面谈成交，线下是关键转化场景。',
    coreAction: '本地内容种草 → 吸引周边精准流量 → 到店体验 → 当面成交',
    keySkill: '本地内容创作能力、门店/工作室体验设计、线下沟通成交能力',
    bestFor: '有实体门店的餐饮/零售/服务业、本地生活、体验式消费',
    notRecommended: '纯线上产品、无实体场所的纯虚拟服务、非本地化全国性业务',
  },
  knowledge_ip: {
    title: '知识/IP型',
    tagline: '靠持续输出专业知识建立权威感和个人品牌，客户主动找上门付费。',
    coreAction: '内容建立专业权威 → 粉丝认同 → 课程/咨询/社群/出版变现',
    keySkill: '知识体系化输出、专业壁垒建立、个人品牌打造、课程研发能力',
    bestFor: '有专业壁垒的领域专家、教育/咨询行业、知识付费赛道',
    notRecommended: '需要快速看到现金流、专业知识积累不足、不愿意长期投入内容的人',
  },
};

// ===== 轴四：运营节奏 详细描述 =====
export const AXIS4_DETAIL: Record<Axis4Type, {
  title: string;
  tagline: string;
  frequency: string;
  keyAbility: string;
  teamAdvice: string;
  risk: string;
}> = {
  high_freq: {
    title: '高频快更型',
    tagline: '日更为主，靠数量和算法推荐持续获取流量，内容轻量化、生产流程化。',
    frequency: '短视频每天 1-3 条，保持稳定输出节奏，以量为王',
    keyAbility: '选题储备能力、快速执行能力、数据敏感度——快速试错、快速迭代',
    teamAdvice: '一个人完全可以跑起来（手机 + 简单剪辑即可），重点是建立选题库和模板化流程',
    risk: '容易陷入内容同质化、创作疲劳、流量波动大——被算法「牵着走」',
  },
  quality_slow: {
    title: '精品慢更型',
    tagline: '周更为主，每条都深度打磨，质量大于数量，靠内容深度和独特性建立壁垒。',
    frequency: '每周 1-3 条，每条精心策划、拍摄和后期，追求「发了就要有效果」',
    keyAbility: '深度策划能力、叙事能力、后期制作能力——把每一条当做作品而非任务',
    teamAdvice: '初期可独立完成（尤其是口播/故事类），视觉类建议找掌镜或剪辑搭档',
    risk: '更新间隔长容易被遗忘、算法推荐不稳定、制作周期太长可能影响时效性',
  },
  livestream_driven: {
    title: '直播驱动型',
    tagline: '直播是你的主战场，短视频是直播间的引流工具，核心变现发生在直播间。',
    frequency: '直播每周 3-5 场（每场 2-4 小时），短视频每天 1 条为直播引流即可',
    keyAbility: '临场应变能力、话术感染力、直播间节奏把控、体力耐力',
    teamAdvice: '强烈建议至少有一个助播或场控——一个人播全场对体力和情绪消耗极大',
    risk: '高度依赖个人状态和体力、内容资产累积弱（直播内容难以复用）、算法对直播权重波动大',
  },
  matrix_replicate: {
    title: '矩阵复制型',
    tagline: '你追求的是规模化和可复制性——多个账号、多个平台同时跑，内容工业化生产。',
    frequency: '每个号保持稳定更新频率，整体以「内容工厂」模式运转',
    keyAbility: '标准化流程管理能力、团队统筹能力、数据分析能力——从「做内容」到「管内容」',
    teamAdvice: '必须组建团队——单人无法支撑矩阵运营。核心角色：内容编辑、剪辑、运营、数据分析',
    risk: '团队管理成本高、账号容易互相抢流量、模板化内容缺乏个性容易被平台识别限流',
  },
};

// ===== 轴间匹配结果描述组合 =====
export const BUSINESS_MODELS: Record<string, {
  modelName: string;
  description: string;
  recommendation: string;
  warning: string | null;
}> = {
  // 实体走量 × 各变现模式
  'entity_volume_ecommerce_direct': {
    modelName: '实体+电商双轮驱动',
    description: '你有实体门店，产品标准化走量，匹配电商直转模式。线下实体做信任背书，线上短视频做获客和复购。',
    recommendation: '建议短视频展示产品使用场景和门店实拍，挂车直接成交；同时用线上爆款反哺门店客流。',
    warning: null,
  },
  'entity_volume_private_domain': {
    modelName: '社区团购/私域复购',
    description: '实体走量产品配合私域沉淀，适合高频复购型消费品（食品、日用品）。老客户在微信下单，定期到店自提或配送。',
    recommendation: '建议短视频引流到微信群，在群内做拼团、秒杀、新品预告，到店自提带动二次消费。',
    warning: null,
  },
  'entity_volume_local_referral': {
    modelName: '本地生活达人',
    description: '你的实体门店本身就是内容素材。用本地内容吸引同城流量，到店消费。典型的餐饮、零售、服务类商家模型。',
    recommendation: '建议重点做同城定位内容，参与本地话题和团购活动，短视频展示店内环境和产品细节，引导到店。',
    warning: null,
  },
  'entity_volume_knowledge_ip': {
    modelName: '实体老板IP',
    description: '实体走量做知识/IP变现需要重新定位——你不是在卖货，而是在卖「行业经验」和「创业方法论」。实体店只是你的实践案例。',
    recommendation: '如果坚持走知识路线，建议内容从「产品展示」转向「行业经验分享+创业故事」，用实体店作为信任背书。',
    warning: '存在张力：实体走量靠规模+效率赚钱，知识变现靠深度+稀缺性。两者的目标客户和内容逻辑差异较大，建议明确主次。',
  },

  // 实体高客单 × 各变现模式
  'entity_premium_ecommerce_direct': {
    modelName: '高端实体电商',
    description: '高客单实体产品走电商直销需要极高信任——客户不会在网上冲动消费几千块的东西。',
    recommendation: '如果确实要走电商直转，建议用限量/稀缺/独家做驱动力，配合高质感视觉内容建立品质认知。',
    warning: '存在张力：高客单产品的决策逻辑和冲动消费不兼容。建议降低对直播带货的预期，更多靠短视频深度种草 + 到店体验转化。',
  },
  'entity_premium_private_domain': {
    modelName: '私域高端定制',
    description: '实体高客单 × 私域沉淀是天生绝配——客户在私域里被长期培养，建立深度信任后自然成交。',
    recommendation: '核心动作链：短视频展示专业度 → 引流私域 → 朋友圈/社群持续输出价值 → 一对一跟单 → 线下体验/面谈成交。重点经营朋友圈的人设感和信任密度。',
    warning: null,
  },
  'entity_premium_local_referral': {
    modelName: '高端到店体验',
    description: '你的高客单业务强依赖线下体验（医美、牙科、高端定制、咨询），本地引流是最自然的路径。',
    recommendation: '短视频做本地精准种草（地理位置+行业标签），展示案例和客户反馈，引导预约到店，当面用专业度和服务品质成交。',
    warning: null,
  },
  'entity_premium_knowledge_ip': {
    modelName: '专业权威IP',
    description: '实体高客单配合知识/IP变现——用专业知识建立你在本地的行业权威地位，客户慕名而来。',
    recommendation: '短视频持续输出专业知识、行业洞察和案例拆解，打造「本地XX领域第一人」的心智。知识变现（咨询/课程）可以作为高利润的第二曲线，反哺实体业务。',
    warning: null,
  },

  // 线上走量 × 各变现模式
  'online_volume_ecommerce_direct': {
    modelName: '纯电商内容玩家',
    description: '线上走量 × 电商直转是短视频平台最主流的变现模型——内容即货架，每一条视频都是产品详情页。',
    recommendation: '建议深耕一个品类，内容聚焦产品使用场景和效果展示，用高频更新保持曝光，重点优化视频挂车的转化率。可以考虑自建供应链或品牌白牌。',
    warning: null,
  },
  'online_volume_private_domain': {
    modelName: '社交电商运营',
    description: '线上走量产品用私域沉淀，核心逻辑是「一次性获客，终身复购」。',
    recommendation: '短视频做前端引流获客，私域做后端复购和客单价提升。适合有稳定供应链、产品有复购属性的人。',
    warning: null,
  },
  'online_volume_local_referral': {
    modelName: '线上引流本地',
    description: '纯线上走量产品做本地引流指向线下——这个组合存在天然逻辑矛盾。你的业务根基在线上，本地引流会增加不必要的环节。',
    recommendation: '除非你的产品需要线下体验或使用场景展示，否则不建议增加本地引流环节。直接做电商直转更高效。',
    warning: '存在张力：线上标品不需要到店，本地引流是多余环节。建议重新审视业务模型。',
  },
  'online_volume_knowledge_ip': {
    modelName: '带货转知识',
    description: '线上走量做知识变现——用带货经验反哺内容，教别人怎么做电商/选品/直播。',
    recommendation: '如果确实要走这条路，建议先用电商直转做出成绩（数据是最好的内容素材），再逐步转向「电商经验分享」的知识型IP。',
    warning: '存在张力：走量和知识的客户完全不同。走量是冲动消费型买家，知识变现是理性付费型学员。建议先做好一个主线。',
  },

  // 线上高客单 × 各变现模式
  'online_premium_ecommerce_direct': {
    modelName: '高端电商直播',
    description: '高客单产品走电商直转需要极强的信任背书和内容包装能力。',
    recommendation: '如果要做，建议走「专业内容深度种草 + 限时限量」模式，而非纯粹的价格驱动直播。用内容品质筛选精准客户，用稀缺性促进决策。',
    warning: '存在明显张力：高客单非标品与冲动消费逻辑本质冲突。不建议作为主要变现路径。',
  },
  'online_premium_private_domain': {
    modelName: '私域深度运营',
    description: '线上高客单 × 私域沉淀是最佳匹配。你的产品/服务需要长周期信任建设，私域是唯一能承载这个过程的场域。',
    recommendation: '核心链：内容建立专业权威 → 钩子引流私域 → 朋友圈/1v1 持续价值输出 → 自然高客单成交。不追求数量，追求每个粉丝的终身价值。',
    warning: null,
  },
  'online_premium_local_referral': {
    modelName: '线上权威线下交付',
    description: '线上高客单做本地引流向线下——这个组合存在逻辑矛盾。你的价值在线上内容中已经传递，不需要增加线下环节。',
    recommendation: '如果你的服务需要线下交付（如咨询、工作坊），本地引流可以存在，但核心获客和信任建设应在线上完成，线下只是交付场景。',
    warning: '存在张力：线上高客单业务的优势是突破地域限制，本地引流会主动收窄市场。',
  },
  'online_premium_knowledge_ip': {
    modelName: '知识IP深度变现',
    description: '线上高客单 × 知识/IP是天然最强组合。用专业内容建立权威，把知识产品化（课程/咨询/社群），实现高利润、高杠杆的变现模型。',
    recommendation: '建议内容体系化：免费内容（短视频）展示专业度 → 中价产品（社群/小课）筛选付费用户 → 高价产品（1v1咨询/深度课程）高利润变现。打造领域第一人的心智占位。',
    warning: null,
  },
};
