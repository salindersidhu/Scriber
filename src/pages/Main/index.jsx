import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Jumbotron, Button } from 'reactstrap';

class MainPage extends Component {
    render() {
        return (
            <div className="app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Jumbotron>
                            <h1 className="display-3">
                                <img 
                                    src="./scriber.svg"
                                    alt=""
                                    height="80"
                                    className="align-bottom mr-2 pt-2 pb-2"
                                />
                                <b>
                                    Scriber
                                </b>
                            </h1>
                            <p className="lead">
                                Welcome to your cloud based AI assisted digital audio transcription service.
                            </p>
                            <hr className="my-2" />
                            <p>
                                Explore the possibilities, try Scriber for free now!
                            </p>
                            <p className="lead">
                                <Link to="/signin">
                                    <Button color="primary">
                                        Get Started
                                    </Button>
                                </Link>
                            </p>
                        </Jumbotron>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default MainPage;
