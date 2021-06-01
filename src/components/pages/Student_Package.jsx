
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Button, Row, Col, Container } from "react-bootstrap"
import "./Card.css"

export default function Student_Package() {

    const [data, setdata] = useState([])
    useEffect(() => {
        axios.get("http://kmemon.pythonanywhere.com/api/homepage/mostpopularcards/")
            .then((res) => {
                setdata(res.data);
            })
            .catch((err) => {
                console.log(err, "===Error");
            })
    }, [])

    return (
        <>
            <Row>
                {
                    data.map((data, index) =>
                        <Col key={index} xs={12} md={6} lg={3} >
                            <div style={{ marginTop: "20px" }}>
                                <Card style={{ width: '100%' }}>
                                    <Card.Img variant="top" src={data.image} />
                                    <Card.Body>
                                    <Card.Title>{data.title}</Card.Title>
                                        <Card.Text>
                                            {data.text}
                                        </Card.Text>
                                        <Button variant="outline-warning">Details</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                    )
                }
            </Row>
        </>
    )
}
