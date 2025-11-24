# ClientGrowth

A sophisticated, animated client showcase component that brings success stories to life through smooth card interactions, elegant hover effects, and seamless horizontal scrolling. Perfect for displaying client case studies with professional elegance.

## Live Demo

https://thisislefa.github.io/ClientGrowth

## Features

- **Interactive Card Slider**: Horizontal scrolling with smooth animations and custom navigation
- **Elegant Hover Effects**: Cards expand to reveal detailed content with delayed animations
- **Modern Typography**: Combines Inter and Playfair Display fonts for visual hierarchy
- **Responsive Design**: Adapts beautifully from desktop to mobile devices
- **Custom Navigation**: Stylish circular buttons with hover effects and smooth scrolling
- **Performance Optimized**: Lightweight implementation with pure CSS and JavaScript
- **Accessibility**: Full keyboard navigation and ARIA labels
- **Image Optimization**: Smooth zoom effects and proper aspect ratios

## Tech Stack

- **HTML5** - Semantic markup with clean structure
- **CSS3** - Flexbox, transitions, and custom properties
- **JavaScript** - ES6+ with smooth scrolling functionality
- **Google Fonts** - Inter and Playfair Display font families
- **SVG Icons** - Custom arrow icons for navigation

## Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/thisislefa/ClientGrowth.git
   cd client-growth-component
   ```

2. **Open in browser**
   ```bash
   open index.html
   ```

## Project Structure

```
client-growth-component/
├── index.html          # Main HTML structure
├── style.css           # All styles and responsive design
├── script.js           # Slider navigation functionality
└── README.md           # Project documentation
```

## Usage

### Basic Integration
Include the component in your project by copying the HTML structure and linking the CSS/JS files:

```html
<link rel="stylesheet" href="style.css">
<script src="script.js"></script>
```

### Adding New Cards
Extend the slider by adding new card elements:

```html
<article class="cg-card">
    <img src="path/to/image.jpg" alt="Project description" class="cg-card-bg">
    <div class="cg-content-box">
        <h3 class="cg-card-title">Project Title</h3>
        <div class="cg-details">
            <p class="cg-card-desc">Project description and results.</p>
            <a href="#" class="cg-btn">
                Read More
                <span class="cg-btn-icon">
                    <!-- SVG arrow icon -->
                </span>
            </a>
        </div>
    </div>
</article>
```

## Customization

### Colors
- Primary Blue: `#2b26c7`
- Background: `#fcfcfb`
- Text: `#111` / `#555`
- Navigation Buttons: `#f0f0f0`

### Typography
- Headers: Playfair Display (italic)
- Body: Inter (300, 400, 500, 600 weights)

### Dimensions
- Card Size: 400px × 500px (desktop), 320px × 420px (mobile)
- Scroll Amount: 424px per navigation click

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Responsive Breakpoints

- Desktop: 901px and above
- Tablet/Mobile: 900px and below

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

MIT License

Copyright (c) 2025 Lefa Mofokeng

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Author

- GitHub: https://github.com/thisislefa.
- Portfolio: https://thisislefa.github.io/portfolio

## Acknowledgments

- Images from Unsplash and Pexels
- Fonts from Google Fonts
- Icons from Feather Icons


