import React from 'react';
import { Button, Text } from 'react-native';

import ScreenView from '../../../components/ScreenView';

import useFlowStackNavigatorNavigate from '../../nav/useFlowStackNavigatorNavigate';
import LandingScreenFragment from './LandingScreenFragment';

const LogoutScreen = () => {
  const { navigateTo } = useFlowStackNavigatorNavigate();
  const handleConfirmLogoutButtonPress = () => {
    navigateTo.Home();
    LandingScreenFragment.show();
  };

  return (
    <ScreenView>
      <Text>Logout</Text>
      <Button title="Confirm logout" onPress={handleConfirmLogoutButtonPress} />
    </ScreenView>
  );
};

LogoutScreen.ROUTE = 'Logout' as const;

export default LogoutScreen;
