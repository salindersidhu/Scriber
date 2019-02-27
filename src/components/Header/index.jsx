import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import PropTypes from 'prop-types';

class Header extends Component {
    renderNavBrand(name, img) {
        return (
            <NavbarBrand href="/">
                <img
                    src={img}
                    alt={name}
                    className="d-inline-block align-top"
                    height="26"
                    width="26"
                />
                <h4 className="d-inline-block mb-0 pl-1">{name}</h4>
            </NavbarBrand>
        );
    }

    renderNavMenu() {
        return (
            <Nav className="ml-auto" navbar>
                <NavItem className="d-md-down-none">
                    <NavLink href="#">
                        <i className="fas fa-bell"></i>
                    </NavLink>
                </NavItem>
                <NavItem className="d-md-down-none">
                    <NavLink href="#">
                        <i className="fas fa-ellipsis-v"></i>
                    </NavLink>
                </NavItem>
            </Nav>
        );
    }

    render() {
        const { name, img, ...attributes } = this.props;
        return (
            <Navbar {...attributes}>
                {this.renderNavBrand(name, img)}
                <NavbarToggler/>
                {this.renderNavMenu()}
            </Navbar>
        );
    }
}

Header.propTypes = {
    /**
     * Header brand name.
     */
    name: PropTypes.string,
    /**
     * Header logo image file.
     */
    img: PropTypes.string
};

export default Header;
