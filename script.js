/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {
    const navbar = document.getElementById("navbar");

    navbar.classList.toggle("active");
}


/* =========================
   CLOSE MENU AFTER CLICK
========================= */

const navLinks = document.querySelectorAll("#navbar a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        document.getElementById("navbar").classList.remove("active");

    });

});


/* =========================
   MESSAGE FUNCTION
========================= */

function showMessage(message) {

    alert(message);

}
