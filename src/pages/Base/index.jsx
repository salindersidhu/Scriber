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

class Base extends Component {
    render() {
        return (
            <div>
                <Header color="light" expand="md">
                    <img
                        src="./scriber.svg"
                        alt="scriber"
                        className="d-inline-block align-top"
                        height="26"
                        width="26"
                    />
                    <h4 className="d-inline-block mb-0 pl-1">Scriber</h4>
                </Header>
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

Base.propTypes = {
    /**
     * React object.
     */
    children: PropTypes.object
};

export default Base;
