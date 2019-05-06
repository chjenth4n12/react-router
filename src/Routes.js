import React from 'react';
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Product from './components/Product';
import Login from './components/Login';
import Register from './components/Register';

const routes = [
    {
        path : '/',
        exact : true,
        main : () => <Home />
    },
    {
        path : '/about',
        exact : true,
        main : () => <About />
    },
    {
        path : '/contact',
        exact : true,
        main : () => <Contact />
    },
    {
        path : '/product',
        exact : false,
        main : ({ match, location }) => <Product match={ match } location={ location }/>
    },
    {
        path : '/login',
        exact : true,
        main : ({ location }) => <Login location={ location }/>
    },
    {
        path : '/register',
        exact : true,
        main : () => <Register />
    },
    {
        path : '',
        exact : false,
        main : () => <NotFound />
    }
];

export default routes;