// --- TOGGLE MENU ---
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("mobile-controls");

toggle.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

// --- BUTTON ACTIONS (TEST MODE) ---
function waitForHelpcmds(callback) {
    if (typeof helpcmds !== "undefined" && helpcmds.cmd) {
        callback();
    } else {
        setTimeout(() => waitForHelpcmds(callback), 50);
    }
}

waitForHelpcmds(() => {

document.getElementById("auto-btn").onclick = () => {
    const evt = new KeyboardEvent("keydown", { keyCode: 80 }); // 67 = C
    document.dispatchEvent(evt);
};

});

/*



document.getElementById("fire-btn").addEventListener("click", () => {
    console.log("FIRE BUTTON PRESSED");
});
document.getElementById("ability-btn").addEventListener("click", () => {
    console.log("E BUTTON PRESSED");
   
});
document.getElementById("auto-btn").addEventListener("click", () => {
    console.log("C BUTTON PRESSED");
}); */
