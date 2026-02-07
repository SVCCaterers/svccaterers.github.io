// JS/script.js
document.addEventListener("DOMContentLoaded", function() {
  function startLogoRotation() {
    const logo = document.getElementById("rotating-logo");
    if (!logo) {
      // Retry after a short delay if header not yet injected
      setTimeout(startLogoRotation, 500);
      return;
    }

    const logos = ["images/logo1.jpeg", "images/logo2.jpeg"];
    let index = 0;

    setInterval(() => {
      index = (index + 1) % logos.length;
      logo.src = logos[index];
      console.log("Logo changed to:", logo.src); // debug log
    }, 5000);
  }

  startLogoRotation();
});
// Array of image paths
const galleryImages = [
  "images/pic1.jpg",
  "images/pic2.jpg",
  "images/pic3.jpg",
  "images/pic4.jpg"
];

let currentIndex = 0;
const galleryElement = document.getElementById("gallery-image");

// Function to show image at current index
function showImage(index) {
  galleryElement.src = galleryImages[index];
}

// Auto rotation
function autoRotate() {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  showImage(currentIndex);
}
setInterval(autoRotate, 5000); // every 5 seconds

// Manual controls
function nextImage() {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  showImage(currentIndex);
}

