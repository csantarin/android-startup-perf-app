package com.androidstartupperfapp.screens;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;

import androidx.fragment.app.Fragment;

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
  private String mParam1;
  private String mParam2;

  public LandingScreenFragment() {
    // Required empty public constructor
  }

  /**
   * Use this factory method to create a new instance of
   * this fragment using the provided parameters.
   *
   * @param param1 Parameter 1.
   * @param param2 Parameter 2.
   * @return A new instance of fragment LandingScreenFragment.
   */
  // TODO: Rename and change types and number of parameters
  public static LandingScreenFragment newInstance(
    String param1,
    String param2
  ) {
    LandingScreenFragment fragment = new LandingScreenFragment();
    Bundle args = new Bundle();
    args.putString(ARG_PARAM1, param1);
    args.putString(ARG_PARAM2, param2);
    fragment.setArguments(args);
    return fragment;
  }

  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    if (getArguments() != null) {
      mParam1 = getArguments().getString(ARG_PARAM1);
      mParam2 = getArguments().getString(ARG_PARAM2);
    }
  }

  private void onLandingScreenButtonClick(View view) {
    getActivity().getSupportFragmentManager()
      .beginTransaction()
      .hide(this)
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


}
