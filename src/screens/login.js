import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';

const LoginScreen = ({navigation}) => {
  /// validtion functions

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  ////////
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

  /////////////////////

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', backgroundColor: 'white',}}>
      <View style={{paddingHorizontal: 25}}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../assets/images/caricon.jpg')}
            style={{height: 195, width: 400}}
          />
        </View>

        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 28,
            fontWeight: '500',
            color: '#333',
            marginBottom: 30,
          }}>
          Login
        </Text>

        <InputField
          label={'Email ID'}
          changetext={setEmail}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          keyboardType="email-address"
        />
         {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
        <InputField
          label={'Password'}
          changetext={setPassword}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          inputType="password"
          fieldButtonLabel={'Forgot?'}
          fieldButtonFunction={() => {}}
        />
          {passwordError ? (
        <Text style={styles.errorText}>{passwordError}</Text>
      ) : null}
        <CustomButton label={'Login'} onPress={() => {}} />

        <Text style={{textAlign: 'center', color: '#666', marginBottom: 30}}>
          Or, login with ...
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 30,
          }}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <Image
              source={require('../assets/images/fbb.png')}
              style={{height: 50, width: 50}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <Image
              source={require('../assets/images/tw.png')}
              style={{height: 50, width: 50}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              borderColor: '#ddd',
              borderWidth: 2,
              borderRadius: 10,
              paddingHorizontal: 30,
              paddingVertical: 10,
            }}>
            <Image
              source={require('../assets/images/gog.png')}
              style={{height: 50, width: 50}}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text>New to the app?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={{color: '#AD40AF', fontWeight: '700'}}> Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
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

export default LoginScreen;
