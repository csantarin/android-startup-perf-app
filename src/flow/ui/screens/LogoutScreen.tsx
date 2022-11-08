import React from 'react';
import { Button, Text } from 'react-native';

import ScreenView from '../../../components/ScreenView';

import useFlowStateContext from '../../sm/useFlowStateContext';
import LandingScreenFragment from './LandingScreenFragment';

const LogoutScreen = () => {
  const [_initialRouteName, _setInitialRouteName, resetInitialRouteName] = useFlowStateContext('initialRouteName');
  const [_step1Value, _setStep1Value, resetStep1Value] = useFlowStateContext('step1');
  const [_step2Value, _setStep2Value, resetStep2Value] = useFlowStateContext('step2');
  const [_step3Value, _setStep3Value, resetStep3Value] = useFlowStateContext('step3');
  const handleConfirmLogoutButtonPress = () => {
    resetStep1Value();
    resetStep2Value();
    resetStep3Value();
    LandingScreenFragment.show();
    resetInitialRouteName(); // NavigationStateStore.setInitialRouteName(null); but with React global state via Context.
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
