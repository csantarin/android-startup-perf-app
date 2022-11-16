import React from 'react';
import { Button, Text } from 'react-native';

import ScreenView from '../../../components/ScreenView';
import InitialRouteNameState from '../../../navigation/initialRouteNameState/InitialRouteNameState';
import { getInitialRouteNameStateContext } from '../../../navigation/initialRouteNameState/InitialRouteNameStateContext';
import useInitialRouteNameStateContext from '../../../navigation/initialRouteNameState/useInitialRouteNameStateContext';
import { FlowStackRoute } from '../../nav/FlowStackRoutes';

import useFlowStateContext from '../../sm/useFlowStateContext';
import LandingScreenFragment from './LandingScreenFragment';

const InitialRouteNameStateContext = getInitialRouteNameStateContext<FlowStackRoute>();

const LogoutScreen = () => {
  const InitialRouteNameStateContextManager = useInitialRouteNameStateContext(InitialRouteNameStateContext);

  /* eslint-disable @typescript-eslint/no-unused-vars */
  const [_step1Value, _setStep1Value, resetStep1Value] = useFlowStateContext('step1');
  const [_step2Value, _setStep2Value, resetStep2Value] = useFlowStateContext('step2');
  const [_step3Value, _setStep3Value, resetStep3Value] = useFlowStateContext('step3');
  /* eslint-enable @typescript-eslint/no-unused-vars */
  const handleConfirmLogoutButtonPress = () => {
    resetStep1Value();
    resetStep2Value();
    resetStep3Value();
    // Show the Android landing screen fragment to emulate navigation behavior.
    LandingScreenFragment.showAsync();
    // Reset the Android initial route name state as cleanup.
    InitialRouteNameState.resetValue();
    // Reset the React global state of the initial screen route name
    // so that the root component can reconstruct the initial screen
    // on the next render cycle as per React Navigation.
    InitialRouteNameStateContextManager.resetInitialRouteName();
  };

  return (
    <ScreenView>
      <Text>Logout</Text>
      <Button title="Confirm logout" onPress={handleConfirmLogoutButtonPress} />
    </ScreenView>
  );
};

LogoutScreen.ROUTE = 'Logout' as const;

export default LogoutScreen;
