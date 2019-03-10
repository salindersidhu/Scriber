import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Loadable from 'react-loadable';

// Redux store
import store from 'redux/store';

// Styles
import 'scss/style.scss';

// Load default page layout
const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;
const Layout = Loadable({
    loader: () => import('pages/layout'),
    loading
});

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path='/' component={Layout} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
