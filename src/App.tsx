import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Routes from './routes';

import { FirstAccessProvider } from './contexts/firstAccess.context';
import { FilterProvider } from './contexts/filters.context';

Icon.loadFont();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <FirstAccessProvider>
          <FilterProvider>
            <Routes />
          </FilterProvider>
        </FirstAccessProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
