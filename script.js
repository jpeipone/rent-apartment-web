const aparmentCointainer = [
  ...document.querySelectorAll(".apartment-container"),
];
const previousApartmentButton = [...document.querySelectorAll(".previous-btn")];
const nextApartmentButton = [...document.querySelectorAll(".next-btn")];
scrollImages();

function scrollImages() {
  aparmentCointainer.forEach((apartment, a) => {
    let containerViewpoint = apartment.getBoundingClientRect();
    let aparmentWidth = containerViewpoint.width;

    previousApartmentButton[a].addEventListener("click", () => {
      apartment.scrollLeft -= aparmentWidth;
    });

    nextApartmentButton[a].addEventListener("click", () => {
      apartment.scrollLeft += aparmentWidth;
    });
  });
}

//hamburger menu
const hamburgerMenu = document.querySelector(".hamburger-svg");
const mobileLinks = document.querySelector(".mobile-links");

showMobileLinks();

function showMobileLinks() {
  hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("activated");
    mobileLinks.classList.toggle("activated");
  });
}

//Footer shows current year => Copyright 2022-(YEAR)
currentYear();
function currentYear() {
  const currentDate = new Date();
  let thisYear = currentDate.getFullYear();
  const showYear = (document.getElementById("current-year").innerHTML =
    thisYear);
}
