import React from 'react';
import {NativeBaseProvider} from 'native-base';
import Intro from './screen/intor';

function App(){
 
  return (
    <NativeBaseProvider>
      <Intro />
    </NativeBaseProvider>
  );
}

export default App;
