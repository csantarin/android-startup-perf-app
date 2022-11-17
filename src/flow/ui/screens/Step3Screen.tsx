import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';

import ScreenView from '../../../components/ScreenView';
import createFlowStackNavigateTo from '../../nav/createFlowStackNavigateTo';
import { FlowStackParamList, FlowStackRoute } from '../../nav/FlowStackRoutes';

import useFlowStateContext from '../../sm/useFlowStateContext';

const Step3Screen = () => {
  const [step3Value, setStep3State] = useFlowStateContext('step3');
  const navigation = useNavigation<NavigationProp<FlowStackParamList, FlowStackRoute>>();
  const navigateTo = createFlowStackNavigateTo(navigation);
  const handleInputChange = (value: string) => {
    setStep3State(value);
  };

  return (
    <ScreenView>
      <Text>Step 3: More input</Text>
      <View>
        <TextInput
          placeholder="More dummy input!"
          value={step3Value}
          onChangeText={handleInputChange}
          autoFocus={true}
        />
      </View>
      <Button title="Review Details" onPress={() => navigateTo.Step4Review()} />
    </ScreenView>
  );
};

Step3Screen.ROUTE = 'Step3' as const;

export default Step3Screen;
