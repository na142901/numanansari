window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    },1200);

});

document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");
    const openIcon = document.getElementById("openIcon");
    const closeIcon = document.getElementById("closeIcon");

    menuBtn.addEventListener("click", () => {

        mobileMenu.classList.toggle("hidden");

        openIcon.classList.toggle("hidden");
        closeIcon.classList.toggle("hidden");

    });

    document.querySelectorAll("#mobileMenu a").forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.add("hidden");

            openIcon.classList.remove("hidden");
            closeIcon.classList.add("hidden");

        });

    });

});