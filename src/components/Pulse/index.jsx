import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'reactstrap';

class Pulse extends Component {
    render() {
        return (
            <Spinner {...this.props} type="grow"/>
        );
    }
}

Pulse.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string,
    style: PropTypes.object,
    className: PropTypes.string,
    cssModule: PropTypes.object,
    children: PropTypes.string
};

Pulse.defaultProps = {
    size: 'lg',
    color: 'dark',
};

export default Pulse;
