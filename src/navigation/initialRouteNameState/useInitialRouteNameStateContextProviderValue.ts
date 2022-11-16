import { useState } from 'react';

import { DEFAULT_INITIAL_ROUTE_NAME } from './InitialRouteNameState';
import { InitialRouteNameStateContextValue } from './InitialRouteNameStateContext';

const useInitialRouteNameStateContextProviderValue = <
  InitialRouteName extends string,
>(): InitialRouteNameStateContextValue<InitialRouteName> => {
  const [initialRouteName, setInitialRouteName] = useState<InitialRouteName | null>(null);
  const resetInitialRouteName = () => {
    setInitialRouteName(DEFAULT_INITIAL_ROUTE_NAME);
  };

  return {
    value: initialRouteName,
    setValue: setInitialRouteName,
    resetValue: resetInitialRouteName,
  };
};

export default useInitialRouteNameStateContextProviderValue;
