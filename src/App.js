import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './App.css';
import { dataDigital } from './data';

function App() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return (
    <div className="App">
        <Slider {...settings}>
          {dataDigital.map(item=>(
            <div className='card'>
            <div className='card-top'>
              <img src={item.linkImg} alt={item.title} />
              <h1>{item.title}</h1>
            </div>
            <div className='card-bottom'>
              <h3>{item.price}</h3>
              <p>{item.category}</p>
            </div>
          </div>
          ))}
        </Slider>
    </div>
  );
}

export default App;
