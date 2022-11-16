import React, { createContext } from 'react';

import { DEFAULT_INITIAL_ROUTE_NAME } from './InitialRouteNameState';

export interface InitialRouteNameStateContextValue<InitialRouteName extends string> {
  value: InitialRouteName | null;
  setValue: React.Dispatch<React.SetStateAction<InitialRouteName | null>>;
  resetValue: () => void;
}

export const DEFAULT_INITIAL_ROUTE_NAME_STATE_CONTEXT: InitialRouteNameStateContextValue<string> = {
  value: DEFAULT_INITIAL_ROUTE_NAME,
  setValue: ((_value: string | null) => {
    // Do nothing on default context.
  }) as unknown as React.Dispatch<React.SetStateAction<string | null>>,
  resetValue: () => {
    // Do nothing on default context.
  },
};

const InitialRouteNameStateContext = createContext(DEFAULT_INITIAL_ROUTE_NAME_STATE_CONTEXT);

export const getInitialRouteNameStateContext = <InitialRouteName extends string>() => {
  return InitialRouteNameStateContext as unknown as React.Context<InitialRouteNameStateContextValue<InitialRouteName>>;
};
