// Esse arquivo não podemos deletar. ele é nosso "bootstrap" da aplicação, o nosso ponto de entrada da aplicação que vai renderizar todo o App.

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


