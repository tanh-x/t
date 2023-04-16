import Toast from 'react-bootstrap/Toast';
import React, { useState, useEffect } from 'react';


const TablePopUp = (props) => {
    return( <>
    <Toast show={props.show} onClose={props.popClose} position ="middle-center">
      <Toast.Header closeButton={true}>
        <strong className="me-auto">Sit w/ Me</strong>
        <small>TIME REMAINING</small>
      </Toast.Header>
      <Toast.Body>NAME AND STATUS</Toast.Body>
    </Toast>
    </> );
}
export default TablePopUp;