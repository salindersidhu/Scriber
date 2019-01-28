import React, { Component } from 'react';
import { 
    Button,
    Col,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText
} from 'reactstrap';

// Components
import ContainerCenter from '../../components/ContainerCenter';

class Page404 extends Component {
    render() {
        return (
            <ContainerCenter>
                <Col md="6">
                    <div className="clearfix">
                        <h1 className="float-left display-3 mr-4">404</h1>
                        <h4 className="pt-3">Oops! You're lost.</h4>
                        <p className="text-muted float-left">The page you are looking for was not found.</p>
                    </div>
                    <InputGroup className="input-prepend">
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <i className="fas fa-search"></i>
                        </InputGroupText>
                    </InputGroupAddon>
                    <Input size="16" type="text" placeholder="What are you looking for?" />
                        <InputGroupAddon addonType="append">
                            <Button color="dark">Search</Button>
                        </InputGroupAddon>
                    </InputGroup>
                </Col>
            </ContainerCenter>
        );
    }
}

export default Page404;
