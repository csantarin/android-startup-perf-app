import React from 'react';

import FlowStateContext from '../sm/FlowStateContext';
import useFlowStateContextProviderValue from '../sm/useFlowStateContextProviderValue';

import FlowStackNavigator from './FlowNavigator';

const Flow = () => {
  const flowStateContextValue = useFlowStateContextProviderValue();

  return (
    <FlowStateContext.Provider value={flowStateContextValue}>
      <FlowStackNavigator />
    </FlowStateContext.Provider>
  );
};

export default Flow;
