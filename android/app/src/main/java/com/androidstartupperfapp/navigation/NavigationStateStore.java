package com.androidstartupperfapp.navigation;

public final class NavigationStateStore {

  private static int index = 0;

  public static int getIndex() {
    return index;
  }

  public static void setIndex(int index) {
    NavigationStateStore.index = index;
  }
}
