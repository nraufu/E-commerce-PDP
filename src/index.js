import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/* ------------------[ Styles ] ---------------------- */
import 'swiper/css';
import './assets/icons/fontisto/style.css';
import './assets/icons/line-icons/linear-icons-regular.css';
import './assets/styles/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
