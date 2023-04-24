import React from 'react';
import {NativeBaseProvider} from 'native-base';
import Intro from './screen/intor';
import Home from './screen/App/Home/Home';

function App(){
 
  return (
    <NativeBaseProvider>
      <Home />
    </NativeBaseProvider>
  );
}

export default App;
