import React from 'react'
import './Header.css'
import Logout from './Logout'

function Header() {
    return (
        <div className="HeaderContainer">
            <a className="LeftHeader">Vaccinators</a>
           <a className="RightHeader">
                <Logout />
           </a>
        </div>
    )
}

export default Header
