

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const navbarToggler = document.querySelector(".navbar-toggler");

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.getComputedStyle(navbarToggler).display !== "none") {
          navbarToggler.click();
        }
      });
    });
  });