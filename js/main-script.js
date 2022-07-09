/*
    core scrips for the index.html

    Author: Ming Li
    Date: 7/8/2022
    File: main-scripts.js
*/

const bodyBg = document.querySelector('body');
const headerBg = document.querySelector('header')
// Text
const darkModeText = document.querySelectorAll('a.text-box-color, h1, h2, h3')
// Grid button temp
const gridBtnTemp = document.querySelectorAll('#grid-buttons-temp a')
// Light/Dark Mode btn
const lightDarkModeBtn = document.querySelector('#light-dark-btn');

/* Event listeners
======================================================================================================================*/
lightDarkModeBtn.addEventListener('click', function () {
    bodyBg.classList.toggle('dark-mode-main');
    headerBg.classList.toggle('dark-mode-sub');

    for (let i = 0; i < darkModeText.length; i++) {
        darkModeText[i].classList.toggle('dark-mode-text')
    }

    for (let i = 0; i < gridBtnTemp.length; i++) {
        gridBtnTemp[i].classList.toggle("dark-mode")
    }
})