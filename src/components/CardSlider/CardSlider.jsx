import React, { Component, useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function CardSlider() {

    const [state, setstate] = useState(0)

    const update = () => {

        if (window.innerWidth <= 400) {
            setstate(2)
        }
    }

    console.log(window.innerWidth);
    window.addEventListener("resize", update)

    const settings = {

        dots: false,
        infinite: true,
        slidesToShow: state != 0 ? state : 4.5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 1000,
        cssEase: "linear"

    }

    return (
        <div className="overflow-hidden">
            <Row>
                <Col lg={12} md={12} xs={12}>
                    <div className=" mt-3 " style={{ width: "100%" }}>
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
                </Col>
            </Row>
        </div>
    );

}