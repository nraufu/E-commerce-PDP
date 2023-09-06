/* eslint-disable import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/* ------------------[ Styles ] ---------------------- */
import 'swiper/css';
import 'swiper/css/navigation';
import './assets/icons/fontisto/style.css';
import './assets/styles/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
