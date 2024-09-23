import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Fsc Study
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
              <NavDropdown.Item as={Link} to="/">
                Awards
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/">
                Sister Concerns
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Study Abroad" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/">
                Why Study Abroad
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/">
                FSC Guide to Study Abroad
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/">
                Study Abroad Benefits
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/">
                Study Abroad FAQs
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Find a Course" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/">
                How to choose course?
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/">
                Find a University
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/">
                University Ranking
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/">
                Scholarships
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/">
                IELTS Score
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="#">
              Explore Countries
            </Nav.Link>

            <NavDropdown title="Living Abroad" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/">
                Study Tips
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/">
                What to Pack
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/">
                Dealing with Stress
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/">
                Networking and Socialising
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/">
                Developing your Skills
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/">
                Managing Money
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/">
                Job Seeking Tips
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Gallery" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/">
                Image Gallery
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/">
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
