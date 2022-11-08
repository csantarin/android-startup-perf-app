import React from 'react';
import { Button, Text } from 'react-native';

import PositiveToggleButton from '../../../components/PositiveToggleButton';
import ScreenView from '../../../components/ScreenView';

import useFlowStackNavigatorNavigate from '../../nav/useFlowStackNavigatorNavigate';

const HomeScreen = () => {
  const { navigateTo } = useFlowStackNavigatorNavigate();

  return (
    <ScreenView>
      <Text>Home</Text>
      <Button title="Start" onPress={navigateTo.Step1} />
      <Button title="Login" onPress={navigateTo.Login} />
      <Button title="Logout" onPress={navigateTo.Logout} />
      <Button title="Register" onPress={navigateTo.Register} />
      <PositiveToggleButton />
    </ScreenView>
  );
};

HomeScreen.ROUTE = 'Home' as const;

export default HomeScreen;
