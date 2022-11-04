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

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import Flow from './flow/ui/Flow';

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
  return (
    <NavigationContainer>
      <Flow />
    </NavigationContainer>
  );
};

export default withComponentLifecycleLogs(App);
