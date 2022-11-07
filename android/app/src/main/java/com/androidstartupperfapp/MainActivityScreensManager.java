package com.androidstartupperfapp;

import com.androidstartupperfapp.screens.LandingScreenFragment;
import com.androidstartupperfapp.screens.LandingScreenSignUpFragment;

public class MainActivityScreensManager {
  private static LandingScreenFragment landingScreenFragment;
  private static LandingScreenSignUpFragment landingScreenSignUpFragment;

  public static LandingScreenFragment getLandingScreenFragment() {
    return landingScreenFragment;
  }

  public static void setLandingScreenFragment(LandingScreenFragment landingScreenFragment) {
    MainActivityScreensManager.landingScreenFragment = landingScreenFragment;
  }

  public static LandingScreenFragment initLandingScreenFragment() {
    landingScreenFragment = new LandingScreenFragment();
    return landingScreenFragment;
  }

  public static LandingScreenSignUpFragment getLandingScreenSignUpFragment() {
    return landingScreenSignUpFragment;
  }

  public static void setLandingScreenSignUpFragment(LandingScreenSignUpFragment landingScreenSignUpFragment) {
    MainActivityScreensManager.landingScreenSignUpFragment = landingScreenSignUpFragment;
  }

  public static LandingScreenSignUpFragment initLandingScreenSignUpFragment() {
    landingScreenSignUpFragment = new LandingScreenSignUpFragment();
    return landingScreenSignUpFragment;
  }
}
