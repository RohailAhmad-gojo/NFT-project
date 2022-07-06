import "./Imageslider.css";
import { useState } from "react";
import Slider from "react-slick";
import astronaut from './image/63.png'
import celebrating from "./image/25.png"
import education from "./image/77.png";
import taken from "./image/70.png";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
import Fade from 'react-reveal/Fade';


// import Imageslider from "f:/bekedbeavers/project/src/components/slider/imageslider";

// import image from '../image'





const image = [astronaut, celebrating, education, taken];

function Imageslider() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <ArrowForwardIos />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <ArrowBackIos />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
    <div className="zzzz">

    <div className="bgi">
    
        <div className="main-sec">
      <Slider {...settings}>
        {image.map((image, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={image} alt={image} />
          </div>
          
        ))}
      </Slider>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Imageslider;