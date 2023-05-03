const carouselContainer = document.querySelector(".carousel")
const navigationContainer = document.querySelector("nav")

if(window.innerWidth>992){
carouselContainer.style.height = "calc( 100svh - " + navigationContainer.offsetHeight + "px - 50px)"

carouselContainer.style.marginTop = navigationContainer.offsetHeight + "px";
}