import React, { useState } from 'react';
import { Alert, Modal, Pressable, StyleSheet, Text, View } from 'react-native';

const ModalDemo = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleModalRequestClose = () => {
    Alert.alert('Modal has been closed.');
    setModalVisible(!modalVisible);
  };
  const handleModalHideButtonPress = () => {
    setModalVisible(!modalVisible);
  };
  const handleModalShowButtonPress = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.centeredView}>
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
            <Pressable
              // multiline
              style={[styles.button, styles.buttonClose]}
              onPress={handleModalHideButtonPress}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        // multiline
        style={[styles.button, styles.buttonOpen]}
        onPress={handleModalShowButtonPress}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

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
    borderRadius: 20,
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
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
