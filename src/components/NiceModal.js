import React from 'react';
import {View, Text, TouchableOpacity, Modal, StyleSheet} from 'react-native';

const NiceModal = ({
  visible,
  mainText,
  messageText,
  button1Text,
  button2Text,
  button1OnPress,
  button2OnPress,
  button1Style,
  button2Style,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={() => onClose()}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          {mainText && <Text style={styles.mainText}>{mainText}</Text>}
          {messageText && <Text style={styles.messageText}>{messageText}</Text>}
          <View style={styles.buttonContainer}>
            {button1Text && (
              <TouchableOpacity
                style={[styles.button, button1Style]}
                onPress={button1OnPress}>
                <Text style={styles.buttonText}>{button1Text}</Text>
              </TouchableOpacity>
            )}
            {button2Text && (
              <TouchableOpacity
                style={[styles.button, button2Style]}
                onPress={button2OnPress}>
                <Text style={styles.buttonText}>{button2Text}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 13,
    padding: 20,
    width: '90%',
    alignItems: 'center',
    elevation: 5, // Elevation for Android shadows
  },
  modalHeader: {
    alignSelf: 'flex-end',
  },
  closeButton: {
    padding: 8,
  },
  closeButtonText: {
    fontSize: 18,
    color: '#007AFF', // iOS default blue color
    fontWeight: 'bold',
  },
  mainText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  messageText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    borderRadius: 8,
    paddingVertical: 10,
    marginHorizontal: 5,
    backgroundColor: '#007AFF',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default NiceModal;
