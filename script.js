// Sidebar toggle
const toggleBtn = document.getElementById("toggleBtn");
const sidebar = document.getElementById("sidebar");
const mainContent = document.querySelector(".main-content");

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    mainContent.classList.toggle("sidebar-hidden");
    toggleBtn.classList.toggle("sidebar-hidden");
  });
}

// Home page popup
window.addEventListener("load", () => {
  const path = window.location.pathname;
  if (path.endsWith("index.html") || path === "/") {
    alert("Welcome to the Home Page!");
  }
});

// Contact form mailto
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:evan08acharya@gmail.com?subject=${subject}&body=${body}`;
  });
}

// Project page continuous carousel scroll
if (window.location.pathname.endsWith("project.html")) {
  const track = document.querySelector(".carousel-track");
  if (track) {
    // Duplicate slides for seamless scroll
    const slides = Array.from(track.children);
    slides.forEach(slide => {
      const clone = slide.cloneNode(true);
      track.appendChild(clone);
    });

    let xOffset = 0;
    const speed = 0.5; // adjust scroll speed

    function scrollCarousel() {
      xOffset += speed;
      if (xOffset >= track.scrollWidth / 2) { // reset after half width
        xOffset = 0;
      }
      track.style.transform = `translateX(-${xOffset}px)`;
      requestAnimationFrame(scrollCarousel);
    }

    // Pause on hover
    track.addEventListener("mouseenter", () => paused = true);
    track.addEventListener("mouseleave", () => paused = false);

    scrollCarousel();
  }
}
