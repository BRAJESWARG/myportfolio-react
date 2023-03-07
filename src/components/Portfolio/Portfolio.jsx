import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import EMICalculator from "../../img/EMICalculator.png";
import Backtracking from "../../img/backtracking.png";
import IndependenceDay from "../../img/IndependenceDay.png";
import Sahara from "../../img/sahara.png";
import ToDo from "../../img/todo.png";
import ToDoV2 from "../../img/todov2.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={75}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://emi-calculator-brajeswar.netlify.app/" target="_blank" rel="noopener">
            <img src={EMICalculator} alt="EMI Calculator Image" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://brajeswarg.github.io/CSS_TodoAPPUI_Mobile/" target="_blank" rel="noopener">
            <img src={ToDo} alt="To Do List" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://brajeswarg.github.io/TodoAPPUI-V2/" target="_blank" rel="noopener">
            <img src={ToDoV2} alt="To Do V2 List" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://brajeswarg.github.io/css_assignment_5/" target="_blank" rel="noopener">
            <img src={IndependenceDay} alt="Independence Day Image" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://brajeswarg.github.io/css_assignment_6/" target="_blank" rel="noopener">
            <img src={Sahara} alt="Sahara Image" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://brajeswarg.github.io/BACKTRACKING/" target="_blank" rel="noopener">
            <img src={Backtracking} alt="Backtracking Image" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
