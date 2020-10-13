$(document).ready(function () {
  let searchIcon = document.getElementById("search-icon");
  let searchBar = document.querySelector(".search-bar");
  let hamBar = document.querySelector("#ham-bar");

  searchIcon.addEventListener("click", displaySearch);

  function displaySearch() {
    if (searchBar.style.display == "none") {
      searchBar.style.display = "inline-block";
      searchBar.focus();
      searchBar.value = "";
    } else {
      searchBar.style.display = "none";
    }
  }

  window.onclick = function (event) {
    if (event.target != searchBar && event.target != searchIcon) {
      searchBar.style.display = "none";
    } else if (event.target != hamBar) {
      closeNav();
    }
  };

  let navWrapper = document.querySelector(".navbar-wrapper");
  let firstNav = document.querySelector(".first-navbar-wrapper");
  let logoContainer = document.querySelector(".logo-container");
  let navFixed = document.querySelector(".navbar-fixed");

  window.onscroll = function () {
    if (window.pageYOffset >= navWrapper.offsetTop + 80) {
      // navWrapper.classList.add("nav-sticky");
      navWrapper.style.position = "fixed";
      navWrapper.style.background = "#0e4966";
      navWrapper.style.transition = "all .9s linear";
      firstNav.style.display = "none";
      logoContainer.style.height = "60px";
    } else {
      navWrapper.style.position = "absolute";
      navWrapper.style.background = "none";
      firstNav.style.display = "flex";
      logoContainer.style.height = "90px";

      // navWrapper.classList.remove("nav-sticky");
    }
  };

  window.onscroll = function () {
    if (window.pageYOffset >= navFixed.offsetTop + 10) {
      firstNav.style.display = "none";
      logoContainer.style.height = "60px";

    } else {
      firstNav.style.display = "flex";
      logoContainer.style.height = "90px";
    }
  };
});

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
