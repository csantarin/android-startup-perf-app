import { useState } from 'react';

const useTextInputState = (initialState: string | (() => string)) => {
  const [value, setValue] = useState(initialState);
  const handleChangeText = (nextValue: string) => {
    setValue(nextValue);
  };
  return [
    // multiline
    value,
    setValue,
    handleChangeText,
  ] as const;
};

export default useTextInputState;
