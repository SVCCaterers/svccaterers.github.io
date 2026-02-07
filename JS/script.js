// JS/script.js
document.addEventListener("DOMContentLoaded", function() {
  const logo = document.getElementById("rotating-logo");
  if (!logo) return;

  const logos = ["images/logo1.jpeg", "images/logo2.jpeg"];
  let index = 0;

  setInterval(() => {
    index = (index + 1) % logos.length;
    logo.src = logos[index];
  }, 5000); // switch every 5 seconds

});
