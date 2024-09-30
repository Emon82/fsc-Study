import React, { useEffect, useState } from "react";
import "./Carosul.css";
import image1 from "../../assect/Banner/Austrlia.jpg";
import image2 from "../../assect/Banner/Canada.jpg";
import image3 from "../../assect/Banner/UK.jpg";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of images and text with unique animations
  const slides = [
    {
      image: `url(${image1})`,
      text: "Want to Study in Austrlia from Bangladesh?",
      animationClass: "text-slide-left",
    },
    {
      image: `url(${image2})`,
      text: "Want to Study in Canda from Bangladesh?",
      animationClass: "text-fade-in",
    },
    {
      image: `url(${image3})`,
      text: "Want to Study in UK from Bangladesh?",
      animationClass: "text-zoom-in",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [slides.length]);

  return (
    <div className="carousel">
      <div
        className={`carousel-slide fade-in`}
        style={{
          backgroundImage: slides[currentIndex].image,
        }}
      >
        <div className="carousel-text">
          <div className={`row ${slides[currentIndex].animationClass}`}>
            <div className="col-md-6">
              <h1 style={{marginTop:"15px"}}>{slides[currentIndex].text}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
