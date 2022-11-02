import React from 'react';

import FlowStack from '../nav/FlowStack';
import { FLOW_STACK_SCREEN_ROUTES, FLOW_STACK_SCREENS, INITIAL_FLOW_STACK_SCREEN_ROUTE } from '../nav/FlowStackRoutes';

import FlowStateContext from '../sm/FlowStateContext';
import useFlowStateContextProviderValue from '../sm/useFlowStateContextProviderValue';

const Flow = () => {
  const flowDataStateContextValue = useFlowStateContextProviderValue();

  return (
    <FlowStateContext.Provider value={flowDataStateContextValue}>
      <FlowStack.Navigator initialRouteName={INITIAL_FLOW_STACK_SCREEN_ROUTE}>
        {FLOW_STACK_SCREEN_ROUTES.map((route) => {
          const screen = FLOW_STACK_SCREENS[route];
          return (
            <FlowStack.Screen
              key={route}
              name={route} // e.g. "Step1"
              component={screen} // e.g. Step1Screen
            />
          );
        })}
      </FlowStack.Navigator>
    </FlowStateContext.Provider>
  );
};

export default Flow;
