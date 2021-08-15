import React from 'react'
import './Header.css'
import Logout from './Logout'

function Header(props) {
    const { is_logged_in } = props.props;

    return (
        <div className="HeaderContainer">
            <a className="LeftHeader">Vaccinators</a>
           <a className="RightHeader">
                {is_logged_in ? <Logout /> : <div/>}
           </a>
        </div>
    )
}

export default Header
