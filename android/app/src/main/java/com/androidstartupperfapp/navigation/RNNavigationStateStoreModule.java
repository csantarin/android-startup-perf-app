package com.androidstartupperfapp.navigation;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class RNNavigationStateStoreModule extends ReactContextBaseJavaModule {

  public RNNavigationStateStoreModule(ReactApplicationContext context) {
    super(context);
  }

  @NonNull
  @Override
  public String getName() {
    return "RNNavigationStateStore";
  }

  @ReactMethod
  public void setIndex(int index) {
    NavigationStateStore.setIndex(index);
  }
}
