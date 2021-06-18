import axios from 'axios'
import Title from './../../../components/Title/Title'
import React, { useEffect, useState } from 'react'
import { Card, Button, Row, Col, Container } from "react-bootstrap"
import { useHistory } from 'react-router-dom'

export default function Couple_Package(props) {
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

    const history = useHistory()
    const Details = () => {
        history.push("/couple-package")
    }

    return (
        <Container>
            <Title title={props.title} desc={props.desc} button={props.button}  Details={() => Details()} />
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
