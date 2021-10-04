import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import Contact from "./components/Contact/Contact";
import Success from "./components/Success/Success";

function App() {
  return (
    <>
      <Router>
        {/* Header or Nav Menu */}
        <Header />
        <Switch>
          {/* Home Page */}
          <Route exact path="/">
            <Home />
          </Route>
          {/* About Page */}
          <Route exact path="/about">
            <About />
          </Route>
          {/* Services/Courses Page*/}
          <Route exact path="/services">
            <Services />
          </Route>
          {/* Contact Page */}
          <Route exact path="/contact">
            <Contact />
          </Route>
          {/* Success Page */}
          <Route exact path="/success">
            <Success />
          </Route>
          {/* Not Found or 404 Page */}
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        {/* Footer Page */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
