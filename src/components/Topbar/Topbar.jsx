import React from 'react'
import Mail from "@material-ui/icons/Mail"
import Phone from "@material-ui/icons/Phone"
import { Row, Col } from "react-bootstrap"
import "./Topbar.css"

export default function Topbar() {
    return (
        <nav class="navbar navbar-light nav-bg ">
            <div className="container d-flex justify-content-start">
                <Row>
                    <Col lg={12} >
                        <Mail style={{height:"17px",width:"17px"}}/>
                        <span className='mail margin text'>nebula@gmail.com</span>
                        <span className="margin text">/</span>
                        <Phone style={{height:"17px",width:"17px"}} className="margin" />
                        <span className="margin text">(+88) 0100000000</span>
                        {/* <span className="margin text">/</span>
                        <i class="fab fa-facebook-messenger margin"></i> */}
                    </Col>
                </Row>
            </div>
        </nav>
    )
}
