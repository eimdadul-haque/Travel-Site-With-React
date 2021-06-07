import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class PauseOnHover extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };
    return (
      <div className="mt-5 overflow-hidden">
        <div className="d-flex justify-content-center">
          <h2>Some title text...</h2>
        </div>
        <Slider {...settings}>
          <div className="d-flex  align-content-center">
            <img style={{ width: "100%", height: "50vh" }} src="https://static.vecteezy.com/system/resources/previews/000/416/703/original/thank-you-text-on-white-background-calligraphy-lettering-vector-illustration-eps10.jpg" />
          </div>
          <div className="d-flex  align-content-center">
            <img style={{ width: "100%", height: "50vh" }} src="https://static.vecteezy.com/system/resources/previews/000/417/292/non_2x/hello-summer-text-on-white-background-hand-drawn-calligraphy-lettering-vector-illustration-eps10.jpg" />
          </div>
        </Slider>
      </div>
    );
  }
}

