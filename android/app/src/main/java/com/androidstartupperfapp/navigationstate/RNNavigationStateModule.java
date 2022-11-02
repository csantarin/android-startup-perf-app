package com.androidstartupperfapp.navigationstate;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class RNNavigationStateModule extends ReactContextBaseJavaModule {

  public RNNavigationStateModule(ReactApplicationContext context) {
    super(context);
  }

  @NonNull
  @Override
  public String getName() {
    return "RNNavigationState";
  }

  @ReactMethod
  public void setIndex(int index) {
    NavigationState.setIndex(index);
  }
}
