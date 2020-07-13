import React from 'react';
import {StatusBar} from 'react-native';

import Routes from './src/routes';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />

      <Routes />
    </>
  );
};

export default App;
