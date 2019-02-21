import React, { Component } from 'react';
import { Col } from 'reactstrap';

// Pages
import Base from 'pages/Base';

class NotFound extends Component {
    render() {
        return (
            <Base>
                <Col md="6">
                    <div className="clearfix">
                        <h1 className="float-left display-3 mr-4">
                            404
                        </h1>
                        <h4 className="pt-3">
                            Oops! You're lost.
                        </h4>
                        <p className="text-muted float-left">
                            The page you were looking for was moved or doesn't exist.
                        </p>
                    </div>
                </Col>
            </Base>
        );
    }
}

export default NotFound;
