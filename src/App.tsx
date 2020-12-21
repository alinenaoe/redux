import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import GlobalStyle from './global';
import Catalog from './components/Catalog';
import Cart from './components/Cart';


function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Catalog />
      <Cart />
    </Provider>
  );
}

export default App;
