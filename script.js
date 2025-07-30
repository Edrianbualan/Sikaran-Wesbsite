// Button click SFX
document.addEventListener("DOMContentLoaded", () => {
  const clickSound = document.getElementById("click-sound");

  const clickableElements = document.querySelectorAll("button, .cta-button, .nav-links a");
  clickableElements.forEach(el => {
    el.addEventListener("click", () => {
      if (clickSound) {
        clickSound.currentTime = 0;
        clickSound.play().catch(() => {
          // Autoplay blocked until user interacts with page
        });
      }
    });
  });

  // Toggle mobile nav menu
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }
});

// Scroll instructor cards left or right
function scrollInstructors(direction) {
  const scrollContainer = document.getElementById("instructor-scroll");
  const scrollAmount = 300;

  if (scrollContainer) {
    scrollContainer.scrollBy({
      left: direction * scrollAmount,
      behavior: "smooth"
    });
  }
}