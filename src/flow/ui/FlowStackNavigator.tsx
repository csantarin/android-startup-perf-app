import hoistNonReactStatics from 'hoist-non-react-statics';
import React, { useEffect } from 'react';
import { createSwitchNavigator, NavigationInjectedProps } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { getInitialRouteNameStateContext } from '../../navigation/initialRouteNameState/InitialRouteNameStateContext';
import useInitialRouteNameStateContext from '../../navigation/initialRouteNameState/useInitialRouteNameStateContext';

import {
  FLOW_STACK_ENTRY_POINT_SCREENS,
  FLOW_STACK_STACK_ROUTES,
  FLOW_STACKS,
  FlowStackRoute,
} from '../nav/FlowStackRoutes';
import LoadingScreen from './screens/LoadingScreen';

const InitialRouteNameStateContext = getInitialRouteNameStateContext<FlowStackRoute>();

const FlowStackNavigatorBase = createSwitchNavigator(
  {
    ...FLOW_STACK_ENTRY_POINT_SCREENS,
    [FLOW_STACK_STACK_ROUTES.Login]: createStackNavigator(FLOW_STACKS.LoginEntry),
    [FLOW_STACK_STACK_ROUTES.Register]: createStackNavigator(FLOW_STACKS.RegisterEntry),
  },
  {
    initialRouteName: LoadingScreen.ROUTE,
    backBehavior: 'none',
  },
);

const FlowStackNavigator = ((props: NavigationInjectedProps) => {
  const { initialRouteName } = useInitialRouteNameStateContext(InitialRouteNameStateContext);
  const { navigation } = props;

  useEffect(() => {
    // Jump into the stack which has the entry point we want, not the route inside that stack.
    navigation.navigate(initialRouteName ? initialRouteName + 'Entry' : LoadingScreen.ROUTE);
  }, [initialRouteName]);

  return <FlowStackNavigatorBase {...props} />;
}) as typeof FlowStackNavigatorBase;

// This is intentional.
// createNavigator and others that wrap over it (createStackNavigator, createSwitchNavigator) make
// use of class static members for the express purpose of routing through each screen.
// Without hoisting these class static members, routing will refuse to work.
// https://github.com/react-navigation/react-navigation/blob/4.x/packages/core/src/navigators/createNavigator.js#L8-L11
hoistNonReactStatics(FlowStackNavigator, FlowStackNavigatorBase);

export default FlowStackNavigator;
