import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './style/style.scss';
import './upload/normalize.css';
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById('root'))



root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

reportWebVitals();
