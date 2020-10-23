import React, { Component } from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/aboutme" component={AboutMe} />
              <Route path="/contact" component={Contact} />
              <Route path="/projects" component={Projects} />
              <Route path="/resume" component={Resume} />
            </Switch>
          </Router>
        </>
      </div>
    );
  }
}

export default App;
