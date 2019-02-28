import React, { Component } from 'react';
import CookieConsent from 'react-cookie-consent';
import PropTypes from 'prop-types';

const styles = {
    banner: {
        fontSize: '16px',
        background: 'black'
    },
    button: {
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
        const { buttonText, buttonClasses, bannerText } = this.props;
        return (
            <CookieConsent
                style={styles.banner}
                buttonStyle={styles.button}
                buttonText={buttonText}
                buttonClasses={buttonClasses}
            >
                {bannerText}
            </CookieConsent>
        );
    }
}

CookieBanner.propTypes = {
    /**
     * Cookie banner acknowledgement button text.
     */
    bannerText: PropTypes.string,
    /**
     * Cookie banner acknowledgement button classes.
     */
    buttonClasses: PropTypes.string,
    /**
     * Cookie banner text.
     */
    buttonText: PropTypes.string
};

export default CookieBanner;
