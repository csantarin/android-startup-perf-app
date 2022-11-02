package com.androidstartupperfapp.screens;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;

import com.androidstartupperfapp.databinding.ThirdFragmentBinding;
import com.androidstartupperfapp.react.ReactFragmentInstanceManager;

public class ThirdFragment extends Fragment {

  private ThirdFragmentBinding binding;

  @Override
  public View onCreateView(
    LayoutInflater inflater, ViewGroup container,
    Bundle savedInstanceState
  ) {
    binding = ThirdFragmentBinding.inflate(inflater, container, false);
    return binding.getRoot();
  }

  @Override
  public void onViewCreated(@NonNull View view, @Nullable Bundle savedInstanceState) {
    super.onViewCreated(view, savedInstanceState);

    binding.showReactFragmentButton.setOnClickListener(this::onShowReactFragmentButtonClick);
  }

  @Override
  public void onDestroyView() {
    super.onDestroyView();
    binding = null;
  }

  private void onShowReactFragmentButtonClick(View view) {
    ReactFragmentInstanceManager.showReactFragment();
  }
}
