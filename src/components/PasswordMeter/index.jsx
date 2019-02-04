import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Progress } from 'reactstrap';

import zxcvbn from 'zxcvbn';

class PasswordMeter extends Component {
    colorMap(value) {
        if (value <= 20) {
            return 'pm-red';
        } else if (value <= 40) {
            return 'pm-yellow';
        } else if (value <= 80) {
            return 'orange';
        }
        return 'green';
    }

    render() {
        const { password } = this.props;
        const score = password.length > 0 ? (zxcvbn(password).score + 1) * 20 : 0;
        return (
            <Progress color={this.colorMap(score)} value={score} />
        );
    }
}

PasswordMeter.propTypes = {
    /**
     * String text password.
     */
    password: PropTypes.string
};

export default PasswordMeter;
