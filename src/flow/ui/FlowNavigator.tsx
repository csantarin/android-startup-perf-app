import React, { useEffect } from 'react';

import NavigationStateStore from '../../navigation/NavigationStateStore';
import FlowStack from '../nav/FlowStack';
import { FLOW_STACK_SCREEN_ROUTES, FLOW_STACK_SCREENS, FlowStackRoute } from '../nav/FlowStackRoutes';
import useFlowStateContext from '../sm/useFlowStateContext';

const FlowStackNavigator = () => {
  const [initialRouteName, setInitialRouteName] = useFlowStateContext('initialRouteName');

  useEffect(() => {
    NavigationStateStore.onInitialRouteNameChange<FlowStackRoute>((payload) => {
      setInitialRouteName(payload.initialRouteName);
    });

    return () => {
      NavigationStateStore.offInitialRouteNameChange();
    };
  }, []);

  // When the initial route name is still null, don't return anything.
  if (!initialRouteName) {
    return null;
  }

  // Every time the initial route name changes to a different string, reconstruct the entire thing.
  // Why? The initial route name will only be set once(!), i.e. during the initial render.
  // Subsequent changes won't alter the initial route.
  return (
    <FlowStack.Navigator initialRouteName={initialRouteName}>
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
  );
};

export default FlowStackNavigator;