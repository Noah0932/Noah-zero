/**
 * 个人主页项目 - 主逻辑脚本
 * --------------------------------
 * 此脚本负责驱动整个页面的动态功能。
 * - 监听DOM加载完成事件，确保页面结构准备就绪。
 * - 从 config.js 加载配置并渲染到页面上。
 * - 初始化并控制背景粒子动画。
 * - 实现并显示智能问候语。
 * - 绑定主题切换、鼠标辉光等交互事件。
 */
window.addEventListener('DOMContentLoaded', () => {

    console.log("DOM已加载完毕，开始初始化应用...");

    /**
     * 模块一：配置加载与页面渲染
     * 从 CONFIG 对象读取数据，并将其填充到HTML对应的元素中。
     */
    function applyConfig() {
        if (typeof CONFIG === 'undefined') {
            console.error("致命错误：config.js 未加载或 CONFIG 对象不存在。");
            document.title = "配置错误";
            return;
        }
        
        console.log("正在应用配置...", CONFIG);

        try {
            // 设定页面标题
            document.title = `${CONFIG.NAME} - ${CONFIG.TITLE}`;

            // 填充个人信息
            document.getElementById('avatar').src = CONFIG.AVATAR_URL;
            document.getElementById('name').textContent = CONFIG.NAME;
            document.getElementById('title').textContent = CONFIG.TITLE;
            document.getElementById('description').textContent = CONFIG.DESCRIPTION;

            // 填充项目信息
            const blog = document.getElementById('project-blog');
            blog.href = CONFIG.PROJECTS.BLOG.url;
            document.getElementById('project-blog-title').textContent = CONFIG.PROJECTS.BLOG.title;
            document.getElementById('project-blog-desc').textContent = CONFIG.PROJECTS.BLOG.desc;

            const aiTool = document.getElementById('project-ai');
            aiTool.href = CONFIG.PROJECTS.AI_TOOL.url;
            document.getElementById('project-ai-title').textContent = CONFIG.PROJECTS.AI_TOOL.title;
            document.getElementById('project-ai-desc').textContent = CONFIG.PROJECTS.AI_TOOL.desc;

            const toolbox = document.getElementById('project-toolbox');
            toolbox.href = CONFIG.PROJECTS.IT_TOOLBOX.url;
            document.getElementById('project-toolbox-title').textContent = CONFIG.PROJECTS.IT_TOOLBOX.title;
            document.getElementById('project-toolbox-desc').textContent = CONFIG.PROJECTS.IT_TOOLBOX.desc;
            
            const music = document.getElementById('project-music');
            music.href = CONFIG.PROJECTS.MUSIC_PLAYER.url;
            document.getElementById('project-music-title').textContent = CONFIG.PROJECTS.MUSIC_PLAYER.title;
            document.getElementById('project-music-desc').textContent = CONFIG.PROJECTS.MUSIC_PLAYER.desc;

            // 填充联系方式
            document.getElementById('email-link').href = `mailto:${CONFIG.CONTACT.EMAIL}`;
            document.getElementById('github-link').href = `https://github.com/${CONFIG.CONTACT.GITHUB}`;
            document.getElementById('qq-link').href = `tencent://message/?uin=${CONFIG.CONTACT.QQ}&Site=Noah'sHomepage&Menu=yes`;
            
            // 填充页脚信息
            document.getElementById('copyright-text').textContent = CONFIG.FOOTER.COPYRIGHT_TEXT;
            const icpLink = document.getElementById('icp-link');
            if (icpLink) {
                 icpLink.textContent = CONFIG.FOOTER.ICP_LICENSE;
            }

            console.log("配置已成功应用。");
        } catch (error) {
            console.error("配置应用失败，请检查HTML中的元素ID是否正确。", error);
        }
    }

    /**
     * 模块二：双模式背景粒子动画引擎
     * 一个独立的、可切换主题的背景动画模块。
     */
    const particleEngine = (function() { 
        let canvas, ctx, particles, mouse, animationFrameId, currentTheme;
        const lightThemeOptions = { particleColor: "rgba(172, 185, 203, 0.7)", lineColor: "rgba(172, 185, 203, 0.3)", particleAmount: 50, defaultRadius: 2, variantRadius: 2, defaultSpeed: 0.5, variantSpeed: 0.5, linkRadius: 180, gravitational: false };
        const darkThemeOptions = { particleColor: "rgba(255, 255, 255, 0.8)", lineColor: "rgba(255, 255, 255, 0.15)", particleAmount: 250, defaultRadius: 0.8, variantRadius: 1.2, defaultSpeed: 0.3, variantSpeed: 0.5, linkRadius: 120, gravitational: true, gravityRadius: 60 };
        let options = {};
        function init(theme) {
            canvas = document.getElementById('dynamic-canvas');
            if (!canvas) { console.error("Canvas 元素未找到!"); return false; }
            ctx = canvas.getContext('2d');
            setTheme(theme);
            resizeCanvas();
            particles = [];
            for (let i = 0; i < options.particleAmount; i++) { particles.push(new Particle()); }
            mouse = { x: -9999, y: -9999, radius: 150 };
            window.addEventListener('resize', resizeCanvas);
            const updateMousePos = (e) => { const event = e.touches ? e.touches[0] : e; mouse.x = event.clientX; mouse.y = event.clientY; };
            window.addEventListener('mousemove', updateMousePos);
            window.addEventListener('touchmove', updateMousePos);
            const resetMousePos = () => { mouse.x = -9999; mouse.y = -9999; };
            window.addEventListener('mouseleave', resetMousePos);
            window.addEventListener('touchend', resetMousePos);
            return true;
        }
        function setTheme(theme) { currentTheme = theme; options = (theme === 'light') ? lightThemeOptions : darkThemeOptions; }
        function Particle() { this.x = Math.random() * canvas.width; this.y = Math.random() * canvas.height; const speed = options.defaultSpeed + Math.random() * options.variantSpeed; this.vx = (Math.random() - 0.5) * speed; this.vy = (Math.random() - 0.5) * speed; this.radius = options.defaultRadius + Math.random() * options.variantRadius; }
        Particle.prototype.update = function() { if (options.gravitational) { const dx = mouse.x - this.x; const dy = mouse.y - this.y; const dist = Math.sqrt(dx * dx + dy * dy); if (dist < mouse.radius) { const force = (mouse.radius - dist) / mouse.radius; this.vx += (dx / dist) * force * 0.1; this.vy += (dy / dist) * force * 0.1; } } this.x += this.vx; this.y += this.vy; this.vx *= 0.99; this.vy *= 0.99; if (this.x < -this.radius) this.x = canvas.width + this.radius; if (this.x > canvas.width + this.radius) this.x = -this.radius; if (this.y < -this.radius) this.y = canvas.height + this.radius; if (this.y > canvas.height + this.radius) this.y = -this.radius; };
        Particle.prototype.draw = function() { ctx.beginPath(); ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2); if (currentTheme === 'dark') { ctx.shadowColor = options.particleColor; ctx.shadowBlur = 8; } ctx.fillStyle = options.particleColor; ctx.fill(); ctx.shadowBlur = 0; };
        function processParticles() { ctx.clearRect(0, 0, canvas.width, canvas.height); for (let i = 0; i < particles.length; i++) { particles[i].update(); particles[i].draw(); for (let j = i + 1; j < particles.length; j++) { const p1 = particles[i]; const p2 = particles[j]; const dist = Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)); if (dist < options.linkRadius) { const opacity = 1 - dist / options.linkRadius; ctx.strokeStyle = options.lineColor; ctx.lineWidth = 0.5; ctx.globalAlpha = opacity; ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y); ctx.stroke(); } if (options.gravitational && dist < options.gravityRadius) { const force = (options.gravityRadius - dist) / options.gravityRadius; const dx = p2.x - p1.x; const dy = p2.y - p1.y; p1.vx += (dx/dist) * force * 0.005; p1.vy += (dy/dist) * force * 0.005; p2.vx -= (dx/dist) * force * 0.005; p2.vy -= (dy/dist) * force * 0.005; } } } ctx.globalAlpha = 1; }
        function animate() { processParticles(); animationFrameId = requestAnimationFrame(animate); }
        function resizeCanvas() { if(!canvas) return; canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
        return {
            start: function(theme) {
                if (animationFrameId) cancelAnimationFrame(animationFrameId);
                if(init(theme)) {
                    animate();
                }
            }
        };
    })();

    /**
     * 模块三：应用初始化与事件绑定
     * 负责启动所有模块并绑定页面上的交互事件。
     */
    function initialize() {
        // 步骤1：应用配置，渲染页面内容
        applyConfig();

        // 步骤2：初始化主题
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.body.classList.toggle('light-mode', savedTheme === 'light');
        } else {
            document.body.classList.toggle('light-mode', new Date().getHours() >= 6 && new Date().getHours() < 18);
        }
        
        // 步骤3：启动背景动画
        const currentTheme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
        particleEngine.start(currentTheme);
        
        // 步骤4：处理问候语逻辑
        if (typeof CONFIG !== 'undefined' && CONFIG.GREETINGS) {
            const tencentKey = CONFIG.API.TENCENT_MAP_KEY;
            const greetings = CONFIG.GREETINGS;
            
            const getTimeBasedGreeting = () => {
                const hour = new Date().getHours();
                if (hour < 6) return greetings.TIME_BASED.night;
                if (hour < 11) return greetings.TIME_BASED.morning;
                if (hour < 14) return greetings.TIME_BASED.noon;
                if (hour < 19) return greetings.TIME_BASED.afternoon;
                return greetings.TIME_BASED.evening;
            };

            const showToast = (text) => {
                const toast = document.createElement('div');
                toast.className = 'toast-notification';
                toast.innerHTML = `<i class="fas fa-satellite-dish"></i><span>${text}</span>`;
                document.body.appendChild(toast);
                setTimeout(() => toast.classList.add('show'), 100);
                setTimeout(() => {
                    toast.classList.remove('show');
                    toast.addEventListener('transitionend', () => toast.remove());
                }, 5000);
            };

            const fallbackGreeting = () => showToast(greetings.API_FAIL_FALLBACK);

            if (!tencentKey || tencentKey.includes('YOUR_TENCENT_API_KEY_HERE')) {
                console.warn("腾讯地图API密钥未配置，使用兜底问候语。");
                fallbackGreeting();
            } else {
                window.handleLocationResponse = (data) => {
                    if (data && data.status === 0 && data.result) {
                        const city = data.result.ad_info.city.replace('市', '');
                        const timeGreeting = getTimeBasedGreeting();
                        let finalGreeting = '';

                        // 优先级1：检查是否有特定城市的专属问候语
                        if (greetings.LOCATION_SPECIFIC && greetings.LOCATION_SPECIFIC[city]) {
                            finalGreeting = greetings.LOCATION_SPECIFIC[city];
                        } 
                        // 优先级2：使用通用模板
                        else {
                            finalGreeting = greetings.LOCATION_FOUND_TEMPLATE
                                .replace('{city}', city)
                                .replace('{time_greeting}', timeGreeting);
                        }
                        showToast(finalGreeting);
                    } else {
                        // 优先级3：API请求失败，使用兜底方案
                        fallbackGreeting();
                    }
                };
                console.log("正在请求地理位置以生成问候语...");
                const script = document.createElement('script');
                script.id = 'tencent-location-api';
                script.src = `https://apis.map.qq.com/ws/location/v1/ip?key=${tencentKey}&output=jsonp&callback=handleLocationResponse`;
                script.onerror = () => fallbackGreeting();
                document.body.appendChild(script);
            }
        }

        // 步骤5：绑定其他交互事件
        // 卡片鼠标辉光效果
        const card = document.querySelector('.profile-card');
        if (card) card.addEventListener('mousemove', (e) => { 
            const rect = card.getBoundingClientRect(); 
            card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`); 
            card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`); 
        });
        
        // 主题切换按钮
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) themeToggle.addEventListener('click', () => { 
            document.body.classList.toggle('light-mode'); 
            const newTheme = document.body.classList.contains('light-mode') ? 'light' : 'dark'; 
            localStorage.setItem('theme', newTheme); 
            particleEngine.start(newTheme); 
        });
    }

    // --- 应用启动入口 ---
    initialize();
});
