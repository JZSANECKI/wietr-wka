const carouselContainer = document.querySelector(".carousel")
const navigationContainer = document.querySelector("nav")


carouselContainer.style.height = "calc( 100vh - " + navigationContainer.offsetHeight + "px - 50px)"

carouselContainer.style.marginTop = navigationContainer.offsetHeight + "px";
