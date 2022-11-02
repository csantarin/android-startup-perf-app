import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

const ScreenView = (props: Pick<ViewProps, 'children'>) => {
  // eslint-disable-next-line prettier/prettier
  return (
    <View style={styles.screenContainer}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ScreenView;
