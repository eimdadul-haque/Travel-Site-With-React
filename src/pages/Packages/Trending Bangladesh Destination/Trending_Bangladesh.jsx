import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Title from './../../../components/Title/Title'
import { Card, Button, Row, Col, Container } from "react-bootstrap"
import { useHistory } from 'react-router-dom'

export default function Trending_Bangladesh(props) {

    const [data, setdata] = useState([])
    useEffect(() => {
        axios.get("http://kmemon.pythonanywhere.com/api/homepage/trendingcards/")
            .then((res) => {
                setdata(res.data);
            })
            .catch((err) => {
                console.log(err, "===Error");
            })
    }, [])
    const history = useHistory()
    const Details = () => {
        history.push("/trending-bangladesh-destination")
    }

    return (
        <>

            {
                props.jumbo == true ? <div className="jumbotron">
                    <div className="container">
                        <p className="h1"><span className="Populer"> </span>Trending<span className="Offers"> Destination</span></p>
                    </div>
                </div> : <></>
            }
            <section className=" overflow-hidden" id="Trending Destination">
                <Container>
                    <Title title={props.title} desc={props.desc} button={props.button} Details={() => Details()} />
                    <Row className="">
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
            </section>
        </>
    )
}

