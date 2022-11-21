package com.androidstartupperfapp;

import android.os.Bundle;

import com.androidstartupperfapp.navigation.initialroutenamestate.InitialRouteNameState;
import com.androidstartupperfapp.screens.landingscreen.LandingScreenFragment;
import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "AndroidStartupPerfApp";
  }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    this.initializeLandingScreen();
  }

  @Override
  public void invokeDefaultOnBackPressed() {
    this.maybeGoBackToLandingScreen();
  }

  // TODO: Relinquish all of this behavior to a custom navigator.

  private void initializeLandingScreen() {
    LandingScreenFragment landingScreenFragment = MainActivityScreensManager.createLandingScreenFragment();
    landingScreenFragment.addAsync(this);
  }

  private void maybeGoBackToLandingScreen() {
    LandingScreenFragment landingScreenFragment = MainActivityScreensManager.getLandingScreenFragment();
    if (landingScreenFragment.isHidden()) {
      // Reset the React app navigation.
      InitialRouteNameState.setValue(null);

      // Show the Android landing screen fragment to simulate back button press navigation.
      landingScreenFragment.showAsync(this);
    }
  }
}
