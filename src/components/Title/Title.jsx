import React from 'react'
import "./Title.css"
import { useHistory } from "react-router-dom"
import { Row, Col, Button } from "react-bootstrap"

export default function Title(props) {
    const history = useHistory()

    return (
        <>

            {props.button == true ? <Row>
                <Col lg={6}>
                    <div className="d-flex flex-column mt-4">
                        <span className="h2">{props.title}</span>
                        <span className="h6">{props.desc}</span>
                        <span className="border border-warning"></span>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className=" d-flex justify-content-end mt-5">
                        <Button size="sm" variant="outline-warning" onClick={props.Details}>Details</Button>
                    </div>
                </Col>
            </Row>
                :
                <div className="d-flex flex-column mt-4">
                    <span className="h2">{props.title}</span>
                    <span className="h6">{props.desc}</span>
                    <span className="border border-warning"></span>
                </div>}

        </>
    )
}
