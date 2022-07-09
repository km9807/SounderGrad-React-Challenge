import "./Slides.css";

import React, { useState } from "react";

import navimage from "../assets/navimage.png";

function Slides({ slides }) {
  const NoOfSlides = slides.length;
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToFirstSlide = () => {
    setCurrentSlide(0);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((slide) => slide - 1);
  };

  const goToNextSlide = () => {
    setCurrentSlide((slide) => slide + 1);
  };

  return (
    <div>
      <div className="navbar">
        <img className="navbar-image" src={navimage} alt="Navbar_image"></img>
        <div className="navbar-text">Slideshow App</div>
      </div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          onClick={goToFirstSlide}
          disabled={currentSlide === 0 ? true : false}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          className="small"
          onClick={goToPrevSlide}
          disabled={currentSlide === 0 ? true : false}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          className="small"
          onClick={goToNextSlide}
          disabled={currentSlide === NoOfSlides - 1 ? true : false}
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[currentSlide].title}</h1>
        <p data-testid="text">{slides[currentSlide].text}</p>
      </div>
    </div>
  );
}

export default Slides;
