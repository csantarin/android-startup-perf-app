/**
 * React Native App with React Navigation
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer, NavigationProp, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { createContext, useContext, useState } from 'react';
import { Button, NativeModules, Text, TextInput, View } from 'react-native';

import ConditionalText from './ConditionalText';
import ScreenView from './ScreenView';

export const APP_NAME = 'AndroidStartupPerfApp';

const { RNNavigationState } = NativeModules as typeof NativeModules & {
  RNNavigationState: RNNavigationState;
};

interface RNNavigationState {
  setIndex(index: number): void;
}

// NOTE: Don't use interface. Don't extend (extends) or intersect (&) with ParamsListBase, either.
//
// React Navigation Stack Navigator's ParamListBase generic type
// goes absolutely loco with Record<string, unknown | object>!
//
// When you don't extend it, RouteNames work, but your custom params "don't".
// When you extend it, RouteNames IntelliSense stops working.
type FlowStackParamList = {
  Home: undefined;
  Step1: undefined;
  Step2: undefined;
  Step3: undefined;
  Review: undefined;
  Complete: undefined;
};

const ROOT_STACK_KEYS: (keyof FlowStackParamList)[] = [
  // multiline
  'Home',
  'Step1',
  'Step2',
  'Step3',
  'Review',
  'Complete',
];

const useFlowStackNavigatorNavigate = () => {
  const navigation = useNavigation<NavigationProp<FlowStackParamList>>();
  const navigateTo = ROOT_STACK_KEYS.reduce((navigateToFinal, key) => {
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

const FlowStack = createNativeStackNavigator<FlowStackParamList>();

interface FlowStateContextValue {
  step1: {
    value: boolean;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
    resetValue: () => void;
  };
  step2: {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    resetValue: () => void;
  };
  step3: {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    resetValue: () => void;
  };
}

const DEFAULT_FLOW_STATE_CONTEXT_VALUE: FlowStateContextValue = {
  step1: {
    value: false,
    setValue: () => {},
    resetValue: () => {},
  },
  step2: {
    value: '',
    setValue: () => {},
    resetValue: () => {},
  },
  step3: {
    value: '',
    setValue: () => {},
    resetValue: () => {},
  },
};

const FlowStateContext = createContext(DEFAULT_FLOW_STATE_CONTEXT_VALUE);
const useFlowStateContextValue = (): FlowStateContextValue => {
  const [ step1Value, setStep1Value ] = useState(DEFAULT_FLOW_STATE_CONTEXT_VALUE.step1.value);
  const resetStep1Value = () => {
    setStep1Value(DEFAULT_FLOW_STATE_CONTEXT_VALUE.step1.value);
  };

  const [ step2Value, setStep2Value ] = useState(DEFAULT_FLOW_STATE_CONTEXT_VALUE.step2.value);
  const resetStep2Value = () => {
    setStep2Value(DEFAULT_FLOW_STATE_CONTEXT_VALUE.step2.value);
  };

  const [ step3Value, setStep3Value ] = useState(DEFAULT_FLOW_STATE_CONTEXT_VALUE.step3.value);
  const resetStep3Value = () => {
    setStep3Value(DEFAULT_FLOW_STATE_CONTEXT_VALUE.step3.value);
  };

  return {
    step1: {
      value: step1Value,
      setValue: setStep1Value,
      resetValue: resetStep1Value,
    },
    step2: {
      value: step2Value,
      setValue: setStep2Value,
      resetValue: resetStep2Value,
    },
    step3: {
      value: step3Value,
      setValue: setStep3Value,
      resetValue: resetStep3Value,
    },
  };
};

// Imitate useState API as that's all the client code cares about.
// The useContext behavior under the hood is abstracted from the client code.
type FlowStateContextHook<Key extends keyof FlowStateContextValue> = [
  FlowStateContextValue[Key]['value'],
  FlowStateContextValue[Key]['setValue'],
  FlowStateContextValue[Key]['resetValue'],
];

/**
 * Selects a slice from the state context using a slice key.
 * @template Key Any of the known state context keys (`step1`, `step2`, `step3`, ...).
 * @param step The state context slice key to select.
 * @returns The state context slice.
 */
