import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import About from "./components/About/About"
import Navbar from "./components/Navber/Navber"
import CardSlider from "./components/CardSlider/CardSlider"
import Imageslider from "./components/Imageslider/Imageslider"
import Comment from "./components/Comment/PauseOnHover"
import Details from "./components/pages/Details/Details"
import Topbar from "./components/Topbar/Topbar"
import Couple_Package from "./components/pages/Couple_Package"
import Student_Package from "./components/pages/Student_Package"
import Trending_Bangladesh_Destination from "./components/pages/Trending_Bangladesh_Destination"
import Most_Populer_Package from "./components/pages/Most_Populer_Package"
import Footer from "./components/Footer/Footer"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <Router>
      <Topbar />
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Imageslider />
          <About />
          <Trending_Bangladesh_Destination />
          <Most_Populer_Package />
          <Student_Package />
          <Couple_Package />
          <CardSlider />
          <Comment />
          <Footer />
        </Route>
        <Route path="/details" exact>
          <Details />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
