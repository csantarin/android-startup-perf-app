package com.androidstartupperfapp.screens;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.fragment.app.Fragment;

import com.androidstartupperfapp.R;

/**
 * A simple {@link Fragment} subclass.
 * Use the {@link LandingScreenSignUpFragment#newInstance} factory method to
 * create an instance of this fragment.
 */
public class LandingScreenSignUpFragment extends Fragment {

  public static final String BACK_STACK_NAME = "LandingScreenSignUp";

  public LandingScreenSignUpFragment() {
    // Required empty public constructor
  }

  /**
   * Use this factory method to create a new instance of
   * this fragment using the provided parameters.
   *
   * @return A new instance of fragment LandingScreenSignUpFragment.
   */
  // TODO: Rename and change types and number of parameters
  public static LandingScreenSignUpFragment newInstance() {
    return new LandingScreenSignUpFragment();
  }

  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
  }

  @Override
  public View onCreateView(LayoutInflater inflater, ViewGroup container,
                           Bundle savedInstanceState) {
    // Inflate the layout for this fragment
    return inflater.inflate(R.layout.landing_screen_sign_up_fragment, container, false);
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
