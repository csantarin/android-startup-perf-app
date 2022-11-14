package com.androidstartupperfapp;

import com.androidstartupperfapp.screens.landingscreen.LandingScreenFragment;

// TODO: Put this in charge of navigation and transition?
//       For multiple screens, it's quite impractical to implement those behaviors per screen.
//       In fact, I predict that it's going to become a maintenance nightmare moving forward.
//       Linked screens should stop handling transitions themselves in a screen navigation scenario.
//       By implementing it here instead, the number of screens can sort of scale logarithmically.
//       That being said, the navigation mechanism needs to be thought out very carefully here...

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
