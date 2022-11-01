package com.androidstartupperfapp;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.fragment.app.Fragment;

import com.androidstartupperfapp.databinding.ThirdFragmentBinding;

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
  public void onDestroyView() {
    super.onDestroyView();
    binding = null;
  }
}
