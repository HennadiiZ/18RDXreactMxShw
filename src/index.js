import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import store from './store/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


// npm install redux react-redux

// 233 Creating a Redux Store for React

// 234 Providing the Store

// 235 Using Redux Data in React Components

// 236 Dispatching Actions From Inside Components

// 237 Redux with Class-based Components

// 238 Attaching Payloads to Actions

// 239 Working with Multiple State Properties