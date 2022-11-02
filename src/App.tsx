/**
 * React Native App with React Navigation
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import Flow from './flow/ui/Flow';

export const APP_NAME = 'AndroidStartupPerfApp';

const App = () => {
  return (
    <NavigationContainer>
      <Flow />
    </NavigationContainer>
  );
};

export default App;
