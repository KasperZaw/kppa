import React from "react";
import Circle from "../../assets/svg/white-circle.svg";
import './slider.scss'
const Slider = ({
  imageUrls,
  currentImageIndex,
  handleColumnClick,
}) => {
  const columnColor = "#b28a57";
  const defaultColor = "#FFFFFF";

  return (
    <div className="circle-container">
      <img src={Circle} alt="Circle" className="circle" />
      <img
        src={imageUrls[currentImageIndex]}
        alt={`Slide ${currentImageIndex}`}
        className="slider"
      />
      {imageUrls.map((_, index) => (
        <svg
          version="1.0"
          id="Warstwa_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 70.4 89.7"
          key={index}
          className={`column column-${index}`}
          onClick={() => handleColumnClick(index)}
        >
          <g fill={currentImageIndex === index ? columnColor : defaultColor}>
            <path
              className="st0"
              d="M39.1,39.7v46c0,2.2-1.8,3.9-3.9,3.9l0,0c-2.2,0-3.9-1.8-3.9-3.9v-46c0-2.2,1.8-3.9,3.9-3.9l0,0
          C37.4,35.8,39.1,37.6,39.1,39.7z"
            />
            <path
              className="st0"
              d="M56.1,27.2v54.6c0,4.4-4.1,7.9-9.2,7.9l0,0V27.2H56.1z"
            />
            <path
              className="st0"
              d="M13.7,27.2v54.6c0,4.4,4.1,7.9,9.2,7.9l0,0V27.2H13.7z"
            />
            <path
              className="st0"
              d="M0,0h70.4c0,5.4-3.5,9.7-7.8,9.7H7.8C3.5,9.7,0,5.4,0,0L0,0z"
            />
            <path
              className="st0"
              d="M7.8,18.2h54.7c0,5.4-3.5,9.8-7.8,9.8H15.6C11.3,28,7.8,23.6,7.8,18.2L7.8,18.2z"
            />
          </g>
        </svg>
      ))}
    </div>
  );
};

export default Slider;
