import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Contador from './pages/ex1/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Contador />
  </React.StrictMode>
);