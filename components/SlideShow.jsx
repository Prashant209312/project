import React, { useEffect, useState } from 'react'
import "./SlideShow.css"
import Img1 from "./Images/img1.jpg";
import Img2 from "./Images/img1.jpg";
import Img3 from "./Images/img1.jpg";
import Img4 from "./Images/img1.jpg";
import Img5 from "./Images/img1.jpg";
import Img6 from "./Images/img1.jpg";
import Img7 from "./Images/img1.jpg";
function SlideShow() {
    const [slideIndex, setSlideIndex] = useState(1);

    useEffect(() => {
        showSlides(slideIndex);
    }, [slideIndex]);

    function plusSlides(n) {
        setSlideIndex(slideIndex + n);
    }

    function currentSlide(n) {
        setSlideIndex(n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {
            setSlideIndex(1);
        }
        if (n < 1) {
            setSlideIndex(slides.length);
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
    return (
        <div>
            <div className="slideshow-container">
                <div className="mySlides fade">
                    <div className="img">
                        <img src={Img1} style={{ width: "100%" }} alt="Slide 1" />
                    </div>
                </div>

                <div className="mySlides fade">
                    <div className="img">
                        <img src={Img2} style={{ width: "100%" }} alt="Slide 2" />
                    </div>
                </div>
                <div className="mySlides fade">
                    <div className="img">
                        <img src={Img3} style={{ width: "100%" }} alt="Slide 2" />
                    </div>
                </div>
                <div className="mySlides fade">
                    <div className="img">
                        <img src={Img4} style={{ width: "100%" }} alt="Slide 2" />
                    </div>
                </div>
                <div className="mySlides fade">
                    <div className="img">
                        <img src={Img5} style={{ width: "100%" }} alt="Slide 2" />
                    </div>
                </div>
                <div className="mySlides fade">
                    <div className="img">
                        <img src={Img6} style={{ width: "100%" }} alt="Slide 2" />
                    </div>
                </div>

                <div className="mySlides fade">
                    <div className="img">
                        <img src={Img7} style={{ width: "100%" }} alt="Slide 3" />
                    </div>
                </div>

                <a className="prev" onClick={() => plusSlides(-1)}>
                    &#10094;
                </a>
                <a className="next" onClick={() => plusSlides(1)}>
                    &#10095;
                </a>
            </div>
            <br />

            <div style={{ textAlign: "center" }}>
                <span className="dot" onClick={() => currentSlide(1)}></span>
                <span className="dot" onClick={() => currentSlide(2)}></span>
                <span className="dot" onClick={() => currentSlide(3)}></span>
            </div>
        </div>
    )
}

export default SlideShow