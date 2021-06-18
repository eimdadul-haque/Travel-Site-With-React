import './App.css';
import ButtonContact from "./pages/Contact/ButtonContact"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navber/Navber"
import Contact_Us from "./pages/Contact/Contact_Us"
import Topbar from "./components/Topbar/Topbar"
import Search from "./pages/Search/Search"
import Home from "./pages/Home/Home"
import Footer from "./components/Footer/Footer"
import Student_Package from "./pages/Packages/Student Package/Student_Package"
import Most_Populer_Package from "./pages/Packages/Most Populer Package/Most_Populer_Package"
import Couple_Package from "./pages/Packages/Couple Package/Couple_Package"
import Trending_Bangladesh from "./pages/Packages/Trending Bangladesh Destination/Trending_Bangladesh"
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom"
import Page404 from './pages/Page404/Page404';

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
        <Route path="/contact" exact>
          <Contact_Us />
        </Route>
        <Route path="/search/:query" exact>
          <Search />
        </Route>
        <Route path="/trending-bangladesh-destination" exact>
          <Trending_Bangladesh title="Trending Bangladesh Destination" desc="abc" button={false} />
        </Route>
        <Route path="/most-populer-package" exact>
          <Most_Populer_Package title="Most Populer Package" desc="abc" button={false} />
        </Route>
        <Route path="/student-package" button={false} exact>
          <Student_Package title="Student Package" desc="abc" button={false} />
        </Route>
        <Route path="/couple-package" exact>
          <Couple_Package title="Couple Package" desc="abc" button={false} />
        </Route>
        <Route path="/404" exact>
          <Page404 />
        </Route>
        <Redirect to='/404' />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
