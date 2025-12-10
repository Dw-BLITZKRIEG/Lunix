// --- TOGGLE MENU ---
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("mobile-controls");

toggle.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

// --- BUTTON ACTIONS (TEST MODE) ---
document.getElementById("fire-btn").addEventListener("click", () => {
    console.log("FIRE BUTTON PRESSED");
});
document.getElementById("ability-btn").addEventListener("click", () => {
    console.log("E BUTTON PRESSED");
    this.talk("t", 1);
});
document.getElementById("auto-btn").addEventListener("click", () => {
    console.log("C BUTTON PRESSED");
});
