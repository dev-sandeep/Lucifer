import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

class Menu extends React.Component {

    render() {
        return (

            <NavDropdown title="Pages" id="nav-dropdown">

                <NavDropdown.Item>
                    <Link to='/about' >About Us</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                    <Link to='/contact' >Contact Us</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                    <Link to='/help' >Help Us</Link>
                </NavDropdown.Item>
            </NavDropdown>

        )
    }
}

export default Menu;