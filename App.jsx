import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import './App.css';

import { Home } from '/src/components/Home';
import { About } from '/src/components/About';
import { Error } from '/src/components/Error';
import { Restaurant } from '/src/components/Restaurant';
import Header from '/src/components/Header';
import { HeaderWithOnlineOfflineStatus } from './src/components/Header';
import ChatGPT from '/src/components/chatgpt';

const AppLayout = () => {
    const HeaderWithOnlineOfflineStatusComponent = HeaderWithOnlineOfflineStatus(Header);
    return (
        <div >
            <HeaderWithOnlineOfflineStatusComponent/>
            <Outlet/>
        </div>
    );
}  

export const App = () => {
    const appRouter = createBrowserRouter( [
        {path: '/', element: <AppLayout/>, children:[
            { path: '/', element: <Home/>, title: 'Home',},
            { path: '/about', element: <About/>, title: 'About', },
            { path: '/restaurant/:resId', element: < Restaurant />, title: 'Restaurant',},
            { path: '/chatgpt', element: <ChatGPT />, title: 'ChatGPT',}
        ],
        errorElement: <Error/>
        },
    ]);
    return (
        <RouterProvider router={appRouter} />
    );
}