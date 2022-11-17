import React, { createContext } from 'react';

import { DEFAULT_INITIAL_ROUTE_NAME } from './InitialRouteNameState';

/**
 * A context object holding the current initial route name state.
 *
 * For TypeScript, it's recommended that you use `getInitialRouteNameStateContext()` instead for the
 * express purpose of limiting the results to list of known string literal types. Both of these ways
 * return the same context object in plain JavaScript.
 */
const InitialRouteNameStateContext = createContext<string | null>(DEFAULT_INITIAL_ROUTE_NAME);

/**
 * Retrieves a context object holding the current initial route name state, which can be represented
 * in a known string literal type.
 * @template InitialRouteName A list of possible string literal types the context can have.
 * @returns The current initial route name value.
 */
export const getInitialRouteNameStateContext = <InitialRouteName extends string>() => {
  return InitialRouteNameStateContext as React.Context<InitialRouteName | null>;
};

export default InitialRouteNameStateContext;
