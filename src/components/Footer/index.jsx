import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="app-footer">
                <p className="mt-2 mb-2">
                    Copyright &copy; {new Date().getFullYear()}
                </p>
            </footer>
        );
    }
}

export default Footer;
