import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';

import ScreenView from '../../../components/ScreenView';

import useFlowStackNavigatorNavigate from '../../nav/useFlowStackNavigatorNavigate';
import useFlowStateContext from '../../sm/useFlowStateContext';

const Step3Screen = () => {
  const [step3Value, setStep3State] = useFlowStateContext('step3');
  const { navigateTo } = useFlowStackNavigatorNavigate();
  const handleInputChange = (value: string) => {
    setStep3State(value);
  };

  return (
    <ScreenView>
      <Text>Step 3: More input</Text>
      <View>
        <TextInput placeholder="More dummy input!" value={step3Value} onChangeText={handleInputChange} autoFocus={true} />
      </View>
      <Button title="Review Details" onPress={navigateTo.Step4Review} />
    </ScreenView>
  );
};

Step3Screen.ROUTE = 'Step3' as const;

export default Step3Screen;
