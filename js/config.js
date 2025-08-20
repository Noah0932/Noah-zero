/**
 * 个人主页项目 - 配置文件
 * --------------------------
 * 此文件用于管理页面上显示的所有可变内容。
 * 只需修改此文件，即可更新你的个人信息、项目、联系方式等，无需触碰HTML和CSS。
 *
 * 警告：请勿将包含敏感信息（如API密钥）的此文件上传至公开的代码仓库（如GitHub）。
 */

const CONFIG = {

    // --- 个人信息 ---
    AVATAR_URL: 'https://cdn.tulan.cyou/noah/2025/07/26/b_5255bd8e31082e2a4332c4eb4172686e.jpg', // 你的头像链接
    NAME: 'Noah',         // 你的名字
    TITLE: '运维工程师 @ 蓝天新世界团队', // 你的头衔
    DESCRIPTION: '热衷于构建稳定、高效、可扩展的云原生系统。坚信自动化与好的工具有改变世界的力量。', // 你的个人简介

    // --- 项目列表 ---
    // 在这里添加或修改你的项目，每个项目包含链接(url)、标题(title)和描述(desc)。
    PROJECTS: {
        BLOG:         { url: 'https://blog.noah0932.top',       title: '个人博客',        desc: '记录技术心得与运维实践。' },
        AI_TOOL:      { url: 'https://ai.noah0932.top',         title: 'AI工具站',        desc: '探索前沿AI技术的应用。' },
        IT_TOOLBOX:   { url: 'https://it-tools.noah0932.top',   title: 'IT百宝箱',       desc: '为IT人士打造的在线工具集。' },
        MUSIC_PLAYER: { url: 'https://music.noah0932.top',      title: '在线音乐播放器',  desc: '探索Web多媒体技术。' }
    },

    // --- 联系方式 ---
    CONTACT: {
        QQ:     '2026661471',
        EMAIL:  'noah@noah0932.top',
        GITHUB: 'Noah0932',
    },
    
    // --- 定位API密钥 ---
    API: {
        TENCENT_MAP_KEY: 'KZCBZ-W77WT-2BQXI-LLGEZ-REID6-SVBUT' // 腾讯地图API密钥
    },

    // --- 问候语系统 ---
    GREETINGS: {
        // 1. 通用问候模板：当来访城市不在下方“特定城市列表”时使用
        //    - {city}: 会被替换为访客的城市名
        //    - {time_greeting}: 会被替换为对应时间的问候语
        LOCATION_FOUND_TEMPLATE: "来自{city}的朋友，{time_greeting}",
        
        // 2. 基于时间的问候语
        TIME_BASED: {
            night:     "夜深了",
            morning:   "早上好",
            noon:      "中午好",
            afternoon: "下午好",
            evening:   "晚上好"
        },
        
        // 3. (可选) 特定城市的专属问候语
        //    城市名不需要带“市”
        LOCATION_SPECIFIC: {
            "北京": "来自帝都的朋友，吃了吗您内！",
            "上海": "魔都的朋友，侬好呀！",
            "广州": "来自羊城的朋友，雷猴啊！",
            "重庆": "山城的朋友，吃火锅了没！",
            "哈尔滨": "来自冰城的朋友，嘎嘎冷吧！",
            "蚌埠": "蚌埠住了，芜湖起飞！"
            // 在这里继续为你喜欢的城市添加专属问候
        },

        // 4. API请求失败或未配置时的兜底问候语
        API_FAIL_FALLBACK: "朋友你好，今天也要元气满满哦！"
    },
    
    // --- 页脚信息 ---
    FOOTER: {
        COPYRIGHT_TEXT: '© 2024 Noah · 蓝天新世界',
        ICP_LICENSE: '皖ICP备2025092209号'
    }
};
