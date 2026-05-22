import type { Question } from '../types';

export const questions: Question[] = [
  // ===== 轴一：商业逻辑 (Q1-Q6) =====
  {
    id: 1,
    axis: 1,
    text: '你的生意「根据地」在哪里？',
    isReversed: false,
    options: [
      { id: 'A', text: '我有实体门店/工作室，客户主要到店消费或体验', scores: { entity_volume: 3, entity_premium: 2, online_volume: 0, online_premium: 0 } },
      { id: 'B', text: '有实体场所，但到店不是必须的', scores: { entity_volume: 1, entity_premium: 3, online_volume: 0, online_premium: 1 } },
      { id: 'C', text: '纯线上经营，没有线下场所', scores: { entity_volume: 0, entity_premium: 0, online_volume: 3, online_premium: 3 } },
      { id: 'D', text: '线上线下并行，线上引流、线下交付或体验', scores: { entity_volume: 2, entity_premium: 2, online_volume: 1, online_premium: 1 } },
    ],
  },
  {
    id: 2,
    axis: 1,
    text: '你靠什么赚钱？',
    isReversed: false,
    options: [
      { id: 'A', text: '实体产品——客户买走一件看得见摸得着的东西', scores: { entity_volume: 3, entity_premium: 1, online_volume: 3, online_premium: 0 } },
      { id: 'B', text: '服务/体验——客户购买的是你或团队提供的服务过程', scores: { entity_volume: 1, entity_premium: 3, online_volume: 0, online_premium: 2 } },
      { id: 'C', text: '知识/内容产品——课程、咨询、方案、数字产品等', scores: { entity_volume: 0, entity_premium: 1, online_volume: 1, online_premium: 3 } },
      { id: 'D', text: '组合型——既有产品也有服务，客户可能两样都买', scores: { entity_volume: 2, entity_premium: 2, online_volume: 2, online_premium: 1 } },
    ],
  },
  {
    id: 3,
    axis: 1,
    text: '你的产品/服务更接近哪种形态？',
    isReversed: false,
    options: [
      { id: 'A', text: '标准化——每个客户买到的东西基本一样', scores: { entity_volume: 3, entity_premium: 0, online_volume: 3, online_premium: 0 } },
      { id: 'B', text: '有一定选择空间，但框架固定（比如几种套餐可选）', scores: { entity_volume: 2, entity_premium: 1, online_volume: 2, online_premium: 1 } },
      { id: 'C', text: '高度定制化——每个客户的需求不同，交付内容也不同', scores: { entity_volume: 0, entity_premium: 3, online_volume: 0, online_premium: 3 } },
      { id: 'D', text: '既有标品也有非标成分——产品标准化但配套服务因人而异', scores: { entity_volume: 1, entity_premium: 2, online_volume: 1, online_premium: 2 } },
    ],
  },
  {
    id: 4,
    axis: 1,
    text: '一次典型交易，客户大约付你多少钱？',
    isReversed: false,
    options: [
      { id: 'A', text: '100元以下，薄利多销，走量逻辑', scores: { entity_volume: 3, entity_premium: 0, online_volume: 3, online_premium: 0 } },
      { id: 'B', text: '100～500元，中间价位', scores: { entity_volume: 2, entity_premium: 1, online_volume: 2, online_premium: 1 } },
      { id: 'C', text: '500～3000元，需要客户认真考虑一下', scores: { entity_volume: 0, entity_premium: 2, online_volume: 1, online_premium: 2 } },
      { id: 'D', text: '3000元以上，客户决策周期长，但利润空间大', scores: { entity_volume: 0, entity_premium: 3, online_volume: 0, online_premium: 3 } },
    ],
  },
  {
    id: 5,
    axis: 1,
    text: '客户从「知道有你」到「掏钱买单」，通常用多长时间？',
    isReversed: false,
    options: [
      { id: 'A', text: '当场决定——看到就买，冲动型消费为主', scores: { entity_volume: 3, entity_premium: 0, online_volume: 3, online_premium: 0 } },
      { id: 'B', text: '一两天——稍微比较一下，但决策很轻', scores: { entity_volume: 2, entity_premium: 1, online_volume: 2, online_premium: 0 } },
      { id: 'C', text: '一周到一个月——需要建立信任，多方对比', scores: { entity_volume: 1, entity_premium: 2, online_volume: 1, online_premium: 2 } },
      { id: 'D', text: '一个月以上——需要反复沟通、建立深度信任才会成交', scores: { entity_volume: 0, entity_premium: 3, online_volume: 0, online_premium: 3 } },
    ],
  },
  {
    id: 6,
    axis: 1,
    text: '你的获客模式最接近哪一种？',
    isReversed: false,
    options: [
      { id: 'A', text: '流量漏斗型——铺量曝光 → 筛选 → 直接成交，靠大流量转化率算账', scores: { entity_volume: 1, entity_premium: 0, online_volume: 3, online_premium: 1 } },
      { id: 'B', text: '到店体验型——线上种草 → 到店感受 → 当面成交，线下是关键环节', scores: { entity_volume: 3, entity_premium: 2, online_volume: 0, online_premium: 0 } },
      { id: 'C', text: '信任培养型——精准触达 → 长期维护 → 深度信任 → 自然成交，重关系', scores: { entity_volume: 0, entity_premium: 2, online_volume: 1, online_premium: 3 } },
      { id: 'D', text: '渠道分发型——靠代理/分销/合作渠道获客，自己不直接面对终端客户', scores: { entity_volume: 2, entity_premium: 1, online_volume: 1, online_premium: 1 } },
    ],
  },

  // ===== 轴二：内容基因 (Q7-Q12) =====
  {
    id: 7,
    axis: 2,
    text: '如果你要拍一条视频，你最享受的是哪个部分？',
    isReversed: false,
    options: [
      { id: 'A', text: '对着镜头把一个观点讲清楚，观众听完说「有道理」', scores: { talk_output: 3, story_narrative: 1, visual_aesthetic: 0, process_immersive: 0 } },
      { id: 'B', text: '把一个故事讲得有画面感，观众看完说「好感动」', scores: { talk_output: 1, story_narrative: 3, visual_aesthetic: 1, process_immersive: 0 } },
      { id: 'C', text: '画面好看、节奏舒服，观众说「这片子拍得真漂亮」', scores: { talk_output: 0, story_narrative: 1, visual_aesthetic: 3, process_immersive: 1 } },
      { id: 'D', text: '展示一个东西从无到有的过程，观众说「好解压」', scores: { talk_output: 0, story_narrative: 0, visual_aesthetic: 1, process_immersive: 3 } },
    ],
  },
  {
    id: 8,
    axis: 2,
    text: '你平时自己刷短视频，最容易沉浸在哪类内容里？',
    isReversed: false,
    options: [
      { id: 'A', text: '有人坐在镜头前讲干货、扒趋势、聊观点', scores: { talk_output: 3, story_narrative: 0, visual_aesthetic: 0, process_immersive: 0 } },
      { id: 'B', text: '日常生活、旅行、家庭故事，像在追剧一样', scores: { talk_output: 0, story_narrative: 3, visual_aesthetic: 1, process_immersive: 0 } },
      { id: 'C', text: '画面精致、审美惊艳的短片，每一帧都能截图', scores: { talk_output: 0, story_narrative: 1, visual_aesthetic: 3, process_immersive: 0 } },
      { id: 'D', text: '做菜、做手工、装修、改造，一步步看着就停不下来', scores: { talk_output: 0, story_narrative: 0, visual_aesthetic: 0, process_immersive: 3 } },
    ],
  },
  {
    id: 9,
    axis: 2,
    text: '创作过程中，你最大的瓶颈通常是什么？',
    isReversed: true,
    options: [
      { id: 'A', text: '找选题/观点——怕没东西可讲，怕观点不够深', scores: { talk_output: 0, story_narrative: 2, visual_aesthetic: 2, process_immersive: 2 } },
      { id: 'B', text: '找故事/素材——生活太平淡，不知道拍什么', scores: { talk_output: 2, story_narrative: 0, visual_aesthetic: 2, process_immersive: 2 } },
      { id: 'C', text: '拍不出想要的效果——脑子里有画面，镜头实现不了', scores: { talk_output: 2, story_narrative: 2, visual_aesthetic: 0, process_immersive: 2 } },
      { id: 'D', text: '过程太长太枯燥——做一次可以，每次都要这么来太累了', scores: { talk_output: 2, story_narrative: 2, visual_aesthetic: 2, process_immersive: 0 } },
    ],
  },
  {
    id: 10,
    axis: 2,
    text: '给你一小时的创作时间，你会怎么分配？',
    isReversed: false,
    options: [
      { id: 'A', text: '先花40分钟想清楚要说什么，20分钟一气呵成', scores: { talk_output: 3, story_narrative: 0, visual_aesthetic: 0, process_immersive: 0 } },
      { id: 'B', text: '花30分钟整理最近的素材，30分钟串联成一个故事', scores: { talk_output: 1, story_narrative: 3, visual_aesthetic: 0, process_immersive: 0 } },
      { id: 'C', text: '花20分钟构思，30分钟布光构图拍摄，10分钟精调', scores: { talk_output: 0, story_narrative: 0, visual_aesthetic: 3, process_immersive: 1 } },
      { id: 'D', text: '大部分时间花在执行上——边做边拍，成果本身就是内容', scores: { talk_output: 0, story_narrative: 0, visual_aesthetic: 1, process_immersive: 3 } },
    ],
  },
  {
    id: 11,
    axis: 2,
    text: '以下哪种「翻车」你最不能接受？',
    isReversed: false,
    options: [
      { id: 'A', text: '观点被质疑、逻辑有漏洞，被人说「不专业」', scores: { talk_output: 3, story_narrative: 0, visual_aesthetic: 0, process_immersive: 0 } },
      { id: 'B', text: '内容平淡无奇，没人在评论区留言、没有情感共鸣', scores: { talk_output: 0, story_narrative: 3, visual_aesthetic: 1, process_immersive: 0 } },
      { id: 'C', text: '画面粗糙、不够好看，自己都不想再看一遍', scores: { talk_output: 0, story_narrative: 1, visual_aesthetic: 3, process_immersive: 0 } },
      { id: 'D', text: '制作过程没亮点，成品和普通人的水平没区别', scores: { talk_output: 0, story_narrative: 0, visual_aesthetic: 1, process_immersive: 3 } },
    ],
  },
  {
    id: 12,
    axis: 2,
    text: '如果你的账号做起来了，你最希望观众记住你什么？',
    isReversed: false,
    options: [
      { id: 'A', text: '「这个人的观点总能让我重新思考」', scores: { talk_output: 3, story_narrative: 0, visual_aesthetic: 0, process_immersive: 0 } },
      { id: 'B', text: '「看他的内容就像在听一个老朋友讲故事」', scores: { talk_output: 1, story_narrative: 3, visual_aesthetic: 0, process_immersive: 0 } },
      { id: 'C', text: '「他的每一条内容都是视觉享受」', scores: { talk_output: 0, story_narrative: 1, visual_aesthetic: 3, process_immersive: 1 } },
      { id: 'D', text: '「看他做事本身就是一种享受，我能看一小时」', scores: { talk_output: 0, story_narrative: 0, visual_aesthetic: 1, process_immersive: 3 } },
    ],
  },

  // ===== 轴三：变现模式 (Q13-Q18) =====
  {
    id: 13,
    axis: 3,
    text: '据你观察，你的同行/竞品主要在哪个环节把钱赚到手？',
    isReversed: false,
    options: [
      { id: 'A', text: '在直播间或短视频挂车里直接成交，客户看中就下单', scores: { ecommerce_direct: 3, private_domain: 1, local_referral: 0, knowledge_ip: 0 } },
      { id: 'B', text: '用短视频把人引到微信/社群，在私域里长期维护后成交', scores: { ecommerce_direct: 1, private_domain: 3, local_referral: 1, knowledge_ip: 1 } },
      { id: 'C', text: '线上做内容种草，最终靠客户到店/面谈才成交', scores: { ecommerce_direct: 0, private_domain: 1, local_referral: 3, knowledge_ip: 0 } },
      { id: 'D', text: '通过持续输出专业知识建立权威感，客户主动找上门付费咨询/买课', scores: { ecommerce_direct: 0, private_domain: 1, local_referral: 0, knowledge_ip: 3 } },
    ],
  },
  {
    id: 14,
    axis: 3,
    text: '客户第一次接触你到最终成交，中间最关键的环节是什么？',
    isReversed: false,
    options: [
      { id: 'A', text: '价格和产品本身——便宜好用，不需要过多铺垫', scores: { ecommerce_direct: 3, private_domain: 0, local_referral: 1, knowledge_ip: 0 } },
      { id: 'B', text: '信任——反复看到你、了解你，觉得你这个人靠谱', scores: { ecommerce_direct: 1, private_domain: 3, local_referral: 1, knowledge_ip: 1 } },
      { id: 'C', text: '体验——亲眼看到、亲身体验了你的产品/服务', scores: { ecommerce_direct: 1, private_domain: 0, local_referral: 3, knowledge_ip: 0 } },
      { id: 'D', text: '专业度——你说的话让他觉得「这个人懂」，信服了', scores: { ecommerce_direct: 0, private_domain: 1, local_referral: 0, knowledge_ip: 3 } },
    ],
  },
  {
    id: 15,
    axis: 3,
    text: '你和客户的关系，成交之后是什么样的？',
    isReversed: false,
    options: [
      { id: 'A', text: '交易即结束——客户下次来不来取决于下一次刷到我', scores: { ecommerce_direct: 3, private_domain: 0, local_referral: 0, knowledge_ip: 0 } },
      { id: 'B', text: '成交只是开始——在微信/社群里持续维护，靠长期关系复购和转介绍', scores: { ecommerce_direct: 0, private_domain: 3, local_referral: 1, knowledge_ip: 1 } },
      { id: 'C', text: '客户可能一个月来两三次——来了就是老熟人，社区关系', scores: { ecommerce_direct: 1, private_domain: 1, local_referral: 3, knowledge_ip: 0 } },
      { id: 'D', text: '部分客户会成为忠实粉丝/学员——他们认可的是我这个人', scores: { ecommerce_direct: 0, private_domain: 2, local_referral: 0, knowledge_ip: 3 } },
    ],
  },
  {
    id: 16,
    axis: 3,
    text: '在短视频上卖你的东西，最让你不舒服的是什么？',
    isReversed: true,
    options: [
      { id: 'A', text: '在镜头前大声吆喝「家人们冲」「9块9上车」', scores: { ecommerce_direct: 0, private_domain: 2, local_referral: 2, knowledge_ip: 2 } },
      { id: 'B', text: '把客户加到微信上，时时刻刻要回消息、维护关系', scores: { ecommerce_direct: 2, private_domain: 0, local_referral: 2, knowledge_ip: 2 } },
      { id: 'C', text: '花大量时间和精力在线下跟所有人当面沟通', scores: { ecommerce_direct: 2, private_domain: 2, local_referral: 0, knowledge_ip: 2 } },
      { id: 'D', text: '把自己的经验体系化，做成课程或方案反复卖', scores: { ecommerce_direct: 2, private_domain: 2, local_referral: 2, knowledge_ip: 0 } },
    ],
  },
  {
    id: 17,
    axis: 3,
    text: '一个客户完全不认识你到付钱，你理想的节奏是？',
    isReversed: false,
    options: [
      { id: 'A', text: '越快越好——刷到我、看到货、下单，一气呵成', scores: { ecommerce_direct: 3, private_domain: 0, local_referral: 0, knowledge_ip: 0 } },
      { id: 'B', text: '几天到一周——加微信、聊一聊、看朋友圈、觉得靠谱了再下手', scores: { ecommerce_direct: 1, private_domain: 3, local_referral: 1, knowledge_ip: 0 } },
      { id: 'C', text: '线上种草、线下体验——约个时间到店，一次体验就成交', scores: { ecommerce_direct: 1, private_domain: 0, local_referral: 3, knowledge_ip: 0 } },
      { id: 'D', text: '不着急——他来研究我、看我内容、认同我的理念，自己找过来', scores: { ecommerce_direct: 0, private_domain: 1, local_referral: 0, knowledge_ip: 3 } },
    ],
  },
  {
    id: 18,
    axis: 3,
    text: '如果明天你的视频爆了，但只能优先做一件事，你做哪件？',
    isReversed: false,
    options: [
      { id: 'A', text: '马上开直播承接流量，趁热打铁把货卖出去', scores: { ecommerce_direct: 3, private_domain: 0, local_referral: 0, knowledge_ip: 0 } },
      { id: 'B', text: '先把新关注的人引流到微信/社群，一个一个沉淀下来', scores: { ecommerce_direct: 0, private_domain: 3, local_referral: 1, knowledge_ip: 1 } },
      { id: 'C', text: '赶紧准备好线下的接待能力，把这波流量转化为到店客户', scores: { ecommerce_direct: 0, private_domain: 0, local_referral: 3, knowledge_ip: 0 } },
      { id: 'D', text: '趁热度再出一条深度内容，把这波关注转化为长期认同', scores: { ecommerce_direct: 0, private_domain: 1, local_referral: 0, knowledge_ip: 3 } },
    ],
  },

  // ===== 轴四：运营节奏 (Q19-Q24) =====
  {
    id: 19,
    axis: 4,
    text: '你现在的状态，一周能稳定产出几条合格的短视频？',
    isReversed: false,
    options: [
      { id: 'A', text: '每天都能出——我的内容制作不重，张口就能来', scores: { high_freq: 3, quality_slow: 0, livestream_driven: 1, matrix_replicate: 0 } },
      { id: 'B', text: '一周2～3条——再多质量就保不住了', scores: { high_freq: 0, quality_slow: 3, livestream_driven: 1, matrix_replicate: 0 } },
      { id: 'C', text: '我不以短视频数量算——我更看重每周能播几场，场场有转化', scores: { high_freq: 1, quality_slow: 0, livestream_driven: 3, matrix_replicate: 1 } },
      { id: 'D', text: '一个号不够用——已经在想或者已经在做多个号同时跑', scores: { high_freq: 1, quality_slow: 0, livestream_driven: 0, matrix_replicate: 3 } },
    ],
  },
  {
    id: 20,
    axis: 4,
    text: '你更认可哪种做内容的策略？',
    isReversed: false,
    options: [
      { id: 'A', text: '数量策略——先铺量跑起来，数据会告诉你哪条对了', scores: { high_freq: 3, quality_slow: 0, livestream_driven: 0, matrix_replicate: 1 } },
      { id: 'B', text: '精品策略——每条都当代表作做，不做到80分不发出去', scores: { high_freq: 0, quality_slow: 3, livestream_driven: 0, matrix_replicate: 0 } },
      { id: 'C', text: '直播策略——短视频不需要每条都爆，它是直播间的预告片', scores: { high_freq: 1, quality_slow: 0, livestream_driven: 3, matrix_replicate: 0 } },
      { id: 'D', text: '模板策略——打磨出一套可复制的模板，批量化、多账号跑', scores: { high_freq: 0, quality_slow: 0, livestream_driven: 0, matrix_replicate: 3 } },
    ],
  },
  {
    id: 21,
    axis: 4,
    text: '关于帮手，你的实际情况是？',
    isReversed: false,
    options: [
      { id: 'A', text: '就我一个人——所有环节自己来，暂时也不需要别人', scores: { high_freq: 2, quality_slow: 2, livestream_driven: 0, matrix_replicate: 0 } },
      { id: 'B', text: '一个人在做——但感觉已经忙不过来了，有些环节拖后腿', scores: { high_freq: 1, quality_slow: 1, livestream_driven: 1, matrix_replicate: 0 } },
      { id: 'C', text: '有至少一个人帮我分担——我只做最核心的环节', scores: { high_freq: 0, quality_slow: 0, livestream_driven: 2, matrix_replicate: 2 } },
      { id: 'D', text: '已经有或正在组建小团队——各环节分工明确', scores: { high_freq: 0, quality_slow: 0, livestream_driven: 1, matrix_replicate: 3 } },
    ],
  },
  {
    id: 22,
    axis: 4,
    text: '做短视频最消耗你精力的是什么？',
    isReversed: true,
    options: [
      { id: 'A', text: '每天都得出东西——选题枯竭、被更新频率追着跑', scores: { high_freq: 0, quality_slow: 2, livestream_driven: 2, matrix_replicate: 2 } },
      { id: 'B', text: '一条视频从策划到成品磨太久了——效率太低，想快也快不起来', scores: { high_freq: 2, quality_slow: 0, livestream_driven: 2, matrix_replicate: 2 } },
      { id: 'C', text: '一开播就好几小时——喊得嗓子哑，下了播什么都不想干', scores: { high_freq: 2, quality_slow: 2, livestream_driven: 0, matrix_replicate: 2 } },
      { id: 'D', text: '同时管好几个号太累——每个号的内容、数据、运营都要盯', scores: { high_freq: 2, quality_slow: 2, livestream_driven: 2, matrix_replicate: 0 } },
    ],
  },
  {
    id: 23,
    axis: 4,
    text: '你希望自己的账号和粉丝之间是什么关系？',
    isReversed: false,
    options: [
      { id: 'A', text: '快餐关系——刷到我、看完、下次再来，轻松不累', scores: { high_freq: 3, quality_slow: 0, livestream_driven: 0, matrix_replicate: 1 } },
      { id: 'B', text: '订阅关系——每条都值得等，每刷到一次都是一次享受', scores: { high_freq: 0, quality_slow: 3, livestream_driven: 1, matrix_replicate: 0 } },
      { id: 'C', text: '陪伴关系——每晚那段时间，就有一群人在直播间等我', scores: { high_freq: 0, quality_slow: 1, livestream_driven: 3, matrix_replicate: 0 } },
      { id: 'D', text: '触达关系——不管在哪个平台哪个号，总有一个能刷到我', scores: { high_freq: 1, quality_slow: 0, livestream_driven: 0, matrix_replicate: 3 } },
    ],
  },
  {
    id: 24,
    axis: 4,
    text: '一个账号做成功了，你觉得最理想的状态是什么？',
    isReversed: false,
    options: [
      { id: 'A', text: '稳定日更、流量稳定、收入稳定——一个持续印钞的系统', scores: { high_freq: 3, quality_slow: 0, livestream_driven: 1, matrix_replicate: 1 } },
      { id: 'B', text: '每条都是爆款潜力股——出一期就能被行业当案例讨论', scores: { high_freq: 0, quality_slow: 3, livestream_driven: 0, matrix_replicate: 0 } },
      { id: 'C', text: '一开播就有几千人在线——不打广告也能场场卖爆', scores: { high_freq: 1, quality_slow: 0, livestream_driven: 3, matrix_replicate: 1 } },
      { id: 'D', text: '号只是一个载体——背后的内容工厂和团队能无限复制新号', scores: { high_freq: 0, quality_slow: 0, livestream_driven: 1, matrix_replicate: 3 } },
    ],
  },
];
