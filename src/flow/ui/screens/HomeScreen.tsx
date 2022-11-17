import React from 'react';
import { Button, Text } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import PositiveToggleButton from '../../../components/PositiveToggleButton';
import ScreenView from '../../../components/ScreenView';
import createFlowStackNavigateTo from '../../nav/createFlowStackNavigateTo';

const HomeScreen = (props: NavigationInjectedProps) => {
  const navigation = props.navigation;
  const navigateTo = createFlowStackNavigateTo(navigation);

  return (
    <ScreenView>
      <Text>Home</Text>
      <Button title="Start" onPress={() => navigateTo.Step1()} />
      <Button title="Login" onPress={() => navigateTo.Login()} />
      <Button title="Logout" onPress={() => navigateTo.Logout()} />
      <Button title="Register" onPress={() => navigateTo.Register()} />
      <PositiveToggleButton />
    </ScreenView>
  );
};

HomeScreen.ROUTE = 'Home' as const;

export default HomeScreen;
