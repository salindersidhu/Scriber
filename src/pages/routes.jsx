import React from 'react';

// Lazy load pages
const MainPage = React.lazy(() => import('pages/Main'));
const SigninPage = React.lazy(() => import('pages/Signin'));
const SignupPage = React.lazy(() => import('pages/Signup'));
const NotFoundPage = React.lazy(() => import('pages/NotFound'));

// Routes
const routes = [
    { path: '/', exact: true, component: MainPage },
    { path: '/signin', exact: true, component: SigninPage },
    { path: '/signup', exact: true, component: SignupPage },
    { path: '/*', component: NotFoundPage }
];

export default routes;
