const menu = document.getElementById("menu-toggle")
const sidebar = document.getElementById("sidebar")

menu.onclick = function(){
    sidebar.classList.toggle("show")

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