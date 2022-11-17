import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text } from 'react-native';

import PositiveToggleButton from '../../../components/PositiveToggleButton';
import ScreenView from '../../../components/ScreenView';
import createFlowStackNavigateTo from '../../nav/createFlowStackNavigateTo';
import { FlowStackParamList, FlowStackRoute } from '../../nav/FlowStackRoutes';

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<FlowStackParamList, FlowStackRoute>>();
  const navigateTo = createFlowStackNavigateTo(navigation);

  return (
    <ScreenView>
      <Text>Home</Text>
      <Button title="Start" onPress={() => navigateTo.Step1()} />
      <PositiveToggleButton />
    </ScreenView>
  );
};

HomeScreen.ROUTE = 'Home' as const;

export default HomeScreen;
