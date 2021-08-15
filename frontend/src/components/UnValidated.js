import React, { useState } from 'react'
import './UnValidated.css'
import { try_validate } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '@material-ui/core'
import Header from './Header'

function UnValidated(props) {

    const dispatch = useDispatch();
    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");
    const [lot, setLot] = useState("");
    
    const onClickEvent = () => {
        dispatch(try_validate(first,last,lot))
    }

    var firstName;
    var lastName;
    var lotNum;
    
    return (
        
        <div className="wrap">
            <Header className="header" />
            <h3 className="header1">If you are fully vaccinated, enter the following information below </h3>
           
            <p className="header2">Enter your lot number to validate your vaccination status</p>
            
            <input className="input1" value={firstName} onChange={event => setFirst(event.target.value)} placeholder="First Name" />
            <input className="input1" value={lastName} onChange={event => setLast(event.target.value)} placeholder="Last Name" />
            <input className="input1" value={lotNum} onChange={event => setLot(event.target.value)} placeholder="Lot Number" />
            
            <div className="button1">
                <Button className="button" onClick={() => onClickEvent() }>Submit</Button>
            </div>

            <h3 className="header3">If you are not fully vaccinated, please check out this information below to get vaccinated today!</h3>

            <div className="moreInfo">
                <a href="https://www.vaccines.gov/">Vaccine information</a>
            </div>
            
       </div>
        
    )
}

export default UnValidated
