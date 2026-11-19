
// MOBILE NAVIGATION

function toggleMenu() {
    const navigation = document.getElementById("navigation");

    if (navigation) {
        navigation.classList.toggle("active");
    }
}

// CLOSE ANNOUNCEMENT

function closeAnnouncement() {
    const announcement = document.getElementById("announcement");

    if (announcement) {
        announcement.classList.add("hidden");
    }
}

// HOMEPAGE IMAGE CAROUSEL

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll(".carousel-slide");
    const dots = document.querySelectorAll(".dot");

    if (!slides.length) return;

    currentSlide = (index + slides.length) % slides.length;

    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[currentSlide].classList.add("active");

    if (dots[currentSlide]) {
        dots[currentSlide].classList.add("active");
    }
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

function goToSlide(index) {
    showSlide(index);
}

// MENU CATEGORY TABS

const menuTabs = document.querySelectorAll(".menu-tab");
const menuContents = document.querySelectorAll(".menu-content");

menuTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const selectedMenu = tab.dataset.menu;

        menuTabs.forEach(button => {
            button.classList.remove("active");
        });

        menuContents.forEach(content => {
            content.classList.remove("active");
        });

        tab.classList.add("active");

        const selectedContent = document.getElementById(selectedMenu);

        if (selectedContent) {
            selectedContent.classList.add("active");
        }

        // Return to the menu heading when changing categories
        document.querySelector(".menu-tabs").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});
