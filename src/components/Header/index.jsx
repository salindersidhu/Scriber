import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import PropTypes from 'prop-types';

class Header extends Component {
    render() {
        const { children, ...otherProps } = this.props;
        return (
            <Navbar light {...otherProps}>
                <NavbarBrand href="/">
                    {children}
                </NavbarBrand>
                <NavbarToggler/>
                <Collapse navbar>
                    <Nav className="ml-auto" navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                App
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    About
                                </DropdownItem>
                                <DropdownItem>
                                    Logout
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

Header.propTypes = {
    /**
     * Array of React objects.
     */
    children: PropTypes.array
};

export default Header;
