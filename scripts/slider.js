    let slides = document.getElementsByClassName("slider-item");
    let rect = document.getElementsByClassName("rectangle");
    rect[1].style.backgroundColor = "black";
    slides[0].style.display = "block";
    function plusSlides(n) {
        if (n === 1) {
            slides[0].style.display = "none";
            slides[1].style.display = "block";
            rect[2].style.backgroundColor = "black";
            rect[1].style.backgroundColor = "white";

        }
        else if (n === 2){
            slides[1].style.display = "none";
            slides[2].style.display = "block";
            rect[0].style.backgroundColor = "black";
            rect[2].style.backgroundColor = "white";

        }
        else if (n === 3){
            slides[2].style.display = "none";
            slides[0].style.display = "block";
            rect[1].style.backgroundColor = "black";
            rect[0].style.backgroundColor = "white";
        }

    }

