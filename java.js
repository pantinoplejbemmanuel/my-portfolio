onst menu = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Mobile navigation menu
const menuButton = document.createElement("button");
menuButton.textContent = "☰";
menuButton.className = "menu-button";
menuButton.style.display = "none";

nav.appendChild(menuButton);

menuButton.addEventListener("click", function () {
    menu.classList.toggle("show");
});

// Close menu after clicking a link
document.querySelectorAll("nav ul a").forEach(function (link) {
    link.addEventListener("click", function () {
        menu.classList.remove("show");
    });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
        const target = document.querySelector(link.getAttribute("href"));

        if (target) {
            event.preventDefault();
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Reveal sections when scrolling
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, {
    threshold: 0.15
});

sections.forEach(function (section) {
    observer.observe(section);
});

// Update footer year
const footer = document.querySelector("footer p");

if (footer) {
    footer.textContent = "© " + new Date().getFullYear() +
        " JB Emmanuel | BSIT Portfolio";
}