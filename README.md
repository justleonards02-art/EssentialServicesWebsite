# Essential Services Website

A professional, fully responsive website for an essential services business (plumbing, electrical, HVAC).

## 🌟 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Interactive Elements** - Gallery filters, FAQ accordion, form validation
- **Service Showcases** - Separate pages for residential and commercial services
- **Customer Reviews** - Testimonials section with 5-star ratings
- **Pricing Information** - Transparent pricing with maintenance plan options
- **Contact Forms** - Professional inquiry and quote request forms
- **Mobile Navigation** - Hamburger menu for mobile devices
- **Smooth Scrolling** - Polished user interactions throughout
- **SEO Friendly** - Semantic HTML structure

## 📄 Pages

1. **Home** (`index.html`) - Main landing page with hero section and service overview
2. **About** (`about.html`) - Company story, team, and achievements
3. **Residential** (`residential.html`) - Residential services and benefits
4. **Commercial** (`commercial.html`) - Commercial services and industries served
5. **Pricing** (`pricing.html`) - Service pricing and maintenance plans
6. **Gallery** (`gallery.html`) - Project showcase with filtering
7. **Reviews** (`reviews.html`) - Customer testimonials
8. **FAQ** (`faq.html`) - Frequently asked questions
9. **Contact** (`contact.html`) - Contact form and business information

## 📁 Project Structure

```
EssentialServicesWebsite/
├── index.html              # Home page
├── about.html              # About page
├── residential.html        # Residential services
├── commercial.html         # Commercial services
├── pricing.html            # Pricing and plans
├── gallery.html            # Project gallery
├── reviews.html            # Customer reviews
├── faq.html                # FAQ
├── contact.html            # Contact form
│
├── css/
│   ├── style.css           # Main styles (850+ lines)
│   ├── animations.css      # Animations and transitions
│   └── responsive.css      # Mobile responsive design
│
├── js/
│   ├── script.js           # Main interactive features
│   ├── gallery.js          # Gallery filtering
│   └── quote-form.js       # Form validation
│
├── images/
│   ├── logo.png            # Business logo
│   ├── hero.jpg            # Hero image
│   ├── team.jpg            # Team photo
│   └── gallery/            # Project gallery images
│
├── assets/
│   ├── icons/              # Custom icons
│   └── fonts/              # Custom fonts
│
└── README.md               # This file
```

## 🛠 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations and transitions
- **JavaScript (ES6+)** - Interactive features and form handling
- **Responsive Design** - Mobile-first approach
- **IntersectionObserver API** - Lazy loading and scroll animations

## ✨ Interactive Features

### Responsive Design
- Mobile first approach
- Tablet and desktop optimized layouts
- Hamburger menu for mobile navigation
- Touch-friendly buttons and forms
- Works on all modern browsers

### Interactive Components
- **Gallery** - Category filtering with smooth animations
- **FAQ** - Expandable accordion items
- **Form Validation** - Real-time field validation with error messages
- **Smooth Scrolling** - Animations trigger on scroll
- **Counter Animations** - Stats count up on page scroll
- **Mobile Menu** - Responsive navigation toggle
- **Scroll to Top** - Floating button that appears on scroll

### Performance Optimizations
- Optimized images
- Lazy loading support
- Minimal dependencies (vanilla JavaScript)
- CSS animations for smooth transitions
- SEO-friendly structure

## 🎨 Customization

### Colors
Edit the CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #2563eb;      /* Blue */
    --secondary-color: #059669;    /* Green */
    --accent-color: #f59e0b;       /* Amber */
    --dark-color: #1f2937;         /* Dark Gray */
    --light-color: #f9fafb;        /* Light Gray */
}
```

### Content Updates

1. **Business Information**
   - Phone: Replace `(555) 123-4567` throughout
   - Email: Update `info@essentialservices.com`
   - Address: Modify `123 Service Avenue, Your City, State 12345`

2. **Service Descriptions**
   - Edit service details on respective pages
   - Update pricing in `pricing.html`
   - Modify team member information in `about.html`

3. **Images**
   - Replace `logo.png` with your business logo
   - Update `hero.jpg` with your hero image
   - Add team photos
   - Include project gallery images

4. **Social Media Links**
   - Update Facebook, Twitter, LinkedIn links in footer
   - Replace `#` with actual profile URLs

## 📱 Responsive Breakpoints

- **Mobile**: 480px and below
- **Tablet**: 481px - 768px
- **Desktop**: 769px - 1399px
- **Large Desktop**: 1400px and above

## 🚀 Getting Started

### Quick Setup

1. **Clone or download the repository**
   ```bash
   git clone <repository-url>
   cd EssentialServicesWebsite
   ```

2. **Update placeholder content**
   - Edit all HTML files with your business information
   - Replace images in the `images/` folder
   - Update contact details throughout

3. **Test the website**
   - Open `index.html` in your browser
   - Test all pages and interactive features
   - Check responsiveness on mobile devices

4. **Deploy to hosting**
   - Upload all files to your web hosting service
   - Ensure all file paths are correct
   - Test live website functionality

### Setting Up Forms

The contact form currently shows a success message client-side. To collect actual submissions:

1. **Use a service like Formspree**
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

2. **Use EmailJS** for client-side form handling

3. **Set up server-side processing** with PHP, Node.js, etc.

### Adding Google Maps

Add an embedded map to the contact page:
```html
<iframe src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE" 
        width="100%" height="400" style="border:0;" allowfullscreen="" 
        loading="lazy" referrerpolicy="no-referrer-when-downgrade">
</iframe>
```

## 📊 SEO Optimization

Add meta tags to `<head>` of each page:
```html
<meta name="description" content="Professional plumbing, electrical, and HVAC services...">
<meta name="keywords" content="plumbing, electrical, HVAC, services...">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ✅ Internet Explorer 11 (basic support)

## 📈 Performance Tips

1. **Optimize images** - Compress images before uploading
2. **Use CDN** - Serve static files from a content delivery network
3. **Enable GZIP** - Compress files on server
4. **Minify CSS/JS** - Use tools to minimize file sizes
5. **Enable caching** - Set proper cache headers
6. **Lazy load images** - Use `loading="lazy"` attribute

## 🔧 Troubleshooting

### Mobile menu not closing
- Check if JavaScript files are loaded
- Verify hamburger and nav-menu selectors match HTML

### Forms not submitting
- Add proper form handler (Formspree, EmailJS, etc.)
- Check browser console for JavaScript errors
- Verify form action attribute

### Images not showing
- Check image file paths
- Verify image files exist in `images/` folder
- Use relative paths: `images/logo.png`

### Styling issues
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Verify CSS files are linked correctly
- Check for CSS conflicts

## 📝 File Sizes

- `css/style.css` - ~850 lines
- `css/animations.css` - ~200 lines
- `css/responsive.css` - ~400 lines
- `js/script.js` - ~250 lines
- `js/gallery.js` - ~100 lines
- `js/quote-form.js` - ~150 lines

## 🎓 Learning Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [Web.dev](https://web.dev/)
- [JavaScript.info](https://javascript.info/)

## 📞 Support

For questions or issues:
1. Check the FAQ page
2. Review inline code comments
3. Consult web development documentation
4. Contact a web developer

## 📄 License

This website template is free to use and modify for your business.

## 🎯 Next Steps

1. ✅ Update all placeholder content
2. ✅ Replace images with your own
3. ✅ Set up form handling
4. ✅ Add Google Analytics
5. ✅ Optimize for search engines
6. ✅ Test on all devices
7. ✅ Deploy to production

---

**Ready to launch your professional online presence?** Start by updating the placeholder content and customize the design to match your brand!
