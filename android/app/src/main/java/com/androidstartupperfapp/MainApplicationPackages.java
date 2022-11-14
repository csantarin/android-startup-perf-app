package com.androidstartupperfapp;

import com.androidstartupperfapp.navigation.initialroutenamestate.RNInitialRouteNameStatePackage;
import com.androidstartupperfapp.screens.landingscreen.RNLandingScreenFragmentPackage;
import com.facebook.react.PackageList;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;

import java.util.List;

public final class MainApplicationPackages {
  public static List<ReactPackage> getPackages(ReactNativeHost reactNativeHost) {
    List<ReactPackage> packages = new PackageList(reactNativeHost).getPackages();
    // Packages that cannot be autolinked yet can be added manually here, for example:
    // packages.add(new MyReactNativePackage());
    packages.add(new RNInitialRouteNameStatePackage());
    packages.add(new RNLandingScreenFragmentPackage());
    return packages;
  }
}
