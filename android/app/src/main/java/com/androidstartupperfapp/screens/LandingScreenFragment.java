package com.androidstartupperfapp.screens;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;

import androidx.fragment.app.Fragment;

import com.androidstartupperfapp.MainActivityScreensManager;
import com.androidstartupperfapp.R;

/**
 * A simple {@link Fragment} subclass.
 * Use the {@link LandingScreenFragment#newInstance} factory method to
 * create an instance of this fragment.
 */
public class LandingScreenFragment extends Fragment {

  public static final String BACK_STACK_NAME = "LandingScreen";

  // TODO: Rename parameter arguments, choose names that match
  // the fragment initialization parameters, e.g. ARG_ITEM_NUMBER
  private static final String ARG_PARAM1 = "param1";
  private static final String ARG_PARAM2 = "param2";

  // TODO: Rename and change types of parameters

  public LandingScreenFragment() {
    // Required empty public constructor
  }

  /**
   * Use this factory method to create a new instance of
   * this fragment using the provided parameters.
   *
   * @return A new instance of fragment LandingScreenFragment.
   */
  // TODO: Rename and change types and number of parameters
  public static LandingScreenFragment newInstance() {
    return new LandingScreenFragment();
  }

  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
  }

  private void onLandingScreenButtonClick(View view) {
    getActivity().getSupportFragmentManager()
      .beginTransaction()
//      .attach(MainActivityScreensManager.initLandingScreenSignUpFragment())
      .add(android.R.id.content, MainActivityScreensManager.initLandingScreenSignUpFragment())
      .addToBackStack(LandingScreenSignUpFragment.BACK_STACK_NAME)
      .commit();
  }

  @Override
  public View onCreateView(
    LayoutInflater inflater,
    ViewGroup container,
    Bundle savedInstanceState
  ) {
    View landingScreenFragment = inflater.inflate(R.layout.landing_screen_fragment, container, false);

    Button landingScreenButton = landingScreenFragment.findViewById(R.id.landing_screen_button);
    landingScreenButton.setOnClickListener(this::onLandingScreenButtonClick);

    // Inflate the layout for this fragment
    return landingScreenFragment;
  }

  @Override
  public void onDestroy() {
    super.onDestroy();
  }

  @Override
  public void onDestroyView() {
    super.onDestroyView();
  }
}
