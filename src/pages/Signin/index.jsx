import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { 
    Button,
    Card,
    CardBody,
    CardGroup,
    Col,
    Form,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Row
} from 'reactstrap';

// Pages
import BasePage from 'pages/Base/Page';

class Signin extends Component {
    render() {
        return (
            <BasePage>
                <Col md="8">
                    <CardGroup>
                        <Card className="p-4">
                            <CardBody>
                                <Form>
                                    <h1>Sign In</h1>
                                    <p className="text-muted">Sign In to your account</p>
                                    <InputGroup className="mb-3">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="fas fa-user-alt"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input type="text" placeholder="Username" autoComplete="username" />
                                    </InputGroup>
                                    <InputGroup className="mb-4">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                                <i className="fas fa-key"></i>
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input type="password" placeholder="Password" autoComplete="password" />
                                    </InputGroup>
                                    <Row>
                                        <Col xs="6">
                                            <Button color="primary" block>Sign In</Button>
                                        </Col>
                                        <Col xs="6" className="text-right">
                                            <Button color="link" className="px-0">Forgot password?</Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </CardBody>
                        </Card>
                        <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                            <CardBody className="text-center">
                                <div>
                                    <h2>Sign Up</h2>
                                    <p>Sign up now and create your own account to start transcribing audio with Scriber.</p>
                                    <Link to="/signup">
                                        <Button color="primary" className="mt-3" active tabIndex={-1}>Sign Up Now!</Button>
                                    </Link>
                                </div>
                            </CardBody>
                        </Card>
                    </CardGroup>
                </Col>
            </BasePage>
        );
    }
}

export default Signin;
