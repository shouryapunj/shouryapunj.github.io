
// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark', themeToggle.checked);
});

// Scroll Spy for active nav links
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-links a[href^='#']");

window.addEventListener("scroll", () => {
  let currentSectionId = "";

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const offset = rect.top;

    if (offset <= window.innerHeight / 2 && offset + rect.height > window.innerHeight / 2) {
      currentSectionId = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSectionId}`) {
      link.classList.add("active");
    }
  });
});



// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Rotating hero phrases
const rotatingText = document.getElementById("rotating-text");
const phrases = [
  "I build engineering solutions that turn code into cashflow",
  "I write code that solves real business problems",
  "I create engineering marvels using AI & automation",
  "I turn complexity into clean, scalable software"
];

let phraseIndex = 0;
function rotateText() {
  rotatingText.classList.remove("fade-in");
  setTimeout(() => {
    rotatingText.textContent = phrases[phraseIndex];
    rotatingText.classList.add("fade-in");
    phraseIndex = (phraseIndex + 1) % phrases.length;
  }, 300);
}
setInterval(rotateText, 2500);
rotateText();

document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon")?.querySelector("i");
  
    function updateThemeIcon() {
      if (!themeIcon) return;
      if (document.body.classList.contains("dark")) {
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
      } else {
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
      }
    }
  
    themeToggle?.addEventListener("change", () => {
      document.body.classList.toggle("dark", themeToggle.checked);
      updateThemeIcon();
    });
  
    updateThemeIcon();
  
// Maze animation logic
function generateMaze(container, pattern = 'snake') {
  const rows = 10;
  const cols = 10;
  container.innerHTML = "";
  const pathOrder = [];

  for (let row = 0; row < rows; row++) {
    if (row % 2 === 0) {
      for (let col = 0; col < cols; col++) {
        pathOrder.push(row * cols + col);
      }
    } else {
      for (let col = cols - 1; col >= 0; col--) {
        pathOrder.push(row * cols + col);
      }
    }
  }

  for (let i = 0; i < rows * cols; i++) {
    const cell = document.createElement("div");

    if (pathOrder.includes(i)) {
      cell.classList.add("path");
      cell.style.setProperty('--delay', `${pathOrder.indexOf(i) * 0.05}s`);
    } else {
      cell.classList.add("wall");
    }

    container.appendChild(cell);
  }
}

const maze1 = document.querySelector('.maze-animation');
if (maze1) generateMaze(maze1, 'snake');
setInterval(() => {
  if (maze1) generateMaze(maze1, 'snake');
}, 6000);


  });
  