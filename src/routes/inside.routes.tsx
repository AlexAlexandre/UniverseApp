import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Detail from '../screens/Detail';
import Filter from '../screens/Filter';

import { propsNavigationStack } from './types';

const InsideStack = createStackNavigator<propsNavigationStack>();

export const InsideRoutes = () => (
  <InsideStack.Navigator>
    <InsideStack.Screen name='Home' component={Home} />
    <InsideStack.Screen name='Detail' component={Detail} />
    <InsideStack.Screen name='Filter' component={Filter} />
  </InsideStack.Navigator>
);

export default InsideRoutes;
