import React from 'react'
import './Header.css'
import Logout from './Logout'
import GavelIcon from '@material-ui/icons/Gavel';

function Header(props) {
    const { is_logged_in } = props.props;

    return (
        <div className="HeaderContainer">
            <a className="LeftHeader">
                Vaccinators
                <GavelIcon className="gavel" />
            </a>
           <a className="RightHeader">
                {is_logged_in ? <Logout /> : <div/>}
           </a>
        </div>
    )
}

export default Header
