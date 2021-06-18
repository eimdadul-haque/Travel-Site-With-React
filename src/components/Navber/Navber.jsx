import React, { useState } from 'react'
import "./Navber.css"
import { Link, useHistory } from "react-router-dom"
import { Container, Navbar, Nav, NavDropdown, Form, Button, FormControl } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.css"
export default function Navber() {

    const destination = ["Chittagong", "Bandarban", "Sajek", "Rangamati", "Coxebazar", "Bagherhat"]
    const packages = ["Trending Destination", "Most Populer Package", "Student Package", "Couple Package"]
    const new_offers = ["Offer one", "Offer two", "Offer three"]

    const [Serach, setSerach] = useState("")
    const history = useHistory()
    const search = (searchQury) => {
        history.push(`/search/${searchQury}`)
    }


    return (

        <Navbar bg="light" expand="lg" sticky="top">
            <Container>
                <Link to="/" style={{ color: "#FFC75F", fontWeight: "bolder", fontSize: "25px", textDecoration: "none" }}>NEBULA</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav className="mr-3 ">
                        <Nav.Link>
                            <Link style={{ textDecoration: "none" }} to="/">HOME</Link>
                        </Nav.Link>

                        <NavDropdown title="DESTINATIONS" id="basic-nav-dropdown">
                            {
                                destination.map((data, index) =>
                                    <NavDropdown.Item > <Link style={{ textDecoration: "none", color: "black" }} to="/destination" key={index}>{data}</Link></NavDropdown.Item>
                                )
                            }

                        </NavDropdown>
                        <NavDropdown title="PACKAGES" id="basic-nav-dropdown">
                            {
                                packages.map((data, index) =>
                                    <NavDropdown.Item> <Link style={{ textDecoration: "none", color: "black" }} to="/packages" key={index}>{data}</Link></NavDropdown.Item>
                                )
                            }

                        </NavDropdown>
                        <NavDropdown title="NEW OFFERS" id="basic-nav-dropdown">
                            {
                                new_offers.map((data, index) =>
                                    <NavDropdown.Item> <Link style={{ textDecoration: "none", color: "black" }} to="/new_offers" key={index}>{data}</Link></NavDropdown.Item>
                                )
                            }

                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                            onChange={(e)=>setSerach(e.target.value)}
                        />
                        <Button onClick={() => search(Serach)} variant="outline-info">Search</Button>
                    </Form>

                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}
