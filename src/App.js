import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

// Styles
import 'App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Load default page layout
const Layout = Loadable({
    loader: () => import('pages/layout'),
    loading
});

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' component={Layout} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
