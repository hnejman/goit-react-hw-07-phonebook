import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/Templates/App/App.js';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename='goit-react-hw-08-phonebook'>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
