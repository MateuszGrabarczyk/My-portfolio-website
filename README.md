# My Portfolio

This is a personal portfolio website built with Next.js and Tailwind CSS. The portfolio showcases my skills, projects, and experience, and includes a dark mode toggle for a better user experience.

## Features

- **Responsive Design**: The website is fully responsive and looks great on all devices.
- **Dark Mode**: Users can switch between light and dark themes.
- **Dynamic Components**: The portfolio is modular, with components like `Navbar`, `Header`, `Experience`, `Skills`, `Projects`, `SocialLinks`, and more.
- **Tailwind CSS**: Fast styling using Tailwind CSS with conditional classes for dark mode.

## Technologies Used

- **Next.js**: A React framework for building fast and user-friendly web applications.
- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Typed JavaScript for better code quality and maintainability.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Icons**: Icon library for easily adding icons to the project.

## Components

### `Navbar`

The navigation bar component, which includes navigation links and a dark mode toggle.

### `Header`

The header component introduces the portfolio with a typing effect for the name and an introduction.

### `Experience`

A component showcasing professional experience with details about roles and responsibilities.

### `Skills`

A component listing technical skills and technologies, often presented with a visual representation of proficiency.

### `Projects`

A component that lists various projects with details about the technology stack and links to their respective GitHub repositories.

### `SocialLinks`

A component that displays social media links (e.g., GitHub, LinkedIn) using icons for easy access.

### `ProfilePicture`

A component that displays the profile picture with styling and animations.

### `Contact`

A component for users to contact you, potentially including a form for direct messages.

### `NavItem` & `NavItems`

Subcomponents used in the `Navbar` for individual navigation items, allowing for more modular and reusable code.

### `ProjectCard`

A subcomponent of `Projects` used to display individual project details in a card format.

### `Skill` & `Skills`

Components for listing individual skills (`Skill`) and a grouped listing of skills (`Skills`).

## Installation and Setup in local

1. **Clone the repository:**

   ```bash
   git clone https://github.com/MateuszGrabarczyk/My-portfolio-website.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd portfolio
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. **Open your browser and visit:**
   ```
   http://localhost:3000
   ```

## Installation and Setup using Docker

1. **Clone the repository:**

   ```bash
   git clone https://github.com/MateuszGrabarczyk/My-portfolio-website.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd portfolio
   ```

3. **Build the Docker Image:**

   ```bash
   docker-compose build
   ```

4. **Run the Docker Container:**

   ```bash
   docker-compose up
   ```

5. **Open your browser and visit:**

   ```bash
   http://localhost:3000
   ```

6. **Stop the Docker Container:**

   ```bash
   docker-compose down
   ```

## Running Tests

1. **Run Tests in terminal or in Docker Container Terminal**

   ```bash
   npm test
   ```

## Usage

- **Toggle Dark Mode:** Use the dark mode toggle in the navbar to switch between light and dark themes.
- **View Projects:** Browse the project cards to see details about each project and visit their GitHub repositories.
- **Contact Me** Use the contact form to send direct messages.
