import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import { SafeAreaView, Text } from 'react-native';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <SafeAreaView style={{ alignItems: 'center' }}>
      <Text>Hello World</Text>
    </SafeAreaView>
  );
};

export default App;
