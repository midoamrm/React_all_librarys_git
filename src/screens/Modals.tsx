import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import NiceModal from '../components/NiceModal';

const ModalScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={styles.openModalButton}>Open Modal</Text>
      </TouchableOpacity>
      <NiceModal
        visible={modalVisible}
        mainText="Popup Title"
        messageText="This is the message text of the modal. It can be as long as you want."
        button1Text="Accept"
        button1Style={{backgroundColor: '#007AFF'}}
        button1OnPress={() => setModalVisible(false)}
        button2Text="Deny"
        button2Style={{backgroundColor: 'red'}}
        button2OnPress={() => setModalVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  openModalButton: {
    fontSize: 20,
    color: '#007AFF',
  },
});

export default ModalScreen;
