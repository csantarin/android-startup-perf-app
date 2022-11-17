import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';

import ScreenView from '../../../components/ScreenView';
import createFlowStackNavigateTo from '../../nav/createFlowStackNavigateTo';
import { FlowStackParamList, FlowStackRoute } from '../../nav/FlowStackRoutes';

import useFlowStateContext from '../../sm/useFlowStateContext';

const Step2Screen = () => {
  const [step2Value, setStep2State] = useFlowStateContext('step2');
  const navigation = useNavigation<NavigationProp<FlowStackParamList, FlowStackRoute>>();
  const navigateTo = createFlowStackNavigateTo(navigation);
  const handleInputChange = (value: string) => {
    setStep2State(value);
  };

  return (
    <ScreenView>
      <Text>Step 2: Input</Text>
      <View>
        <TextInput
          placeholder="Enter dummy input."
          value={step2Value}
          onChangeText={handleInputChange}
          autoFocus={true}
        />
      </View>
      <Button title="Step 3" onPress={() => navigateTo.Step3()} />
    </ScreenView>
  );
};

Step2Screen.ROUTE = 'Step2' as const;

export default Step2Screen;
