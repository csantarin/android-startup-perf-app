package com.androidstartupperfapp;

import android.os.Bundle;
import android.view.KeyEvent;

import androidx.appcompat.app.AppCompatActivity;

import com.facebook.react.PackageList;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactPackage;
import com.facebook.react.ReactRootView;
import com.facebook.react.common.LifecycleState;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.facebook.soloader.SoLoader;

import java.util.List;

// If you don't extend AppCompatActivity like React Native's real ReactActivity (e.g. using Activity
// instead), React Native will crash, asking you to extend ReactActivity first.
public class ReactActivity extends AppCompatActivity implements DefaultHardwareBackBtnHandler {

  private ReactRootView mReactRootView;
  private ReactInstanceManager mReactInstanceManager;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    // React Native Screens and React Navigation suggest using `null` for savedInstanceState.
    // This supposedly prevents "persisted view state" inconsistency errors during activity restarts.
    // https://github.com/software-mansion/react-native-screens#android
    // https://reactnavigation.org/docs/getting-started#installing-dependencies-into-a-bare-react-native-project
    super.onCreate(null);
    SoLoader.init(this, false);

    mReactRootView = new ReactRootView(this);
    List<ReactPackage> packages = new PackageList(getApplication()).getPackages();
    // Packages that cannot be autolinked yet can be added manually here, for example:
    // packages.add(new MyReactNativePackage());
    // Remember to include them in `settings.gradle` and `app/build.gradle` too.

    mReactInstanceManager = ReactInstanceManager.builder()
      .setApplication(getApplication())
      .setCurrentActivity(this)
      .setBundleAssetName("index.android.bundle")
      .setJSMainModulePath("index")
      .addPackages(packages)
      .setUseDeveloperSupport(BuildConfig.DEBUG)
      .setInitialLifecycleState(LifecycleState.RESUMED)
      .build();
    // The string here (e.g. "AndroidStartupPerfApp") has to match
    // the string in AppRegistry.registerComponent() in index.js
    mReactRootView.startReactApplication(mReactInstanceManager, "AndroidStartupPerfApp", null);

    setContentView(mReactRootView);
  }

  @Override
  public void invokeDefaultOnBackPressed() {
    super.onBackPressed();
  }

  @Override
  protected void onPause() {
    super.onPause();

    if (mReactInstanceManager != null) {
      mReactInstanceManager.onHostPause(this);
    }
  }

  @Override
  protected void onResume() {
    super.onResume();

    if (mReactInstanceManager != null) {
      mReactInstanceManager.onHostResume(this, this);
    }
  }

  // Without android:launchMode="singleTop", the app will always call ReactActivity.onDestroy()
  // before it calls MainActivity.onResume(), thus preventing the user from continuing work in
  // this activity.
  @Override
  protected void onDestroy() {
    super.onDestroy();

    if (mReactInstanceManager != null) {
      mReactInstanceManager.onHostDestroy(this);
    }
    if (mReactRootView != null) {
      mReactRootView.unmountReactApplication();
    }
  }

  @Override
  public void onBackPressed() {
    if (mReactInstanceManager != null) {
      mReactInstanceManager.onBackPressed();
    } else {
      super.onBackPressed();
    }
  }

  @Override
  public boolean onKeyUp(int keyCode, KeyEvent event) {
    if (keyCode == KeyEvent.KEYCODE_MENU && mReactInstanceManager != null) {
      mReactInstanceManager.showDevOptionsDialog();
      return true;
    }

    return super.onKeyUp(keyCode, event);
  }
}
