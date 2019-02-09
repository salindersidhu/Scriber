import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';

// Components
import CookieBanner from 'components/CookieBanner';

class Landing extends Component {
    render() {
        return (
            <div className="app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <CookieBanner />
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Landing;
