import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { PageControl } from './components/pages/Pages';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PageControl />
  </React.StrictMode>
);