const useFlowStateContext = <Key extends keyof FlowStateContextValue>(step: Key): FlowStateContextHook<Key> => {
  const context = useContext<FlowStateContextValue>(FlowStateContext);
  const { value, setValue, resetValue } = context[step];

  return [
    value,
    setValue,
    resetValue,
  ];
};

const App = () => {
  const flowDataStateContextValue = useFlowStateContextValue();
  const handleNavigationStateChange = (state: NavigationState<FlowStackParamList> | undefined) => {
    if (!state) {
      return;
    }

    RNNavigationState.setIndex(state.index);
  };

  return (
    <FlowStateContext.Provider value={flowDataStateContextValue}>
      <NavigationContainer onStateChange={handleNavigationStateChange}>
        <FlowStack.Navigator initialRouteName="Home">
          <FlowStack.Screen name="Home" component={HomeScreen} />
          <FlowStack.Screen name="Review" component={ReviewScreen} />
          <FlowStack.Screen name="Complete" component={CompleteScreen} />
          <FlowStack.Screen name="Step1" component={Step1Screen} />
          <FlowStack.Screen name="Step2" component={Step2Screen} />
          <FlowStack.Screen name="Step3" component={Step3Screen} />
        </FlowStack.Navigator>
      </NavigationContainer>
    </FlowStateContext.Provider>
  );
};

const HomeScreen = () => {
  const { navigateTo } = useFlowStackNavigatorNavigate();

  return (
    <ScreenView>
      <Text>Home</Text>
      <Button title="Start" onPress={navigateTo.Step1} />
    </ScreenView>
  );
};

const Step1Screen = () => {
  const [ step1State, setStep1State ] = useFlowStateContext('step1');
  const { navigateTo } = useFlowStackNavigatorNavigate();
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
          <Text>Nards!</Text>
        </View>
        <ConditionalText show={step1State}>Agreed!</ConditionalText>
        <Button title={buttonTitle} onPress={handleButtonPress} color={buttonColor} />
      </View>
      <Button title="Step 2" onPress={navigateTo.Step2} disabled={!step1State} />
    </ScreenView>
  );
};

const Step2Screen = () => {
  const [ step2Value, setStep2State ] = useFlowStateContext('step2');
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

const Step3Screen = () => {
  const [ step3Value, setStep3State ] = useFlowStateContext('step3');
  const { navigateTo } = useFlowStackNavigatorNavigate();
  const handleInputChange = (value: string) => {
    setStep3State(value);
  };

  return (
    <ScreenView>
      <Text>Step 3: More input</Text>
      <View>
        <TextInput placeholder="More dummy input!" value={step3Value} onChangeText={handleInputChange} />
      </View>
      <Button title="Review Details" onPress={navigateTo.Review} />
    </ScreenView>
  );
};

const ReviewScreen = () => {
  const [ step1Value, _setStep1Value, resetStep1Value ] = useFlowStateContext('step1');
  const step1Text = step1Value ? 'Agreed' : 'Disagreed';

  const [ step2Value, _setStep2Value, resetStep2Value ] = useFlowStateContext('step2');
  const step2Text = step2Value;

  const [ step3Value, _setStep3Value, resetStep3Value ] = useFlowStateContext('step3');
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
      <Button title="Submit" onPress={navigateTo.Complete} />
    </ScreenView>
  );
};

const CompleteScreen = () => {
  const [ _step1Value, _setStep1Value, resetStep1Value ] = useFlowStateContext('step1');

  const [ _step2Value, _setStep2Value, resetStep2Value ] = useFlowStateContext('step2');

  const [ _step3Value, _setStep3Value, resetStep3Value ] = useFlowStateContext('step3');

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

export default App;
