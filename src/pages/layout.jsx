import React, { Component, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

// Components
import Header from 'components/Header';
import CookieBanner from 'components/CookieBanner';

// Routes
import routes from 'pages/routes';

class Layout extends Component {
    loading () {
        return (
            <div className="animated fadeIn pt-1 text-center">
                Loading...
            </div>
        );
    }

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
                <div className="app-body">
                    <main className="main">
                        <Container fluid>
                            <Suspense fallback={this.loading()}>
                                <Switch>
                                    {routes.map((route, idx) => {
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
                        </Container>
                    </main>
                </div>
            </div>
        );
    }
}

export default Layout;
