import React, { useContext, useEffect, useRef } from 'react';

/**
 * Accepts a context object carrying the current initial route name value of the Android app and
 * returns the value of the current initial route name, as given by the nearest context provider
 * for the given context.
 * @returns The current value of the initial route name, `string` or `null`.
 */
const useInitialRouteNameStateContext = <InitialRouteName extends string>(
  initialRouteNameStateContext: React.Context<InitialRouteName | null>,
) => {
  //#region INITIAL ROUTE NAME STATE MODIFIERS
  const initialRouteName = useContext(initialRouteNameStateContext);
  //#endregion

  //#region INITIAL ROUTE NAME PREVIOUS STATE
  // In case of the need to recall the previous state (necessary for handling intuitive animations).
  const prevInitialRouteName = useRef<InitialRouteName | null>(null);
  useEffect(() => {
    prevInitialRouteName.current = initialRouteName;
  }, [initialRouteName]);
  //#endregion

  return {
    initialRouteName,
    prevInitialRouteName: prevInitialRouteName.current,
  };
};

export default useInitialRouteNameStateContext;
