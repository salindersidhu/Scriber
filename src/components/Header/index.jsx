import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import PropTypes from 'prop-types';

class Header extends Component {
    renderNavBrand(children) {
        return (
            <NavbarBrand href="/">
                {children}
            </NavbarBrand>
        );
    }

    renderNavMenu() {
        return (
            <Nav className="ml-auto" navbar>
                <NavItem className="d-md-down-none">
                    <NavLink href="#">
                        <i className="icon-bell"></i>
                    </NavLink>
                </NavItem>
                <NavItem className="d-md-down-none">
                    <NavLink href="#">
                        <i className="icon-options"></i>
                    </NavLink>
                </NavItem>
            </Nav>
        );
    }

    render() {
        const { children, ...attributes } = this.props;
        return (
            <Navbar {...attributes}>
                {this.renderNavBrand(children)}
                <NavbarToggler/>
                {this.renderNavMenu()}
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
