import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import { SafeAreaView, Text } from 'react-native';
import Onboarding from './screens/Onboarding';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  return <Onboarding />;
};

export default App;
