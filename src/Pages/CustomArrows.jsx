import React from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow next-arrow" onClick={onClick}>
      <FaArrowRight />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev-arrow" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );
};

export { NextArrow, PrevArrow };
