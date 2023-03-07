import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Data from "./Data.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import ImgPath from "../../img"

function HomeCarousel() {
  console.log(Data)

  return (
    <>
      <h1>Hey!</h1>
      <div>
        <div className="row">
          {Data.map((val) => (
            <div className="col-md-4">
              <div className="card">
                <img src={ val.image} className="card-img" alt={val.name} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default HomeCarousel;