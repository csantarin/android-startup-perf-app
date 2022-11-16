import React, { useContext, useEffect, useRef } from 'react';

import InitialRouteNameState from './InitialRouteNameState';
import { InitialRouteNameStateContextValue } from './InitialRouteNameStateContext';

const useInitialRouteNameStateContext = <InitialRouteName extends string>(
  initialRouteNameStateContext: React.Context<InitialRouteNameStateContextValue<InitialRouteName>>,
) => {
  //#region INITIAL ROUTE NAME STATE MODIFIERS
  const {
    // multiline
    value: initialRouteName,
    setValue: setInitialRouteName,
    resetValue: resetInitialRouteName,
  } = useContext(initialRouteNameStateContext);
  //#endregion

  //#region INITIAL ROUTE NAME PREVIOUS STATE
  // In case of the need to recall the previous state (necessary for handling intuitive animations).
  const prevInitialRouteName = useRef<InitialRouteName | null>(null);
  useEffect(() => {
    prevInitialRouteName.current = initialRouteName;
  }, [initialRouteName]);
  //#endregion

  //#region INITIAL ROUTE NAME STATE EVENT LISTENER
  // This would be the usual transition between Android and React, but it can fail because the React
  // side of things might have not been initialized at the time the event is sent (which would cause
  // the app to crash if left unhandled), meaning that the event can't be emitted.
  useEffect(() => {
    InitialRouteNameState.onChange<InitialRouteName>((payload) => {
      setInitialRouteName(payload.value);
    });

    return () => {
      InitialRouteNameState.offChange();
    };
    // Once during mount only.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //#endregion

  //#region INITIAL ROUTE NAME STATE EVENT LISTENER COMPENSATOR
  // This block of code recovers the loss of the expected initial route name data when the React app
  // has been initialized much later than the event listener was able to receive a state change from
  // Android. This scenario is expected to only happen on cold start.
  useEffect(() => {
    async function getInitialRouteNameInEventDataLossAtColdStart() {
      // The method call returns `null` or a `string` value, e.g.: "Login" or "Register".
      const value = await InitialRouteNameState.getValue<InitialRouteName>();

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
    // Once during mount only.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //#endregion

  return {
    initialRouteName,
    prevInitialRouteName: prevInitialRouteName.current,
    setInitialRouteName,
    resetInitialRouteName,
  };
};

export default useInitialRouteNameStateContext;
