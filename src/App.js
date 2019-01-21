import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

// Styles
import './App.scss';

// Pages
import Login from './pages/Login';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/login' name="Login Page" component={Login} />
                </Switch>
            </Router>
        );
    }
}

export default App;
