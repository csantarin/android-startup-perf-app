import React from 'react';
import { StyleSheet, View } from 'react-native';

import ModalDemo from './ModalDemo';

const ModalDemoScreen = () => {
  return (
    <View style={[styles.centeredView, styles.whiteView]}>
      <ModalDemo />
    </View>
  );
};

ModalDemoScreen.ROUTE = 'ModalDemo' as const;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  whiteView: {
    backgroundColor: 'white',
  },
});

export default ModalDemoScreen;
