import HomeScreen from '../ui/screens/HomeScreen';
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
  [LoginScreen.ROUTE]: LoginScreen,
  [LogoutScreen.ROUTE]: LogoutScreen,
  [RegisterScreen.ROUTE]: RegisterScreen,
  [Step1Screen.ROUTE]: Step1Screen,
  [Step2Screen.ROUTE]: Step2Screen,
  [Step3Screen.ROUTE]: Step3Screen,
  [Step4ReviewScreen.ROUTE]: Step4ReviewScreen,
  [Step5CompleteScreen.ROUTE]: Step5CompleteScreen,
});

export const FLOW_STACK_SCREEN_ROUTES = Object.keys(FLOW_STACK_SCREENS) as FlowStackRoute[];

export const INITIAL_FLOW_STACK_SCREEN_ROUTE = HomeScreen.ROUTE;

export type FlowStackRoute = keyof typeof FLOW_STACK_SCREENS;

// NOTE: Don't use interface. Don't extend (extends) or intersect (&) with ParamsListBase, either.
//
// React Navigation Stack Navigator's ParamListBase generic type
// goes absolutely loco with Record<string, unknown | object>!
//
// When you don't extend it, RouteNames work, but your custom params "don't".
// When you extend it, RouteNames IntelliSense stops working.
export type FlowStackParamList = {
  [HomeScreen.ROUTE]: undefined;
  [LoginScreen.ROUTE]: undefined;
  [LogoutScreen.ROUTE]: undefined;
  [RegisterScreen.ROUTE]: undefined;
  [Step1Screen.ROUTE]: undefined;
  [Step2Screen.ROUTE]: undefined;
  [Step3Screen.ROUTE]: undefined;
  [Step4ReviewScreen.ROUTE]: undefined;
  [Step5CompleteScreen.ROUTE]: undefined;
};
