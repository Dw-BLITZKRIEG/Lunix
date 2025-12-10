// --- TOGGLE MENU ---
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("mobile-controls");

toggle.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

// prevent buttons from stealing focus
const buttons = ["auto-btn", "spin-btn"]; // add more buttons as needed
buttons.forEach(id => {
    const btn = document.getElementById(id);
    btn.addEventListener("mousedown", e => e.preventDefault());
});

// trigger actions via window.mobileAction
document.getElementById("auto-btn").onclick = () => {
    window.mobileAction = "AUTO_FIRE";
};

document.getElementById("spin-btn").onclick = () => {
    window.mobileAction = "AUTO_SPIN";
};


/*

document.getElementById("auto-btn").onclick = () => {
    window.mobileAction = "AUTO_FIRE";
    document.dispatchEvent(new KeyboardEvent("keydown", { keyCode: 0 }));
  //  document.getElementById("gameCanvas").focus(); // focus back
};

document.getElementById("spin-btn").onclick = () => {
    window.mobileAction = "AUTO_SPIN";
    document.dispatchEvent(new KeyboardEvent("keydown", { keyCode: 0 }));
   // document.getElementById("gameCanvas").focus();
};*/














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