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
  const description = document.getElementById("planetDescription");
  const name = document.getElementById("planetName");
  const distance = document.getElementById("averageDistance");
  const travel = document.getElementById("travelTime");

  img.src = DATA.destinations.filter(
    (item) => item.name === planet
  )[0].images.png;

  description.innerHTML = DATA.destinations.filter(
    (item) => item.name === planet
  )[0].description;

  name.innerHTML = DATA.destinations.filter(
    (item) => item.name === planet
  )[0].name;

  distance.innerHTML = DATA.destinations.filter(
    (item) => item.name === planet
  )[0].distance;

  travel.innerHTML = DATA.destinations.filter(
    (item) => item.name === planet
  )[0].travel;
}


function changeCrewDetails(crew) {
  const img = document.getElementById("crewImage");
  const bio = document.getElementById("crewBio");
  const role = document.getElementById("crewRole");
  const name = document.getElementById("crewName");
  
  img.src = DATA.crew.filter(
    (item) => item.name === crew
  )[0].images.png;

  bio.innerHTML = DATA.crew.filter(
    (item) => item.name === crew
  )[0].bio;

  role.innerHTML = DATA.crew.filter(
    (item) => item.name === crew
  )[0].role;

  name.innerHTML = DATA.crew.filter(
    (item) => item.name === crew
  )[0].name;
}

function changeTechnologyDetails(technology) {
  const img = document.getElementById("technologyImage");
  const name = document.getElementById("technologyName");
  const description = document.getElementById("technologyDescription");

  img.src = DATA.technology.filter(
    (item) => item.name === technology
  )[0].images.landscape

  name.innerHTML = DATA.technology.filter(
    (item) => item.name === technology
  )[0].name;

  description.innerHTML = DATA.technology.filter(
    (item) => item.name === technology
  )[0].description;
}