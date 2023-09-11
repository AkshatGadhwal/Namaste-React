import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { App } from './App';

import { inject } from '@vercel/analytics'; 
inject();




const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(root);
root.render(<App/>);