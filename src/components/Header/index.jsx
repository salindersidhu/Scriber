import React, { Component } from 'react';
import { Navbar } from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <Navbar color="light" light expand="md">
                <a className="navbar-brand float-left" href="/">
                    <img
                        src="./scriber.svg"
                        alt="Scriber logo."
                        className="d-inline-block align-top"
                        width="30"
                        height="30"
                    />
                    <h3 className="d-inline-block mb-0">
                        &nbsp;Scriber
                    </h3>
                </a>
            </Navbar>
        );
    }
}

export default Header;
