import './App.css';
import ButtonContact from "./pages/Contact/ButtonContact"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navber/Navber"
import Details from "./components/pages/Details/Details"
import Contact_Us from "./pages/Contact/Contact_Us"
import Topbar from "./components/Topbar/Topbar"
import Search from "./pages/Search/Search"
import Home from "./pages/Home/Home"
import Footer from "./components/Footer/Footer"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <Router>
      <Topbar />
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
          <div className="Contact-Us">
            <ButtonContact />
          </div>
        </Route>
        <Route path="/details" exact>
          <Details />
          <Footer />
        </Route>
        <Route path="/contact" exact>
          <Contact_Us />
          <Footer />
        </Route>
        <Route path="/search/:query" exact>
          <Search />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
