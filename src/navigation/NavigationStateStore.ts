import { EmitterSubscription, NativeEventEmitter, NativeModule, NativeModules, Platform } from 'react-native';

const { RNNavigationStateStore } = NativeModules as typeof NativeModules & {
  RNNavigationStateStore: RNNavigationStateStore;
};

interface RNNavigationStateStore extends NativeModule {
  getIndex: () => Promise<number>;
  setIndex: (index: number) => void;
  getInitialRouteName: () => Promise<string>;
  setInitialRouteName: (index: string) => void;
}

interface OnInitialRouteNameChangePayload<T extends string> {
  initialRouteName: T | null;
}

class NavigationStateStore {
  private static eventEmitter = new NativeEventEmitter(RNNavigationStateStore);

  /**
   * Retrieves the current back stack index React Navigation's navigation container **on Android only**.
   * @returns The current back stack index value of `<NavigationContainer>`. Or an `Error`, if the value is inexplicably `null`.
   */
  public async getIndex() {
    if (Platform.OS !== 'android') {
      throw new Error('NavigationStateStore is unavailable on iOS.');
    }

    const index = await RNNavigationStateStore.getIndex();

    if (index == null) {
      throw new Error('NavigationStateStore index is unexpectedly nullish.');
    }

    return index;
  }

  /**
   * Stores the current back stack index of React Navigation's navigation container **on Android only**.
   *
   * By itself, this bridge method does absolutely nothing — all it does is to store a value passed by
   * the calling function. The value needs to be read and evaluated elsewhere natively.
   *
   * To put it to good use, consume this in conjunction with back button handling at the implementation
   * of Android's native `AppCompatActivity.onBackPressed()`.
   * @param index The current back stack index value of `<NavigationContainer>`. If it's `null`-ish, the store doesn't update.
   */
  public setIndex(index?: number | null) {
    if (Platform.OS !== 'android') {
      return;
    }

    if (index == null) {
      return;
    }

    RNNavigationStateStore.setIndex(index);
  }

  /**
   * Retrieves the current initial route name of React Navigation's navigation container **on Android only**.
   * @returns The current initial route name value of `<NavigationContainer>`. Or an `Error`, if the value is inexplicably `null`.
   */
  public async getInitialRouteName<T extends string>() {
    if (Platform.OS !== 'android') {
      throw new Error('NavigationStateStore is unavailable on iOS.');
    }

    const initialRouteName = await RNNavigationStateStore.getInitialRouteName();

    if (initialRouteName == null) {
      throw new Error('NavigationStateStore index is unexpectedly nullish.');
    }

    return initialRouteName as T;
  }

  /**
   * Stores the current initial route name of React Navigation's navigation container **on Android only**.
   *
   * By itself, this bridge method does absolutely nothing — all it does is to store a value passed by
   * the calling function. The value needs to be read and evaluated elsewhere natively.
   *
   * To put it to good use, consume this in conjunction with the mounting of `<NavigationContainer>`.
   * @param initialRouteName The current initial route name value of `<NavigationContainer>`. If it's `null`-ish, the store doesn't update.
   */
  public setInitialRouteName(initialRouteName?: string | null) {
    if (Platform.OS !== 'android') {
      return;
    }

    if (initialRouteName == null) {
      return;
    }

    RNNavigationStateStore.setInitialRouteName(initialRouteName);
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  private static initialRouteNameOnChangeListener?: EmitterSubscription;

  public onInitialRouteNameChange<T extends string>(
    payloadCallback: (payload: OnInitialRouteNameChangePayload<T>) => void,
  ) {
    NavigationStateStore.initialRouteNameOnChangeListener = NavigationStateStore.eventEmitter.addListener(
      'initialRouteNameChange',
      payloadCallback,
    );
  }

  public offInitialRouteNameChange() {
    NavigationStateStore.initialRouteNameOnChangeListener?.remove();
    NavigationStateStore.initialRouteNameOnChangeListener = undefined;
  }
}

export default new NavigationStateStore();
