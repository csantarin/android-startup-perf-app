package com.androidstartupperfapp;

import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.Button;

import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentTransaction;
import androidx.navigation.NavController;
import androidx.navigation.Navigation;
import androidx.navigation.ui.AppBarConfiguration;
import androidx.navigation.ui.NavigationUI;

import com.androidstartupperfapp.databinding.MainActivityBinding;
import com.androidstartupperfapp.navigationstate.NavigationState;
import com.facebook.react.ReactFragment;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.google.android.material.snackbar.Snackbar;

public class MainActivity extends AppCompatActivity implements DefaultHardwareBackBtnHandler {

  private AppBarConfiguration appBarConfiguration;
  private MainActivityBinding binding;
  private NavController mNavController;
  private Button mButton;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    binding = MainActivityBinding.inflate(getLayoutInflater());
    setContentView(binding.getRoot());

    setSupportActionBar(binding.toolbar);

    this.mNavController = Navigation.findNavController(this, R.id.nav_host_main_content_fragment);
    appBarConfiguration = new AppBarConfiguration.Builder(this.mNavController.getGraph()).build();
    NavigationUI.setupActionBarWithNavController(this, this.mNavController, appBarConfiguration);

    binding.fab
      .setOnClickListener(view -> Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG)
      .setAction("Action", null).show());

    this.reactFragment = new ReactFragment.Builder()
      .setComponentName("AndroidStartupPerfApp")
      .build();

    this.loadReactFragment();
    this.initReactFragmentControls();
  }

  @Override
  public boolean onCreateOptionsMenu(Menu menu) {
    // Inflate the menu; this adds items to the action bar if it is present.
    getMenuInflater().inflate(R.menu.menu_main, menu);
    return true;
  }

  @Override
  public boolean onOptionsItemSelected(MenuItem item) {
    // Handle action bar item clicks here. The action bar will
    // automatically handle clicks on the Home/Up button, so long
    // as you specify a parent activity in AndroidManifest.xml.
    int id = item.getItemId();

    //noinspection SimplifiableIfStatement
    if (id == R.id.action_settings) {
      return true;
    }

    return super.onOptionsItemSelected(item);
  }

  @Override
  public boolean onSupportNavigateUp() {
    NavController navController = Navigation.findNavController(this, R.id.nav_host_main_content_fragment);
    return NavigationUI.navigateUp(navController, appBarConfiguration)
      || super.onSupportNavigateUp();
  }

  @Override
  public void invokeDefaultOnBackPressed() {
    super.onBackPressed();
  }

  @Override
  public void onBackPressed() {
    //<editor-fold desc="Previous attempts">
    // Unhelpful.
    // Here handles only React Native, not the React Navigation screen stack, which is one screen deep.
//    FragmentManager fragmentManager = getSupportFragmentManager();
//    int fragmentManagerBackStackEntryCount = fragmentManager.getBackStackEntryCount();
//    FragmentManager.BackStackEntry fragmentManagerBackStackEntry = fragmentManager.getBackStackEntryAt(fragmentManagerBackStackEntryCount - 1);

    // Unhelpful.
    // Here handles only native Android, which has no idea of what runs under React Native.
//    NavBackStackEntry previousBackStackEntry = this.mNavController.getPreviousBackStackEntry();
//    NavDestination previousDestination = previousBackStackEntry.getDestination();
//    NavBackStackEntry currentBackStackEntry = this.mNavController.getCurrentBackStackEntry();
//    NavDestination currentDestination = this.mNavController.getCurrentDestination();
    //</editor-fold>

    if (this.reactFragment.isVisible()) {
      if (NavigationState.getIndex() > 0) {
        ReactFragment reactFragment = (ReactFragment) this.reactFragment;
        reactFragment.onBackPressed();
      } else {
        this.hideReactFragment();
      }
    } else {
      super.onBackPressed();
    }
  }

  private Fragment reactFragment;
  private boolean reactFragmentIsPresented = false;

  private void loadReactFragment() {
    FragmentTransaction reactFragmentTransaction = getSupportFragmentManager()
      .beginTransaction()
      .add(R.id.react_fragment, this.reactFragment)
      .addToBackStack("AndroidStartupPerfAppReactFragment");

    if (!this.reactFragmentIsPresented) {
      reactFragmentTransaction.hide(this.reactFragment);
    }

    reactFragmentTransaction.commit();

    //<editor-fold desc="Raw implementation">
//    this.reactFragment = new ReactFragment.Builder()
//      .setComponentName("AndroidStartupPerfApp")
//      .build();
//
//    getSupportFragmentManager()
//      .beginTransaction()
//      .add(R.id.react_fragment, this.reactFragment)
//      .addToBackStack(null)
//      .hide(this.reactFragment)
//      .commit();
    //</editor-fold>
  }

  private void hideReactFragment() {
    getSupportFragmentManager()
      .beginTransaction()
      .hide(this.reactFragment)
      .commit();
  }

  private void showReactFragment() {
    getSupportFragmentManager()
      .beginTransaction()
      .show(this.reactFragment)
      .commit();

//    if (this.reactFragment.isHidden()) {
//      getSupportFragmentManager()
//        .beginTransaction()
//        .show(this.reactFragment)
//        .commit();
//      this.reactFragmentIsPresented = true;
//    } else {
//      this.loadReactFragment();

//      getSupportFragmentManager()
//        .beginTransaction()
//        .show(this.reactFragment)
//        .commit();
//      this.reactFragmentIsPresented = true;
//    }

    //<editor-fold desc="Raw implementation">
//    if (this.reactFragment.isHidden()) {
//      getSupportFragmentManager()
//        .beginTransaction()
//        .show(this.reactFragment)
//        .commit();
//    } else {
//      getSupportFragmentManager()
//        .beginTransaction()
//        .add(R.id.react_fragment, this.reactFragment)
//        .addToBackStack(null)
//        .commit();
//    }
    //</editor-fold>
  }

  private void initReactFragmentControls() {
    mButton = findViewById(R.id.show_react_fragment_button);
    mButton.setOnClickListener(v -> {
      this.showReactFragment();
    });
  }
}
