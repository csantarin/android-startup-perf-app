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
import Modal from './modal/ui/Modal';

export const APP_NAME = 'AndroidStartupPerfApp';

const App = () => {
  const showModalOnly: boolean = false;

  if (showModalOnly) {
    // eslint-disable-next-line prettier/prettier
    return (
      <Modal />
    );
  }

  return (
    <NavigationContainer>
      <Flow />
    </NavigationContainer>
  );
};

export default App;
