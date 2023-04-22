import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import ReactBlog from "../../img/react-blog.png";
import ProjectManagementLandingPage from "../../img/project-management-landing-page.png";
import EMICalculator from "../../img/EMICalculator.png";
import TestimonialCarousel from "../../img/testimonial-carousel.png";
import TestimonialSlider from "../../img/testimonial-slider.png";
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
          <a href="https://react-blog-thesiren.netlify.app/" target="_blank" rel="noreferrer">
            <img src={ReactBlog} alt="EMI Calculator" />
          </a>
        </SwiperSlide><SwiperSlide>
          <a href="https://bghoshproject-management-landing-page.netlify.app/" target="_blank" rel="noreferrer">
            <img src={ProjectManagementLandingPage} alt="EMI Calculator" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://emi-calculator-brajeswar.netlify.app/" target="_blank" rel="noreferrer">
            <img src={EMICalculator} alt="EMI Calculator" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://brajeswar-ghosh-testimonial-carousel.netlify.app/" target="_blank" rel="noreferrer">
            <img src={TestimonialCarousel} alt="EMI Calculator" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://brajeswar-ghosh-testimonial-slider.netlify.app/" target="_blank" rel="noreferrer">
            <img src={TestimonialSlider} alt="EMI Calculator" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://brajeswarg.github.io/CSS_TodoAPPUI_Mobile/" target="_blank" rel="noreferrer">
            <img src={ToDo} alt="To Do List" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://brajeswarg.github.io/TodoAPPUI-V2/" target="_blank" rel="noreferrer">
            <img src={ToDoV2} alt="To Do V2 List" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://brajeswarg.github.io/css_assignment_5/" target="_blank" rel="noreferrer">
            <img src={IndependenceDay} alt="Independence Day" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://brajeswarg.github.io/css_assignment_6/" target="_blank" rel="noreferrer">
            <img src={Sahara} alt="Sahara" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://brajeswarg.github.io/BACKTRACKING/" target="_blank" rel="noreferrer">
            <img src={Backtracking} alt="Backtracking" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
