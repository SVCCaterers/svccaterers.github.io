// JS/script.js
document.addEventListener("DOMContentLoaded", function() {
  const logo = document.getElementById("rotating-logo");
  if (!logo) return;

  const logos = ["images/logo1.png", "images/logo2.png"];
  let index = 0;

  setInterval(() => {
    index = (index + 1) % logos.length;
    logo.src = logos[index];
  }, 5000); // switch logo image every 5 seconds
});
