/**
 * React Native App with React Navigation
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
/* eslint-disable no-console */

import { NavigationContainer, NavigationState } from '@react-navigation/native';
import React from 'react';

import Flow from './flow/ui/Flow';
import NavigationStateStore from './navigation/NavigationStateStore';

export const APP_NAME = 'AndroidStartupPerfApp';

const withComponentLifecycleLogs = <C extends React.JSXElementConstructor<Record<string, unknown>>>(Component: C) => {
  type P = React.ComponentProps<C>;
  const WrappedComponent = Component as unknown as React.JSXElementConstructor<P>;

  return class ComponentLifecycleLogs extends React.Component {
    public constructor(props: P) {
      super(props);
    }

    public componentDidMount() {
      console.log('COMPONENT_LIFECYCLE', 'componentDidMount()');
    }

    public componentDidUpdate(_prevProps: Readonly<P>, _prevState: Readonly<P>, _snapshot?: unknown) {
      console.log('COMPONENT_LIFECYCLE', 'componentDidUpdate()');
    }

    public componentWillUnmount() {
      console.log('COMPONENT_LIFECYCLE', 'componentWillUnmount()');
    }

    public render() {
      console.log('COMPONENT_LIFECYCLE', 'render()');

      // @ts-ignore
      return <WrappedComponent />;
    }
  };
};

const App = () => {
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

export default withComponentLifecycleLogs(App);
