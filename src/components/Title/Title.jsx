import React from 'react'
import "./Title.css"
import { Container, Row, Col } from "react-bootstrap"

export default function Title(props) {
    return (
        <>

            <Row>
                <Col lg={6}>
                    <div className="d-flex flex-column mt-4">
                        <span className="h2">{props.title}</span>
                        <span className="h6">{props.desc}</span>
                        <span className="border border-warning"></span>
                    </div>
                </Col>
            </Row>

        </>
    )
}
