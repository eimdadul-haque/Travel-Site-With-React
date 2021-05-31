import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Topbar from './components/Topbar/Topbar'
import Navber from './components/Navber/Navber'
import A from './components/A'
import B from './components/B'
import ScrollToTop from './components/ScrollToTop'
import TestSlider from './components/Imageslider/TestSlider'
import Cards from './components/Card/Cards'
import Cards_ from './components/Card/Cards_'
import { Col, Container, Row } from 'react-bootstrap'


function App() {
  let loop = 4;

  return (
    <>
      <Router>
        <ScrollToTop />
        <Topbar />
        <Navber />
        <Switch>
          <Route exact path="/">
            <TestSlider />
            <Container>

              <Row>
                <Cards_ />
              </Row>

              <Row>
                <Cards />
              </Row>
            </Container>
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
