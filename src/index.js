import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/Templates/App/App.js';
import './styles.css';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import { BrowserRouter } from 'react-router-dom';
import {  overrides } from './theme/index.jsx';
import {  ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme = {overrides} >
      <Provider store={store}>
        <BrowserRouter basename="goit-react-hw-08-phonebook">
          <App />
        </BrowserRouter>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
