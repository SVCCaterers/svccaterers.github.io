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
