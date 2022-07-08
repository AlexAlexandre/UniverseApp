import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import Onboarding from './screens/Onboarding';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <SafeAreaProvider>
      <Onboarding />
    </SafeAreaProvider>
  );
};

export default App;
