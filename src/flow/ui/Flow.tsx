import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import FlowStack from '../nav/FlowStack';

import FlowStateContext from '../sm/FlowStateContext';
import useFlowStateContextProviderValue from '../sm/useFlowStateContextProviderValue';

import CompleteScreen from './screens/CompleteScreen';
import HomeScreen from './screens/HomeScreen';
import ReviewScreen from './screens/ReviewScreen';
import Step1Screen from './screens/Step1Screen';
import Step2Screen from './screens/Step2Screen';
import Step3Screen from './screens/Step3Screen';

const Flow = () => {
  const flowDataStateContextValue = useFlowStateContextProviderValue();

  return (
    <FlowStateContext.Provider value={flowDataStateContextValue}>
      <NavigationContainer>
        <FlowStack.Navigator initialRouteName="Home">
          <FlowStack.Screen name="Home" component={HomeScreen} />
          <FlowStack.Screen name="Step1" component={Step1Screen} />
          <FlowStack.Screen name="Step2" component={Step2Screen} />
          <FlowStack.Screen name="Step3" component={Step3Screen} />
          <FlowStack.Screen name="Review" component={ReviewScreen} />
          <FlowStack.Screen name="Complete" component={CompleteScreen} />
        </FlowStack.Navigator>
      </NavigationContainer>
    </FlowStateContext.Provider>
  );
};

export default Flow;
