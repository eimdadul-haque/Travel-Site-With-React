import React from 'react'
import { Row, Col, Container } from "react-bootstrap"

export default function BottomBar() {
    return (
        <Row className="d-flex justify-content-start">
            <Col xs={12} md={12} lg={12}>
                <span className="text-muted">
                    ©copyright protected
                </span>
            </Col>
        </Row>
    )
}
