import React from 'react';

const withComponentLifecycleLogs = <C extends React.JSXElementConstructor<Record<string, unknown>>>(Component: C) => {
  type P = React.ComponentProps<C>;

  return class ComponentLifecycleLogs extends React.Component {
    public constructor(props: P) {
      super(props);
    }

    public componentDidMount() {
      // eslint-disable-next-line no-console
      console.log('COMPONENT_LIFECYCLE', 'componentDidMount()');
    }

    public componentDidUpdate(_prevProps: Readonly<P>, _prevState: Readonly<P>, _snapshot?: unknown) {
      // eslint-disable-next-line no-console
      console.log('COMPONENT_LIFECYCLE', 'componentDidUpdate()');
    }

    public componentWillUnmount() {
      // eslint-disable-next-line no-console
      console.log('COMPONENT_LIFECYCLE', 'componentWillUnmount()');
    }

    public render() {
      // eslint-disable-next-line no-console
      console.log('COMPONENT_LIFECYCLE', 'render()');

      // @ts-ignore
      return <Component />;
    }
  };
};

export default withComponentLifecycleLogs;
