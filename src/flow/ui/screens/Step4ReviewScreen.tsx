import React from 'react';
import { Button, Text, View } from 'react-native';

import ScreenView from '../../../components/ScreenView';

import useFlowStackNavigatorNavigate from '../../nav/useFlowStackNavigatorNavigate';
import useFlowStateContext from '../../sm/useFlowStateContext';

const Step4ReviewScreen = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [step1Value, _setStep1Value, resetStep1Value] = useFlowStateContext('step1');
  const step1Text = step1Value ? 'Agreed' : 'Disagreed';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [step2Value, _setStep2Value, resetStep2Value] = useFlowStateContext('step2');
  const step2Text = step2Value;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [step3Value, _setStep3Value, resetStep3Value] = useFlowStateContext('step3');
  const step3Text = step3Value;

  const { navigateTo } = useFlowStackNavigatorNavigate();

  const handleStartOverButtonPress = () => {
    resetStep1Value();
    resetStep2Value();
    resetStep3Value();
    navigateTo.Home();
  };

  return (
    <ScreenView>
      <Text>Review your details</Text>
      <View>
        <Text>Here are your input details.</Text>
        <Text>Go through them. Verify that they're good to go.</Text>
        <Text>Step 1: {step1Text}</Text>
        <Text>Step 2: {step2Text}</Text>
        <Text>Step 3: {step3Text}</Text>
      </View>
      <Button title="Start over" color="red" onPress={handleStartOverButtonPress} />
      <Button title="Submit" onPress={navigateTo.Step5Complete} />
    </ScreenView>
  );
};

export default Step4ReviewScreen;
