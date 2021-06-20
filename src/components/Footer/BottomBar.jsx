import React from 'react'
import { Row, Col, Container } from "react-bootstrap"
import "./Footer.css"

export default function BottomBar() {
    return (
        <Row className="d-flex justify-content-start">
            <Col xs={12} md={12} lg={12}>
                <span className="text-muted copy">
                    copyright©2021 Nebula | All Right Reserved
                </span>
            </Col>
        </Row>
    )
}
