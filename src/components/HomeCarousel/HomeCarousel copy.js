import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const data = [
  {
    image: require('../../img/music.jpg'),
    caption: "Caption",
    description: "Description Here"
  },
  {
    image: require('../../img/music.jpg'),
    caption: "Caption",
    description: "Description Here"
  },
  {
    image: require('../../img/music.jpg'),
    caption: "Caption",
    description: "Description Here"
  }
]

function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel 
    activeIndex={index} 
    onSelect={handleSelect}
    dots={true}
    >
      {data.map((slide, i) => {
        return (
          <Carousel.Item>
            <img
              className="d-block w-100 slider-image"
              src={slide.image}
              alt="slider image"
            />
            <Carousel.Caption>
              <h3>{slide.caption}</h3>
              <p>{slide.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        )
      })}

    </Carousel>
  );
}
export default HomeCarousel;