import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import './App.css';

import { Home } from './components/Home';
import { About } from './components/About';
import { Error } from './components/Error';
import { Restaurant } from './components/Restaurant';
import Header from './components/Header';

const AppLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
}  

export const App = () => {
    const appRouter = createBrowserRouter( [
        {path: '/', element: <AppLayout/>, children:[
            { path: '/', element: <Home/>, title: 'Home',},
            { path: '/about', element: <About/>, title: 'About', },
            { path: '/restaurant/:resId', element: < Restaurant />, title: 'Restaurant',}
        ],
        errorElement: <Error/>
        },
    ]);
    return (
        <RouterProvider router={appRouter} />
    );
}