import React, { useState } from 'react';
import { Alert, Button, Modal, StyleSheet, Text, View } from 'react-native';

const ModalDemo = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleModalRequestClose = () => {
    Alert.alert('Modal has been closed via hardware back button.');
    setModalVisible(!modalVisible);
  };
  const handleModalHideButtonPress = () => {
    setModalVisible(!modalVisible);
  };
  const handleModalShowButtonPress = () => {
    setModalVisible(true);
  };

  return (
    <>
      <Modal
        // multiline
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleModalRequestClose}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Button
              // multiline
              color={BUTTON_COLOR}
              title="Hide Modal"
              onPress={handleModalHideButtonPress}
            />
          </View>
        </View>
      </Modal>
      <Button
        // multiline
        color={BUTTON_COLOR}
        title="Show Modal"
        onPress={handleModalShowButtonPress}
      />
    </>
  );
};

const BUTTON_COLOR = '#03DAC5';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default ModalDemo;
