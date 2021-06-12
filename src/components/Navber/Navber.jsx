import React from 'react'
import "./Navber.css"
import { Link } from "react-router-dom"
import { Container, Navbar, Nav, NavDropdown, Form, Button, FormControl } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.css"
export default function Navber() {

    const destination = ["Chittagong", "Bandarban", "Sajek", "Rangamati", "Coxebazar", "Bagherhat"]
    const packages = ["Trending Destination", "Most Populer Package", "Student Package", "Couple Package"]
    const new_offers = ["Offer one", "Offer two", "Offer three"]
    return (

        <Navbar bg="light" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="#home">Nebula</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav className="mr-3 ">
                        <Nav.Link>
                            <Link style={{textDecoration:"none"}} to="/">Home</Link>
                        </Nav.Link>

                        <NavDropdown title="Destinations" id="basic-nav-dropdown">
                            {
                                destination.map((data, index) =>
                                    <NavDropdown.Item > <Link style={{ textDecoration: "none", color: "black" }} to="/destination" key={index}>{data}</Link></NavDropdown.Item>
                                )
                            }

                        </NavDropdown>
                        <NavDropdown title="Packages" id="basic-nav-dropdown">
                            {
                                packages.map((data, index) =>
                                    <NavDropdown.Item> <Link style={{ textDecoration: "none", color: "black" }} to="/packages" key={index}>{data}</Link></NavDropdown.Item>
                                )
                            }

                        </NavDropdown>
                        <NavDropdown title="New Offers" id="basic-nav-dropdown">
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
                        />
                        <Button variant="outline-info">Search</Button>
                    </Form>

                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}
