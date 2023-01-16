import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './App.css';
import IMAGES from './IMAGES';

const PicCarousel = (place) => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {Object.entries(IMAGES).map(([key, img]) => key.includes(place.place[0]) ?
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={img}
          alt="slide"
        />
        <Carousel.Caption><h1>{place.place[1]}</h1></Carousel.Caption>
      </Carousel.Item> : null
      )}
    </Carousel>
  );
}

export default PicCarousel;
