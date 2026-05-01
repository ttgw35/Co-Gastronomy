document.addEventListener("DOMContentLoaded", () => {

    const menuItem = document.querySelector(".has-submenu");
    const submenu = document.querySelector(".submenu");

    menuItem.addEventListener("mouseenter", () => {
        submenu.style.display = "block";
    });

    menuItem.addEventListener("mouseleave", () => {
        submenu.style.display = "none";
    });

});