import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Topbar from './components/Topbar/Topbar'
import Navber from './components/Navber/Navber'
import TestSlider from './components/Imageslider/TestSlider'
import Cards from './components/pages/Cards'
import Title from "./components/Title/Title"
import About from "./components/About/About"
import Student_Package from './components/pages/Student_Package'
import Couple_Package from './components/pages/Couple_Package'
import Most_Populer_Package from './components/pages/Most_Populer_Package'
import Trending_Bangladesh_Destination from './components/pages/Trending_Bangladesh_Destination'
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
              <Trending_Bangladesh_Destination />
              <Title title={"Most Populer Package"} desc={"Abc"} />
              <Most_Populer_Package />
              <Title title={" Couple Package"} desc={"Abc"} />
              <Couple_Package />
              <Title title={" Student Package"} desc={"Abc"} />
              <Student_Package />

            </Container>
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
