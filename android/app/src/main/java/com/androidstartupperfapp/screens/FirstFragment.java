package com.androidstartupperfapp.screens;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;
import androidx.navigation.fragment.NavHostFragment;

import com.androidstartupperfapp.R;
import com.androidstartupperfapp.databinding.FirstFragmentBinding;

public class FirstFragment extends Fragment {

  private FirstFragmentBinding binding;

  @Override
  public View onCreateView(
    LayoutInflater inflater, ViewGroup container,
    Bundle savedInstanceState
  ) {
    binding = FirstFragmentBinding.inflate(inflater, container, false);
    return binding.getRoot();
  }

  @Override
  public void onViewCreated(@NonNull View view, Bundle savedInstanceState) {
    super.onViewCreated(view, savedInstanceState);

    binding.firstButton.setOnClickListener(this::onFirstButtonClick);
  }

  @Override
  public void onDestroyView() {
    super.onDestroyView();
    binding = null;
  }

  private void onFirstButtonClick(View view) {
    NavHostFragment
      .findNavController(FirstFragment.this)
      .navigate(R.id.action_FirstFragment_to_SecondFragment);
  }
}
