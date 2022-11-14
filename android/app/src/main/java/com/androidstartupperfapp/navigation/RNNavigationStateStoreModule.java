package com.androidstartupperfapp.navigation;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

public class RNNavigationStateStoreModule extends ReactContextBaseJavaModule {

  public RNNavigationStateStoreModule(ReactApplicationContext context) {
    super(context);

    // Setup subscribers.
    NavigationStateStore.setInitialRouteNameChangeListener(this::onInitialRouteNameChange);
  }

  @NonNull
  @Override
  public String getName() {
    return "RNNavigationStateStore";
  }

  //region RCTDeviceEventEmitter
  private void sendEvent(
    ReactApplicationContext reactContext,
    String eventName,
    @Nullable WritableMap params
  ) {
    reactContext
      .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
      .emit(eventName, params);
  }

  @ReactMethod
  public void addListener(String eventName) {

  }

  @ReactMethod
  public void removeListeners(Integer count) {

  }
  //endregion

  @ReactMethod
  public void getInitialRouteName(Promise promise) {
    try {
      String initialRouteName = NavigationStateStore.getInitialRouteName();
      promise.resolve(initialRouteName);
    } catch (Exception exception) {
      promise.reject("Unable to get initial route name", exception);
    }
  }

  @ReactMethod
  public void setInitialRouteName(String initialRouteName) {
    NavigationStateStore.setInitialRouteName(initialRouteName);
  }

  private void onInitialRouteNameChange(String initialRouteName) {
    WritableMap params = Arguments.createMap();
    params.putString("initialRouteName", initialRouteName);
    sendEvent(getReactApplicationContext(), "initialRouteNameChange", params);
  }
}
