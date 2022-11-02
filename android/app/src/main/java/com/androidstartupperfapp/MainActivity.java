package com.androidstartupperfapp;

import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.Button;

import androidx.appcompat.app.AppCompatActivity;
import androidx.navigation.NavController;
import androidx.navigation.Navigation;
import androidx.navigation.ui.AppBarConfiguration;
import androidx.navigation.ui.NavigationUI;

import com.androidstartupperfapp.databinding.MainActivityBinding;
import com.androidstartupperfapp.navigation.NavigationStateStore;
import com.androidstartupperfapp.react.ReactFragmentInstanceManager;
import com.facebook.react.ReactFragment;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.google.android.material.snackbar.Snackbar;

public class MainActivity extends AppCompatActivity implements DefaultHardwareBackBtnHandler {

  private AppBarConfiguration appBarConfiguration;
  private MainActivityBinding binding;

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

    ReactFragmentInstanceManager.setFragmentManager(getSupportFragmentManager());
    ReactFragmentInstanceManager.loadReactFragment();
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
    ReactFragment reactFragment = ReactFragmentInstanceManager.getReactFragment();

    if (reactFragment.isVisible()) {
      if (NavigationStateStore.getIndex() > 0) {
        reactFragment.onBackPressed();
      } else {
        ReactFragmentInstanceManager.hideReactFragment();
      }
    } else {
      super.onBackPressed();
    }
  }
}
