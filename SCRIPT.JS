const menuBtn = document.getElementById("menuBtn");
const navigation = document.getElementById("navigation");
const architectBtn = document.getElementById("architectBtn");
const message = document.getElementById("message");


// Mobile navigation
menuBtn.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("show");

    if (isOpen) {
        navigation.style.display = "flex";
        navigation.style.flexDirection = "column";
        navigation.style.position = "absolute";
        navigation.style.top = "70px";
        navigation.style.right = "5%";
        navigation.style.padding = "1rem";
        navigation.style.background = "#332b27";
    } else {
        navigation.style.display = "";
    }
});


// CTA interaction
architectBtn.addEventListener("click", () => {
    message.textContent = "Great! Your architecture starts with a strong foundation.";
});


// Close mobile menu after clicking a link
const navLinks = document.querySelectorAll(".navigation a");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navigation.classList.remove("show");
        navigation.style.display = "";
    });
});