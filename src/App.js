import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Topbar from './components/Topbar/Topbar'
import Navber from './components/Navber/Navber'
import TestSlider from './components/Imageslider/TestSlider'
import Cards from './components/Card/Cards'
import Title from "./components/Title/Title"
import About from "./components/About/About"
import { Col, Container, Row } from 'react-bootstrap'


function App() {
  let loop = 4;

  return (
    <>
      <Router>
        <Topbar />
        <Navber />
        <Switch>
          <Route exact path="/">
            <TestSlider />
            <Container >
              <Title title={"Travel With Nebula"} desc={"Abc"} />
              <About />
              <Title title={"Trending Bangladesh Destination"} desc={"Abc"} />
              <Cards num={6} xs={12} md={6} lg={4} size={22} />
              <Title title={"Most Populer Package"} desc={"Abc"} />
              <Cards num={8} xs={12} md={6} lg={3} size={17} />
              <Title title={" Student Package\Picnic"} desc={"Abc"} />
              <Cards num={8} xs={12} md={6} lg={3} size={17} />

            </Container>
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
