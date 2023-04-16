import { useState } from "react"
import Accordion from "react-bootstrap/Accordion";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

import "./Sidebar.css";


const halls = {
  "UDCC": {
    numPeople: 100,
  },

  "Friley Windows": {
    numPeople: 50,
  },

  "Campameal": {
    numPeople: 20,
  },

  "Seasons": {
    numPeople: 70,
  },

  "Student Innovation Center": {
    numPeople: 11,
  },

  "Parks Library": {
    numPeople: 61,
  },

  "Horse Barn": {
    numPeople: 44,
    description: "The Horse Barn is a rustic and charming structure made of wood and stone. It's nestled in a lush, green meadow, surrounded by rolling hills and towering trees. Inside, the scent of hay and fresh straw fills the air, mixed with the musky aroma of horses. The barn is spacious and well-ventilated, with stalls lining the walls and a central aisle that runs the length of the building. In each stall, a majestic horse stands or lies down, gazing curiously at the visitors who come to admire them. The sound of whinnies, nickers, and the rustle of hooves on straw creates a soothing and peaceful atmosphere, and it's clear that the horses are happy and well-cared for. The Horse Barn is a place where the bond between humans and animals is strong, where the majesty and grace of these magnificent creatures can be appreciated, and where the simple pleasures of country life are savored.",
  },

  "That walkway between Howe and Hoover": {
    numPeople: 9,
  },

  "The Kitchen": {
    numPeople: 23,
    description: "The Kitchen is a sprawling, industrial-style space with high ceilings, exposed pipes, and large windows that let in plenty of natural light. The walls are a warm shade of brick red, and the floor is made of polished concrete. At the center of the room is a massive island, surrounded by a variety of stainless steel appliances and gadgets, including a commercial-grade range, a built-in oven, and a deep fryer."
  },

  "The Bakery": {
    numPeople: 16,
    description: "The Bakery is a cozy and inviting space, with walls painted in warm shades of yellow and orange. The air is filled with the heavenly aroma of freshly baked bread, pastries, and cakes. Display cases line the walls, showcasing an array of colorful and delicious treats, from delicate macarons to crusty loaves of artisan bread. Behind the counter, bakers work their magic, kneading dough, shaping croissants, and piping frosting onto cupcakes. The Bakery is a place where the simple pleasure of a perfectly baked pastry can transport you to another world, and where every bite is a delight for the senses.",
  },
}

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