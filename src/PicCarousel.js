import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './App.css';
import pic from './img/orchard1.jpeg';
import pic2 from './img/orchard2.jpeg';

const PicCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic2}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default PicCarousel;
