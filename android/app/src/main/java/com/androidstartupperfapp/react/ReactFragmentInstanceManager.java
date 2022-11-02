package com.androidstartupperfapp.react;

import androidx.annotation.IdRes;
import androidx.fragment.app.FragmentManager;

import com.androidstartupperfapp.R;
import com.facebook.react.ReactFragment;

public final class ReactFragmentInstanceManager {
  private static ReactFragment reactFragment;
  private static FragmentManager fragmentManager;
  @IdRes
  private final static int reactFragmentId = R.id.react_fragment;
  private final static String componentName = "AndroidStartupPerfApp";

  public static void setFragmentManager(FragmentManager fragmentManager) {
    ReactFragmentInstanceManager.fragmentManager = fragmentManager;
  }

  public static ReactFragment getReactFragment() {
    return reactFragment;
  }

  public static void loadReactFragment() {
    reactFragment = new ReactFragment.Builder()
      .setComponentName(componentName)
      .build();

    fragmentManager
      .beginTransaction()
      .add(reactFragmentId, reactFragment)
      .addToBackStack(componentName)
      .hide(reactFragment)
      .commit();
  }

  public static void hideReactFragment() {
    fragmentManager
      .beginTransaction()
      .hide(reactFragment)
      .commit();
  }

  public static void showReactFragment() {
    fragmentManager
      .beginTransaction()
      .show(reactFragment)
      .commit();
  }
}
