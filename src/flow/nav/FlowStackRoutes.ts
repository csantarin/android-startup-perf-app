import HomeScreen from '../ui/screens/HomeScreen';
import LoadingScreen from '../ui/screens/LoadingScreen';
import LoginScreen from '../ui/screens/LoginScreen';
import LogoutScreen from '../ui/screens/LogoutScreen';
import RegisterScreen from '../ui/screens/RegisterScreen';
import Step1Screen from '../ui/screens/Step1Screen';
import Step2Screen from '../ui/screens/Step2Screen';
import Step3Screen from '../ui/screens/Step3Screen';
import Step4ReviewScreen from '../ui/screens/Step4ReviewScreen';
import Step5CompleteScreen from '../ui/screens/Step5CompleteScreen';

export const FLOW_STACK_SCREENS = Object.freeze({
  [HomeScreen.ROUTE]: HomeScreen,
  [LoadingScreen.ROUTE]: LoadingScreen,
  [LoginScreen.ROUTE]: LoginScreen,
  [LogoutScreen.ROUTE]: LogoutScreen,
  [RegisterScreen.ROUTE]: RegisterScreen,
  [Step1Screen.ROUTE]: Step1Screen,
  [Step2Screen.ROUTE]: Step2Screen,
  [Step3Screen.ROUTE]: Step3Screen,
  [Step4ReviewScreen.ROUTE]: Step4ReviewScreen,
  [Step5CompleteScreen.ROUTE]: Step5CompleteScreen,
});

export const FLOW_STACK_ENTRY_POINT_SCREENS = Object.freeze({
  [LoadingScreen.ROUTE]: LoadingScreen,
});

export const FLOW_STACK_STACK_ROUTES = Object.freeze({
  [LoginScreen.ROUTE]: `${LoginScreen.ROUTE}Entry`,
  [RegisterScreen.ROUTE]: `${RegisterScreen.ROUTE}Entry`,
});

export const FLOW_STACKS = Object.freeze({
  [FLOW_STACK_STACK_ROUTES[LoginScreen.ROUTE]]: Object.freeze({
    [LoginScreen.ROUTE]: LoginScreen,
    [HomeScreen.ROUTE]: HomeScreen,
    // [LoadingScreen.ROUTE]: LoadingScreen,
    // [LoginScreen.ROUTE]: LoginScreen,
    [LogoutScreen.ROUTE]: LogoutScreen,
    [RegisterScreen.ROUTE]: RegisterScreen,
    [Step1Screen.ROUTE]: Step1Screen,
    [Step2Screen.ROUTE]: Step2Screen,
    [Step3Screen.ROUTE]: Step3Screen,
    [Step4ReviewScreen.ROUTE]: Step4ReviewScreen,
    [Step5CompleteScreen.ROUTE]: Step5CompleteScreen,
  }),
  [FLOW_STACK_STACK_ROUTES[RegisterScreen.ROUTE]]: Object.freeze({
    [RegisterScreen.ROUTE]: RegisterScreen,
    [HomeScreen.ROUTE]: HomeScreen,
    // [LoadingScreen.ROUTE]: LoadingScreen,
    [LoginScreen.ROUTE]: LoginScreen,
    [LogoutScreen.ROUTE]: LogoutScreen,
    // [RegisterScreen.ROUTE]: RegisterScreen,
    [Step1Screen.ROUTE]: Step1Screen,
    [Step2Screen.ROUTE]: Step2Screen,
    [Step3Screen.ROUTE]: Step3Screen,
    [Step4ReviewScreen.ROUTE]: Step4ReviewScreen,
    [Step5CompleteScreen.ROUTE]: Step5CompleteScreen,
  }),
});

export type FlowStackRoute = keyof typeof FLOW_STACK_SCREENS;

export const FLOW_STACK_SCREEN_ROUTES = Object.keys(FLOW_STACK_SCREENS) as FlowStackRoute[];

export const INITIAL_FLOW_STACK_SCREEN_ROUTE = HomeScreen.ROUTE;

export const FLOW_STACK_CONFIGURATIONS: {
  initialRouteNames: FlowStackRoute[];
  preInitialRouteName: FlowStackRoute;
} = {
  initialRouteNames: [LoginScreen.ROUTE, RegisterScreen.ROUTE],
  preInitialRouteName: LoadingScreen.ROUTE,
};

export const routeIsFlowStackInitialRouteName = (routeName: string | null): routeName is FlowStackRoute => {
  return FLOW_STACK_CONFIGURATIONS.initialRouteNames.includes(routeName as FlowStackRoute);
};

export const routeIsFlowStackPreInitialRouteName = (routeName: string | null): routeName is FlowStackRoute => {
  return routeName === FLOW_STACK_CONFIGURATIONS.preInitialRouteName;
};

export const getFlowStackScreenRoutes = (initialRouteName: FlowStackRoute | null) => {
  if (routeIsFlowStackInitialRouteName(initialRouteName)) {
    const {
      /* eslint-disable @typescript-eslint/no-unused-vars */
      [initialRouteName]: _,
      [FLOW_STACK_CONFIGURATIONS.preInitialRouteName]: __,
      /* eslint-enable @typescript-eslint/no-unused-vars */
      ...screens
    } = FLOW_STACK_SCREENS;

    const routes: FlowStackRoute[] = [initialRouteName].concat(Object.keys(screens) as FlowStackRoute[]);

    return routes;
  } else {
    const routes: FlowStackRoute[] = [
      // multiline
      LoadingScreen.ROUTE,
    ];

    return routes;
  }
};

// NOTE: Don't use interface. Don't extend (extends) or intersect (&) with ParamsListBase, either.
//
// React Navigation Stack Navigator's ParamListBase generic type
// goes absolutely loco with Record<string, unknown | object>!
//
// When you don't extend it, RouteNames work, but your custom params "don't".
// When you extend it, RouteNames IntelliSense stops working.
export type FlowStackParamList = {
  [HomeScreen.ROUTE]: undefined;
  [LoadingScreen.ROUTE]: undefined;
  [LoginScreen.ROUTE]: undefined;
  [LogoutScreen.ROUTE]: undefined;
  [RegisterScreen.ROUTE]: undefined;
  [Step1Screen.ROUTE]: undefined;
  [Step2Screen.ROUTE]: undefined;
  [Step3Screen.ROUTE]: undefined;
  [Step4ReviewScreen.ROUTE]: undefined;
  [Step5CompleteScreen.ROUTE]: undefined;
};
