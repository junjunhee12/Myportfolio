import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import Main from './Main';
import { PrContentProvider } from './contexts/prContent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PrContentProvider defaultValue={"ko"}>
    <Main />
  </PrContentProvider>
);

