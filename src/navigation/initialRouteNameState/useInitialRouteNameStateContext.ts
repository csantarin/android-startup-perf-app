import React, { useContext, useEffect, useRef } from 'react';

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
