import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { propsNavigationStack } from './types';
import { isIOS } from '../helpers/deviceInfo';
import { colors } from '../theme';

import Home from '../screens/Home';
import Detail from '../screens/Detail';
import Filter from '../screens/Filter';

const InsideStack = createStackNavigator<propsNavigationStack>();

export const InsideRoutes = () => (
  <InsideStack.Navigator
    screenOptions={{
      headerBackTitleVisible: false,
      headerTintColor: isIOS ? colors.background : colors.white,
      headerTitleAlign: 'left',
      headerBackground: () => {
        if (isIOS) {
          return <View style={styles.headerIOS} />;
        }
        return <View style={styles.headerAndroid} />;
      },
    }}>
    <InsideStack.Screen
      name='Home'
      component={Home}
      options={{
        title: !isIOS ? 'Fighters' : '',
      }}
    />
    <InsideStack.Screen name='Detail' component={Detail} />
    <InsideStack.Screen name='Filter' component={Filter} />
  </InsideStack.Navigator>
);

export default InsideRoutes;

export const styles = StyleSheet.create({
  headerIOS: {
    flex: 1,
    backgroundColor: colors.white,
  },
  headerAndroid: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
