import React, { Component } from 'react';
import CookieConsent from 'react-cookie-consent';

const styles = {
    'main': {
        fontSize: '16px',
        background: 'black'
    },
    'button': {
        color: 'black',
        fontSize: '14px',
        fontWeight: 'bold',
        padding: '5px 50px',
        cursor: 'pointer',
        flex: 'none !important'
    }
};

class CookieBanner extends Component {
    render() {
        return (
            <CookieConsent
                buttonText="Got it!"
                style={styles.main}
                buttonStyle={styles.button}
                buttonClasses="btn-block-xs-only"
            >
                This website uses cookies to ensure you get the best experience on our website.{' '}
                <a
                    href="https://cookiesandyou.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn More
                </a>
            </CookieConsent>
        );
    }
}

export default CookieBanner;
