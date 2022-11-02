import React from 'react';
import { Button, Text, View } from 'react-native';

import ScreenView from '../../../components/ScreenView';

import useFlowStackNavigatorNavigate from '../../nav/useFlowStackNavigatorNavigate';
import useFlowStateContext from '../../sm/useFlowStateContext';

const Step5CompleteScreen = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_step1Value, _setStep1Value, resetStep1Value] = useFlowStateContext('step1');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_step2Value, _setStep2Value, resetStep2Value] = useFlowStateContext('step2');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_step3Value, _setStep3Value, resetStep3Value] = useFlowStateContext('step3');

  const { navigateTo } = useFlowStackNavigatorNavigate();

  const handleStartOverButtonPress = () => {
    resetStep1Value();
    resetStep2Value();
    resetStep3Value();
    navigateTo.Home();
  };

  return (
    <ScreenView>
      <Text>Complete</Text>
      <View>
        <Text>Great! You're all set.</Text>
      </View>
      <Button title="Start over" onPress={handleStartOverButtonPress} />
    </ScreenView>
  );
};

Step5CompleteScreen.ROUTE = 'Step5Complete' as const;

export default Step5CompleteScreen;
