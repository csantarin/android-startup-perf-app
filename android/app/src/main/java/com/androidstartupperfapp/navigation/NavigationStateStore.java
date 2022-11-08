package com.androidstartupperfapp.navigation;

public final class NavigationStateStore {

  private static int index = 0;
  public static int getIndex() {
    return index;
  }
  public static void setIndex(int index) {
    NavigationStateStore.index = index;
  }
  // Change listener.
  public interface IndexChangeListener {
    void onChange(int index);
  }
  private static IndexChangeListener indexChangeListener;
  public static void setIndexChangeListener(IndexChangeListener indexChangeListener) {
    NavigationStateStore.indexChangeListener = indexChangeListener;
  }





  private static String initialRouteName = null;
  public static String getInitialRouteName() {
    return initialRouteName;
  }
  public static void setInitialRouteName(String initialRouteName) {
    NavigationStateStore.initialRouteName = initialRouteName;
    if (NavigationStateStore.initialRouteNameChangeListener == null) {
      return;
    }
    NavigationStateStore.initialRouteNameChangeListener.onChange(NavigationStateStore.initialRouteName);
  }
  // Change listener.
  public interface InitialRouteNameChangeListener {
    void onChange(String initialRouteName);
  }
  private static InitialRouteNameChangeListener initialRouteNameChangeListener;
  public static void setInitialRouteNameChangeListener(InitialRouteNameChangeListener initialRouteNameChangeListener) {
    NavigationStateStore.initialRouteNameChangeListener = initialRouteNameChangeListener;
  }
}
