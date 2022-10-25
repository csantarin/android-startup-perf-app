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
import { Button, Text, View } from 'react-native';

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
  Details: undefined;
  Third: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Details" component={DetailsScreen} />
        <RootStack.Screen name="Third" component={ThirdScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = () => {
  const navigator = useNavigation<NavigationProp<RootStackParamList>>();
  const navigateToDetails = () => {
    navigator.navigate('Details');
  };

  return (
    <ScreenView>
      <Text>Home Screen</Text>
      <Button title="Go to Details" onPress={navigateToDetails} />
    </ScreenView>
  );
};

const DetailsScreen = () => {
  const navigator = useNavigation<NavigationProp<RootStackParamList>>();
  const navigateToHome = () => {
    navigator.navigate('Home');
  };
  const navigateToThird = () => {
    navigator.navigate('Third');
  };

  return (
    <ScreenView>
      <Text>Details Screen</Text>
      <View>
        <Text>This is the second screen on this stack.</Text>
        <Text>Details of certain wonderful things are presented here.</Text>
      </View>
      <Button title="Go to Home" onPress={navigateToHome} />
      <Button title="Go to Third" onPress={navigateToThird} />
    </ScreenView>
  );
};

const ThirdScreen = () => {
  const navigator = useNavigation<NavigationProp<RootStackParamList>>();
  const navigateToDetails = () => {
    navigator.navigate('Details');
  };
  const navigateToHome = () => {
    navigator.navigate('Home');
  };

  return (
    <ScreenView>
      <Text>Third Screen</Text>
      <View>
        <Text>This is the last screen on this stack.</Text>
        <Text>There are no further new screens to find.</Text>
      </View>
      <Button title="Go to Details" onPress={navigateToDetails} />
      <Button title="Go to Home" onPress={navigateToHome} />
    </ScreenView>
  );
};

export default App;
