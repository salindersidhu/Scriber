import React, { Component } from 'react';
import {
    Button,
    Card,
    CardBody,
    Col,
    Form,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText
} from 'reactstrap';

// Components
import ContainerCenter from '../../components/ContainerCenter';

class Signup extends Component {
    render() {
        return (
            <ContainerCenter>
                <Col md="9" lg="7" xl="6">
                    <Card className="mx-4">
                        <CardBody className="p-4">
                            <Form>
                                <h1>Sign Up</h1>
                                <p className="text-muted">Sign Up for your account</p>
                                <InputGroup className="mb-3">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="fas fa-user-alt"></i>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input type="text" placeholder="Username" autoComplete="username" />
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="fas fa-envelope"></i>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input type="text" placeholder="Email" autoComplete="email" />
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="fas fa-key"></i>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input type="password" placeholder="Password" autoComplete="password" />
                                </InputGroup>
                                <InputGroup className="mb-4">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="fas fa-key"></i>
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input type="password" placeholder="Confirm Password" autoComplete="password" />
                                </InputGroup>
                                <Button color="primary" block>Sign Up</Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </ContainerCenter>
        );
    }
}

export default Signup;
