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
import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';

import ScreenView from './ScreenView';

export const APP_NAME = 'AndroidStartupPerfApp';

// NOTE: Don't use interface. Don't extend (extends) or intersect (&) with ParamsListBase, either.
//
// React Navigation Stack Navigator's ParamListBase generic type
// goes absolutely loco with Record<string, unknown | object>!
//
// When you don't extend it, RouteNames work, but your custom params "don't".
// When you extend it, RouteNames IntelliSense stops working.
type RootStackParamList = {
  Home: undefined;
  Step1: undefined;
  Step2: undefined;
  Step3: undefined;
  Review: undefined;
  Complete: undefined;
};

const ROOT_STACK_KEYS: (keyof RootStackParamList)[] = [
  // multiline
  'Home',
  'Step1',
  'Step2',
  'Step3',
  'Review',
  'Complete',
];

const useRootStackNavigatorNavigate = () => {
  const navigator = useNavigation<NavigationProp<RootStackParamList>>();
  const navigateTo = ROOT_STACK_KEYS.reduce((navigateToFinal, key) => {
    navigateToFinal[key] = () => {
      navigator.navigate(key);
    };
    return navigateToFinal;
  }, {} as Record<keyof RootStackParamList, () => void>);

  return {
    navigator,
    navigateTo,
  };
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Step1" component={Step1Screen} />
        <RootStack.Screen name="Step2" component={Step2Screen} />
        <RootStack.Screen name="Step3" component={Step3Screen} />
        <RootStack.Screen name="Review" component={ReviewScreen} />
        <RootStack.Screen name="Complete" component={CompleteScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = () => {
  const { navigateTo } = useRootStackNavigatorNavigate();

  return (
    <ScreenView>
      <Text>Home</Text>
      <Button title="Start" onPress={navigateTo.Step1} />
    </ScreenView>
  );
};

const Step1Screen = () => {
  const { navigateTo } = useRootStackNavigatorNavigate();

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
      </View>
      <Button title="Step 2" onPress={navigateTo.Step2} />
    </ScreenView>
  );
};

const Step2Screen = () => {
  const { navigateTo } = useRootStackNavigatorNavigate();

  return (
    <ScreenView>
      <Text>Step 2: Input</Text>
      <View>
        <TextInput placeholder="Dummy input" />
      </View>
      <Button title="Step 3" onPress={navigateTo.Step3} />
    </ScreenView>
  );
};

const Step3Screen = () => {
  const { navigateTo } = useRootStackNavigatorNavigate();

  return (
    <ScreenView>
      <Text>Step 3: More input</Text>
      <View>
        <TextInput placeholder="Dummy input" />
        <TextInput placeholder="More dummy input!" />
      </View>
      <Button title="Review Details" onPress={navigateTo.Review} />
    </ScreenView>
  );
};

const ReviewScreen = () => {
  const { navigateTo } = useRootStackNavigatorNavigate();

  return (
    <ScreenView>
      <Text>Review your details</Text>
      <View>
        <Text>Here are your input details.</Text>
        <Text>Go through them. Verify that they're good to go.</Text>
        <Text>Step 2 dummy input.</Text>
        <Text>Step 3 dummy input.</Text>
        <Text>Step 3 more dummy input.</Text>
      </View>
      <Button title="Start over" onPress={navigateTo.Home} />
      <Button title="Submit" onPress={navigateTo.Complete} />
    </ScreenView>
  );
};

const CompleteScreen = () => {
  const { navigateTo } = useRootStackNavigatorNavigate();

  return (
    <ScreenView>
      <Text>Complete Screen</Text>
      <View>
        <Text>Great! You're all set.</Text>
      </View>
      <Button title="Start over" onPress={navigateTo.Home} />
    </ScreenView>
  );
};

export default App;
