package com.androidstartupperfapp.screens.landingscreen;

import androidx.annotation.NonNull;
import androidx.fragment.app.FragmentActivity;

import com.androidstartupperfapp.MainActivityScreensManager;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class RNLandingScreenFragmentModule extends ReactContextBaseJavaModule {

  public RNLandingScreenFragmentModule(ReactApplicationContext context) {
    super(context);
  }

  @NonNull
  @Override
  public String getName() {
    return "RNLandingScreenFragment";
  }

  @ReactMethod
  public void hideAsync() {
    LandingScreenFragment landingScreenFragment = MainActivityScreensManager.getLandingScreenFragment();
    landingScreenFragment.hideAsync((FragmentActivity) this.getCurrentActivity());
  }

  @ReactMethod
  public void showAsync() {
    LandingScreenFragment landingScreenFragment = MainActivityScreensManager.getLandingScreenFragment();
    landingScreenFragment.showAsync((FragmentActivity) this.getCurrentActivity());
  }
}
