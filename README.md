# Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, React Router, and Tailwind CSS. Showcases projects, skills, and provides a contact form for potential clients or employers.

## Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Modern UI**: Clean and professional design with smooth animations
- **React Router Navigation**: Seamless navigation between sections with smooth scrolling
- **Project Showcase**: Display your work with project cards featuring images, descriptions, and links
- **Contact Form**: Functional contact form with form validation
- **Social Media Integration**: Quick links to GitHub, LinkedIn, and other social profiles
- **SEO Optimized**: Semantic HTML and meta tags for better search engine visibility
- **Performance**: Fast loading times with optimized images and code

## Tech Stack

- **React 18.3**: Modern React with hooks
- **TypeScript**: Type-safe code
- **React Router DOM**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icons
- **Sonner**: Toast notifications
- **Vite**: Fast build tool and dev server

## SEO Optimization

### Meta Tags

Add to your `index.html`:

```html
<head>
  <meta name="description" content="Your Name - Full Stack Developer Portfolio">
  <meta name="keywords" content="web developer, react developer, portfolio, your name">
  <meta name="author" content="Your Name">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://yourwebsite.com/">
  <meta property="og:title" content="Your Name - Full Stack Developer">
  <meta property="og:description" content="Portfolio showcasing my web development projects">
  <meta property="og:image" content="https://yourwebsite.com/preview-image.jpg">

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://yourwebsite.com/">
  <meta property="twitter:title" content="Your Name - Full Stack Developer">
  <meta property="twitter:description" content="Portfolio showcasing my web development projects">
  <meta property="twitter:image" content="https://yourwebsite.com/preview-image.jpg">
</head>
```

### Sitemap

Create a `public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourwebsite.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

### robots.txt

Create a `public/robots.txt`:

```
User-agent: *
Allow: /
Sitemap: https://yourwebsite.com/sitemap.xml
```

## Performance Optimization

- Images are lazy-loaded using the `ImageWithFallback` component
- Code splitting with React.lazy (can be added for routes)
- Tailwind CSS purges unused styles in production
- Vite optimizes bundle size automatically

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is open source and available under the MIT License.

## Credits

- Icons by [Lucide](https://lucide.dev)
- Images from [Unsplash](https://unsplash.com)
- Built with [React](https://react.dev) and [Vite](https://vitejs.dev)

## Contact

For questions or suggestions, please reach out:
- Email: your.email@example.com
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- GitHub: [Your GitHub](https://github.com/yourusername)

---

**Made with ❤️ using React and Tailwind CSS**
