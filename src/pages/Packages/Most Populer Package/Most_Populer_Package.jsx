import axios from 'axios'
import Title from './../../../components/Title/Title'
import React, { useEffect, useState } from 'react'
import { Card, Button, Row, Col, Container } from "react-bootstrap"
import { useHistory } from 'react-router-dom'

export default function Most_Populer_Package(props) {

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

    const history = useHistory()
    const Details = () => {
        history.push("/most-populer-package")
    }

    return (
        <>
            { 
                props.jumbo == true ? <div className="jumbotron">
                    <div className="container">
                        <p className="h1"><span className="Populer"> </span>Populer<span className="Offers"> Package</span></p>
                    </div>
                </div> : <></>
            }
            <Container className="overflow-hidden">
                <Title title={props.title} desc={props.desc} button={props.button} Details={() => Details()} />
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
            </Container>
        </>
    )
}
