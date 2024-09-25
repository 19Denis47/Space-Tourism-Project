const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-visible");

  if (visibility === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

function changePlanetDetails(planet) {
  const img = document.getElementById("planetImage");
  const p = document.getElementById("planetDescription");

  img.src = DATA.destinations.filter(
    (item) => item.name === planet
  )[0].images.png;

  description.innerHTML = DATA.destinations.filter(
    (item) => item.name === planet
  )[0].description;
}
