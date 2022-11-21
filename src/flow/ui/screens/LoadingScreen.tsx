import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ScreenView from '../../../components/ScreenView';

const LoadingScreen = () => {
  return (
    <ScreenView />
  );
};

LoadingScreen.ROUTE = 'Loading' as const;

const styles = StyleSheet.create({
  headingContainer: {
    alignItems: 'center',
    backgroundColor: 'red',
  },
  heading: {
    fontSize: 48,
  },
});

export default LoadingScreen;
