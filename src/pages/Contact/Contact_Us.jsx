import React, { useState } from 'react'
import { Container, Row, Col } from "react-bootstrap"
import MessageIcon from "@material-ui/icons/MailOutline"
export default function Contact_Us() {

    const [Email, setEmail] = useState("")
    const [Phone, setPhone] = useState(0)
    const [Message, setMessage] = useState("")

    const submit = () => {
        if (Email != null && Phone != null && Message != null) {
            alert("Hello there...")
        }
    }

    return (
        <div style={{ width: "100%", height: "80vh" }}>
            <Container>
                <Row >
                    <Col style={{ marginTop: "15vh" }} xs={12} md={6} lg={6}>
                        <div className="form-group">
                            <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Enter Your Email" />
                        </div>
                        <div className="form-group">
                            <input type="number" onChange={(e) => setPhone(e.target.value)} className="form-control" placeholder="Enter Your Phone Number" />
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" onChange={(e) => setMessage(e.target.value)} placeholder="Your Message" />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-outline-info" onClick={() => submit()}>Submit</button>
                        </div>

                    </Col>
                    <Col style={{ marginTop: "2vh" }} className=" d-flex justify-content-end" lg={6}>
                        <MessageIcon style={{ height: "400px", width: "400px",color:"#FFC75F" }} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
