import React from 'react';
import { useFirstAccess } from '../contexts/firstAccess.context';
import OnboardingRoutes from './onboarding.routes';
import InsideRoutes from './inside.routes';

const Routes = () => {
  const { firstAccess } = useFirstAccess();
  return firstAccess ? <OnboardingRoutes /> : <InsideRoutes />;
};

export default Routes;
