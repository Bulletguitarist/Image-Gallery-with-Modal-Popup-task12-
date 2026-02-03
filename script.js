
// DOM SELECTION
const images = document.querySelectorAll(".gallery img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("closeBtn");

// OPEN MODAL ON IMAGE CLICK
images.forEach(image => {
    image.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = image.src;

        // Prevent background scrolling
        document.body.style.overflow = "hidden";
    });
});

// CLOSE MODAL
function closeModal() {
    modal.style.display = "none";
    modalImg.src = "";
    document.body.style.overflow = "auto";
}

// Close button click
closeBtn.addEventListener("click", closeModal);

// Click outside image closes modal
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// ESC key support
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeModal();
    }
});
