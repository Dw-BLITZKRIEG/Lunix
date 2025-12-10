// --- TOGGLE MENU ---
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("mobile-controls");

toggle.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

document.getElementById("auto-btn").onclick = () => {
    window.mobileAction = "AUTO_FIRE";
    document.dispatchEvent(new KeyboardEvent("keydown", { keyCode: 0 })); // just to trigger the handler
};

document.getElementById("spin-btn").onclick = () => {
    window.mobileAction = "AUTO_SPIN";
    document.dispatchEvent(new KeyboardEvent("keydown", { keyCode: 0 }));
};
