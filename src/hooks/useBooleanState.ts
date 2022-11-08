import { useState } from 'react';

const useBooleanState = (initialState: boolean | (() => boolean)) => {
  const [value, setValue] = useState(initialState);
  const toggleValue = () => {
    setValue(!value);
  };
  return [
    // multiline
    value,
    setValue,
    toggleValue,
  ] as const;
};

export default useBooleanState;
