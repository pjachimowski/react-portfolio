import React, { Component } from "react";
import { Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterDropDownSection, FooterLinkList } from "react-mdl";
import Main from "./components/Main";
import "./App.css";
import { Link } from "react-router-dom";

// style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Header
            className="nav-translusent"
            transparent
            title={
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                Home
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content />
          <Main />
          <Footer className="footer" size="mega">
            <FooterSection type="middle">
              <FooterDropDownSection title="Features">
                <FooterLinkList>
                  <a href="#">About</a>
                  <a href="#">Terms</a>
                  <a href="#">Partners</a>
                  <a href="#">Updates</a>
                </FooterLinkList>
              </FooterDropDownSection>
              <FooterDropDownSection title="Details">
                <FooterLinkList>
                  <a href="#">Specs</a>
                  <a href="#">Tools</a>
                  <a href="#">Resources</a>
                </FooterLinkList>
              </FooterDropDownSection>
              <FooterDropDownSection title="Technology">
                <FooterLinkList>
                  <a href="#">How it works</a>
                  <a href="#">Patterns</a>
                  <a href="#">Usage</a>
                  <a href="#">Products</a>
                  <a href="#">Contracts</a>
                </FooterLinkList>
              </FooterDropDownSection>
              <FooterDropDownSection title="FAQ">
                <FooterLinkList>
                  <a href="#">Questions</a>
                  <a href="#">Answers</a>
                  <a href="#">Contact Us</a>
                </FooterLinkList>
              </FooterDropDownSection>
            </FooterSection>
            <FooterSection type="bottom" logo="Title">
              <FooterLinkList>
                <a href="#">Help</a>
                <a href="#">Privacy & Terms</a>
              </FooterLinkList>
            </FooterSection>
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
