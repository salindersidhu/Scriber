import React, { Component } from 'react';
import { Progress } from 'reactstrap';

import zxcvbn from 'zxcvbn';

class PasswordMeter extends Component {
    colorMap(value) {
        if (value <= 20) {
            return 'pm-red';
        } else if (value <= 40) {
            return 'pm-yellow';
        } else if (value <= 60) {
            return 'orange';
        } else if (value <= 80) {
            return 'orange';
        }
        return 'green';
    }

    render() {
        const { value } = this.props;
        let score = value.length > 0 ? (zxcvbn(value).score + 1) * 20 : 0;

        return (
            <Progress color={this.colorMap(score)} value={score} />
        );
    }
}

export default PasswordMeter;
