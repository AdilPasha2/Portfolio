# Adil Pasha - React Portfolio

A modern, responsive portfolio website built with React.js and Tailwind CSS, converted from the original HTML/CSS/JavaScript version.

## 🚀 Features

- **Modern React Architecture**: Component-based design with hooks and modern React patterns
- **Responsive Design**: Mobile-first approach with Tailwind CSS utilities
- **Interactive 3D Flip Cards**: Showcase projects with engaging flip animations
- **Smooth Animations**: Intersection Observer API for scroll-based animations
- **Professional Sections**: 
  - Hero section with typing animation
  - Skills categorization with hover effects
  - Project showcases with detailed flip cards
  - Experience timeline layout
  - Certifications grid
  - Contact form with validation
- **Accessibility**: ARIA labels and semantic HTML structure
- **Performance Optimized**: Built with Vite for fast development and building

## 🛠 Tech Stack

- **Frontend**: React.js 18+ with Hooks
- **Styling**: Tailwind CSS 3.3+
- **Build Tool**: Vite
- **Icons**: Font Awesome (React components)
- **Fonts**: Google Fonts (Poppins)
- **Development**: ESLint, PostCSS, Autoprefixer

## 📦 Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## 📱 Component Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation with mobile menu
│   ├── Hero.jsx            # Landing section with typing animation
│   ├── Skills.jsx          # Skills categorization
│   ├── FlipCard.jsx        # 3D flip card component
│   ├── Projects.jsx        # Projects showcase
│   ├── Experience.jsx      # Timeline layout
│   ├── Certifications.jsx  # Achievement cards
│   ├── ContactForm.jsx     # Contact form
│   └── Footer.jsx          # Footer section
├── App.jsx                 # Main app component
└── index.css              # Global styles with Tailwind
```

## 🎨 Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    500: '#f39c12', // Main orange
  },
  dark: {
    700: '#2c3e50', // Main dark background
  },
  accent: {
    500: '#3498db', // Main blue
  }
}
```

### Content
- **Personal Information**: Update `src/components/Hero.jsx`
- **Skills**: Modify `src/components/Skills.jsx`
- **Projects**: Update `src/components/Projects.jsx` with your project data
- **Experience**: Edit `src/components/Experience.jsx`
- **Certifications**: Update `src/components/Certifications.jsx`

---

Made with ❤️ by **Adil Pasha**
