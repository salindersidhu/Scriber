import React, { Component } from 'react';
import { Container, Row, Jumbotron, Button } from 'reactstrap';

class MainPage extends Component {
    render() {
        return (
            <div className="app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Jumbotron>
                            <h1 className="display-3">
                                Hello, world!
                            </h1>
                            <p className="lead">
                                This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.
                            </p>
                            <hr className="my-2" />
                            <p>
                                It uses utility classes for typography and spacing to space content out within the larger container.
                            </p>
                            <p className="lead">
                                <Button color="primary">
                                    Learn More
                                </Button>
                            </p>
                        </Jumbotron>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default MainPage;
