
// --- MOBCONTROLS.JS ---

document.addEventListener("DOMContentLoaded", () => {

    // --- TOGGLE MENU ---
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("mobile-controls");

    if (toggle && menu) {
        toggle.addEventListener("click", () => {
            menu.classList.toggle("hidden");
        });
    }

    // --- BUTTONS ---
    const buttons = [
        { id: "auto-btn", action: "AUTO_FIRE" },
        { id: "spin-btn", action: "AUTO_SPIN" }
    ];

    buttons.forEach(btnData => {
        const btn = document.getElementById(btnData.id);
        if (!btn) return; // skip if button doesn't exist

        // prevent button from stealing focus
        btn.addEventListener("mousedown", e => e.preventDefault());

        // set mobileAction when clicked
        btn.addEventListener("click", () => {
            window.mobileAction = btnData.action;
        });
    });

});










/*
document.getElementById("auto-btn").onclick = () => {
    window.mobileAction = "AUTO_FIRE";
    document.dispatchEvent(new KeyboardEvent("keydown", { keyCode: 0 })); // just to trigger the handler
};

document.getElementById("spin-btn").onclick = () => {
    window.mobileAction = "AUTO_SPIN";
    document.dispatchEvent(new KeyboardEvent("keydown", { keyCode: 0 }));
};
*/