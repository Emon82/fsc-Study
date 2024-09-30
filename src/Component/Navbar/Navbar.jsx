import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../../assect/fsc logo 2-01.png';

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img  src={logo} alt=""  />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="About Us" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/about-fsc">
                About FSC
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/founder-info">
                Founder & Chief Executive
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/fsc-counselor">
                FSC Counselor
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/our-objective">
                Our Objectives
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/collaboration">
                Strengths and Collaboration
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services-facilities">
                Services & Facilities
              </NavDropdown.Item>
              {/* <NavDropdown.Item as={Link} to="/">
                Recognition and Validation
              </NavDropdown.Item> */}
              {/* <NavDropdown.Item as={Link} to="/">
                Awards
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/">
                Sister Concerns
              </NavDropdown.Item> */}
            </NavDropdown>

            <NavDropdown title="Study Abroad" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/study-abroad">
                Why Study Abroad
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/guid-study-abroad">
                FSC Guide to Study Abroad
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/benifit-study-abroad">
                Study Abroad Benefits
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/faq-study-abroad">
                Study Abroad FAQs
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Find a Course" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/choose-course">
                How to choose course?
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/find-university">
                Find a University
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/university-ranking">
                University Ranking
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/scholarship">
                Scholarships
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/ielts-score">
                IELTS Score
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/explore-country">
              Explore Countries
            </Nav.Link>

            <NavDropdown title="Living Abroad" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/study-trip">
                Study Tips
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/what-to-pack">
                What to Pack
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/dealing">
                Dealing with Stress
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/networking">
                Networking and Socialising
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/developing">
                Developing your Skills
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/managing-money">
                Managing Money
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/job-seeking">
                Job Seeking Tips
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Gallery" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/photo-gellary">
                Image Gallery
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/vedio-gellary">
                Video Gallery
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="#">
              Visa Success Story
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
