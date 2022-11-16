import React from 'react';

import { getInitialRouteNameStateContext } from '../../navigation/initialRouteNameState/InitialRouteNameStateContext';
import useInitialRouteNameStateContext from '../../navigation/initialRouteNameState/useInitialRouteNameStateContext';

import {
  FLOW_STACK_SCREENS,
  FlowStackRoute,
  getFlowStackScreenRoutes,
  routeIsFlowStackInitialRouteName,
  routeIsFlowStackPreInitialRouteName,
} from '../nav/FlowStackRoutes';
import FlowStack from './FlowStack';

const InitialRouteNameStateContext = getInitialRouteNameStateContext<FlowStackRoute>();

const FlowStackNavigator = () => {
  const { prevInitialRouteName, initialRouteName } = useInitialRouteNameStateContext(InitialRouteNameStateContext);

  // Every time the initial route name changes to a different string, reconstruct the entire thing.
  // Why? The initial route name will only be set once(!), i.e. during the initial render.
  // Subsequent changes won't alter the initial route.
  return (
    <FlowStack.Navigator>
      {getFlowStackScreenRoutes(initialRouteName).map((route) => {
        const screen = FLOW_STACK_SCREENS[route];
        return (
          <FlowStack.Screen
            key={route}
            name={route} // e.g. "Step1"
            component={screen} // e.g. Step1Screen
            options={{
              headerShown: !routeIsFlowStackPreInitialRouteName(route),
              // Loading screen shouldn't animate. For the rest, relinquish animation to the library
              //animation: routeIsFlowStackInitialRouteName(route) ? 'none' : undefined,
              //animationDuration: !routeIsFlowStackPreInitialRouteName(route) ? undefined : 0,

              // Force the animation behavior for initial route such that
              // - going back to the pre-initial route is pop
              // - going forward from initial route is push
              animationTypeForReplace:
                routeIsFlowStackInitialRouteName(route) || routeIsFlowStackPreInitialRouteName(route)
                  ? prevInitialRouteName == null && initialRouteName != null
                    ? 'push'
                    : 'pop'
                  : undefined,
            }}
          />
        );
      })}
    </FlowStack.Navigator>
  );
};

export default FlowStackNavigator;
