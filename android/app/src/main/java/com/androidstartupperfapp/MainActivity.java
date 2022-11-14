package com.androidstartupperfapp;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;

import com.androidstartupperfapp.navigation.NavigationStateStore;
import com.androidstartupperfapp.screens.LandingScreenFragment;
import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    this.initializeLandingScreen();
  }

  private void initializeLandingScreen() {
    this.getSupportFragmentManager()
      .beginTransaction()
      .add(android.R.id.content, MainActivityScreensManager.initLandingScreenFragment())
      .addToBackStack(LandingScreenFragment.BACK_STACK_NAME)
      .commit();
  }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "AndroidStartupPerfApp";
  }

  // While in React Navigation, this whole lifecycle callback doesn't get invoked... at all.
  // Once the HomeScreen on React is reached, the next back button press is handed off here.
  @Override
  public void invokeDefaultOnBackPressed() {
    if (MainActivityScreensManager.getLandingScreenFragment().isHidden()) {
      // Reset the React app navigation.
      NavigationStateStore.setInitialRouteName(null);

      // Hide the Android landing screen fragment.
      getSupportFragmentManager()
        .beginTransaction()
        .show(MainActivityScreensManager.getLandingScreenFragment())
        .commit();
    }
  }

  @Override
  public void onBackPressed() {
    super.onBackPressed();
  }
}
