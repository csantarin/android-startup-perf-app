package com.androidstartupperfapp;

import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.Button;

import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.Fragment;
import androidx.navigation.NavController;
import androidx.navigation.Navigation;
import androidx.navigation.ui.AppBarConfiguration;
import androidx.navigation.ui.NavigationUI;

import com.androidstartupperfapp.databinding.MainActivityBinding;
import com.facebook.react.ReactFragment;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.google.android.material.snackbar.Snackbar;

public class MainActivity extends AppCompatActivity implements DefaultHardwareBackBtnHandler {

  private AppBarConfiguration appBarConfiguration;
  private MainActivityBinding binding;
  private Button mButton;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    binding = MainActivityBinding.inflate(getLayoutInflater());
    setContentView(binding.getRoot());

    setSupportActionBar(binding.toolbar);

    NavController navController = Navigation.findNavController(this, R.id.nav_host_main_content_fragment);
    appBarConfiguration = new AppBarConfiguration.Builder(navController.getGraph()).build();
    NavigationUI.setupActionBarWithNavController(this, navController, appBarConfiguration);

    binding.fab
      .setOnClickListener(view -> Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG)
      .setAction("Action", null).show());

    this.initReactFragment();
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
  public void onBackPressed() {
    if (this.reactFragment.isVisible()) {
      ReactFragment reactFragment = (ReactFragment) this.reactFragment;
      reactFragment.onBackPressed();
    } else {
      super.onBackPressed();
    }
  }

  @Override
  public void invokeDefaultOnBackPressed() {
    super.onBackPressed();
  }

  private Fragment reactFragment;

  private void loadReactFragment() {
    this.reactFragment = new ReactFragment.Builder()
      .setComponentName("AndroidStartupPerfApp")
      .build();

    getSupportFragmentManager()
      .beginTransaction()
      .add(R.id.react_fragment, this.reactFragment)
      .addToBackStack(null)
      .hide(this.reactFragment)
      .commit();
  }

  private void presentReactFragment() {
    if (this.reactFragment.isHidden()) {
      getSupportFragmentManager()
        .beginTransaction()
        .show(this.reactFragment)
        .commit();
    } else {
      getSupportFragmentManager()
        .beginTransaction()
        .add(R.id.react_fragment, this.reactFragment)
        .addToBackStack(null)
        .commit();
    }
  }

  private void initReactFragment() {
    this.loadReactFragment();
    mButton = findViewById(R.id.show_react_fragment_button);
    mButton.setOnClickListener(v -> {
      this.presentReactFragment();
    });
  }
}
