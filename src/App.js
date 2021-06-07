import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import About from "./Components/About/About"
import Navbar from "./Components/Navber/Navber"
import CardSlider from "./Components/CardSlider/CardSlider"
import Imageslider from "./Components/Imageslider/Imageslider"
import Comment from "./Components/Comment/PauseOnHover"
import Topbar from "./Components/Topbar/Topbar"
import Couple_Package from "./Components/pages/Couple_Package"
import Student_Package from "./Components/pages/Student_Package"
import Trending_Bangladesh_Destination from "./Components/pages/Trending_Bangladesh_Destination"
import Most_Populer_Package from "./Components/pages/Most_Populer_Package"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Topbar />
          <Navbar />
          <Imageslider />
          <About />
          <Trending_Bangladesh_Destination />
          <Most_Populer_Package />
          <Student_Package/>
          <Couple_Package />
          <CardSlider />
          <Comment />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
