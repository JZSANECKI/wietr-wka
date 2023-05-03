const carouselContainer = document.querySelector(".carousel")
const navigationContainer = document.querySelector("nav")

console.log("calc( 100vh - " + navigationContainer.offsetHeight + "px )")
carouselContainer.style.height = "calc( 100vh - " + navigationContainer.offsetHeight + "px - 50px)"
