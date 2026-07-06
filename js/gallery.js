/* Gallery JavaScript */

// Gallery filter functionality
class GalleryFilter {
    constructor() {
        this.filterBtns = document.querySelectorAll('.filter-btn');
        this.galleryItems = document.querySelectorAll('.gallery-item');
        this.init();
    }

    init() {
        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => this.filterGallery(e));
        });
    }

    filterGallery(e) {
        const filterValue = e.target.dataset.filter || 'all';
        
        // Update active button
        this.filterBtns.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');

        // Filter items with animation
        this.galleryItems.forEach(item => {
            const itemCategory = item.dataset.category;
            
            if (filterValue === 'all' || itemCategory === filterValue) {
                item.style.display = 'grid';
                item.style.animation = 'fadeIn 0.3s ease';
            } else {
                item.style.display = 'none';
            }
        });
    }
}

// Initialize gallery on page load
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.filter-btn')) {
        new GalleryFilter();
    }
});

// Lightbox functionality (optional enhancement)
function openLightbox(imageSrc) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
    `;

    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '✕';
    closeBtn.style.cssText = `
        position: absolute;
        top: 20px;
        right: 30px;
        background: white;
        border: none;
        font-size: 2rem;
        cursor: pointer;
        width: 50px;
        height: 50px;
        border-radius: 50%;
    `;

    const img = document.createElement('img');
    img.src = imageSrc;
    img.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        border-radius: 10px;
    `;

    lightbox.appendChild(img);
    lightbox.appendChild(closeBtn);
    document.body.appendChild(lightbox);

    closeBtn.addEventListener('click', () => {
        lightbox.remove();
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.remove();
        }
    });
}

// Add click handlers to gallery items
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        const imageSrc = this.querySelector('.gallery-image').textContent;
        // openLightbox(imageSrc); // Uncomment if using real images
    });
    
    // Add hover effect
    item.style.cursor = 'pointer';
});

console.log('Gallery functionality loaded!');