```javascript
// =========================
// CURRENT YEAR
// =========================

document.getElementById("year").textContent =
    new Date().getFullYear();


// =========================
// NAVBAR SCROLL EFFECT
// =========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(255, 255, 255, 0.97)";

    } else {

        header.style.background = "rgba(255, 255, 255, 0.94)";

    }

});
```
