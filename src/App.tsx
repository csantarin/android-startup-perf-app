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
import React from 'react';

import Flow from './flow/ui/Flow';
import Modal from './modal/ui/Modal';
import NavigationStateStore from './navigation/NavigationStateStore';

export const APP_NAME = 'AndroidStartupPerfApp';

const App = () => {
  const showModalOnly: boolean = false;

  if (showModalOnly) {
    // eslint-disable-next-line prettier/prettier
    return (
      <Modal />
    );
  }

  /**
   * Respond to the state change by syncing the current back stack store in native code up with
   * whatever back stack index this container is at.
   * @param state The current navigation state.
   */
  // There's an option to also narrow the `state.routes` down specifically to the flow navigation
  // tree, but we don't need it, so we're not applying `FlowStackParamList` to the generic type.
  const handleNavigationContainerStateChange = (state: NavigationState | undefined) => {
    NavigationStateStore.setIndex(state?.index);
  };

  return (
    <NavigationContainer onStateChange={handleNavigationContainerStateChange}>
      <Flow />
    </NavigationContainer>
  );
};

export default App;
