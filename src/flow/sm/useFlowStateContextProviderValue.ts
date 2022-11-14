import { useState } from 'react';

import { DEFAULT_INITIAL_ROUTE_NAME } from '../../navigation/InitialRouteNameState';

import { FlowStackRoute } from '../nav/FlowStackRoutes';

import { DEFAULT_FLOW_STATE_CONTEXT_VALUE, FlowStateContextValue } from './FlowStateContext';

const DEFAULT_STEP1_VALUE = DEFAULT_FLOW_STATE_CONTEXT_VALUE.step1.value;
const DEFAULT_STEP2_VALUE = DEFAULT_FLOW_STATE_CONTEXT_VALUE.step2.value;
const DEFAULT_STEP3_VALUE = DEFAULT_FLOW_STATE_CONTEXT_VALUE.step3.value;

/**
 * Creates state management for all steps in the flow module
 * for use as the `value` prop in `<FlowStateContext.Provider>`.
 * @returns Flow state manager as context provider value.
 */
const useFlowStateContextProviderValue = (): FlowStateContextValue => {
  const [initialRouteName, setInitialRouteNameBase] = useState<FlowStackRoute | null>(null);
  const setInitialRouteName = (value: FlowStackRoute | null) => {
    setInitialRouteNameBase(value);
  };
  const resetInitialRouteName = () => {
    setInitialRouteName(DEFAULT_INITIAL_ROUTE_NAME);
  };

  const [step1Value, setStep1Value] = useState(DEFAULT_STEP1_VALUE);
  const resetStep1Value = () => {
    setStep1Value(DEFAULT_STEP1_VALUE);
  };

  const [step2Value, setStep2Value] = useState(DEFAULT_STEP2_VALUE);
  const resetStep2Value = () => {
    setStep2Value(DEFAULT_STEP2_VALUE);
  };

  const [step3Value, setStep3Value] = useState(DEFAULT_STEP3_VALUE);
  const resetStep3Value = () => {
    setStep3Value(DEFAULT_STEP3_VALUE);
  };

  return {
    initialRouteName: {
      value: initialRouteName,
      setValue: setInitialRouteName,
      resetValue: resetInitialRouteName,
    },
    step1: {
      value: step1Value,
      setValue: setStep1Value,
      resetValue: resetStep1Value,
    },
    step2: {
      value: step2Value,
      setValue: setStep2Value,
      resetValue: resetStep2Value,
    },
    step3: {
      value: step3Value,
      setValue: setStep3Value,
      resetValue: resetStep3Value,
    },
  };
};

export default useFlowStateContextProviderValue;
