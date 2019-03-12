import React, { Component, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { toggleMessage } from 'redux/actions/message';

// Components
import Header from 'components/Header';
import Message from 'components/Message';
import CookieBanner from 'components/CookieBanner';

// Routes
import Routes from 'pages/routes';

class Layout extends Component {
    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>;
    render() {
        const { message, toggleMessage } = this.props;
        return (
            <div className="app">
                <Message
                    title={message.title}
                    text={message.text}
                    color={message.color}
                    state={message.isActive}
                    toggle={toggleMessage}
                    className='word-wrap-break'
                />
                <CookieBanner
                    buttonText="Got it!"
                    buttonClasses="btn-block-xs-only"
                    bannerText={`This website uses cookies to ensure you get
                    the best experience.`}
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

Layout.propTypes = {
    message: PropTypes.object.isRequired,
    toggleMessage: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    message: state.message
});

export default connect(mapStateToProps, { toggleMessage })(Layout);
