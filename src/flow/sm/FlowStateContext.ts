import React, { createContext } from 'react';

export interface FlowStep<T> {
  value: T;
  setValue: React.Dispatch<React.SetStateAction<T>>;
  resetValue: () => void;
}

export interface FlowStateContextValue {
  step1: FlowStep<boolean>;
  step2: FlowStep<string>;
  step3: FlowStep<string>;
}

export const DEFAULT_FLOW_STATE_CONTEXT_VALUE: FlowStateContextValue = {
  step1: {
    value: false,
    setValue: () => {},
    resetValue: () => {},
  },
  step2: {
    value: '',
    setValue: () => {},
    resetValue: () => {},
  },
  step3: {
    value: '',
    setValue: () => {},
    resetValue: () => {},
  },
};

const FlowStateContext = createContext(DEFAULT_FLOW_STATE_CONTEXT_VALUE);

export default FlowStateContext;
