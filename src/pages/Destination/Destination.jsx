import axios from 'axios';
import Title from "../../components/Title/Title"
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Col, Container, Row, Card, Button } from "react-bootstrap"

export default function Destination(props) {

    const [destination, setdestination] = useState([])
    const param = useParams();
    var updateDestination = []

    useEffect(() => {

        axios.get("http://kmemon.pythonanywhere.com/api/homepage/districtcards/")
            .then(res => {
                setdestination(res.data)

            })
            .catch(err => {
                console.log("Error");
            })
    }, [])

    destination.forEach(element => {
        if (element.division.toLowerCase() == param.destination) {
            updateDestination.push(element);
        }
        console.log(updateDestination);
    });

    return (
        <>

            {
                props.jumbo == true ? <div className="jumbotron">
                    <div className="container">
                        <p className="h1"><span className="Populer"></span><span className="Offers"> Destination</span></p>
                    </div>
                </div> : <></>
            }
            <Container className="overflow-hidden">
                <Title title={props.title} desc={props.desc} button={props.button}  />
                <Row>
                    {
                        updateDestination.map((data, index) =>
                            <Col key={index} xs={12} md={6} lg={4} >
                                <div style={{ marginTop: "20px" }}>
                                    <Card style={{ width: '100%' }}>
                                        <Card.Img variant="top" src={data.image} />
                                        <Card.Body>
                                            <Card.Title>{data.district_title}</Card.Title>
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
