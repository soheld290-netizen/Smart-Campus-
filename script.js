‎
Original file line number	Diff line number	Diff line change
@@ -0,0 +1,68 @@
/* =================================
   SMART CAMPUS - ZCOER
   JavaScript
================================= */
/* ================================
   MOBILE MENU
================================ */
function toggleMenu() {
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
}
/* ================================
   CLOSE MOBILE MENU
   When a navigation link is clicked
================================ */
const navLinks = document.querySelectorAll("#navbar a");
navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        const navbar = document.getElementById("navbar");
        navbar.classList.remove("active");
    });
});
/* ================================
   DASHBOARD MESSAGE
================================ */
function showMessage(message) {
    alert(message);
}
/* ================================
   CURRENT YEAR IN FOOTER
================================ */
const footerYear = new Date().getFullYear();
console.log("Smart Campus loaded - " + footerYear);
/* ================================
   WELCOME MESSAGE
================================ */
window.addEventListener("load", function() {
    console.log(
        "Welcome to Smart Campus - Zeal College of Engineering & Research"
    );
});
