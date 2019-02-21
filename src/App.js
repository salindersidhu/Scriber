import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

// Styles
import 'App.scss';

// Pages
import Signin from 'pages/Signin';
import Signup from 'pages/Signup';
import Landing from 'pages/Landing';
import NotFound from 'pages/NotFound';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/signin' component={Signin} />
                    <Route exact path='/signup' component={Signup} />
                    <Route exact path='/' component={Landing} />
                    <Route name="404" component={NotFound} />
                </Switch>
            </Router>
        );
    }
}

export default App;
