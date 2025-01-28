import React from 'react';
import { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import SampleComponent from './SampleComponent';
import StylingComponent from './pages/StylingComponent';
import PositionReactNative from './pages/PositionReactNative';
import PropsDinamis from './pages/PropsDinamis';
import StateDinamis from './pages/StateDinamis';
import Communication from './pages/Communication';

const App = () => {
  const [isShow, setIsShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsShow(false);
    }, 6000);
}, []);

  return (
    <View>
      <ScrollView>
        {/* <SampleComponent/> */}
        {/* <StylingComponent/> */}
        {/* <PositionReactNative /> */}
        {/* <PropsDinamis /> */}
        {/* <StateDinamis /> */}
        <Communication />
      </ScrollView>
    </View>
  );
};

export default App;
