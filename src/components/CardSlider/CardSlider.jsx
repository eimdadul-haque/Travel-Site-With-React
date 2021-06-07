import React, { Component } from "react";
import { Card } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default class CardSlider extends Component {
    render() {
        ; const settings = {
            dots: false,
            infinite: true,
            slidesToShow:4.5,
            slidesToScroll: 1,
            autoplay: true,
            speed: 5000,
            autoplaySpeed: 1000,
            cssEase: "linear"
        }
        return (
            <div className=" mt-3 overflow-hidden" style={{width:"100%"}}>
                <Slider {...settings}>
                    <div >
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://www.pixelstalk.net/wp-content/uploads/2016/08/Free-Black-Hole-Background-Download.jpg" />
                        </Card>
                    </div>
                    <div >
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://www.pixelstalk.net/wp-content/uploads/2016/08/Free-Black-Hole-Background-Download.jpg" />
                        </Card>
                    </div>
                    <div >
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://www.pixelstalk.net/wp-content/uploads/2016/08/Free-Black-Hole-Background-Download.jpg" />
                        </Card>
                    </div>
                    <div >
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://www.pixelstalk.net/wp-content/uploads/2016/08/Free-Black-Hole-Background-Download.jpg" />
                        </Card>
                    </div>
                    <div >
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://www.pixelstalk.net/wp-content/uploads/2016/08/Free-Black-Hole-Background-Download.jpg" />
                        </Card>
                    </div>
                    <div >
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://www.pixelstalk.net/wp-content/uploads/2016/08/Free-Black-Hole-Background-Download.jpg" />
                        </Card>
                    </div>
                </Slider>
            </div>
        );
    }
}