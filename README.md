ShowScout - A TV Show Browser
Live URL: Your Deployed URL Here

About This Project
ShowScout is a micro-application built for the QuipHR frontend developer assignment. It allows users to search for TV shows and view detailed information, powered by the TVmaze API. The project was designed with a focus on creating a clean, responsive, and delightful user experience while adhering to modern frontend development best practices.

My Thought Process
My primary goal was to build an application that was not only functional but also demonstrated a strong understanding of UI/UX principles, performance, and code quality.

Technology Choices: I chose Next.js for its powerful features like server-side rendering, file-based routing, and image optimization, which directly address key assignment criteria. For styling, I used Tailwind CSS for its utility-first approach, which allows for rapid and responsive UI development. Framer Motion was used to add smooth, purposeful animations that enhance the user experience.

Component Architecture: I structured the application into modular components, separating concerns into layout, ui (for reusable elements like Cards and Buttons), and feature-specific (shows) folders. This approach makes the codebase clean, scalable, and easy to maintain.

User Experience: I implemented a debounced search to provide a smooth and efficient search experience, preventing excessive API calls. I also ensured that the application handles all states gracefully, providing clear loading indicators and user-friendly error messages (e.g., for network failures or shows not found).

Features Implemented
This project successfully implements all core expectations and bonus features from the assignment brief.

Dynamic Search: Real-time, debounced search functionality.

Responsive Design: A mobile-first approach ensures a seamless experience on all devices.

Smooth Animations: Page transitions and content reveal animations powered by Framer Motion.

Dark/Light Mode: A theme toggle with smooth transitions and persistence.

SEO Optimized: Dynamic meta tags (title, description) are generated for each show detail page for better search engine visibility.

Image Optimization: Uses the Next.js <Image> component for lazy loading and optimized image delivery.

Robust Error Handling: Includes a custom 404 page and handles API/network errors gracefully.

Unit Tested: Key components and logic are covered by unit tests using Jest and React Testing Library.

How to Run This Project Locally
Clone the repository:

git clone https://github.com/your-username/your-repo-name.git

Navigate to the project directory:

cd your-repo-name

Install dependencies:

npm install

Run the development server:

npm run dev

Run tests:

npm test

Open http://localhost:3000 with your browser to see the result.