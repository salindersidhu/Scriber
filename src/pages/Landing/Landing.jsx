import React, { Component } from 'react';
import CookieConsent from 'react-cookie-consent';

// Components
import ContainerCenter from '../../components/ContainerCenter';

class Landing extends Component {
    render() {
        return (
            <ContainerCenter>
                <CookieConsent>
                    This website uses cookies to enhance the user experience.
                </CookieConsent>
            </ContainerCenter>
        );
    }
}

export default Landing;
