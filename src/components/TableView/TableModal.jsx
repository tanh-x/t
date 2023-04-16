import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const TableModal = (props) => {

    const [tempStatus, setTemptStatus] = useState("");
    const [time, setTime] = useState("");
    const [name, setName] = useState("");
    const [otherText, setOtherText] = useState("");
    const [status, setStatus] = useState("");

    const updateName = (event) => {
        setName(event.target.value);
      };

    const updateTime = (event) => {
        setTime(event.target.value);
     };

     const updateOther = (event) => {
        setOtherText(event.target.value);
     };

     async function Submit(){
        if(tempStatus === 1){
            setStatus("Eating");
        }
        else if(tempStatus === 2){
            setStatus("Studying");
        }
        else if (tempStatus ===3){
            setStatus(otherText);
        }
        setOtherText("");
        setTemptStatus("");
        props.handleClose()
     };

    return <>
        <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Request Company</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <label>Name:</label><br></br>
            <input type = 'text' id='name' onChange={updateName}></input>
            <br></br>
            Status: <br></br>
            <input type = 'radio' id = 'eat' name='stats' onClick={() => setTemptStatus(1)}></input>
            <label>&nbsp;Eating&emsp;</label>
            
            <input type = 'radio' id='study' name='stats' onClick={() => setTemptStatus(2)}></input>
            <label>&nbsp;Studying&emsp;</label>

            <input type = 'radio' id='otherRadio' name='stats' onClick={() => setTemptStatus(3)}></input>
            <label>&nbsp;Other&emsp;</label>
            <input type = 'text' id='other' onChange={updateOther}></input>
            <br></br>

            <label>Duration:</label> <br></br>
            <input type ='number' id='duration' onChange={updateTime}></input> min

        </Modal.Body>
        <Modal.Footer>
               <Button variant="primary" onClick={Submit}>
           Confirm Seat
          </Button>
        </Modal.Footer>
      </Modal>
    </>;
}

export default TableModal;