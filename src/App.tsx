/**
 * React Native App with React Navigation
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { createAppContainer } from 'react-navigation';

import Flow from './flow/ui/Flow';
import { getInitialRouteNameStateContext } from './navigation/initialRouteNameState/InitialRouteNameStateContext';
import useInitialRouteNameStateContextProviderValue from './navigation/initialRouteNameState/useInitialRouteNameStateContextProviderValue';

export const APP_NAME = 'AndroidStartupPerfApp';

const InitialRouteNameStateContext = getInitialRouteNameStateContext();
const NavigationContainer = createAppContainer(Flow);

const App = () => {
  const initialRouteNameStateContextValue = useInitialRouteNameStateContextProviderValue();

  return (
    <InitialRouteNameStateContext.Provider value={initialRouteNameStateContextValue}>
      <NavigationContainer />
    </InitialRouteNameStateContext.Provider>
  );
};

export default App;
