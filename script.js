document.addEventListener("DOMContentLoaded", () => {
  const dropdownItems = document.querySelectorAll(".has-dropdown");

  dropdownItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (window.innerWidth <= 900) {
        e.preventDefault();

        dropdownItems.forEach((otherItem) => {
          if (otherItem !== item) otherItem.classList.remove("active");
        });

        item.classList.toggle("active");
      }
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".has-dropdown")) {
      dropdownItems.forEach((item) => item.classList.remove("active"));
    }
  });
});