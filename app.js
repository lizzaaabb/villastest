const menu = document.getElementById("menu-toggle")
const sidebar = document.getElementById("sidebar")
const slideshow = document.getElementById("slideshow-container");

menu.onclick = function(){
    sidebar.classList.toggle("show")

    if (sidebar.classList.contains("show")) {
        // Hide slideshow with animation
        slideshow.classList.add("slide-out");
        slideshow.classList.remove("slide-in");
    } else {
        // Show slideshow with animation
        slideshow.classList.remove("slide-out");
        slideshow.classList.add("slide-in");
    }
    
}

var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n){
    showSlides(slideIndex += n)
}

function currentSlide(n){
    showSlides(slideIndex = n)
}
function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if(n > slides.length){slideIndex = 1}
    if(n < 1){slideIndex = slides.length }
    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none"
    }
    for(i = 0; i < slides.dots; i++){
        dots[i].className = dots[i].className.replace("active","")
    }
    slides[slideIndex - 1].style.display = "block"
    dots[slideIndex - 1].className += "active"
}

