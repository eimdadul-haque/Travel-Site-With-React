import axios from 'axios'
import Title from '../Title/Title'
import React, { useEffect, useState } from 'react'
import { Card, Button, Row, Col, Container } from "react-bootstrap"
import "./Card.css"

export default function Couple_Package() {
    const [data, setdata] = useState([])
    useEffect(() => {
        axios.get("http://kmemon.pythonanywhere.com/api/homepage/couplecards/")
            .then((res) => {
                setdata(res.data);
            })
            .catch((err) => {
                console.log(err, "===Error");
            })
    }, [])

    return (
        <Container>
            <Title title="Couple Package" desc="abc" />
            <Row>
                {
                    data.map((data, index) =>
                        <Col key={index} xs={12} md={6} lg={4}>
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
        </Container>
    )
}