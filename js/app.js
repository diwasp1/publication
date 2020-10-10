// slider js
$(document).ready(function () {
  $(".slider-wrapper").slick({
    infinite: true,

    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-out",
  });
  $(".design-slider-wrapper").slick({
    infinite: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,

          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,

          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
  });
  $(".slider-nav").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: ".slider-for",
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  let searchIcon = document.getElementById("search-icon");
  let searchBar = document.querySelector(".search-bar");
  let hamBar = document.querySelector("#ham-bar")

  searchIcon.addEventListener("click", displaySearch);

  function displaySearch() {
    if (searchBar.style.display == "none") {
      searchBar.style.display = "inline-block";
      console.log("show");
    } else {
      searchBar.style.display = "none";
      console.log("hide");
    }
  }

  window.onclick = function (event) {
    if (event.target != searchBar && event.target != searchIcon) {
      searchBar.style.display = "none";
    }else if (event.target != hamBar) {
      closeNav();
    }
  };
});

let navWrapper = document.querySelector(".navbar-wrapper");

window.onscroll = function () {

  if(window.pageYOffset >= navWrapper.offsetTop+80){
    // navWrapper.classList.add("nav-sticky");
    navWrapper.style.position = "fixed";
    navWrapper.style.background = "#0e4966";
    navWrapper.style.transition ="all .9s linear";
  }else{
    navWrapper.style.position = "absolute";
    navWrapper.style.background = "none";

    // navWrapper.classList.remove("nav-sticky");
  }
};

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
