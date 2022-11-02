import { useContext } from 'react';

import FlowStateContext, { FlowStateContextValue } from './FlowStateContext';

// Imitate useState API as that's all the client code cares about.
// The useContext behavior under the hood is abstracted from the client code.
type FlowStateContextHook<Key extends keyof FlowStateContextValue> = [
  FlowStateContextValue[Key]['value'],
  FlowStateContextValue[Key]['setValue'],
  FlowStateContextValue[Key]['resetValue'],
];

/**
 * Selects a slice from the state context using a slice key.
 * @template Key Any of the known state context keys (`step1`, `step2`, `step3`, ...).
 * @param step The state context slice key to select.
 * @returns The state context slice.
 */
const useFlowStateContext = <Key extends keyof FlowStateContextValue>(step: Key): FlowStateContextHook<Key> => {
  const context = useContext<FlowStateContextValue>(FlowStateContext);
  const { value, setValue, resetValue } = context[step];

  return [
    // multiline
    value,
    setValue,
    resetValue,
  ];
};

export default useFlowStateContext;
