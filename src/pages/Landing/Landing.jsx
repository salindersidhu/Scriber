import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import CookieConsent from 'react-cookie-consent';

const message = "This website uses cookies to ensure you get the best experience on our website."

class Landing extends Component {
    render() {
        return (
            <div className="app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <CookieConsent>
                            {message}
                        </CookieConsent>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Landing;
