import { Link } from 'react-router-dom'
import Email from "@material-ui/icons/Email"
import Phone from "@material-ui/icons/Phone"
import WhatsApp from "@material-ui/icons/WhatsApp"
import YouTube from "@material-ui/icons/YouTube"
import Twitter from "@material-ui/icons/Twitter"
import Instagram from "@material-ui/icons/Instagram"
import Facebook from "@material-ui/icons/Facebook"
import React from 'react'
import { Row, Col } from "react-bootstrap"

export default function Footer() {
    return (
        <div style={{ height: "55vh" }} className="overflow-hidden bg-dark ">
            <Row className="  mt-5 " >


                <Col xs={6} md={6} lg={3} className=" d-flex justify-content-center" >
                    <div className="mt-3 text-white ">
                        <h6> Contact info</h6>
                        <div className="d-flex flex-column justify-content-lg-start mt-3 ">
                            {/* <Link><Email /> nebula@gmail.com</Link>
<Link><Phone /> 010000000</Link>
<Link><WhatsApp /> 010000000</Link> */}
                            <Link className="text-muted"><Facebook /> facebook </Link>
                            <Link className="text-muted"><Instagram /> instagram</Link>
                            <Link className="text-muted"><Twitter /> twitter</Link>
                            <Link className="text-muted"><YouTube /> youtube</Link>
                        </div>
                    </div>
                </Col>
                <Col xs={6} md={6} lg={3} className=" d-flex justify-content-center">
                    <div className="mt-3 text-white ">
                        <h6> Quick Links</h6>
                        <div className="d-flex flex-column mt-3 ">
                            <Link className="text-muted">Trending Destination</Link>
                            <Link className="text-muted">Populer Package</Link>
                            <Link className="text-muted">Student Package</Link>
                            <Link className="text-muted">Couple Package</Link>
                            <Link className="text-muted">Help Desk</Link>
                        </div>
                    </div>
                </Col>
                <Col xs={6} md={6} lg={3} className=" d-flex justify-content-center">
                    <div className="mt-3 text-white d-flex flex-column">
                        <h6>About Us</h6>
                        <div className="d-flex flex-column mt-3 mb-5">
                            <Link className="text-muted">Our History</Link>
                            <Link className="text-muted">Why Us</Link>
                            <Link className="text-muted">Reviews</Link>
                        </div>
                    </div>
                </Col>
                <Col xs={6} md={6} lg={3} className="d-flex justify-content-center mb-5">
                    <div className="mt-3 text-white d-flex flex-column">
                        <h6>Terms & Conditions</h6>
                        <div className="d-flex flex-column mt-3 mb-5">
                            <Link className="text-muted">Payment method</Link>
                            <Link className="text-muted">Booking & cancellation poliacy</Link>
                        </div>
                    </div>
                </Col>

            </Row>

        </div>
    )
}