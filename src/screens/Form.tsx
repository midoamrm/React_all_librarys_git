import React, {useEffect, useState} from 'react';
import {StyleSheet, TextInput, View, Button, Text} from 'react-native';

const Form = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');

  useEffect(() => {
    validateEmail();
  }, [email]);

  useEffect(() => {
    validatePassword();
  }, [password]);

  useEffect(() => {
    validatePhoneNumber();
  }, [phoneNumber]);

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = () => {
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const numberRegex = /\d/;
    const specialCharRegex = /[!@#$%^&*()_+=[{\]};:'",.<>?]/;
    const passwordLengthRegex = /.{6,}/;

    const lowercaseErrorMessage =
      'Password must contain at least one lowercase letter.';
    const uppercaseErrorMessage =
      'Password must contain at least one uppercase letter.';
    const numberErrorMessage = 'Password must contain at least one number.';
    const specialCharErrorMessage =
      'Password must contain at least one special character (!@#$%^&*()_+=[{]};:\'",.<>?).';
    const passwordLengthErrorMessage =
      'Password must be at least 6 characters long.';

    let passwordError = '';

    if (!lowercaseRegex.test(password)) {
      passwordError = lowercaseErrorMessage;
    } else if (!uppercaseRegex.test(password)) {
      passwordError = uppercaseErrorMessage;
    } else if (!numberRegex.test(password)) {
      passwordError = numberErrorMessage;
    } else if (!specialCharRegex.test(password)) {
      passwordError = specialCharErrorMessage;
    } else if (!passwordLengthRegex.test(password)) {
      passwordError = passwordLengthErrorMessage;
    }

    setPasswordError(passwordError);
  };
  const validatePhoneNumber = () => {
    const phoneNumberRegex = /^(015|012|010|011)\d{8}$/;
    if (!phoneNumberRegex.test(phoneNumber)) {
      setPhoneNumberError('Please enter a valid phone number');
    } else {
      setPhoneNumberError('');
    }
  };

  const handleSubmit = () => {
    validateEmail();
    validatePassword();
    validatePhoneNumber();

    if (!emailError && !passwordError && !phoneNumberError) {
      // handle form submission logic here
      console.log('Form submitted successfully!');
    }
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry
      />
      {passwordError ? (
        <Text style={styles.errorText}>{passwordError}</Text>
      ) : null}
      <TextInput
        style={styles.input}
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        placeholder="Phone number"
        keyboardType="phone-pad"
      />
      {phoneNumberError ? (
        <Text style={styles.errorText}>{phoneNumberError}</Text>
      ) : null}
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    margin: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    color: '#333',
  },
  errorText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#ffe6e6',
    borderRadius: 5,
    marginBottom: 10,
  },
});
export default Form;
