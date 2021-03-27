//Open the Modal
function openModal() {
    document.getElementById("opwModal").style.display = "block";
}

//Close the Modal
function closeModal() {
    document.getElementById("opwModal").style.display = "none";
}
 
var slideIndex = 1;
showSlides(slideIndex);

//Next/Previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//Thumbnail image control
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("opThumb-controls");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < dots.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}


    var lm = document.lastModified; //Get the date and time the current document was last modified
    document.getElementById("last-modified").innerHTML = "Last Modified: " + lm;
