package com.androidstartupperfapp.screens;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;

import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentActivity;

import com.androidstartupperfapp.MainActivityScreensManager;
import com.androidstartupperfapp.R;
import com.androidstartupperfapp.navigation.NavigationStateStore;

public class LandingScreenFragment extends Fragment {

  public static final String BACK_STACK_NAME = "LandingScreen";

  // TODO: Rename and change types of parameters

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
    View landingScreenRootView = inflater.inflate(R.layout.landing_screen_fragment, container, false);

    this.initUi(landingScreenRootView);

    // Inflate the layout for this fragment
    return landingScreenRootView;
  }

  private void initUi(View landingScreenRootView) {
    Button landingScreenLoginButton = landingScreenRootView.findViewById(R.id.landing_screen_login_button);
    landingScreenLoginButton.setOnClickListener(this::onLandingScreenLoginButtonClick);

    Button landingScreenRegisterButton = landingScreenRootView.findViewById(R.id.landing_screen_register_button);
    landingScreenRegisterButton.setOnClickListener(this::onLandingScreenRegisterButtonClick);
  }

  private void hideLandingScreenFragment() {
    FragmentActivity fragmentActivity = this.getActivity();

    if (fragmentActivity == null) {
      return;
    }

    fragmentActivity.getSupportFragmentManager()
      .beginTransaction()
      .hide(MainActivityScreensManager.getLandingScreenFragment())
      .commit();
  }

  private void onLandingScreenLoginButtonClick(View view) {
    NavigationStateStore.setInitialRouteName(MainActivityScreensManager.FlowStackRoutes.LOGIN);
    this.hideLandingScreenFragment();
  }

  private void onLandingScreenRegisterButtonClick(View view) {
    NavigationStateStore.setInitialRouteName(MainActivityScreensManager.FlowStackRoutes.REGISTER);
    this.hideLandingScreenFragment();
  }
}
