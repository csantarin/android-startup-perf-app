import { NativeModules, Platform } from 'react-native';

const { RNLandingScreenFragment } = NativeModules as typeof NativeModules & {
  RNLandingScreenFragment: RNLandingScreenFragment;
};

interface RNLandingScreenFragment {
  show: () => void;
}

class LandingScreenFragment {
  public show() {
    if (Platform.OS !== 'android') {
      return;
    }

    RNLandingScreenFragment.show();
  }
}

export default new LandingScreenFragment();
