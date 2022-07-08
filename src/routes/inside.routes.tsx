import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';

const InsideStack = createStackNavigator();

export const InsideRoutes = () => (
  <InsideStack.Navigator>
    <InsideStack.Screen name='Home' component={Home} />
  </InsideStack.Navigator>
);

export default InsideRoutes;
