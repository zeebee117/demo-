# Institute of Digital Risk (IDR) — 3D Cube Risk Visualization

A futuristic, responsive single-page website for the **Institute of Digital Risk**, designed around a **3D cube risk visualization** concept. The site showcases IDR's academy, innovation & incubation, and advisory services in a modern, tech-forward aesthetic.

## 🎨 Design Concept

**"3D Cube Risk Visualization"** — The cube represents structured layers of digital risk management, cyber resilience, and controlled infrastructure within a chaotic digital environment. The design balances minimalist geometry with futuristic interactivity.

### Color Palette
- **Orange** (`#FF6A00`) — Primary accent, risk/energy
- **Black** (`#000000`) — Background depth
- **White** (`#FFFFFF`) — Text and highlights

### Design Style
- Geometric, minimalist aesthetic
- Dark theme with orange accents
- Tech institute authority
- 3D transforms and depth cues
- Smooth scroll animations & interactive hover effects

## ✨ Features

### Core Visuals
- **Animated 3D Cube** — Continuously rotating cube with volumetric depth, wireframe inner structure, and glow effects
- **Ambient Background** — Soft animated orange orbs creating depth and motion
- **Scroll Reveal Animations** — Staggered fade-up effects with blur transitions
- **Interactive Card Tilt** — Service model cards respond to mouse position with 3D perspective
- **Parallax Motion** — Hero section elements subtly shift with scroll
- **Dynamic Header State** — Navigation bar intensifies on scroll with backdrop blur

### Navigation
- Sticky header with smooth scrolling navigation
- Mobile/tablet hamburger menu with collapse animation
- Active section highlighting
- Home button scrolls to page top reliably
- Responsive menu closes on link click, outside click, or Escape key

### Sections
1. **Hero** — Headline, CTA buttons, rotating 3D cube
2. **About IDR** — Mission and values
3. **Service Model** — Three service cards (Academy, Innovation & Incubation, Advisory Services)
4. **Pipeline Visualization** — Train → Hire → Innovate → Deploy flow
5. **Community** — Description of target audience
6. **Contact** — Simple form with name, email, message

### Accessibility & Performance
- Semantic HTML5 structure
- ARIA labels and roles for accessibility
- `prefers-reduced-motion` support for users with motion sensitivity
- Optimized CSS and vanilla JavaScript (no frameworks)
- Smooth scroll-behavior for modern browsers
- Responsive breakpoints: `960px`, `840px`, `640px`, `420px`

## 🛠 Technology Stack

- **HTML5** — Semantic structure
- **CSS3** — Flexbox, CSS Grid, 3D transforms, CSS variables, animations
- **Vanilla JavaScript** — No jQuery or frameworks
- **Google Fonts** — Orbitron (geometric tech typography) + Space Grotesk (body)

## 📦 Project Structure

```
Internship/
├── index.html              # Main HTML file
├── styles.css              # Complete responsive styling
├── script.js               # Interactive behavior and animations
├── idr-logo-icon.svg       # Cube icon only (for favicon/utility)
├── idr-logo-full.svg       # Logo with text (for branding)
└── README.md               # This file
```

## 🚀 Getting Started

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/idr-website.git
   cd idr-website
   ```

2. No build process required! All files are static.

### Running Locally
Open `index.html` in a modern web browser:
- Double-click the file, or
- Use a local server for best results:
  ```bash
  # Python 3
  python -m http.server 8000
  
  # Python 2
  python -m SimpleHTTPServer 8000
  
  # Node.js (http-server)
  npx http-server
  ```

Then navigate to `http://localhost:8000` in your browser.

## 💻 Browser Support

- **Modern browsers** (Chrome, Firefox, Safari, Edge) with support for:
  - CSS 3D Transforms
  - CSS Grid & Flexbox
  - Intersection Observer API
  - CSS Custom Properties (variables)
  - Backdrop Filter

- **Mobile & Tablet**: iOS Safari 12+, Chrome Android 60+

## 📱 Responsive Design

The site is **100% responsive** across all device sizes:

| Breakpoint | Device Type | Behavior |
|-----------|------------|----------|
| `> 960px` | Desktop | Full 2-column hero, 3-column card grid, hover effects |
| `840–960px` | Tablet | 1-column hero, hamburger menu appears |
| `640–840px` | Medium phone | Compact navigation, adjusted typography |
| `< 420px` | Small phone | Minimal padding, stacked CTA buttons, scaled cube |

All visuals, text, and interaction patterns scale gracefully without media query hacks.

## 🎮 Interactive Elements

### Cube Animation
- Continuous rotation with varying angles
- Responds to mouse position with dynamic glow shadow
- Maintains 3D depth even during scroll animations
- Smaller sizes on mobile (240px → 210px → 176px → 154px)

### Scroll Interactions
- **Reveal animations:** Elements fade up and blur on enter viewport
- **Parallax:** Hero elements shift subtly with scroll depth
- **Header state:** Navbar background and border intensify when scrolled past 20px

### Menu & Navigation
- **Desktop:** Horizontal nav menu with hover glow
- **Mobile/Tablet:** Hamburger icon → dropdown panel with smooth overlay
- **Close behaviors:** Click outside, press Escape, link click, or resize window

### Card Hover (Desktop)
- Service model cards respond to mouse movement within bounds
- 3D rotation tilt effect based on pointer position
- Enhanced glow and lift on hover

## 🎯 Key Customization Points

### Colors
All colors are CSS variables in `:root`:
```css
--accent: #ff6a00;
--bg: #000000;
--text: #ffffff;
--glow: 0 0 22px rgba(255, 106, 0, 0.45);
```

### Typography
- Headings: Orbitron (geometric, tech aesthetic)
- Body: Space Grotesk (modern, readable)
- Load from Google Fonts in `<head>`

### Spacing & Max Width
```css
--max-width: 1160px;
```
Adjust section padding in `main section { padding: 5.2rem 1rem; }`

### Animations
- Cube spin: `12s linear infinite`
- Reveal fade: `0.75s cubic-bezier(0.2, 0.7, 0.2, 1)`
- Parallax depth: `screen.scrollY * 0.08` for hero-copy

## 📸 Logo Files

Two SVG logos are included:

1. **idr-logo-icon.svg** — Cube icon only (154×154px, scalable)
   - Use for favicon, avatar, or standalone mark
   
2. **idr-logo-full.svg** — Icon + text "INSTITUTE OF DIGITAL RISK" (720×180px)
   - Use for header branding or print materials

Both use the same orange/white color scheme and are inline-compatible in HTML.

## 🔧 Maintenance & Deployment

### To modify content:
1. Edit text in `index.html`
2. Update links in nav and footer
3. Adjust colors in `:root` variables in `styles.css`

### To deploy:
- Static site — works on any host (GitHub Pages, Netlify, Vercel, traditional hosting)
- No backend or build step required
- All assets are local (no external dependencies except Google Fonts)

### Performance tips:
- Google Fonts load via `preconnect` for speed
- CSS and JS are minimized and scoped
- No unused framework bloat
- Ambient background orbs use CSS animations (GPU-accelerated)

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## 📄 License

This project is open source. Please see the LICENSE file (if included) or specify your preferred license.

## 📧 Contact

**Institute of Digital Risk**
- Email: contact@idr.org
- Website: [IDR Homepage](./index.html)

---

**Built with:** HTML5 • CSS3 • Vanilla JavaScript • Google Fonts

**Last Updated:** March 2026
