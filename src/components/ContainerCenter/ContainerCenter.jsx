import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';

class ContainerCenter extends Component {
    render() {
        return (
            <div className="app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        {this.props.children}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default ContainerCenter;
