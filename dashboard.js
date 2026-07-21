// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.querySelector(".sidebar");
const overlay = document.getElementById("overlay");

// Change icon
menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (sidebar.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
    } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
    }
});

// Overlay Click Close
overlay.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");

    const icon = menuToggle.querySelector("i");
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
});

// Page Switch
const menuItems = document.querySelectorAll(".menu");
const pages = document.querySelectorAll(".page");

menuItems.forEach(item => {
    item.addEventListener("click", () => {

        // Active Menu
        menuItems.forEach(m => m.classList.remove("active"));
        item.classList.add("active");

        // Hide All Pages
        pages.forEach(page => {
            page.style.display = "none";
        });

        // Show Selected Page
        const pageId = item.getAttribute("data-page");
        document.getElementById(pageId).style.display = "block";

        // Mobile Auto Close
        if (window.innerWidth <= 768) {
            sidebar.classList.remove("active");
            overlay.classList.remove("active");

            const icon = menuToggle.querySelector("i");
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }
    });
});

// Default Page
pages.forEach(page => {
    page.style.display = "none";
});

document.getElementById("home").style.display = "block";