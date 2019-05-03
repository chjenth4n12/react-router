import React from 'react';
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Product from './components/Product';

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
        main : ({ match }) => <Product match={match}/>
    },
    {
        path : '',
        exact : false,
        main : () => <NotFound />
    }
];

export default routes;