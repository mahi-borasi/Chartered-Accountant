  function toggleMenu() {
    const nav = document.getElementById("navLinks");
    const hamburger = document.getElementById("hamburgerIcon");
    const closeIcon = document.getElementById("closeIcon");

    nav.classList.toggle("show");

    if (nav.classList.contains("show")) {
      hamburger.style.display = "none";
      closeIcon.style.display = "block";
    } else {
      hamburger.style.display = "block";
      closeIcon.style.display = "none";
    }
  }

 