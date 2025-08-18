# Noah-zero

[Read this document in 简体中文](./README_zh-CN.md)

A highly customizable personal homepage with dual-mode (light/dark) dynamic backgrounds.

 ![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/license-CC%20BY--NC--SA%204.0-lightgrey.svg)

 ![Tech: Vanilla JS](https://img.shields.io/badge/tech-Vanilla%20JS-yellow.svg)

 ![Dependencies: None](https://img.shields.io/badge/dependencies-none-brightgreen.svg)

Noah-zero is a lightweight, dependency-free personal homepage project featuring two distinct, interactive, canvas-based background animations. The project is built with vanilla HTML, CSS, and JavaScript, focusing on performance, aesthetic quality, and a robust responsive layout.

[View Live Demo](https://noah0932.top)

------

## 🧬 Background & Philosophy

This project was created to be a highly personal and dynamic digital identity, moving beyond static portfolio templates. The core principles are:

- **Zero Dependencies**: To ensure maximum performance, portability, and simplicity, the project uses only native browser APIs.
- **Aesthetic Duality**: The dual-mode theme is not just a color swap; it offers two fundamentally different interactive experiences, reflecting different moods or contexts.
- **Robust Engineering**: The layout is engineered to be unconditionally stable across all viewport sizes, gracefully handling content overflow without breaking the structure.

## ✨ Features

- **Dual-Mode Theme**: Supports light and dark modes with a manual toggle and auto-detection based on system time. Themes are managed via CSS variables for easy maintenance and extension.

- Interactive Canvas Backgrounds

  :

  - **Light Mode**: A mouse-reactive particle network. Within a specified radius of the cursor, particles form connections, creating a sense of structure and connectivity.
  - **Dark Mode**: A self-evolving starfield. A gravitational simulation between particles results in emergent, self-organizing behaviors like temporary clusters and streams.

- **Resilient Responsive Layout**: Utilizes a `display: flex` container with `margin: auto` on the main content card. This solution ensures pixel-perfect vertical and horizontal centering on large viewports while preventing content clipping and maintaining proper document flow on smaller ones.

- **Mobile-Optimized Interaction**: Supports touch events for background interaction. The canvas's `pointer-events` property is disabled on smaller viewports via media query to ensure the animation layer does not interfere with smooth page scrolling.

- **Optional Geolocation Greeting**: An optional feature to display a welcome message based on the visitor's IP-derived geolocation via the Tencent LBS API. This can be easily disabled.

- **Purely Native**: Built with only native HTML, CSS, and JavaScript, without any frameworks.

- **Highly Customizable**: A clear code structure and comments make it easy to craft your own homepage.

## Technology Stack

- **HTML5**: Semantic markup for content structure.
- **CSS3**: Flexbox for layout, CSS variables for theming, keyframe animations for transition effects.
- **JavaScript (ES6+)**: Canvas API for rendering, DOM manipulation for interactivity.

## 🎨 Project Structure

To maintain simplicity and portability, the project is intentionally contained within a single file.

```javascript

. └── index.html      # Contains all HTML, CSS, and JavaScript

```



## ✨ Getting Started

This project requires no build process or installation steps. Simply clone or download the repository and open the `index.html` file in your browser.

## 🔧 Customization Guide

You can quickly locate and modify core content in the `index.html` file by searching for the following keywords.

### 1. Content Configuration

Search for `[CONFIG]` comment tags to quickly locate and modify page content.

| Tag                         | Description                                      |
| :-------------------------- | :----------------------------------------------- |
| `[CONFIG] 1. FAVICON`       | The browser tab icon (`favicon.ico`).            |
| `[CONFIG] 2. AVATAR`        | The URL for your main profile picture.           |
| `[CONFIG] 3. PERSONAL INFO` | Name, title, and biography paragraphs.           |
| `[CONFIG] 4. PROJECTS`      | Project cards, links, icons, and descriptions.   |
| `[CONFIG] 5. SKILLS`        | The skill tags listed in the skills section.     |
| `[CONFIG] 6. CONTACT LINKS` | Icon links for social media and contact methods. |
| `[CONFIG] 7. FOOTER`        | Copyright, ICP license, and other footer text.   |

### 2. Animation Parameters

The behavior of the background animations can be fine-tuned in the `<script>` section under the `⚙️ CUSTOMIZABLE PARAMETERS` comment.

The `lightThemeOptions` and `darkThemeOptions` objects control their respective visual modes.

| Parameter        | Type     | Description                                                 |
| :--------------- | :------- | :---------------------------------------------------------- |
| `particleAmount` | `number` | The total number of particles rendered on the canvas.       |
| `defaultSpeed`   | `number` | The base velocity magnitude for each particle.              |
| `variantSpeed`   | `number` | Random velocity added to the base speed for variation.      |
| `defaultRadius`  | `number` | The base radius of each particle.                           |
| `variantRadius`  | `number` | Random radius added to the base radius for size variation.  |
| `linkRadius`     | `number` | (Light Mode) The maximum distance for particles to connect. |
| `gravityRadius`  | `number` | (Dark Mode) The maximum distance for gravitational effects. |

### 3. Geolocation API Key

The optional visitor greeting feature requires an API key from Tencent Location-Based Services.

1. **Obtain a Key**: Register and get a free key from the [Tencent LBS official website](https://lbs.qq.com/).

2. **Configure the Key**: In `index.html`, locate the following line:

   ```javascript
   const tencentKey = 'YOUR_TENCENT_KEY';
   ```

   Replace `'YOUR_TENCENT_KEY'` with the free key you obtained.

3. **Disable the Feature**: If you do not wish to use this feature, **simply delete this line of code: `setTimeout(()=>{getLocationGreeting()},1500);`**

## 🎞 License

This project is licensed under the **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License**.

Copyright (c) 2024 Noah



[![Creative Commons License](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-nc-sa/4.0/)



You are free to:

- **Share** — copy and redistribute the material in any medium or format.
- **Adapt** — remix, transform, and build upon the material.

Under the following terms:

- **Attribution** — You must give appropriate credit, provide a link to the license, and indicate if changes were made.
- **NonCommercial** — You may not use the material for commercial purposes.
- **ShareAlike** — If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original.

[View the full license deed](http://creativecommons.org/licenses/by-nc-sa/4.0/)

## Contributing

Contributions are welcome. Please feel free to open an issue to report bugs or suggest features, or submit a pull request with improvements.