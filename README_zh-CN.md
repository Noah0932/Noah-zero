# **Noah-zero**


  <img src="https://img.shields.io/badge/license-CC%20BY--NC--SA%204.0-lightgrey.svg" alt="许可协议: CC BY-NC-SA 4.0">

  <img src="https://img.shields.io/badge/tech-原生JS-yellow.svg" alt="技术: 原生JS">

  <img src="https://img.shields.io/badge/dependencies-none-brightgreen.svg" alt="依赖: 无">

Noah-zero 是一个轻量级、无任何外部依赖的个人主页项目，其特色为两种不同的、基于 Canvas 的交互式动态背景。项目采用原生 HTML、CSS 和 JavaScript 构建，专注于性能、视觉美学与健壮的响应式布局。

[查看在线演示](https://noah0932.top)

---



## 🧬背景与设计哲学

本项目的初衷是创建一个高度个性化和动态化的数字身份，以超越静态的个人作品集模板。其核心原则如下：

- **零依赖**: 为确保极致的性能、可移植性和简洁性，项目仅使用浏览器原生API。
- **美学二元性**: 双模式主题不仅是颜色的切换，它提供了两种截然不同的交互体验，以反映不同的心境或上下文。
- **健壮性工程**: 布局经精心设计，可在所有视口尺寸下保持无条件稳定，并能优雅地处理内容溢出而不破坏结构。

## ✨ 特性

- **双模式主题**: 支持亮色与暗色模式，提供手动切换开关，并能根据系统时间自动检测。主题由 CSS 变量管理，易于维护和扩展。
- 交互式动态背景
  - **亮色模式**: 随鼠标牵引的交互式粒子网络。
  - **暗色模式**: 拥有粒子间引力的、自演化的星尘宇宙。
- **响应式设计**:完美适配桌面和移动设备。
- **纯粹原生**: 仅使用原生HTML, CSS, JavaScript，无需任何框架。
- **高度可定制**: 清晰的代码结构和注释，方便你打造属于自己的主页。

*   **交互式 Canvas 背景**:

    *   **亮色模式**: 鼠标响应式粒子网络。在鼠标指针的指定半径内，粒子会形成连接，创造出一种结构感和连接感。
*   **暗色模式**: 自演化的星尘宇宙。粒子间存在引力模拟，会表现出临时的、涌现式的自组织行为，如形成星团和星流。
    *   **高弹性响应式布局**: 在主内容卡片上采用 `display: flex` 容器与 `margin: auto` 布局。此方案确保了在大型视口下的像素级垂直水平居中，同时在小型或受限视口下能避免内容裁剪，并维持正常的文档流。
    *   **移动端交互优化**: 支持触摸事件以实现背景交互。通过媒体查询在小型视口下禁用了 Canvas 的 `pointer-events` 属性，以确保动画层不会干扰页面的平滑滚动。
    *   **可选的访客地理位置问候**: 一个可选功能，可通过腾讯位置服务 API，基于访客的 IP 地址派生的地理位置来显示欢迎信息。此功能可轻松配置或禁用。

## 技术栈

- **HTML5**: 用于内容结构的语义化标记。
- **CSS3**: Flexbox 用于布局，CSS 变量用于主题化，关键帧动画用于过渡效果。**
- **JavaScript (ES6+)**: Canvas API 用于渲染，DOM 操作用于实现交互性。

## 🎨项目结构

为保持简洁和可移植性，项目被有意地整合在单个文件中。
```js

. └── index.html      # 包含所有 HTML, CSS, และ JavaScript

```

## ✨快速上手

本项目无需构建过程或安装步骤。

## 🔧 自定义指南

你可以在`index.html`文件中，通过搜索以下关键字，快速定位并修改核心内容

### 1. 内容配置

通过搜索 `[CONFIG]` 注释标签，快速定位并修改页面内容。

| 标签                        | 描述                               |
| :-------------------------- | :--------------------------------- |
| `[CONFIG] 1. FAVICON`       | 浏览器标签页图标 (`favicon.ico`)。 |
| `[CONFIG] 2. AVATAR`        | 个人主头像的 URL。                 |
| `[CONFIG] 3. PERSONAL INFO` | 姓名、头衔和个人简介段落。         |
| `[CONFIG] 4. PROJECTS`      | 项目卡片、链接、图标和描述。       |
| `[CONFIG] 5. SKILLS`        | 技能章节中列出的技能标签。         |
| `[CONFIG] 6. CONTACT LINKS` | 社交媒体和联系方式的图标链接。     |
| `[CONFIG] 7. FOOTER`        | 版权、备案号及其他页脚文本。       |

### 2. 动画参数

背景动画的行为可在 `<script>` 部分的 `⚙️ CUSTOMIZABLE PARAMETERS` 注释下进行微调。

`lightThemeOptions` 和 `darkThemeOptions` 对象分别控制其对应的视觉模式。

| 参数             | 类型     | 描述                                           |
| :--------------- | :------- | :--------------------------------------------- |
| `particleAmount` | `number` | 在 Canvas 上渲染的粒子总数。                   |
| `defaultSpeed`   | `number` | 每个粒子的基础速度大小。                       |
| `variantSpeed`   | `number` | 附加到基础速度上的随机速度，用于产生变化。     |
| `defaultRadius`  | `number` | 每个粒子的基础半径。                           |
| `variantRadius`  | `number` | 附加到基础半径上的随机半径，用于产生尺寸变化。 |
| `linkRadius`     | `number` | (亮色模式) 粒子间形成连接的最大距离。          |
| `gravityRadius`  | `number` | (暗色模式) 粒子间产生引力效应的最大距离。      |

### 3. 地理位置API密钥

可选的访客问候功能需要一个来自腾讯位置服务的 API 密钥。

1. **获取密钥**: 前往 [腾讯位置服务官网](https://lbs.qq.com/) 注册并申请一个免费的密钥。

2. 配置密钥

   ```javascript
   const tencentKey = 'YOUR_TENCENT_KEY';
   ```

将`'YOUR_TENCENT_KEY'`替换为你在[腾讯位置服务](https://lbs.qq.com/)申请的免费密钥

如果你不希望使用此功能，**只需删除`setTimeout(()=>{getLocationGreeting()},1500);`这一行代码即可。**

##  🎞许可协议

本项目采用 **知识共享 署名-非商业性使用-相同方式共享 4.0 国际 (Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International)** 许可协议。

版权所有 (c) 2024 Noah

[![Creative Commons License](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-nc-sa/4.0/)

您可以自由地：

- **共享** — 在任何媒介以任何形式复制、发行本作品。
- **演绎** — 修改、转换或以本作品为基础进行创作。

惟须遵守下列条件：

- **署名** — 您必须给出适当的署名，提供指向本许可协议的链接，同时标明是否对原始作品作了修改。
- **非商业性使用** — 您不得将本作品用于商业目的。
- **相同方式共享** — 如果您再混合、转换或者基于本作品进行创作，您必须基于与原先许可协议相同的许可协议分发您贡献的作品。

[查看许可协议全文](http://creativecommons.org/licenses/by-nc-sa/4.0/)

## 贡献代码

欢迎任何形式的贡献。您可以随时提交 Issue 来报告错误或提出功能建议，也可以提交 Pull Request 来改进代码。