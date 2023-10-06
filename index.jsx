import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useTheme } from './src/utils/useTheme';    

import { App } from './App';

import './index.css';

import { inject } from '@vercel/analytics'; 
inject();

const theme = window.localStorage.getItem('theme') || 'light';

theme === 'dark' ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');

window.localStorage.setItem("theme",theme)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);