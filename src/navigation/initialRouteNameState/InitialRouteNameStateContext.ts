import React, { createContext } from 'react';

import { DEFAULT_INITIAL_ROUTE_NAME } from './InitialRouteNameState';

const InitialRouteNameStateContext = createContext<string | null>(DEFAULT_INITIAL_ROUTE_NAME);

export const getInitialRouteNameStateContext = <InitialRouteName extends string>() => {
  return InitialRouteNameStateContext as React.Context<InitialRouteName | null>;
};

export default InitialRouteNameStateContext;
