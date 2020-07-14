import React from "react";
import Slider from "react-slick";

import one from '../img/1.jpg'
import two from '../img/2.jpg'
import three from '../img/3.jpg'
import four from '../img/4.jpg'
import five from '../img/5.jpg'
import six from '../img/6.jpg'

import '../styles/_slick.css'
import '../styles/_slickTheme.css'


function GaleryComponent({images, slidesPerView}) {
  const imgs = [one, two, three, four, five, six, one, two]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesPerView,
    slidesToScroll: 3,
   
  };

  return (
    <div>
      <Slider {...settings}>
        {imgs.map((img, index) => <img key={`img-${index}`} src={img} alt="slider-img"/>)}
      </Slider>
    </div>
  );
}

export default GaleryComponent;
