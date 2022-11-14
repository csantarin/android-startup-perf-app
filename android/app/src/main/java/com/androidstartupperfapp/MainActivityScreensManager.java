package com.androidstartupperfapp;

import com.androidstartupperfapp.screens.landingscreen.LandingScreenFragment;

public final class MainActivityScreensManager {
  private static LandingScreenFragment landingScreenFragment;

  public static LandingScreenFragment getLandingScreenFragment() {
    return landingScreenFragment;
  }

  public static void setLandingScreenFragment(LandingScreenFragment landingScreenFragment) {
    MainActivityScreensManager.landingScreenFragment = landingScreenFragment;
  }

  public static LandingScreenFragment createLandingScreenFragment() {
    return landingScreenFragment = new LandingScreenFragment();
  }

  public static class FlowStackRoutes {
    public static final String LOGIN = "Login";
    public static final String REGISTER = "Register";
  }
}
