import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import './App.css';

import { Home } from '/src/components/Home';
import { About } from '/src/components/About';
import { Error } from '/src/components/Error';
import { Restaurant } from '/src/components/Restaurant';
import Header from '/src/components/Header';

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