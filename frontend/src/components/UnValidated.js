import React from 'react'
import './UnValidated.css'

import { Button } from '@material-ui/core'

function UnValidated() {

    var firstName;
    var lastName;
    var lotNum;

    return (
        <div>
            <h3 className="header1">If you are fully vaccinated, enter the following information below </h3>
           
            <p className="header2">Enter your lot number to validate your vaccination status</p>
            
            <input className="input1" value={firstName} placeholder="First Name" />
            <input className="input1" value={lastName} placeholder="Last Name" />
            <input className="input1" value={lotNum} placeholder="Lot Number" />
            
            <div className="button1">
                <Button className="button">Submit</Button>
            </div>

            <h3 className="header3">If you are not fully vaccinated, please check out this information below to get vaccinated today!</h3>

            <div className="moreInfo">
                <a href="https://www.vaccines.gov/">Vaccine information</a>
            </div>
            
        </div>
        
    )
}

export default UnValidated
