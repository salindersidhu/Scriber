import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import CookieConsent from 'react-cookie-consent';
import PropTypes from 'prop-types';

// Components
import Header from 'components/Header';

const styles = {
    cookieBanner: {
        fontSize: '16px',
        background: 'black'
    },
    cookieButton: {
        color: 'black',
        fontSize: '14px',
        fontWeight: 'bold',
        padding: '5px 50px',
        cursor: 'pointer',
        flex: 'none !important'
    }
};

class BasePage extends Component {
    render() {
        return (
            <div>
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
                            <CookieConsent
                                style={styles.cookieBanner}
                                buttonStyle={styles.cookieButton}
                                buttonText="Got it!"
                                buttonClasses="btn-block-xs-only"
                            >
                                This website uses cookies to ensure you get the best experience.
                            </CookieConsent>
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
