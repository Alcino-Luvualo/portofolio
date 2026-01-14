# 💼 Personal Portfolio - Alcino Luvualo

A modern and responsive portfolio developed with React and TypeScript, showcasing projects, skills, and professional recommendations.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2.2-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.17-38B2AC?logo=tailwind-css&logoColor=white)

## 📋 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Available Scripts](#-available-scripts)
- [Detailed Features](#-detailed-features)
- [Author](#-author)
- [License](#-license)

## 🎯 About the Project

This is a personal portfolio developed to professionally showcase the projects, skills, and experience of Alcino Luvualo as a Software Developer. The site was built with a focus on performance, responsiveness, and a modern, intuitive user experience.

### ✨ Highlights

- **Modern Design**: Clean and professional interface with smooth animations
- **Fully Responsive**: Adaptable to all devices (mobile, tablet, desktop)
- **Multilingual**: Support for English and Portuguese
- **Optimized Performance**: Built with Vite for fast loading
- **TypeScript**: Type-safe and more maintainable code
- **Accessibility**: Semantic components and keyboard navigation

## 🚀 Features

### Main Sections

- **Hero Section**: Introduction with typewriter effect and social media links
- **Skills**: Technical skills showcase with icons and descriptions
- **Projects**: Featured projects gallery with links to deploy and code
- **Recommendations**: Testimonials and professional recommendations
- **Footer**: Contact information and credits

### Special Features

- 🌐 **Multilingual System**: Toggle between English and Portuguese
- ✍️ **Typewriter Effect**: Typing animation on the name
- 🎨 **Smooth Animations**: Transitions and hover effects on all components
- 📱 **Responsive Design**: Layout adaptable to any screen size
- ⚡ **Performance**: Fast and optimized loading

## 🛠 Technologies Used

### Core
- **React** 19.2.0 - JavaScript library for building user interfaces
- **TypeScript** 5.9.3 - JavaScript superset with static typing
- **Vite** 7.2.2 (rolldown-vite) - Ultra-fast build tool and dev server

### Styling
- **Tailwind CSS** 4.1.17 - Utility-first CSS framework
- **PostCSS** 8.5.6 - CSS processor
- **Autoprefixer** 10.4.22 - Automatically adds vendor prefixes

### Libraries
- **Lucide React** 0.553.0 - Modern and customizable icons
- **Typewriter Effect** 2.22.0 - Animated typing effect

### Development Tools
- **ESLint** 9.39.1 - Linter for JavaScript/TypeScript
- **TypeScript ESLint** 8.46.3 - ESLint rules specific to TypeScript

## 📦 Prerequisites

Before you begin, ensure you have installed:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** or **pnpm**

To check if you have Node.js installed:

```bash
node --version
npm --version
```

## 🔧 Installation

1. **Clone the repository**

```bash
git clone https://github.com/Alcino-Luvualo/portofolio.git
```

2. **Navigate to the project directory**

```bash
cd portofolio
```

3. **Install dependencies**

```bash
npm install
```

or

```bash
yarn install
```

or

```bash
pnpm install
```

## 🎮 Usage

### Development Mode

To start the development server:

```bash
npm run dev
```

The project will be available at `http://localhost:5173` (or another port if 5173 is occupied).

### Production Build

To create an optimized production build:

```bash
npm run build
```

The compiled files will be in the `dist/` folder.

### Preview Build

To preview the production build locally:

```bash
npm run preview
```

### Linting

To check the code with ESLint:

```bash
npm run lint
```

## 📁 Project Structure

```
portofolio/
├── public/                 # Static files
│   ├── *.webp             # Project images
│   └── vite.svg           # Favicon
├── src/
│   ├── assets/            # Project resources
│   ├── components/        # React components
│   │   ├── footer.tsx
│   │   ├── header.tsx
│   │   ├── hero.tsx
│   │   ├── projects.tsx
│   │   ├── recommendations.tsx
│   │   └── skills.tsx
│   ├── contexts/          # React contexts
│   │   └── LanguageContext.tsx
│   ├── App.tsx            # Main component
│   ├── App.css            # Global App styles
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── .eslint.config.js      # ESLint configuration
├── index.html             # Main HTML
├── package.json           # Dependencies and scripts
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── tsconfig.app.json      # TypeScript config for app
├── tsconfig.node.json     # TypeScript config for Node
└── vite.config.ts         # Vite configuration
```

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Starts the development server |
| `npm run build` | Creates a production build |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs ESLint to check the code |

## 🎨 Detailed Features

### Multilingual System

The project includes a complete internationalization (i18n) system that allows switching between English and Portuguese. Translations are managed through the `LanguageContext`.

### Main Components

- **Header**: Fixed navigation with links to sections and language selector
- **Hero**: Introduction section with typewriter effect and social links
- **Skills**: Responsive grid of technical skills
- **Projects**: Project cards with images, descriptions, and links
- **Recommendations**: Testimonials from clients/colleagues
- **Footer**: Footer with contact information

### Animations and Effects

- Entry animations (`slide-up`, `fade-in`)
- Hover effects on cards and buttons
- Smooth transitions between states
- Typewriter effect on the name

## 👨‍💻 Author

**Alcino Luvualo**

- LinkedIn: [@alcino-luvualo](https://linkedin.com/in/alcino-luvualo)
- GitHub: [@Alcino-Luvualo](https://github.com/Alcino-Luvualo)
- Twitter/X: [@alcinodev](https://x.com/alcinodev)

## 📄 License

This project is private and for personal use. All rights reserved.

---

⭐ If this project was helpful to you, consider giving it a star on the repository!
