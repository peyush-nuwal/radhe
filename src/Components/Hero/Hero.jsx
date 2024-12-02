import React, { useState ,useEffect} from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import "./Hero.css";
const Hero = ({slides}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
   



useEffect(() => {
  const interval = setInterval(() => {
    handleNext();
  }, 3000); 

  return () => clearInterval(interval); 
}, [currentIndex]);


  const  handleNext=()=>{
     setCurrentIndex((prevIdx) =>
       prevIdx === slides.length - 1 ? 0 : prevIdx+1
     );
  
  }
   const handlePrev = () => {
     setCurrentIndex((prevIdx)=> prevIdx === 0 ? slides.length - 1 : prevIdx-1);
         
   };
   
  return (
    <div className="hero-container">
      {slides.map((slide, idx) => (
        <div
          className={`hero`}
          style={{transform:`translateX(-${currentIndex * 100}%)`}}
          key={slide.id}
        >
          <div className="hero-left">
            <h1>{slide.title}</h1>
            <p>{slide.desc}</p>
            <button className="hero-left-btn">
              Shop Now <FaArrowRightLong className="btn-arrow" />
            </button>
          </div>
          <div className="hero-right">
            <img src={slide.src} alt="" className="hero-img" />
          </div>
        </div>
      ))}

      <div className="hero-slide-indicator">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`slide-ball ${idx === currentIndex ? "isActive" : ""}`}
            onClick={() => setCurrentIndex(idx)}
          >
            {" "}
          </div>
        ))}
      </div>

      <div className="slide-next" onClick={() => handleNext()}>
        <IoIosArrowForward />
      </div>
      <div className="slide-prev" onClick={() => handlePrev()}>
        <IoIosArrowBack />
      </div>
    </div>
  );
};

export default Hero;
