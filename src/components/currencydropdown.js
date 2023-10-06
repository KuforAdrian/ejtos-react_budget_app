import React, { useContext} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './componentcss/style.css';
import { AppContext } from '../context/AppContext';

function CurrencyDropDown() {
   
    const { dispatch, currency } = useContext(AppContext);

    const selectedCurrency = (event) => {
        console.log(event);
            dispatch({
                type: 'CHG_CURRENCY',
                payload: event
            })
     }

   return (
    <Dropdown onSelect={selectedCurrency} className="drop">
      <Dropdown.Toggle variant="success" id="dropdown-basic" >
       Currency ({currency})
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown">
        <Dropdown.Item href="#/action-1" eventKey="£ Pound">£ Pound</Dropdown.Item>
        <Dropdown.Item href="#/action-2" eventKey="$ Dollar">$ Dollar</Dropdown.Item>
        <Dropdown.Item href="#/action-3" eventKey="€ Euros">€ Euro</Dropdown.Item>
        <Dropdown.Item href="#/action-3" eventKey="₹ Ruppee">₹ Ruppee</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default CurrencyDropDown;