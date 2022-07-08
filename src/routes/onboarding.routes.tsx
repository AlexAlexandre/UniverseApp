import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Onboarding from '../screens/Onboarding';

const OnboardingStack = createStackNavigator();

export const OnboardingRoutes = () => (
  <OnboardingStack.Navigator>
    <OnboardingStack.Screen name='Onboarding' component={Onboarding} options={{ headerShown: false }} />
  </OnboardingStack.Navigator>
);

export default OnboardingRoutes;
