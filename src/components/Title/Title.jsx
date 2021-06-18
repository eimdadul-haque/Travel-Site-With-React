import React from 'react'
import "./Title.css"
import {useHistory} from "react-router-dom"
import { Container, Row, Col, Button } from "react-bootstrap"
import Details from '../pages/Details/Details'

export default function Title(props) {
    const history = useHistory()

    const details = () => {
        history.push("/details")
    }
    
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
                <Col lg={6}>
                    <div className=" d-flex justify-content-end mt-5">
                        <Button onClick={() => details()} variant="outline-warning">Details</Button>
                    </div>
                </Col>
            </Row>

        </>
    )
}
