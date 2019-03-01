import React, { Component, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Header from 'components/Header';
import CookieBanner from 'components/CookieBanner';

// Routes
import Routes from 'pages/routes';

class Layout extends Component {
    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>;
    render() {
        return (
            <div className="app">
                <CookieBanner
                    buttonText="Got it!"
                    buttonClasses="btn-block-xs-only"
                    bannerText="This website uses cookies to ensure you get the best experience."
                />
                <Header
                    name="Scriber"
                    img="./scriber.svg"
                    color="light"
                    fixed="top"
                    expand="md"
                    light 
                />
                <Suspense fallback={this.loading()}>
                    <Switch>
                        {Routes.map((route, idx) => {
                            return route.component ? (
                                <Route
                                    key={idx}
                                    path={route.path}
                                    exact={route.exact}
                                    render={props => (
                                        <route.component {...props} />
                                    )}
                                />
                            ) : (null);
                        })}
                    </Switch>
                </Suspense>
            </div>
        );
    }
}

export default Layout;
