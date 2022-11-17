import { useEffect, useState } from 'react';

import InitialRouteNameState from './InitialRouteNameState';

const useInitialRouteNameStateContextProviderValue = (): string | null => {
  const [initialRouteName, setInitialRouteName] = useState<string | null>(null);

  //#region INITIAL ROUTE NAME STATE EVENT LISTENER
  // This would be the usual transition between Android and React, but it can fail because the React
  // side of things might have not been initialized at the time the event is sent (which would cause
  // the app to crash if left unhandled), meaning that the event can't be emitted.
  useEffect(() => {
    InitialRouteNameState.onChange<string>((payload) => {
      setInitialRouteName(payload.value);
    });

    return () => {
      InitialRouteNameState.offChange();
    };
    // Once on mount only.
  }, []);
  //#endregion

  //#region INITIAL ROUTE NAME STATE EVENT LISTENER COMPENSATOR
  // This block of code recovers the loss of the expected initial route name data when the React app
  // has been initialized much later than the event listener was able to receive a state change from
  // Android. This scenario is expected to only happen on cold start.
  useEffect(() => {
    async function getInitialRouteNameInEventDataLossAtColdStart() {
      // The method call returns `null` or a `string` value, e.g.: "Login" or "Register".
      const value = await InitialRouteNameState.getValue<string>();

      // When the React app is aware of the initial route name (i.e. it's not `null`) at cold start,
      // it means that the user didn't rush into entering the React app, and that the event listener
      // works as intended. Thus, we can stop here.
      //
      // e.g.
      // - native InitialRouteNameState: "Login"
      //     => do nothing, the context state was already set by the event emitter
      //
      // - native InitialRouteNameState: `null`
      //     => change the initial route name at the context state, possibly with a string.
      if (initialRouteName != null) {
        return;
      }

      setInitialRouteName(value);
    }

    getInitialRouteNameInEventDataLossAtColdStart();
    // Once on mount only.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //#endregion

  return initialRouteName;
};

export default useInitialRouteNameStateContextProviderValue;
