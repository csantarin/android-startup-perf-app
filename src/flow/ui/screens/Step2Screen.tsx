import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';

import ScreenView from '../../../components/ScreenView';

import useFlowStackNavigatorNavigate from '../../nav/useFlowStackNavigatorNavigate';
import useFlowStateContext from '../../sm/useFlowStateContext';

const Step2Screen = () => {
  const [step2Value, setStep2State] = useFlowStateContext('step2');
  const { navigateTo } = useFlowStackNavigatorNavigate();
  const handleInputChange = (value: string) => {
    setStep2State(value);
  };

  return (
    <ScreenView>
      <Text>Step 2: Input</Text>
      <View>
        <TextInput placeholder="Dummy input." value={step2Value} onChangeText={handleInputChange} />
      </View>
      <Button title="Step 3" onPress={navigateTo.Step3} />
    </ScreenView>
  );
};

Step2Screen.ROUTE = 'Step2' as const;

export default Step2Screen;
