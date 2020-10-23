import React, { Component } from "react";
import { Layout, Header, Navigation, Drawer, Content, FooterSection, FooterLinkList, Footer } from "react-mdl";
import Main from "./components/Main";
import "./App.css";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="bg-nav header-color"
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
          <Drawer
            title={
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                Home
              </Link>
            }
          >
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
          <Footer className="bg-nav" size="mini">
            <FooterSection type="left" logo="Title">
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
