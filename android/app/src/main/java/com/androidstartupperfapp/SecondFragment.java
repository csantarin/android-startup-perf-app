package com.androidstartupperfapp;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;
import androidx.navigation.fragment.NavHostFragment;

import com.androidstartupperfapp.databinding.SecondFragmentBinding;

public class SecondFragment extends Fragment {

  private SecondFragmentBinding binding;

  @Override
  public View onCreateView(
    LayoutInflater inflater, ViewGroup container,
    Bundle savedInstanceState
  ) {
    binding = SecondFragmentBinding.inflate(inflater, container, false);
    return binding.getRoot();
  }

  public void onViewCreated(@NonNull View view, Bundle savedInstanceState) {
    super.onViewCreated(view, savedInstanceState);

    binding.secondButton.setOnClickListener(this::onSecondButtonClick);
//    binding.showReactFragmentButton.setOnClickListener(this::onShowReactFragmentButtonClick);
  }

  @Override
  public void onDestroyView() {
    super.onDestroyView();
    binding = null;
  }

  private void onSecondButtonClick(View view) {
    NavHostFragment
      .findNavController(SecondFragment.this)
      .navigate(R.id.action_SecondFragment_to_FirstFragment);
  }

//  private void onShowReactFragmentButtonClick(View view) {
//    NavHostFragment
//      .findNavController(SecondFragment.this)
//      .navigate(R.id.action_SecondFragment_to_ThirdFragment);
//  }
}
