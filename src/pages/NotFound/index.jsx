import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';

class NotFoundPage extends Component {
    render() {
        return (
            <div className="app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
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
                    </Row>
                </Container>
            </div>
        );
    }
}

export default NotFoundPage;
