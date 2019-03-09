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

// Services
import Services from 'pages/services';

// Components
import Message from 'components/Message';
import PasswordMeter from 'components/PasswordMeter';

class SignupPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            messageText: '',
            messageTitle: '',
            messageColor: '',
            messageState: false
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.setMessage = this.setMessage.bind(this);
        this.showMessage = this.showMessage.bind(this);
        this.toggleMessage = this.toggleMessage.bind(this);
    }

    onChange(e) {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        Services.CreateUser(this.state).then(() => {
            this.showMessage('Your account was created successfully!');
        }).catch((error) => {
            if (error.response) {
                if (error.response.status === 400) {
                    this.showMessage(
                        `An account with that email already exists! Please try
                        a different email.`,
                        true
                    );
                } else if (error.response.status === 422) {
                    this.showMessage(
                        'Your account could not be created, please try again!',
                        true
                    );
                }
            } else {
                this.showMessage(
                    `Could not communicate with the server! Please see the
                    application status page and check your network settings.`,
                    true
                );
            }
        });
    }

    setMessage(title, text, color) {
        this.setState({
            messageText: text,
            messageTitle: title,
            messageColor: color
        });
    }

    showMessage(text, isError=false) {
        this.setMessage(
            isError ? 'Uh Oh' : 'Notification',
            text,
            isError ? 'danger' : 'success');
        this.toggleMessage();
    }

    toggleMessage() {
        this.setState(prevState => ({
            messageState: !prevState.messageState
        }));
    }

    render() {
        const { 
            email,
            username,
            password,
            messageText,
            messageTitle,
            messageColor,
            messageState
        } = this.state;
        return (
            <div className="app flex-row align-items-center">
                <Message
                    text={messageText}
                    title={messageTitle}
                    color={messageColor}
                    state={messageState}
                    toggle={this.toggleMessage}
                />
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

export default SignupPage;
