import Toast from 'react-bootstrap/Toast';
import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-bootstrap';


const TablePopUp = (props) => {
    return( <>
    <ToastContainer position ="middle-center">
        <Toast show={props.show} onClose={() => {props.setShow(false)}}>
        <Toast.Header closeButton>
         <strong className="me-auto">Sit w/ Me</strong>
         <small >{props.duration}</small>
         </Toast.Header>
        <Toast.Body>Hello, my name is {props.name}! I am {props.status}.</Toast.Body>
     </Toast>
    </ToastContainer>
    </> );
}
export default TablePopUp;