import Toast from 'react-bootstrap/Toast';
import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-bootstrap';
import './Table.css'; 


const TablePopUp = (props) => {
    return( <>
    <ToastContainer className='toast-container' position ="middle-center">
        <Toast show={props.show} onClose={() => {props.setShow(false)}}>
        <Toast.Header className='toast-head' closeButton>
         <strong className="me-auto" >Sit w/ Me</strong>
         <small >Here for: <strong>{props.duration}</strong> mins</small>
         </Toast.Header>
        <Toast.Body className='toast-body'>
            <div> Name: <strong>{props.name}</strong></div>
            <div>Status: <strong>{props.status}</strong></div>
            </Toast.Body>
     </Toast>
    </ToastContainer>
    </> );
}
export default TablePopUp;