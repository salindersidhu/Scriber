import React, { Component } from 'react';
import {
    Button,
    Card,
    CardBody,
    Container,
    Col,
    Row,
    Form,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText
} from 'reactstrap';

// Components
import PasswordMeter from 'components/PasswordMeter';

class SignupPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: ''
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { password } = this.state;
        return (
            <div className="app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
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
                                            <Input 
                                                name="password"
                                                type="password"
                                                placeholder="Password"
                                                autoComplete="password"
                                                value={password}
                                                onChange={this.onChange}
                                            />
                                        </InputGroup>
                                        <div className="mb-3">
                                            <PasswordMeter password={password} />
                                        </div>
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
                    </Row>
                </Container>
            </div>
        );
    }
}

export default SignupPage;
