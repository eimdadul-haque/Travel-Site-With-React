import React, { useState } from 'react'
import "./Contact_Us.css"
import { Container, Row, Col } from "react-bootstrap"
import Title from "../../components/Title/Title"
import PhoneIco from "@material-ui/icons/Phone"
import Mail from "@material-ui/icons/Mail"
import Flag from "@material-ui/icons/Flag"
export default function Contact_Us() {

    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Phone, setPhone] = useState(0)
    const [Message, setMessage] = useState("")

    const submit = () => {
        if (Email != null && Phone != null && Message != null && Name != null) {
            alert("Hello there...")
        }
    }

    return (
        <div style={{ width: "100%", height: "100%" }}>
            <div className="jumbotron">
                <Container>
                    <p className="h1"><span className="Contuct">Contuct</span> <span className="Us">Us</span></p>
                </Container>
            </div>
            <Container>
                <Row >
                    <Col style={{ marginTop: "", marginBottom: "10vh" }} xs={12} md={6} lg={8}>
                        <Title title="CONTACT US" desc="Fill The Form" />
                        <section style={{ marginTop: "5vh" }}>
                            <div className="form-group">
                                <input onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Email ID" />
                            </div>
                            <div className="form-group">
                                <input type="number" onChange={(e) => setPhone(e.target.value)} className="form-control" placeholder="Phone Number" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" onChange={(e) => setMessage(e.target.value)} placeholder="Comment" />
                            </div>
                            <div className="form-group">
                                <button className="btn btn-outline-info" onClick={() => submit()}>Submit</button>
                            </div>
                        </section>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ marginTop: "0vh", marginBottom: "7vh" }} xs={12} md={6} lg={8}>
                        <Title title="REACH US AT" desc="Our Presence" />
                        <section style={{ marginTop: "5vh" }}>
                            <p className="font-weight-bold h5">Head Office</p>
                            <p><Flag /> Bangladesh <br /> savar, Dhaka, Bangladesh</p>
                            <p><PhoneIco /> 01000000 <br /> <Mail /> info@mail.com</p>
                        </section>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
