import { useState } from "react"
import Accordion from "react-bootstrap/Accordion";


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
    numPeople: 23,
  },

  "That walkway between Howe and Hoover": {
    numPeople: 9,
  },

  "The Kitchen": {
    numPeople: 23,
  },
}

const Sidebar = (props) => {
  return <div className="sidebar">
    <Accordion>
      {Object.entries(halls).map(([k, v], i) =>
        <Accordion.Item eventKey={i}>
          <Accordion.Header onClick={() => {
      props.toggleLocation(k)
    }}>
            <div className="class-header">
              <h4>{k}</h4>
              <strong style={{ fontSize: "1.66em" }}>
                {v.numPeople}
              </strong>
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>
          </Accordion.Body>
        </Accordion.Item>
      )}
    </Accordion>
  </div>;
}

export default Sidebar;