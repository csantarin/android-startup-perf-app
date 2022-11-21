import hoistNonReactStatics from 'hoist-non-react-statics';
import React from 'react';
import { NavigationInjectedProps } from 'react-navigation';

import FlowStateContext from '../sm/FlowStateContext';
import useFlowStateContextProviderValue from '../sm/useFlowStateContextProviderValue';
import FlowStackNavigator from './FlowStackNavigator';

const Flow = ((props: NavigationInjectedProps) => {
  const flowDataStateContextValue = useFlowStateContextProviderValue();

  return (
    <FlowStateContext.Provider value={flowDataStateContextValue}>
      <FlowStackNavigator {...props} />
    </FlowStateContext.Provider>
  );
}) as typeof FlowStackNavigator;

hoistNonReactStatics(Flow, FlowStackNavigator);

export default Flow;
