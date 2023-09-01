import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { App } from './App';

const ele = React.createElement('h1', null, 'Hello World!');

console.log(ele);

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(root);
root.render(ele);