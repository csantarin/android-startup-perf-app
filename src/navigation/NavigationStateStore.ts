import { NativeModules, Platform } from 'react-native';

const { RNNavigationStateStore } = NativeModules as typeof NativeModules & {
  RNNavigationStateStore: RNNavigationStateStore;
};

interface RNNavigationStateStore {
  setIndex: (index: number) => void;
}

class NavigationStateStore {
  /**
   * Stores the current back stack index of React Navigation's navigation container **on Android only**.
   *
   * By itself, this bridge method does absolutely nothing — all it does is to store a value passed by
   * the calling function. The value needs to be read and evaluated elsewhere natively.
   *
   * To put it to good use, consume this in conjunction with back button handling at the implementation
   * of Android's native `AppCompatActivity.onBackPressed()`.
   * @param index The current back stack value of `<NavigationContainer>`. If it's `null`-ish, the store doesn't update.
   * @returns
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
}

export default new NavigationStateStore();
