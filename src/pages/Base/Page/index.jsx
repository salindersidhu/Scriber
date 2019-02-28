import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import PropTypes from 'prop-types';

// Components
import Header from 'components/Header';
import CookieBanner from 'components/CookieBanner';

class BasePage extends Component {
    render() {
        return (
            <div>
                <CookieBanner
                    buttonText="Got it!"
                    buttonClasses="btn-block-xs-only"
                    bannerText="This website uses cookies to ensure you get the best experience."
                />
                <Header
                    name="Scriber"
                    img="./scriber.svg"
                    color="light"
                    fixed="top"
                    expand="md"
                    light 
                />
                <div className="app flex-row align-items-center">
                    <Container>
                        <Row className="justify-content-center">
                            {this.props.children}
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

BasePage.propTypes = {
    /**
     * React object.
     */
    children: PropTypes.object
};

export default BasePage;
