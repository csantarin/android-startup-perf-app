package com.androidstartupperfapp;

import android.os.Bundle;
import android.util.Log;

import androidx.fragment.app.FragmentManager;

import com.androidstartupperfapp.screens.LandingScreenFragment;
import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    Log.d("ACTIVITY_LIFECYCLE", "onCreate()");
    this.initializeLandingScreen();
  }

  private void initializeLandingScreen() {
    this.getSupportFragmentManager()
      .beginTransaction()
      .add(android.R.id.content, MainActivityScreensManager.initLandingScreenFragment())
      .addToBackStack(LandingScreenFragment.BACK_STACK_NAME)
      .commit();
  }

  @Override
  protected void onDestroy() {
    super.onDestroy();
    Log.d("ACTIVITY_LIFECYCLE", "onDestroy()");
  }

  @Override
  protected void onPause() {
    super.onPause();
    Log.d("ACTIVITY_LIFECYCLE", "onPause()");
  }

  @Override
  protected void onResume() {
    super.onResume();
    Log.d("ACTIVITY_LIFECYCLE", "onResume()");
  }

  @Override
  protected void onStop() {
    super.onStop();
    Log.d("ACTIVITY_LIFECYCLE", "onStop()");
  }

  @Override
  protected void onStart() {
    super.onStart();
    Log.d("ACTIVITY_LIFECYCLE", "onStart()");
  }

  @Override
  protected void onRestart() {
    super.onRestart();
    Log.d("ACTIVITY_LIFECYCLE", "onRestart()");
  }

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "AndroidStartupPerfApp";
  }

  @Override
  public void invokeDefaultOnBackPressed() {
    if (MainActivityScreensManager.getLandingScreenFragment().isHidden()) {
      getSupportFragmentManager()
        .beginTransaction()
        .show(MainActivityScreensManager.getLandingScreenFragment())
        .commit();
    } else {
      super.invokeDefaultOnBackPressed();
    }
  }
}
