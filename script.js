 // Get all images with lightbox class
        const images = document.querySelectorAll('.lightbox');
        const lightbox = document.getElementById('lightbox');
        const lightboxContainer = document.getElementById('lightboxContainer');
        const closeLightbox = document.getElementById('closeLightbox');
        
        // Add click event to each image
        images.forEach(img => {
            img.addEventListener('click', function() {
                // Create image element dynamically
                lightboxContainer.innerHTML = '<img src="' + this.src + '" alt="Lightbox view" class="lightbox-image" id="lightboxImage">';
                lightbox.classList.add('active');
            });
        });
        
        // Close lightbox when clicking close button
        closeLightbox.addEventListener('click', function() {
            lightbox.classList.remove('active');
            // Remove image after closing
            setTimeout(() => {
                lightboxContainer.innerHTML = '';
            }, 300);
        });
        
        // Close lightbox when clicking outside the image
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
                setTimeout(() => {
                    lightboxContainer.innerHTML = '';
                }, 300);
            }
        });
        
        // Close lightbox with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                lightbox.classList.remove('active');
                setTimeout(() => {
                    lightboxContainer.innerHTML = '';
                }, 300);
            }
        });