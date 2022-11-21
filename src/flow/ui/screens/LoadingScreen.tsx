import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ScreenView from '../../../components/ScreenView';

const LoadingScreen = () => {
  return (
    <ScreenView>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Loading</Text>
      </View>
    </ScreenView>
  );
};

LoadingScreen.ROUTE = 'Loading' as const;

const styles = StyleSheet.create({
  headingContainer: {
    alignItems: 'center',
  },
  heading: {
    fontSize: 48,
  },
});

export default LoadingScreen;
