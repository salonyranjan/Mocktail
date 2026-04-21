# Mocktail 🍹 

[![Live Demo](https://img.shields.io/badge/Live_Demo-mocktail--seven.vercel.app-emerald?style=for-the-badge&logo=vercel&logoColor=white)](https://mocktail-seven.vercel.app)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

A high-end, immersive digital experience showcasing the art of modern mixology...

![Mocktail Banner](https://raw.githubusercontent.com/salonyranjan/Mocktail/main/public/images/preview.png) 

---

## 🔗 Live Experience

Experience the cinematic interface live at:  👉 **[mocktail-seven.vercel.app](https://mocktail-seven.vercel.app)**

---

## ✨ Experience the Craft
This isn't just a menu; it's a visual journey. Designed for the discerning palate, the platform features:
- **Cinematic Transitions:** Advanced motion orchestration using GSAP for a high-end, editorial feel.
- **Glassmorphic Aesthetics:** Modern UI components with backdrop blurs and subtle noise textures.
- **Interactive Discoveries:** Floating image reveals and parallax elements that respond to user movement.
- **Responsive Fluidity:** A seamless experience across mobile, tablet, and desktop, maintaining visual weight and luxury branding.
  
---

## 🛠️ Technical Stack

- **Frontend:** [React.js](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animation:** [GSAP](https://greensock.com/gsap/) (GreenSock Animation Platform) + [ScrollTrigger](https://greensock.com/scrolltrigger/)
- **Components:** [Lucide React](https://lucide.dev/) for iconography
- **Motion:** Custom CSS Noise texturing and SVG filters

---
## 🚀 Technical Highlights

### Motion Orchestration
The project utilizes `useGSAP` for efficient memory management and performance-optimized animations. Key features include:
- **SplitText Reveals:** Staggered word and character animations for headers.
- **Floating Reveals:** A "Fixed Preview" logic that follows the cursor with organic lag for premium product showcasing.
- **Parallax Leaves:** Environment-aware assets that react to scroll speed and direction.

### Design Principles
- **The "Library" Architecture:** Data-driven menu structures allowing for easy scalability.
- **Zero-Proof Branding:** A curated color palette of **Emerald, Cyan, and Teal** set against deep charcoal backgrounds to evoke a high-end lounge atmosphere.

---

## 🌟 Key Features

* **The Zero Proof Library:** A dynamically rendered menu system categorized by flavor profile (Botanical, Citrus, Velvet).
* **Intelligent Hover System:** Fixed-position image previews with high-performance mouse tracking via GSAP QuickSetter.
* **Cinematic Backgrounds:** Custom SVG fractal noise and multi-layered radial glows for a deep, textured dark-mode experience.
* **Performance Optimized:** Zero layout shifts during animation through strategic use of `immediateRender: false` and `ScrollTrigger.refresh()`.
  
---
## 📁 Project Structure

```text
mocktail/
├── public/              # Static assets (images, fonts, noise textures)
├── src/
│   ├── assets/          # Project-specific icons and branding
│   ├── components/      # Reusable UI (Navbar, MenuCTA, Footer)
│   ├── constants/       # Centralized menu data (allCocktails, navLinks)
│   ├── sections/        # Main page sections (Hero, Mocktails, Contact)
│   └── App.jsx          # Root layout and GSAP orchestration
├── index.html           # Meta tags and SEO configuration
└── tailwind.config.js   # Custom Emerald-Cyan color palette
```
---
## 📁 Project Architecture 🏗️

The diagram below outlines the core structure and data flow of the **Mocktail 🍹** ecosystem, highlighting the integration of React, GSAP orchestration, and the dynamic **"Zero Proof Library"** (Menu data).

```mermaid
%%{init: {'theme': 'dark', 'themeVariables': { 'fontSize': '16px', 'primaryColor': '#10b981'}}}%%

graph LR
    %% Base Nodes - Left Side
    subgraph Root [INIT]
        Main[main.jsx] --> App[App.jsx]
    end

    %% Engine & Data - Top/Bottom
    subgraph Engine [MOTION ENGINE]
        GSAP[GSAP ScrollTrigger]
        Tailwind[Tailwind CSS]
    end

    subgraph Data [ZERO PROOF DATA]
        Cocktails[allCocktails.js]
        Nav[navLinks.js]
    end

    %% Main UI Flow - Center
    subgraph UI [CINEMATIC UI]
        Hero[Hero Section ✨]
        Menu[Menu Library 📚]
        Mocktails[Mocktails List 🍹]
        Contact[Contact Footer 📍]
    end

    %% Connections
    App --> UI
    Data -.-> UI
    Engine ==> UI

    %% Styling for visibility
    classDef root fill:#050505,stroke:#fff,stroke-width:2px,color:#fff;
    classDef section fill:#050505,stroke:#10b981,stroke-width:4px,color:#fff,font-weight:bold;
    classDef data fill:#050505,stroke:#ec4899,stroke-width:3px,color:#ec4899;
    classDef engine fill:#050505,stroke:#38b2ac,stroke-width:2px,color:#38b2ac;

    class Main,App root;
    class Hero,Menu,Mocktails,Contact section;
    class Cocktails,Nav data;
    class GSAP,Tailwind engine;
```
---

## 📦 Getting Started

Follow these steps to set up the **Mocktail 🍹** environment on your local machine.

### Prerequisites

Before you begin, ensure you have the following installed:
* [Node.js](https://nodejs.org/) (Version 18.0 or higher recommended)
* [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
* A modern web browser (Chrome or Edge recommended for GSAP performance)

### Installation & Setup

1. **Clone the Repository**
 ```bash
 git clone [https://github.com/salonyranjan/Mocktail.git](https://github.com/salonyranjan/Mocktail.git)
  cd Mocktail
  ```
2. **Install Dependencies**
Install the necessary React, GSAP, and Tailwind libraries:
 ```bash
npm install
 ```
3. **Environment Configuration**
(Optional) If you decide to add a backend or AI features later:
```bash
cp .env.example .env
```
4. **Launch Development Server**
Start the local server to view the cinematic transitions in real-time:
```bash
npm run dev
```
5. **Build for Production**
To generate a high-performance, minified build:
```bash
npm run build
```
---

## 👤 Author
![Maintained](https://img.shields.io/badge/Maintained%3F-yes-emerald.svg)
![Build](https://img.shields.io/badge/Build-Passing-emerald.svg)
![Contributions](https://img.shields.io/badge/Contributions-Welcome-cyan.svg)

<table style="width: 100%; border: none;">
  <tr>
    <td style="width: 25%; text-align: center; border: none;">
      <img src="https://github.com/salonyranjan.png" width="150" style="border-radius: 50%; border: 3px solid #10b981;" alt="Salony Ranjan" />
    </td>
    <td style="width: 75%; vertical-align: middle; border: none; padding-left: 20px;">
      <h1><strong>Salony Ranjan</strong></h1>
      <div>
        <a href="linkedin.com/in/salony-ranjan-b63200280"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
        <a href="https://github.com/salonyranjan"><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /></a>
        <a href="mailto:salonyranjan@gmail.com"><img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" /></a>
      </div>
    </td>
  </tr>
</table>

---
