/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import store from './source/redux/store';
import {Provider} from 'react-redux';
import NavContainer from './source/navigations';

const App = () => {
  return (
    <Provider store={store}>
      <NavContainer />
    </Provider>
  );
};

export default App;
