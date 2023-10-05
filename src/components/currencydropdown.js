import React, { useContext} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './componentcss/style.css';
import { AppContext } from '../context/AppContext';

function CurrencyDropDown() {
   
    const { dispatch } = useContext(AppContext);


    const selectedCurrency = (event) => {
            dispatch({
                type: 'CHG_CURRENCY',
                payload: event
            })
     }

   return (
    <Dropdown onSelect={selectedCurrency} className="drop">
      <Dropdown.Toggle variant="success" id="dropdown-basic" >
       Currency (£ Pound)
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown">
        <Dropdown.Item href="#/action-1" eventKey="£">£ Pound</Dropdown.Item>
        <Dropdown.Item href="#/action-2" eventKey="$">$ Dollar</Dropdown.Item>
        <Dropdown.Item href="#/action-3" eventKey="€">€ Euro</Dropdown.Item>
        <Dropdown.Item href="#/action-3" eventKey="₹">₹ Ruppee</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default CurrencyDropDown;