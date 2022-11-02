package com.androidstartupperfapp.navigationstate;

public final class NavigationState {

  private static int index = 0;

  public static int getIndex() {
    return index;
  }

  public static void setIndex(int index) {
    NavigationState.index = index;
  }
}
