import { NavigationProp, useNavigation } from '@react-navigation/native';

import { FLOW_STACK_SCREEN_ROUTES, FlowStackParamList } from './FlowStackRoutes';

const useFlowStackNavigatorNavigate = () => {
  const navigation = useNavigation<NavigationProp<FlowStackParamList>>();

  /**
   * Creates a list like so:
   *
   * ```ts
   * {
   *   Home: () => {
   *     navigation.navigate('Home');
   *   },
   *   Step1: () => {
   *     navigation.navigate('Step1');
   *   },
   *   Step2: () => {
   *     navigation.navigate('Step2');
   *   },
   *   Step3: () => {
   *     navigation.navigate('Step3');
   *   },
   *   ...
   * }
   * ```
   */
  const navigateTo = FLOW_STACK_SCREEN_ROUTES.reduce((navigateToFinal, key) => {
    navigateToFinal[key] = () => {
      navigation.navigate(key);
    };
    return navigateToFinal;
  }, {} as Record<keyof FlowStackParamList, () => void>);

  return {
    navigation,
    navigateTo,
  };
};

export default useFlowStackNavigatorNavigate;
