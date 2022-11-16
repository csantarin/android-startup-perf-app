import React from 'react';

import { getInitialRouteNameStateContext } from '../../navigation/initialRouteNameState/InitialRouteNameStateContext';
import useInitialRouteNameStateContextProviderValue from '../../navigation/initialRouteNameState/useInitialRouteNameStateContextProviderValue';
import { FlowStackRoute } from '../nav/FlowStackRoutes';

import FlowStateContext from '../sm/FlowStateContext';
import useFlowStateContextProviderValue from '../sm/useFlowStateContextProviderValue';
import FlowStackNavigator from './FlowStackNavigator';

const InitialRouteNameStateContext = getInitialRouteNameStateContext<FlowStackRoute>();

const Flow = () => {
  const initialRouteNameStateContextValue = useInitialRouteNameStateContextProviderValue<FlowStackRoute>();
  const flowDataStateContextValue = useFlowStateContextProviderValue();

  return (
    <InitialRouteNameStateContext.Provider value={initialRouteNameStateContextValue}>
      <FlowStateContext.Provider value={flowDataStateContextValue}>
        <FlowStackNavigator />
      </FlowStateContext.Provider>
    </InitialRouteNameStateContext.Provider>
  );
};

export default Flow;
