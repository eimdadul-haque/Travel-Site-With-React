import './App.css';
import ButtonContact from "./pages/Contact/ButtonContact"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navber/Navber"
import Contact_Us from "./pages/Contact/Contact_Us"
import Topbar from "./components/Topbar/Topbar"
import Search from "./pages/Search/Search"
import Home from "./pages/Home/Home"
import Destination from "./pages/Destination/Destination"
import Footer from "./components/Footer/Footer"
import New_Offers from "./pages/New Offers/New_Offers"
import Student_Package from "./pages/Packages/Student Package/Student_Package"
import Most_Populer_Package from "./pages/Packages/Most Populer Package/Most_Populer_Package"
import Couple_Package from "./pages/Packages/Couple Package/Couple_Package"
import Trending_Bangladesh from "./pages/Packages/Trending Bangladesh Destination/Trending_Bangladesh"
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom"
import Page404 from './pages/Page404/Page404';

function App() {

  return (
    <>
      <Router>
        <Topbar />
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/contact" exact>
            <Contact_Us />
          </Route>
          <Route path="/search/:query" exact>
            <Search />
          </Route>
          <Route path="/trending-bangladesh-destination" exact>
            <Trending_Bangladesh title="Trending Bangladesh Destination" desc="CHOOSE YOUR OPTION" button={false} jumbo={true} />
          </Route>
          <Route path="/most-populer-package" exact>
            <Most_Populer_Package title="Most Populer Package" desc="CHOOSE YOUR OPTION" button={false} jumbo={true} />
          </Route>
          <Route path="/student-package" exact>
            <Student_Package title="Student Package" desc="CHOOSE YOUR OPTION" button={false} jumbo={true} />
          </Route>
          <Route path="/couple-package" exact>
            <Couple_Package title="Couple Package" desc="CHOOSE YOUR OPTION" button={false} jumbo={true} />
          </Route>
          <Route path="/new-offers">
            <New_Offers />
          </Route>
          <Route path="/destination/:destination">
            <Destination button={false} title="Destination" desc="CHOOSE YOUR OPTION" jumbo={true}/>
          </Route>
          <Route path="/404" exact>
            <Page404 />
          </Route>
          <Redirect to='/404' />
        </Switch>
        <Footer />
        <div className="Contact-Us">
          <ButtonContact />
        </div>
      </Router>

    </>
  );
}

export default App;
