import React from 'react';
import { Button, Text } from 'react-native';

import ScreenView from '../../../components/ScreenView';
import ModalDemo from '../../../modal/ui/ModalDemo';

import useFlowStackNavigatorNavigate from '../../nav/useFlowStackNavigatorNavigate';

const HomeScreen = () => {
  const { navigateTo } = useFlowStackNavigatorNavigate();

  return (
    <ScreenView>
      <Text>Home</Text>
      <Button title="Start" onPress={navigateTo.Step1} />
      <ModalDemo />
    </ScreenView>
  );
};

HomeScreen.ROUTE = 'Home' as const;

export default HomeScreen;
