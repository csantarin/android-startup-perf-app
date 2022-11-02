import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import FlowStack from '../nav/FlowStack';

import FlowStateContext from '../sm/FlowStateContext';
import useFlowStateContextProviderValue from '../sm/useFlowStateContextProviderValue';

import HomeScreen from './screens/HomeScreen';
import Step1Screen from './screens/Step1Screen';
import Step2Screen from './screens/Step2Screen';
import Step3Screen from './screens/Step3Screen';
import Step4ReviewScreen from './screens/Step4ReviewScreen';
import Step5CompleteScreen from './screens/Step5CompleteScreen';

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
          <FlowStack.Screen name="Step4Review" component={Step4ReviewScreen} />
          <FlowStack.Screen name="Step5Complete" component={Step5CompleteScreen} />
        </FlowStack.Navigator>
      </NavigationContainer>
    </FlowStateContext.Provider>
  );
};

export default Flow;
