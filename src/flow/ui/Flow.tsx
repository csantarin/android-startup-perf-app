import React from 'react';

import FlowStateContext from '../sm/FlowStateContext';
import useFlowStateContextProviderValue from '../sm/useFlowStateContextProviderValue';
import FlowStackNavigator from './FlowStackNavigator';

const Flow = () => {
  const flowDataStateContextValue = useFlowStateContextProviderValue();

  return (
    <FlowStateContext.Provider value={flowDataStateContextValue}>
      <FlowStackNavigator />
    </FlowStateContext.Provider>
  );
};

export default Flow;
