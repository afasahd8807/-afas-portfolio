# Afas Ahamed — Portfolio

A responsive personal portfolio focused on IT support, MERN stack development, and cloud engineering. It presents professional experience, technical skills, projects, education, certifications, and contact links in a modern dark interface.

## Features

- Responsive single-page layout
- Cloud and IT support visual identity
- Animated navigation and smooth scrolling
- Mobile navigation menu
- Experience, skills, projects, and education sections
- Downloadable CV and contact links
- Keyboard focus and reduced-motion support

## Built With

- React 19
- Vite 8
- Tailwind CSS 4
- Lucide React
- React Icons

## Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/) and npm.

### Installation

```bash
npm install
```

On Windows PowerShell, use `npm.cmd` if script execution is disabled:

```powershell
npm.cmd install
```

### Development

```bash
npm run dev
```

Open the local URL displayed by Vite, normally `http://localhost:5173`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimized build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Check the source code with ESLint |

## Customization

Most portfolio content is stored in `src/App.jsx`.

1. Update the `profile` object with your email, LinkedIn URL, and GitHub URL.
2. Replace the education, certification, skill, experience, and project content.
3. Add your CV as `public/Afas-Ahamed-CV.pdf`, or change the resume path.
4. Update the title and metadata in `index.html`.
5. Adjust global styles and animations in `src/index.css`.

## Project Structure

```text
afas-portfolio/
├── public/            # Static files, favicon, icons, and CV
├── src/
│   ├── App.jsx        # Portfolio content and components
│   ├── index.css      # Tailwind import and custom styles
│   └── main.jsx       # React entry point
├── index.html
├── package.json
└── vite.config.js
```

## Production Build

```bash
npm run build
npm run preview
```

The generated website is placed in `dist/` and can be deployed to Vercel, Netlify, GitHub Pages, or Cloudflare Pages.

## License

This project is intended for personal portfolio use. Adapt the identity and content before using it as your own.
