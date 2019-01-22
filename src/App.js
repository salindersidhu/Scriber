import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

// Styles
import './App.scss';

// Pages
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Page404 from './pages/Page404';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/signin' name="Signin Page" component={Signin} />
                    <Route exact path='/signup' name="Signup Page" component={Signup} />
                    <Route name="404" component={Page404} />
                </Switch>
            </Router>
        );
    }
}

export default App;
