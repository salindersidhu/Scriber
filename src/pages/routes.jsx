import React from 'react';

// Lazy load pages
const MainPage = React.lazy(() => import('pages/Main'));
const LoginPage = React.lazy(() => import('pages/Login'));
const RegisterPage = React.lazy(() => import('pages/Register'));
const NotFoundPage = React.lazy(() => import('pages/NotFound'));

// Routes
const routes = [
    { path: '/', exact: true, component: MainPage },
    { path: '/login', exact: true, component: LoginPage },
    { path: '/register', exact: true, component: RegisterPage },
    { path: '/*', component: NotFoundPage }
];

export default routes;
