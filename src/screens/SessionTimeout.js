/* eslint-disable no-unused-vars */
import React, {PureComponent} from 'react';
import {
  Text,
  TextInput,
  Button,
  StyleSheet,
  View,
  PanResponder,
  Alert,
} from 'react-native';
import PropTypes from 'prop-types';
import UserInactivity from './Userinactivtiy';

export default class Sessiontimeout extends PureComponent {
  createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => {
          this.setState(
            {
              active: true,
            },
            () => {
              this.props.onAction(this.state.active);
            },
          );
        },
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  state = {
    active: true,
    text: '',
  };

  onAction = active => {
    this.setState({
      active,
    });
  };

  render() {
    const {active} = this.state;
    return (
      <UserInactivity
      style={{ backgroundColor: 'white'}}
        timeForInactivity={2000}
        checkInterval={1000}
        onAction={this.onAction}>
        <Text style={styles.paragraph}>
          Put your app here:
          {active ? 'Active' : 'Inactive'}
        </Text>

        <Text>{this.props.onInactivity}</Text>

        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={text => this.setState({text})}
          value={this.state.text}
          rejectResponderTermination={true}
        />
        <Button
          title="Here is a button for some reason"
          onPress={() => alert('hi')}
        />
      </UserInactivity>
    );
  }
}
const styles = StyleSheet.create({
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
