package com.androidstartupperfapp;

import android.os.Bundle;
import android.util.Log;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    Log.d("ACTIVITY_LIFECYCLE", "onCreate()");
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

  // Remove this, then observe the difference in the preservation of the UI state
  // when the app is backgrounded via the hardware back button and then launched again.
  @Override
  public void invokeDefaultOnBackPressed() {
    // Backgrounds the Application such that this Activity isn't destroyed.
    // Allows the Application to relaunch with this Activity still alive.
    // Preserves React state thus ensuring that their values are still intact.
    // https://github.com/facebook/react-native/issues/13775#issuecomment-299147027
    // https://stackoverflow.com/questions/38368201/react-native-android-movetasktoback
    // https://stackoverflow.com/questions/39635398/background-a-react-native-android-app-using-back-button/39639286#39639286
    this.moveTaskToBack(true);
  }
}
