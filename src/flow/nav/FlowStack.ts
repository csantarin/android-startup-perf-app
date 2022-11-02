import { createNativeStackNavigator } from '@react-navigation/native-stack';

// NOTE: Don't use interface. Don't extend (extends) or intersect (&) with ParamsListBase, either.
//
// React Navigation Stack Navigator's ParamListBase generic type
// goes absolutely loco with Record<string, unknown | object>!
//
// When you don't extend it, RouteNames work, but your custom params "don't".
// When you extend it, RouteNames IntelliSense stops working.
export type FlowStackParamList = {
  Home: undefined;
  Step1: undefined;
  Step2: undefined;
  Step3: undefined;
  Step4Review: undefined;
  Step5Complete: undefined;
};

export const FLOW_STACK_KEYS: (keyof FlowStackParamList)[] = [
  // multiline
  'Home',
  'Step1',
  'Step2',
  'Step3',
  'Step4Review',
  'Step5Complete',
];

const FlowStack = createNativeStackNavigator<FlowStackParamList>();

export default FlowStack;
