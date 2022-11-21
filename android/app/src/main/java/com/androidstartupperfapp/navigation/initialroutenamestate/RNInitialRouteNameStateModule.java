package com.androidstartupperfapp.navigation.initialroutenamestate;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

public class RNInitialRouteNameStateModule extends ReactContextBaseJavaModule {

  public RNInitialRouteNameStateModule(ReactApplicationContext context) {
    super(context);
    this.setupOnChangeListener();
  }

  @NonNull
  @Override
  public String getName() {
    return "RNInitialRouteNameState";
  }

  //region RCTDeviceEventEmitter
  private void sendEvent(
    ReactApplicationContext reactContext,
    String eventName,
    @Nullable WritableMap params
  ) {
    // Don't emit anything when the React instance is not ready.
    // You will get this crash if you emit the event before React is ready.
    //
    // """
    // java.lang.IllegalStateException: Tried to access a JS module before the React instance was fully set up. Calls to ReactContext#getJSModule should only happen once initialize() has been called on your native module.
    // """
    //
    // https://stackoverflow.com/questions/41120491/react-native-reactcontext-lifecycle-stuck-on-before-create
    // For this scenario, compensate by retrieving the state imperatively with useEffect() on mount.
    if (!reactContext.hasActiveReactInstance()) {
      return;
    }

    reactContext
      .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
      .emit(eventName, params);
  }

  @ReactMethod
  public void addListener(String eventName) {
    // Do nothing for now.
  }

  @ReactMethod
  public void removeListeners(Integer count) {
    // Do nothing for now.
  }
  //endregion

  //region Value
  @ReactMethod
  public void getValue(Promise promise) {
    try {
      String value = InitialRouteNameState.getValue();
      promise.resolve(value);
    } catch (Exception exception) {
      promise.reject("Unable to get initial route name value", exception);
    }
  }

  @ReactMethod
  public void setValue(String value) {
    InitialRouteNameState.setValue(value);
  }
  //endregion

  //region OnChangeListener
  private void setupOnChangeListener() {
    InitialRouteNameState.setOnChangeListener(this::onChange);
  }

  private void teardownOnChangeListener() {
    InitialRouteNameState.setOnChangeListener(null);
  }

  private void onChange(String value) {
    WritableMap params = Arguments.createMap();
    params.putString("value", value);
    sendEvent(getReactApplicationContext(), "change", params);
  }
  //endregion
}
