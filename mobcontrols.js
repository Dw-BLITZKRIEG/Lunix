document.addEventListener("DOMContentLoaded", () => {

    const canvas = document.getElementById("gameCanvas");

    // Auto Fire button
    const autoBtn = document.getElementById("auto-btn");
    if (autoBtn) {
        autoBtn.addEventListener("mousedown", e => e.preventDefault());
        autoBtn.addEventListener("click", () => {
            window.mobileAction = "AUTO_FIRE";
            if (canvas) canvas.focus(); // keep game active
        });
    }

    // Auto Spin button
    const spinBtn = document.getElementById("spin-btn");
    if (spinBtn) {
        spinBtn.addEventListener("mousedown", e => e.preventDefault());
        spinBtn.addEventListener("click", () => {
            window.mobileAction = "AUTO_SPIN";
            if (canvas) canvas.focus();
        });
    }

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