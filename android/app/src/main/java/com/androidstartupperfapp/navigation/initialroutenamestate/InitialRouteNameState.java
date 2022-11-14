package com.androidstartupperfapp.navigation.initialroutenamestate;

public final class InitialRouteNameState {

  //region Value
  private static String value;

  public static String getValue() {
    return value;
  }

  public static void setValue(String value) {
    InitialRouteNameState.value = value;
    InitialRouteNameState.onChange();
  }
  //endregion

  //region Value change event emitter
  public interface OnChangeListener {
    void onChange(String initialRouteName);
  }

  private static OnChangeListener onChangeListener;

  public static OnChangeListener getOnChangeListener() {
    return onChangeListener;
  }

  public static void setOnChangeListener(OnChangeListener onChangeListener) {
    InitialRouteNameState.onChangeListener = onChangeListener;
  }

  private static void onChange() {
    if (onChangeListener == null) {
      return;
    }

    onChangeListener.onChange(value);
  }
  //endregion
}
