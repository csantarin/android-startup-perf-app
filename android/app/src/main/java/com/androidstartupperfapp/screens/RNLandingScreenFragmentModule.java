package com.androidstartupperfapp.screens;

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
  public void show() {
    FragmentActivity fragmentActivity = (FragmentActivity) getCurrentActivity();

    if (fragmentActivity == null) {
      return;
    }

    LandingScreenFragment landingScreenFragment = MainActivityScreensManager.getLandingScreenFragment();

    fragmentActivity.getSupportFragmentManager()
      .beginTransaction()
      .show(landingScreenFragment)
      .commit();
  }
}
