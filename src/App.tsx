/**
 * React Native App with React Navigation
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';

import ConditionalText from './components/ConditionalText';
import ScreenView from './components/ScreenView';

import FlowStack from './flow/nav/FlowStack';
import useFlowStackNavigatorNavigate from './flow/nav/useFlowStackNavigatorNavigate';

import FlowStateContext from './flow/sm/FlowStateContext';
import useFlowStateContext from './flow/sm/useFlowStateContext';
import useFlowStateContextProviderValue from './flow/sm/useFlowStateContextProviderValue';

export const APP_NAME = 'AndroidStartupPerfApp';

const App = () => {
  // eslint-disable-next-line prettier/prettier
  return (
    <Flow />
  );
};

export default App;
