import { NativeModules, Platform } from 'react-native';

const { RNLandingScreenFragment } = NativeModules as typeof NativeModules & {
  RNLandingScreenFragment: RNLandingScreenFragment;
};

interface RNLandingScreenFragment {
  hideAsync: () => void;
  showAsync: () => void;
}

class LandingScreenFragment {
  public hideAsync() {
    if (Platform.OS !== 'android') {
      return;
    }

    RNLandingScreenFragment.hideAsync();
  }

  public showAsync() {
    if (Platform.OS !== 'android') {
      return;
    }

    RNLandingScreenFragment.showAsync();
  }
}

export default new LandingScreenFragment();
