# About AstroStorm
Have you ever noticed how odd it is that designers build complex systems in tools like Figma to simulate HTML, CSS, and JS, only for developers to then translate it back into real web technologies? Congratulations! You're one of the rare "front-of-the-frontend" developers. AstroStorm is made specifically for you - with its "design-in-code" approach, it bridges the gap between design and development. Start where your design lives: Within the code.

# What is AstroStorm?
AstroStorm is a modern web application toolkit built with Astro and Tailwind CSS. It provides a solid foundation for building fast, efficient, and responsive websites.

## Features

- Built with Astro for optimal performance and static site generation
- Tailwind CSS for utility-first styling
- MDX support for enhanced Markdown capabilities
- RSS feed generation
- Sitemap generation for improved SEO
- TypeScript support for type-safe development
- Reusable UI components and section components
- Blog functionality with Markdown support

## Project Structure

```
.
├── public/
│   ├── fonts/
│   └── (other static assets)
├── src/
│   ├── components/
│   │   ├── sections/
│   │   └── ui/
│   ├── content/
│   │   └── blog/
│   ├── layouts/
│   ├── lib/
│   ├── pages/
│   │   └── blog/
│   └── styles/
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
└── tsconfig.json
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Run the development server:
   ```
   npm run dev
   ```
4. Open your browser and visit `http://localhost:4321`

## Available Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the production-ready site
- `npm run preview`: Preview the built site locally
- `npm run astro`: Run Astro CLI commands

## Dependencies

- Astro
- Tailwind CSS
- MDX
- TypeScript
- Various utility libraries (class-variance-authority, clsx, tailwind-merge, etc.)

## Configuration

- Astro configuration is in `astro.config.mjs`
- Tailwind CSS configuration is in `tailwind.config.mjs`
- TypeScript configuration is in `tsconfig.json`

## Components

AstroStorm includes a variety of pre-built components to help you quickly create web pages:

### Section Components

- HeroSimpleCentered: A centered hero section
- HeroFullBottomLeft: A full-width hero section with content aligned to the bottom left
- SimpleStats: A section for displaying key statistics
- CenteredTwoByTwoFeature: A feature grid with a 2x2 layout
- TestimonialSimpleCentered: A centered testimonial section
- Faq: A frequently asked questions section

### UI Components

- LinkButton: A customizable button component that can act as a link

## License

This project is open-source and available under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

If you encounter any problems or have any questions, please open an issue in the GitHub repository.
