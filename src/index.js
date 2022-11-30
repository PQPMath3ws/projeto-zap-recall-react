import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';

import Global from './styles/Global';
import Reset from "./styles/Reset";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Reset></Reset>
        <Global></Global>
        <App></App>
    </React.StrictMode>
);

reportWebVitals();
