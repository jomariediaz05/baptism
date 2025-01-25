// Create floating stars
function createStars() {
  const body = document.body;
  const starCount = 50;

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.cssText = `
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 60}%;
            animation-delay: ${Math.random() * 3}s;
            opacity: ${Math.random()};
        `;
    body.appendChild(star);
  }
}

// Create floating clouds
function createClouds() {
  const body = document.body;
  const cloudCount = 3;

  for (let i = 0; i < cloudCount; i++) {
    const cloud = document.createElement("div");
    cloud.className = `cloud cloud-${i + 1}`;
    cloud.style.left = `${Math.random() * 100}%`;
    cloud.style.animationDelay = `${-Math.random() * 20}s`;
    body.appendChild(cloud);
  }
}

// Add this function
function createWatercolorEffect() {
  const overlay = document.querySelector(".watercolor-overlay");
  let position = 0;

  function animate() {
    position += 0.2;
    overlay.style.backgroundPosition = `${position}px ${position}px`;
    requestAnimationFrame(animate);
  }

  animate();
}

// Parallax effect for event details section
function handleParallax() {
  const parallaxBg = document.querySelector(".parallax-bg");

  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    parallaxBg.style.transform = `translateY(${scrolled * 0.5}px)`;
  });
}

// Photo Gallery Lightbox
let currentImageIndex = 0;
const galleryImages = [
    'images/gallery/photo1.jpg',
    'images/gallery/photo2.jpg',
    'images/gallery/photo3.jpg',
    'images/gallery/photo4.jpg'
];

function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    lightbox.style.display = 'block';
    lightboxImg.src = galleryImages[currentImageIndex];
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function changeImage(direction) {
    currentImageIndex = (currentImageIndex + direction + galleryImages.length) % galleryImages.length;
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = galleryImages[currentImageIndex];
}

// Close lightbox when clicking outside the image
document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this) {
        closeLightbox();
    }
});

// Keyboard navigation for lightbox
document.addEventListener('keydown', function(e) {
    if (document.getElementById('lightbox').style.display === 'block') {
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowLeft') {
            changeImage(-1);
        } else if (e.key === 'ArrowRight') {
            changeImage(1);
        }
    }
});

// Add animation for elements when page loads
document.addEventListener("DOMContentLoaded", () => {
  createClouds();
  createStars();
  createWatercolorEffect();
  handleParallax();

  // Add fade-in animation to main elements
  const elements = document.querySelectorAll("h1, h2, h3, .photo-frame");
  elements.forEach((element, index) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "all 0.5s ease";

    setTimeout(() => {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }, 200 * index);
  });
});
