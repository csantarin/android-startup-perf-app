package com.androidstartupperfapp.screens.landingscreen;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;

import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentActivity;

import com.androidstartupperfapp.MainActivity;
import com.androidstartupperfapp.MainActivityScreensManager;
import com.androidstartupperfapp.R;
import com.androidstartupperfapp.navigation.initialroutenamestate.InitialRouteNameState;

public class LandingScreenFragment extends Fragment {

  public static final String BACK_STACK_NAME = "LandingScreen";

  public LandingScreenFragment() {
    // Required empty public constructor
  }

  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
  }

  @Override
  public View onCreateView(
    LayoutInflater inflater,
    ViewGroup container,
    Bundle savedInstanceState
  ) {
    // Inflate the layout for this fragment
    View landingScreenRootView = inflater.inflate(R.layout.landing_screen_fragment, container, false);
    this.initializeUserInterface(landingScreenRootView);
    return landingScreenRootView;
  }

  //region User interface action handlers
  private void initializeUserInterface(View rootView) {
    Button loginButton = rootView.findViewById(R.id.landing_screen_login_button);
    loginButton.setOnClickListener(this::onLoginButtonClick);

    Button registerButton = rootView.findViewById(R.id.landing_screen_register_button);
    registerButton.setOnClickListener(this::onRegisterButtonClick);
  }

  private void onLoginButtonClick(View view) {
    InitialRouteNameState.setValue(MainActivityScreensManager.FlowStackRoutes.LOGIN);
    this.hideAsync(this.getActivity());
  }

  private void onRegisterButtonClick(View view) {
    InitialRouteNameState.setValue(MainActivityScreensManager.FlowStackRoutes.REGISTER);
    this.hideAsync(this.getActivity());
  }
  //endregion

  //region Fragment manager helpers
  public void hideAsync(FragmentActivity fragmentActivity) {
    if (fragmentActivity == null) {
      return;
    }
    fragmentActivity.getSupportFragmentManager()
      .beginTransaction()
      .hide(this)
      .commit();
  }

  public void showAsync(FragmentActivity fragmentActivity) {
    if (fragmentActivity == null) {
      return;
    }
    fragmentActivity.getSupportFragmentManager()
      .beginTransaction()
      .show(this)
      .commit();
  }

  public void addAsync(FragmentActivity fragmentActivity) {
    if (fragmentActivity == null) {
      return;
    }
    fragmentActivity.getSupportFragmentManager()
      .beginTransaction()
      .add(android.R.id.content, this)
      .addToBackStack(LandingScreenFragment.BACK_STACK_NAME)
      .commit();
  }
  //endregion
}
