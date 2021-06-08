import React from 'react'
import "./About.css";
import Title from "../Title/Title"
import { Container, Row, Col } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.css"

export default function About() {
    return (
        <Container>
            <Title title="Travel With Nebula" desc="abc"/>
            <Row className="mt-3">
                <Col  xs={12} md={12} lg={6}>
                    <span >
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    </span>
                </Col>
                <Col className=" d-flex justify-content-end" xs={12} md={12} lg={6}>
                    <img style={{ width: "100%", height: "100%" }} src={"http://dawnsbrain.com/wp-content/uploads/2015/07/NGC_2818_by_the_Hubble_Space_Telescope.jpg"} />
                </Col>
            </Row>
        </Container>

    )
}
