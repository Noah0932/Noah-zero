# **Noah-zero**

---

[简体中文文档](./README_zh-CN.md)

[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/license-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)
[![Tech: Vanilla JS](https://img.shields.io/badge/tech-Vanilla%20JS-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Dependencies: None](https://img.shields.io/badge/dependencies-none-brightgreen.svg)](https://shields.io/)

Noah-zero is a lightweight, zero-dependency personal homepage project featuring two distinct, interactive dynamic backgrounds powered by the Canvas API. Built with vanilla HTML, CSS, and JavaScript, it focuses on performance, visual aesthetics, and a robust responsive layout. The project is fully self-contained and designed for effortless configuration.

[**View Live Demo**](https://noah0932.top)

---

## 🧬 Background & Design Philosophy

The project was born from the desire to create a highly personalized and dynamic digital identity that transcends static portfolio templates. The core principles are:

-   **Zero Dependency**: To ensure maximum performance, portability, and simplicity, the project relies solely on native browser APIs.
-   **Aesthetic Duality**: The dual-mode theme is not just a color swap; it offers two fundamentally different interactive experiences, reflecting different moods or contexts.
-   **Robust Engineering**: The layout is meticulously crafted to remain stable across all viewport sizes, gracefully handling content overflow without breaking the structure.

## ✨ Features

-   **Dual-Mode Theme**: Supports both light and dark modes with a manual toggle and auto-detection based on system time. Theming is managed by CSS variables for easy maintenance and extension.
-   **Interactive Dynamic Backgrounds**:
    -   **Light Mode**: An interactive particle network that responds to mouse movement. Particles within a specified radius of the cursor form connections, creating a sense of structure.
    -   **Dark Mode**: A self-evolving gravitational stardust universe. Particles exhibit emergent, self-organizing behaviors like forming clusters and streams due to a simulated gravitational pull.
-   **Robust Responsive Design**: Flawlessly adapts to both desktop and mobile devices.
-   **Purely Native**: Built with only vanilla HTML, CSS, and JavaScript—no frameworks or libraries needed.
-   **Highly Customizable**: A clean code structure and centralized configuration file make it easy to tailor the page to your own identity.
-   **Optional Geolocation Greeting**: An optional feature that displays a welcome message based on the visitor's location, derived from their IP address via the Tencent Location Service API. This can be easily configured or disabled.

## 🛠 Tech Stack

-   **HTML5**: For semantic content structure.
-   **CSS3**: Flexbox for layout, CSS variables for theming, and keyframe animations for transitions.
-   **JavaScript (ES6+)**: Canvas API for rendering and DOM manipulation for interactivity.

## 🎨 Project Structure

All user-configurable content is centralized in `js/config.js` for simplicity and ease of maintenance.

```
./
├── index.html              # The structural skeleton of the page
├── css/
│   └── style.css           # All styles for the project
├── js/
│   ├── config.js           # The core configuration file for all personal data
│   └── script.js           # The main logic script that drives the page
└── webfonts/
    └── (Font files...)     # Contains all web font files
```

## ✨ Quick Start

This project requires **no build process or installation steps**. Simply clone the repository and open `index.html` in your browser, or deploy the files to any static web host.

## 🔧 Customization Guide

All personal content and key parameters can be easily modified in the **`js/config.js`** file.

### 1. Content Configuration

You can quickly find and modify page content by looking for the corresponding variable names in `config.js`.

| Variable Name | Description                                   | File           |
| :------------ | :-------------------------------------------- | :------------- |
| `FAVICON`     | Browser tab icon (`favicon.ico`) URL          | `index.html`   |
| `AVATAR_URL`  | URL for your personal avatar image            | `js/config.js` |
| `NAME`        | Your display name or nickname                 | `js/config.js` |
| `TITLE`       | Your professional title or role               | `js/config.js` |
| `DESCRIPTION` | A brief personal introduction                 | `js/config.js` |
| `PROJECTS`    | Project cards, links, and descriptions        | `js/config.js` |
| `SKILLS`      | Skill tags listed in the skills section       | `index.html`   |
| `API`         | API key for Tencent Map's IP location service | `js/config.js` |
| `CONTACT`     | Your contact links (Email, GitHub, etc.)      | `js/config.js` |
| `FOOTER`      | Copyright, license, and other footer text     | `js/config.js` |

### 2. Animation Parameters

The behavior of the background animations can be fine-tuned in `script.js` within the "Particle Engine" module. The `lightThemeOptions` and `darkThemeOptions` objects control their respective modes.

| Parameter        | Type     | Description                                                  |
| :--------------- | :------- | :----------------------------------------------------------- |
| `particleAmount` | `number` | The total number of particles rendered on the canvas.        |
| `defaultSpeed`   | `number` | The base speed magnitude for each particle.                  |
| `variantSpeed`   | `number` | A random speed value added to the base speed to create variation. |
| `defaultRadius`  | `number` | The base radius for each particle.                           |
| `variantRadius`  | `number` | A random radius value added to the base radius for size variation. |
| `linkRadius`     | `number` | (Light Mode) The maximum distance at which particles will connect. |
| `gravityRadius`  | `number` | (Dark Mode) The maximum distance for gravitational effects to occur. |

### 3. Geolocation API Key

The optional visitor greeting feature requires an API key from Tencent Location Service.

1.  **Get a Key**: Go to the [Tencent Location Service Website](https://lbs.qq.com/), register, and create a free API key.
2.  **Configure the Key**: In `js/config.js`, find the `API` section and paste your key:
    ```javascript
    // js/config.js
    API: {
        TENCENT_MAP_KEY: 'YOUR_TENCENT_KEY_HERE',
    },
    ```
    **To disable this feature**, simply leave the `TENCENT_MAP_KEY` value as an empty string (`''`) or the default placeholder. The application will automatically skip the greeting without causing errors.

### 4. Greetings System

The greeting system is flexible, with a three-tiered logic based on time, specific locations, and a generic template. Customize it in the `GREETINGS` object in `config.js`.

-   **Location-Specific Greetings**: Add custom greetings for specific cities in the `LOCATION_SPECIFIC` object.
-   **Generic Template**: Modify `LOCATION_FOUND_TEMPLATE` to customize the standard greeting format. `{city}` and `{time_greeting}` are placeholders.
-   **Fallback Message**: Change `API_FAIL_FALLBACK` to set the default message when geolocation fails.

## 📜 License

This project is licensed under the **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License**.

Copyright (c) 2024 Noah

[![Creative Commons License](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-nc-sa/4.0/)

You are free to:

-   **Share** — copy and redistribute the material in any medium or format.
-   **Adapt** — remix, transform, and build upon the material.

Under the following terms:

-   **Attribution** — You must give appropriate credit, provide a link to the license, and indicate if changes were made.
-   **NonCommercial** — You may not use the material for commercial purposes.
-   **ShareAlike** — If you remix, transform, or build upon the material, you must distribute your contributions under the same license as the original.

[View Full License Text](http://creativecommons.org/licenses/by-nc-sa/4.0/)

## 🤝 Contributing

Contributions of any kind are welcome. Feel free to open an Issue to report bugs or suggest features, or submit a Pull Request to improve the code.