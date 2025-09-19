const contactSection = document.getElementById("contact-section");
const scrollUpBtn = document.getElementById("scrollUp");

// Download only — don't show/hide anything
document.getElementById("dow").addEventListener("click", () => {
    const link = document.createElement('a');
    link.href = 'Hashir_Minhas_CV.txt'; // Must exist in the project folder
    link.download = 'Hashir_Minhas_CV.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// Show contact section and scroll to it
document.getElementById("let").addEventListener("click", () => {
    contactSection.style.display = "block";
    contactSection.scrollIntoView({ behavior: "smooth" });
});

// Scroll up button visibility
window.addEventListener("scroll", () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    if (window.scrollY > scrollable - 100) {
        scrollUpBtn.style.display = "block";
    } else if (window.scrollY < 100) {
        scrollUpBtn.style.display = "none";
    }
});

// Scroll to top
scrollUpBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
