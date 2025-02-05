document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.querySelector(".login-btn");
    loginBtn.addEventListener("click", () => {
        alert("Login functionality coming soon!");
    });

    const ctaBtn = document.querySelector(".cta-btn");
    ctaBtn.addEventListener("click", () => {
        alert("Get ready for the future of cloud gaming!");
    });

    const gameImages = document.querySelectorAll(".game-images img");
    gameImages.forEach(img => {
        img.addEventListener("mouseover", () => {
            img.style.transform = "scale(1.1)";
            img.style.transition = "transform 0.3s ease-in-out";
        });
        img.addEventListener("mouseout", () => {
            img.style.transform = "scale(1)";
        });
    });
});