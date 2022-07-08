import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';
import { FirstAccessProvider } from './contexts/firstAccess.context';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <FirstAccessProvider>
          <Routes />
        </FirstAccessProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
