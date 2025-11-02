// Get all images with lightbox attribute
        const images = document.querySelectorAll('[data-lightbox="true"]');
        const lightbox = document.getElementById('lightbox');
        const lightboxImage = document.getElementById('lightboxImage');
        const closeLightbox = document.getElementById('closeLightbox');
        
        // Add click event to each image
        images.forEach(img => {
            img.addEventListener('click', function() {
                lightboxImage.src = this.src;
                lightbox.classList.add('active');
            });
        });
        
        // Close lightbox when clicking close button
        closeLightbox.addEventListener('click', function() {
            lightbox.classList.remove('active');
        });
        
        // Close lightbox when clicking outside the image
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
            }
        });
        
        // Close lightbox with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                lightbox.classList.remove('active');
            }
        });