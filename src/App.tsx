import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import GlobalStyle from './global';
import Catalog from './components/Catalog';


function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Catalog />
    </Provider>
  );
}

export default App;
