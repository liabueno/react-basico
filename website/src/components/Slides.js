import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight, FaPause, FaPlay } from 'react-icons/fa';
import './Slides.css';

const slidesData = [
  { src: '/images/slide1.jpg', alt: 'Slide 1' },
  { src: '/images/slide2.jpg', alt: 'Slide 2' },
  { src: '/images/slide3.jpg', alt: 'Slide 3' },
];

function Slides() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const slideInterval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % slidesData.length);
    }, 3000);

    return () => clearInterval(slideInterval);
  }, [isPaused]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToNextSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide + 1) % slidesData.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide - 1 + slidesData.length) % slidesData.length);
  };

  const togglePause = () => {
    setIsPaused(prev => !prev);
  };

  return (
    <div className="slides">
      <div
        className="slide-container"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slidesData.map((slide, index) => (
          <div className="slide" key={index}>
            <img src={slide.src} alt={slide.alt} className="slide-image" />
          </div>
        ))}
      </div>
      <button className="nav-button prev" onClick={goToPrevSlide}>
        <FaArrowLeft />
      </button>
      <button className="nav-button pause" onClick={togglePause}>
        {isPaused ? <FaPlay /> : <FaPause />}
      </button>
      <button className="nav-button next" onClick={goToNextSlide}>
        <FaArrowRight />
      </button>
    </div>
  );
}

export default Slides;
