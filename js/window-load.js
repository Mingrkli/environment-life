/*
    Author: Ming Li
    Date: 7/8/2022
    File: window-load.js
*/

const windowLoad = document.querySelector("#window-load");

window.onload = function () {
    windowLoad.classList.add("hide");
}

windowLoad.addEventListener("transitionend", function () {
    windowLoad.classList.add("hidden")
})