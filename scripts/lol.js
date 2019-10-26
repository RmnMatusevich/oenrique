let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slider-item");
    let rect = document.getElementsByClassName("rectangle");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < slides.length) {
        slideIndex = slides.length;
    }

    for (let i=0; i < slides.length; i++) {
        slides[i].style.display = "none";

    }
    for (let i = 0; i < rect.length; i++) {
        rect[i].className = rect[i].className.replace("active" , "");
    }
    slides[slideIndex-1].style.display = "block";
    rect[slideIndex-1].className+= "active";
}



if (n === 1) {
    slides[0].style.display = "none";
    slides[1].style.display = "visible";
}