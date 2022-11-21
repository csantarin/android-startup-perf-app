import React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

import ConditionalText from '../../../components/ConditionalText';
import ScreenView from '../../../components/ScreenView';
import createFlowStackNavigateTo from '../../nav/createFlowStackNavigateTo';

import useFlowStateContext from '../../sm/useFlowStateContext';

const Step1Screen = (props: NavigationInjectedProps) => {
  const [step1State, setStep1State] = useFlowStateContext('step1');
  const navigation = props.navigation;
  const navigateTo = createFlowStackNavigateTo(navigation);
  const buttonTitle = !step1State ? 'Agree' : 'Disagree';
  const buttonColor = !step1State ? undefined : 'red';
  const handleButtonPress = () => {
    setStep1State((value) => {
      return !value;
    });
  };

  return (
    <ScreenView>
      <Text>Step 1: Consent</Text>
      <View>
        <View>
          <Text>Read the Terms & Conditions.</Text>
        </View>
        <View>
          <Text>Read the Privacy Policy.</Text>
        </View>
        <ConditionalText show={step1State}>Agreed!</ConditionalText>
        <Button title={buttonTitle} onPress={handleButtonPress} color={buttonColor} />
      </View>
      <Button title="Step 2" onPress={() => navigateTo.Step2()} disabled={!step1State} />
    </ScreenView>
  );
};

Step1Screen.ROUTE = 'Step1' as const;

export default Step1Screen;
