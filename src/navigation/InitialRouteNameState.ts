import { EmitterSubscription, NativeEventEmitter, NativeModule, NativeModules, Platform } from 'react-native';

const { RNInitialRouteNameState } = NativeModules as typeof NativeModules & {
  RNInitialRouteNameState: RNInitialRouteNameState;
};

interface RNInitialRouteNameState extends NativeModule {
  getValue: () => Promise<string | null>;
  setValue: (value: string | null) => void;
}

interface OnInitialRouteNameChangePayload<InitialRouteName extends string> {
  value: InitialRouteName | null;
}

// As per Android implementation.
export const DEFAULT_INITIAL_ROUTE_NAME = null;

class InitialRouteNameState {
  public async getValue<InitialRouteName extends string>() {
    if (Platform.OS !== 'android') {
      return Promise.resolve(DEFAULT_INITIAL_ROUTE_NAME);
    }

    const value = (await RNInitialRouteNameState.getValue()) as InitialRouteName;

    return value;
  }

  public async setValue(value: string | null) {
    if (Platform.OS !== 'android') {
      return;
    }

    RNInitialRouteNameState.setValue(value);
  }

  /* eslint-disable @typescript-eslint/member-ordering */
  private static eventEmitter = new NativeEventEmitter(RNInitialRouteNameState);
  private static onChangeListener?: EmitterSubscription;
  /* eslint-enable @typescript-eslint/member-ordering */

  public onChange<InitialRouteName extends string>(
    payloadCallback: (payload: OnInitialRouteNameChangePayload<InitialRouteName>) => void,
  ) {
    if (Platform.OS !== 'android') {
      return;
    }

    InitialRouteNameState.onChangeListener = InitialRouteNameState.eventEmitter.addListener('change', payloadCallback);
  }

  public offChange() {
    if (Platform.OS !== 'android') {
      return;
    }

    InitialRouteNameState.onChangeListener?.remove();
    InitialRouteNameState.onChangeListener = undefined;
  }
}

export default new InitialRouteNameState();
