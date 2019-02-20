import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CookieConsent from 'react-cookie-consent';

const styles = {
    main: {
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
        const { bannerText, buttonText, buttonClasses } = this.props;
        return (
            <CookieConsent
                style={styles.main}
                buttonText={buttonText}
                buttonStyle={styles.button}
                buttonClasses={buttonClasses}
            >
                {bannerText}
            </CookieConsent>
        );
    }
}

CookieBanner.propTypes = {
    bannerText: PropTypes.string,
    buttonText: PropTypes.string,
    buttonClasses: PropTypes.string
};

CookieBanner.defaultProps = {
    bannerText: 'This website uses cookies to ensure you get the best experience on our website.',
    buttonText: 'Got it!',
};

export default CookieBanner;
