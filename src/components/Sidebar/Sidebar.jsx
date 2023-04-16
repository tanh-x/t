import { useState } from "react"
import Accordion from "react-bootstrap/Accordion";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

import "./Sidebar.css";
import { halls } from "../../scripts/halls";

const Sidebar = (props) => {
  return <>
    <div className="sidebar">
      <Navbar variant="dark" style={{
        borderRadius: "8px",
        marginBottom: "1em",
        fontSize: "1.25em",
        background: "#3B3B3B32",
      }}>
        <Container>
          <Navbar.Brand style={{ fontSize: "1.5em", marginLeft: "0.3em", marginRight: "0.667em" }}>SitWithMe</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link >Home</Nav.Link>
            <Nav.Link >About</Nav.Link>
            <NavDropdown title="Things" id="navbarScrollingDropdown">
              <NavDropdown.Item>Action</NavDropdown.Item>
              <NavDropdown.Item>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Container>
      </Navbar>
      <Accordion>
        {Object.entries(halls).map(([k, v], i) =>
          <Accordion.Item eventKey={i} variant="custom">
            <Accordion.Header onClick={() => {
              props.toggleLocation(k)
            }}>
              <div className="class-header">
                <h4>{k}</h4>
                <strong style={{ fontSize: "1.5em" }}>
                  {v.numPeople}
                </strong>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <span style={{ fontSize: "1.33em" }}>
                {v.description ?? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
              </span>
            </Accordion.Body>
          </Accordion.Item>
        )}
      </Accordion>
    </div>
  </>;
}

export default Sidebar;