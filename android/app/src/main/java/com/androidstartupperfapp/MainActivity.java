package com.androidstartupperfapp;

import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;

import androidx.appcompat.app.AppCompatActivity;
import androidx.navigation.NavController;
import androidx.navigation.Navigation;
import androidx.navigation.ui.AppBarConfiguration;
import androidx.navigation.ui.NavigationUI;

import com.androidstartupperfapp.databinding.MainActivityBinding;
import com.google.android.material.snackbar.Snackbar;

public class MainActivity extends AppCompatActivity {

  private AppBarConfiguration appBarConfiguration;
  private MainActivityBinding binding;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    // React Native Screens and React Navigation suggest using `null` for savedInstanceState.
    // This supposedly prevents "persisted view state" inconsistency errors during activity restarts.
    // https://github.com/software-mansion/react-native-screens#android
    // https://reactnavigation.org/docs/getting-started#installing-dependencies-into-a-bare-react-native-project
    super.onCreate(null);

    binding = MainActivityBinding.inflate(getLayoutInflater());
    setContentView(binding.getRoot());

    setSupportActionBar(binding.toolbar);

    NavController navController = Navigation.findNavController(this, R.id.nav_host_main_content_fragment);
    appBarConfiguration = new AppBarConfiguration.Builder(navController.getGraph()).build();
    NavigationUI.setupActionBarWithNavController(this, navController, appBarConfiguration);

    binding.fab
      .setOnClickListener(view -> Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG)
      .setAction("Action", null).show());
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
}
