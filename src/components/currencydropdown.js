//import React, { useContext, useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './componentcss/style.css';

function CurrencyDropDown() {
  return (
    <Dropdown className="drop">
      <Dropdown.Toggle variant="success" id="dropdown-basic" >
       Currency (£ Pound)
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown">
        <Dropdown.Item href="#/action-1">£ Pound</Dropdown.Item>
        <Dropdown.Item href="#/action-2">$ Dollar</Dropdown.Item>
        <Dropdown.Item href="#/action-3">€ Euro</Dropdown.Item>
        <Dropdown.Item href="#/action-3">₹ Ruppee</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default CurrencyDropDown;