// --- Inicializações ---
AOS.init({
  duration: 1200,
  easing: "ease-out-back",
  once: true,
});

document.addEventListener("DOMContentLoaded", function () {
  // --- Dark Mode Logic ---
  const themeToggleBtn = document.getElementById("theme-toggle");
  const themeToggleIcon = themeToggleBtn
    ? themeToggleBtn.querySelector("i")
    : null;
  const htmlElement = document.documentElement;

  // Check local storage
  if (localStorage.getItem("theme") === "dark") {
    htmlElement.classList.add("dark");
    if (themeToggleIcon) themeToggleIcon.classList.replace("fa-sun", "fa-moon");
  } else {
    htmlElement.classList.remove("dark");
    if (themeToggleIcon) themeToggleIcon.classList.replace("fa-moon", "fa-sun");
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", () => {
      htmlElement.classList.toggle("dark");
      if (htmlElement.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        if (themeToggleIcon)
          themeToggleIcon.classList.replace("fa-sun", "fa-moon");
      } else {
        localStorage.setItem("theme", "light");
        if (themeToggleIcon)
          themeToggleIcon.classList.replace("fa-moon", "fa-sun");
      }
    });
  }

  // Lógica para o ano atual no footer
  const currentYearFull = document.getElementById("current-year-full");
  if (currentYearFull) {
    currentYearFull.textContent = new Date().getFullYear();
  }

  // Lógica para o menu móvel
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
    });

    // Fechar menu ao clicar em um link (Melhoria de UX)
    const mobileLinks = mobileMenu.querySelectorAll("a");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  }

  // Animação da barra de navegação ao rolar
  const nav = document.querySelector("nav");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.classList.add("shadow-lg");
    } else {
      nav.classList.remove("shadow-lg");
    }
  });

  // Back to top button
  const backToTopButton = document.getElementById("back-to-top");
  if (backToTopButton) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopButton.classList.remove("hidden");
      } else {
        backToTopButton.classList.add("hidden");
      }
    });
  }

  // Typing effect
  const typed = new Typed("#typed-text", {
    strings: ["Luciano", "Desenvolvedor Full Stack"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
  });
});


