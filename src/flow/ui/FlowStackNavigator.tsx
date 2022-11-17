import React from 'react';

import { FLOW_STACK_SCREEN_ROUTES, FLOW_STACK_SCREENS, INITIAL_FLOW_STACK_SCREEN_ROUTE } from '../nav/FlowStackRoutes';
import FlowStack from './FlowStack';

const FlowStackNavigator = () => {
  return (
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
  );
};

export default FlowStackNavigator;
