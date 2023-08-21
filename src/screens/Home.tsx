/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
// create home screen
// eslint-disable-next-line prettier/prettier
import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Search from './Search';
import Chatbot from './Chatbot';
import HomeS from './HomeScrolling';
const Home = ({navigation}: any) => {
  const {t, i18n} = useTranslation();
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeS}  options={{ headerShown: false,
            tabBarIcon: config => <Icon
            size={23}
            name={Platform.OS === 'android' ? 'home' : 'ios-list'}></Icon>
 
            }} />
      <Tab.Screen
        name="settings"
        component={Search}
        options={{
          headerShown: false,

          tabBarIcon: config => (
            <Icon
              size={23}
              name={Platform.OS === 'android' ? 'search' : 'ios-list'}></Icon>
          ),
        }}
      />

      <Tab.Screen
        name="Quick Chat"
        component={Chatbot}
        options={{
          headerShown: false,

          tabBarIcon: config => (
            <Icon
              size={23}
              name={
                Platform.OS === 'android'
                  ? 'chatbubble-ellipses-outline'
                  : 'ios-list'
              }></Icon>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;
