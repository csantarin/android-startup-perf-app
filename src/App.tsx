/**
 * React Native App with React Navigation
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer, NavigationState } from '@react-navigation/native';
import React, { useEffect } from 'react';

import Flow from './flow/ui/Flow';
import withComponentLifecycleLogs from './hocs/withComponentLifecycleLogs';
import NavigationStateStore from './navigation/NavigationStateStore';

export const APP_NAME = 'AndroidStartupPerfApp';

const App = () => {
  useEffect(() => {
    console.log('App');
  }, []);

  return (
    <NavigationContainer onStateChange={handleNavigationContainerStateChange}>
      <Flow />
    </NavigationContainer>
  );
};

export default App;
