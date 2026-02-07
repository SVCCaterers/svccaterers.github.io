// =====================
// Rotating Logo Section
// =====================
const logoImages = ["images/logo1.jpeg", "images/logo2.jpeg"];
let logoIndex = 0;

function rotateLogo() {
  const logoElement = document.getElementById("rotating-logo");
  if (logoElement) {
    logoIndex = (logoIndex + 1) % logoImages.length;
    logoElement.src = logoImages[logoIndex];
  }
}
setInterval(rotateLogo, 5000); // rotate logo every 5 seconds

// =====================
// Image Gallery Section
// =====================
// Build array dynamically for 13 images (pic1.jpg ... pic13.jpg)
const galleryImages = [];
for (let i = 1; i <= 13; i++) {
  galleryImages.push(`images/pic${i}.jpg`);
}

let currentIndex = 0;
const galleryElement = document.getElementById("gallery-image");

// Show image at current index
function showImage(index) {
  if (galleryElement) {
    galleryElement.src = galleryImages[index];
  }
}

// Auto rotation
function autoRotateGallery() {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  showImage(currentIndex);
}
setInterval(autoRotateGallery, 5000); // rotate gallery every 5 seconds

// Manual controls
function nextImage() {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  showImage(currentIndex);
}
