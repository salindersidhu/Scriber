import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import PropTypes from 'prop-types';

// Components
import Header from 'components/Header';
import CookieBanner from 'components/CookieBanner';

class PageBase extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="app flex-row align-items-center">
                    <Container>
                        <Row className="justify-content-center">
                            <CookieBanner buttonClasses="btn-block-xs-only" />
                            {this.props.children}
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

PageBase.propTypes = {
    /**
     * React object.
     */
    children: PropTypes.object
};

export default PageBase;
