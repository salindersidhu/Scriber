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
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { showError, showMessage } from 'redux/actions/message';

// Services
import Services from 'pages/services';

// Components
import PasswordMeter from 'components/PasswordMeter';

class SignupPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        // Obtain functions from props
        const { showMessage, showError } = this.props;
        // Call Signup service to create a new account
        Services.userSignup(this.state).then(() => {
            showMessage('Signup successfully!');
        }).catch((error) => {
            if (error.response) {
                if (error.response.status === 400) {
                    showError(
                        `An account with that email already exists! Please try
                        a different email.`
                    );
                } else {
                    showError(
                        'Your account could not be created, please try again!'
                    );
                }
            } else {
                showError(
                    `Could not communicate with the server! Please see the
                    application status page and check your network settings.`
                );
            }
        });
    }

    render() {
        const { email, username, password } = this.state;
        return (
            <div className="app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="9" lg="7" xl="6">
                            <Card className="mx-4">
                                <CardBody className="p-4">
                                    <Form onSubmit={this.onSubmit}>
                                        <h1>Sign Up</h1>
                                        <p className="text-muted">
                                            Sign up for your account
                                        </p>
                                        <InputGroup className="mb-3">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="fas fa-user-alt"></i>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                name="username"
                                                type="text"
                                                placeholder="Username"
                                                autoComplete="username"
                                                value={username}
                                                onChange={this.onChange}
                                            />
                                        </InputGroup>
                                        <InputGroup className="mb-3">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                    <i className="fas fa-envelope"></i>
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                name="email"
                                                type="text"
                                                placeholder="Email"
                                                autoComplete="email"
                                                value={email}
                                                onChange={this.onChange}
                                            />
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
                                            <PasswordMeter
                                                password={password}
                                            />
                                        </div>
                                        <Button
                                            color="primary"
                                            type="submit"
                                            block
                                        >
                                            Sign Up
                                        </Button>
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

SignupPage.propTypes = {
    showError: PropTypes.func.isRequired,
    showMessage: PropTypes.func.isRequired
};

export default connect(null, { showError, showMessage })(SignupPage);
