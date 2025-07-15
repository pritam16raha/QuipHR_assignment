ShowScout - A TV Show & Movie Browser
Live Deployed URL: Your Live Vercel URL Here

(To add your screenshot: take a picture of your finished application, upload it to a service like Imgur, and paste the image link here)

About This Project
ShowScout is a dynamic and responsive web application built as a submission for the QuipHR Frontend Developer assignment. It provides a seamless interface for users to search for TV shows and explore detailed information, powered by the public TVmaze REST API.

This project was developed with a focus on creating a modern, performant, and delightful user experience, while adhering to the highest standards of code quality, architecture, and frontend best practices. It successfully implements all core requirements and bonus features outlined in the assignment brief.

My Thought Process & Architectural Decisions
My primary goal was to build an application that was not only functional but also demonstrated a deep understanding of a modern frontend development workflow.

Technology Choices: I chose the Next.js (App Router) framework to leverage its powerful features like Server-Side Rendering (SSR), file-based routing, and built-in image optimization. This choice directly addresses performance, SEO, and modern development patterns. For styling, Tailwind CSS was selected for its utility-first approach, enabling rapid, responsive, and maintainable UI development without leaving the component files.

Component Architecture: The application is structured into a modular and scalable component architecture. Components are logically separated into layout (e.g., Navbar, Footer), ui (for reusable, generic elements like Cards and Buttons), and feature-specific (shows) folders. This separation of concerns makes the codebase clean, easy to navigate, and highly maintainable.

User Experience (UX): I prioritized a smooth and intuitive user journey. The core search functionality is enhanced with debouncing, which prevents excessive API calls and provides a more responsive feel. The application gracefully handles all possible states, providing clear loading indicators during data fetching and user-friendly error messages for network failures or "not found" scenarios.

Animations & Flow: To make the interface feel alive, I used Framer Motion for animations. This includes subtle hover effects on interactive elements, staggered animations for search results appearing on screen, and smooth page transitions, creating a polished and engaging user experience.

Technology Stack
This project was built using a modern and robust set of technologies:

Technology

Description

Next.js

The core React framework, used for its App Router, Server Components, and performance optimizations.

React

The fundamental UI library for building components.

TypeScript

Used for static typing to ensure code quality, maintainability, and fewer runtime errors.

Tailwind CSS

A utility-first CSS framework for rapid and responsive UI development.

Framer Motion

A production-ready motion library for creating smooth and complex animations.

Axios

A promise-based HTTP client for making robust API calls to the TVmaze service.

Jest & RTL

Jest and React Testing Library were used for unit testing to ensure component reliability and functionality.

Lucide React

A beautiful and consistent icon library.

Vercel

The platform used for seamless, zero-configuration deployment and hosting.

Features Implemented
✅ Core Requirements:

Dynamic Search: Real-time, debounced search functionality that fetches data from the TVmaze API.

Responsive Design: A mobile-first approach ensures a seamless experience on all devices, from small phones to large desktops.

Smooth Animations: Page transitions, content reveal animations, and micro-interactions are implemented with Framer Motion.

Robust API Handling: The application gracefully handles loading states with spinners and displays user-friendly messages for API or network errors.

⭐ Bonus Features:

Next.js Framework: Leveraged for server-side rendering, file-based routing, and performance benefits.

SEO Meta Tags: Dynamic meta tags (title, description, openGraph) are generated for each show detail page, improving search engine visibility and social media sharing.

Dark/Light Theme Toggle: A fully functional theme switcher with smooth transitions and persistence across sessions.

Custom 404 Page: A user-friendly "Not Found" page is implemented for invalid routes.

Unit Testing: Key components and logic are covered by unit tests using Jest and React Testing Library to ensure code quality and reliability.

Image Optimization: Uses the Next.js <Image> component for automatic lazy loading and optimized image delivery, improving performance.

## 🚀 Live Demo

👉 [https://quip-hr-assignment.vercel.app/](https://quip-hr-assignment.vercel.app/)

![Home Page](<home.png>)\

## 🚀 Video Demo

[https://drive.google.com/file/d/1eozMFAGNVmPRjir6VxLyU_tgIqpTXY38/view?usp=sharing](https://drive.google.com/file/d/1eozMFAGNVmPRjir6VxLyU_tgIqpTXY38/view?usp=sharing)

## ✍️ Author

Built with ❤️ by [Pritam Raha](https://github.com/pritam16raha)

How to Run This Project Locally
To get a local copy up and running, follow these simple steps.

Prerequisites
Node.js (v18 or later)

npm or yarn

Installation & Setup
Clone the repository:

git clone https://github.com/pritam16raha/QuipHR_assignment.git

Navigate to the project directory:

cd your-repo-name

Install dependencies:

npm install

Run the development server:

npm run dev

Run tests:

npm test

Open http://localhost:3000 with your browser to see the application.a
