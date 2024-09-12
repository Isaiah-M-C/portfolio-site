const dropButton = document.getElementById("drop-btn");
const menu = document.getElementById("drop-menu");
const revertBtn = document.getElementById("revert-drop-down")

dropButton.addEventListener("click", onClick);
revertBtn.addEventListener("click", revert);

dropButton.style.top = document.querySelector("nav").style.top;

let visible = false;

function onClick () {
    menu.style.visibility = "visible";
    visible = true;
};

function revert () {
    menu.style.visibility = "hidden";
    visible = false;
};