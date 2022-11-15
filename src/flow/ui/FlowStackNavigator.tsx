import React, { useEffect, useRef } from 'react';

import InitialRouteNameState from '../../navigation/InitialRouteNameState';

import {
  FLOW_STACK_SCREENS,
  FlowStackRoute,
  getFlowStackScreenRoutes,
  routeIsFlowStackInitialRouteName,
  routeIsFlowStackPreInitialRouteName,
} from '../nav/FlowStackRoutes';
import useFlowStateContext from '../sm/useFlowStateContext';
import FlowStack from './FlowStack';

const FlowStackNavigator = () => {
  const [initialRouteName, setInitialRouteName] = useFlowStateContext('initialRouteName');
  const prevInitialRouteName = useRef<FlowStackRoute | null>(null);
  useEffect(() => {
    prevInitialRouteName.current = initialRouteName;
  }, [initialRouteName]);

  // INITIAL ROUTE NAME STATE EVENT LISTENER
  // This would be the usual transition between Android and React, but it can fail because the React
  // side of things might have not been initialized at the time the event is sent (which would cause
  // the app to crash if left unhandled), meaning that the event can't be emitted.
  useEffect(() => {
    InitialRouteNameState.onChange<FlowStackRoute>((payload) => {
      setInitialRouteName(payload.value);
    });

    return () => {
      InitialRouteNameState.offChange();
    };
    // Once during mount only.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // INITIAL ROUTE NAME STATE EVENT LISTENER COMPENSATOR
  // This segment recoups the loss of the expected initial route name information when the React app
  // has been initialized much later than the event listener was able to receive a state change from
  // Android. This scenario is expected to only happen on cold start.
  useEffect(() => {
    async function getInitialRouteNameInEventDataLossAtColdStart() {
      // Could end up as `null` or a `string` value, e.g.: "Login" or "Register".
      const value = await InitialRouteNameState.getValue<FlowStackRoute>();

      // When the React app is aware of the initial route name (i.e. it's not `null`) at cold start,
      // it means that the user didn't rush into entering the React app, and that the event listener
      // works as intended. Thus, we can stop here.
      if (initialRouteName != null) {
        return;
      }

      setInitialRouteName(value);
    }

    getInitialRouteNameInEventDataLossAtColdStart();
    // Once during mount only.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                  ? prevInitialRouteName.current == null && initialRouteName != null
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
