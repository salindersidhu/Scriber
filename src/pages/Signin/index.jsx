import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { 
    Button,
    Card,
    CardBody,
    CardGroup,
    Container,
    Col,
    Form,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Row
} from 'reactstrap';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { newAuth } from 'redux/actions/auth';
import { showError, showMessage } from 'redux/actions/message';

// Services
import Services from 'pages/services';

class SigninPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
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
        const { newAuth, showMessage, showError } = this.props;
        // Call Signin service to login
        Services.userSignin(this.state).then(response => {
            newAuth(response.data.token);
            showMessage('Signin Successful!');
        }).catch(error => {
            // Display error message based on response error
            switch(error) {
            case 400:
                showError(
                    'Bad email and password combination, please try again'
                );
                break;
            case 422:
                showError('Could not sign in, please try again!');
                break;
            default:
                showError(
                    `Could not communicate with the server! Please see the
                    application status page and check your network settings.`
                );
                break;
            }
        });
    }

    render() {
        const { email, password } = this.state;
        return (
            <div className="app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="8">
                            <CardGroup>
                                <Card className="p-4">
                                    <CardBody>
                                        <Form onSubmit={this.onSubmit}>
                                            <h1>Sign In</h1>
                                            <p className="text-muted">
                                                Sign In to your account
                                            </p>
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
                                            <InputGroup className="mb-4">
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
                                            <Row>
                                                <Col xs="6">
                                                    <Button
                                                        color="primary"
                                                        block
                                                    >
                                                        Sign In
                                                    </Button>
                                                </Col>
                                                <Col xs="6" className="text-right">
                                                    <Link to="/forgot-password">
                                                        <Button
                                                            color="link"
                                                            className="px-0"
                                                        >
                                                            Forgot password?
                                                        </Button>
                                                    </Link>
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
                                                <Button
                                                    color="primary"
                                                    className="mt-3"
                                                    tabIndex={-1}
                                                    active
                                                >
                                                    Sign Up Now!
                                                </Button>
                                            </Link>
                                        </div>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

SigninPage.propTypes = {
    newAuth: PropTypes.func.isRequired,
    showError: PropTypes.func.isRequired,
    showMessage: PropTypes.func.isRequired
};

export default connect(null, { newAuth, showError, showMessage })(SigninPage);
