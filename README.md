# Backend Developer Portfolio

A modern, dark-themed developer portfolio built with [Next.js](https://nextjs.org) and [Tailwind CSS](https://tailwindcss.com), featuring a Bento-grid layout.

## Features

- **Bento Grid Layout**: Responsive, card-based design with `lucide-react` icons.
- **Tech Stack Visualization**: Clean, categorized icons.
- **DSA Stats**: Visual progress bars representing LeetCode stats.
- **Projects Showcase**: Highlight main projects and side lists.
- **Contact Form**: Simple UI ready for backend integration.

## Getting Started

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Run the development server**:
    ```bash
    npm run dev
    ```

3.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

To personalize this portfolio, edit `src/app/page.tsx`:

-   **Profile**: Update the name, role, and bio.
-   **Tech Stack**: Change the icons imported from `lucide-react` to match your skills.
-   **Projects**: Update the `ProjectItem` components and the main project card with your actual GitHub links and descriptions.
-   **DSA Stats**: Manually update the numbers or integrate with the LeetCode API.
-   **Contact Form**: The form is UI-only. You can integrate it with a service like Formspree or emailjs.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
