// main.js
document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector("nav");
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const dropdowns = document.querySelectorAll(".dropdown");

  // Scroll event untuk background navbar
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.style.background = "rgba(0, 0, 0, 0.95)";
    } else {
      nav.style.background = "rgba(0, 0, 0, 0.8)";
    }
  });

  // Hamburger menu toggle
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    navLinks.classList.toggle("nav-active");
    hamburger.classList.toggle("is-active");
  });

  // Dropdown functionality for both mobile and tablet
  dropdowns.forEach((dropdown) => {
    const toggle = dropdown.querySelector(".dropdown-toggle");
    const menu = dropdown.querySelector(".dropdown-menu");
    const arrow = toggle.querySelector(".bi-chevron-down");

    toggle.addEventListener("click", function (e) {
      // Untuk tablet dan mobile
      if (window.innerWidth <= 1024) {
        e.preventDefault();
        e.stopPropagation();

        // Tutup dropdown lain
        dropdowns.forEach((other) => {
          if (other !== dropdown) {
            other.classList.remove("touch-active");
            other.querySelector(".dropdown-menu").style.display = "none";
            other.querySelector(".bi-chevron-down").style.transform =
              "rotate(0)";
          }
        });

        // Toggle current dropdown
        dropdown.classList.toggle("touch-active");
        menu.style.display = menu.style.display === "block" ? "none" : "block";
        arrow.style.transform =
          menu.style.display === "block" ? "rotate(180deg)" : "rotate(0)";
      }
    });
  });

  // Tutup dropdown saat klik di luar
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".dropdown") && window.innerWidth <= 1024) {
      dropdowns.forEach((dropdown) => {
        dropdown.classList.remove("touch-active");
        dropdown.querySelector(".dropdown-menu").style.display = "none";
        dropdown.querySelector(".bi-chevron-down").style.transform =
          "rotate(0)";
      });
    }
  });
});
