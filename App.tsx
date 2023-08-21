/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Videorr from './src/screens/Videor';
import './src/utils/i18n';
import Sessiontimeout from './src/screens/SessionTimeout';
import {useTranslation} from 'react-i18next';
import {
  Home,
  Language,
  Form,
  Tabs,
  DatePicker,
  ContactsScreen,
  RootedScreen,
  FileUploader,
  Charts,
  TooltipScreen,
  ModalScreen,
  NotificationScreen,
} from './src/screens';
import CustomDrawer from './src/components/CustomDrawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Colors from './src/assets/colors/Colors';
import Otp from './src/screens/Otp';
import Mappp from './src/screens/Map';
import LoginScreen from './src/screens/login';
import RegisterScreen from './src/screens/signup';
import GooglePlacesInput from './src/screens/Mapsearch';

const Drawer = createDrawerNavigator();

function App(): JSX.Element {
  const {t} = useTranslation();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
          // headerShown: false,
          drawerActiveBackgroundColor: Colors.primaryBackground1,
          drawerActiveTintColor: Colors.white,
          drawerInactiveTintColor: Colors.black,
          drawerLabelStyle: {
            marginLeft: -25,
            fontFamily: 'Roboto-Medium',
            fontSize: 15,
          },
        }}>
        <Drawer.Screen
          name={t('Homee')}
          component={Home}
          options={{
            title: t('Home'),
            drawerIcon: ({focused, color, size}) => (
              <FontAwesome5 name="home" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name={t('Language')}
          component={Language}
          options={{
            title: t('Language'),
            drawerIcon: ({focused, color, size}) => (
              <FontAwesome5 name="language" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name={t('Form')}
          component={Form}
          options={{
            drawerIcon: ({focused, color, size}) => (
              <FontAwesome5 name="edit" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name={t('Tabs')}
          component={Tabs}
          options={{
            drawerIcon: ({focused, color, size}) => (
              <FontAwesome5 name="th-list" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name={t('DatePicker')}
          component={DatePicker}
          options={{
            drawerIcon: ({focused, color, size}) => (
              <FontAwesome5 name="calendar" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name={t('Contacts')}
          component={ContactsScreen}
          options={{
            drawerIcon: ({focused, color, size}) => (
              <FontAwesome5 name="address-book" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name={t('RootChecker')}
          component={RootedScreen}
          options={{
            drawerIcon: ({focused, color, size}) => (
              <FontAwesome5
                name="exclamation-triangle"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name={t('File Uploader')}
          component={FileUploader}
          options={{
            drawerIcon: ({focused, color, size}) => (
              <FontAwesome5 name="cloud-upload-alt" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name={t('Charts')}
          component={Charts}
          options={{
            drawerIcon: ({focused, color, size}) => (
              <FontAwesome5 name="chart-bar" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Tooltip"
          component={TooltipScreen}
          options={{
            drawerIcon: ({focused, color, size}) => (
              <FontAwesome5 name="info-circle" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Modal"
          component={ModalScreen}
          options={{
            drawerIcon: ({focused, color, size}) => (
              <FontAwesome5 name="window-restore" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="Notifications"
          component={NotificationScreen}
          options={{
            drawerIcon: ({focused, color, size}) => (
              <FontAwesome5 name="bell" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="otp"
          component={Otp}
          options={{
            drawerIcon: ({focused, color, size}) => (
              <FontAwesome5 name="phone" size={size} color={color} />
            ),
          }}
        />
         <Drawer.Screen
          name="Videorr"
          component={Videorr}
          options={{
            drawerIcon: ({focused, color, size}) => (
              <FontAwesome5 name="video" size={size} color={color} />
            ),
          }}
        />
           <Drawer.Screen
          name="Mappp"
          component={Mappp}
          options={{
            drawerIcon: ({focused, color, size}) => (
              <FontAwesome5 name="map" size={size} color={color} />
            ),
          }}
        />
        
        <Drawer.Screen
          name="Sessiontimeout"
          component={Sessiontimeout}
          options={{
            drawerIcon: ({focused, color, size}) => (
              <FontAwesome5 name="clock" size={size} color={color} />
            ),
          }}
        />
        
        <Drawer.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            drawerIcon: ({focused, color, size}) => (
              <FontAwesome5 name="arrow-alt-circle-right" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            drawerIcon: ({focused, color, size}) => (
              <FontAwesome5 name="arrow-circle-right" size={size} color={color} />
            ),
          }}
        />
         <Drawer.Screen
          name="mapserch"
          component={GooglePlacesInput}
          options={{
            drawerIcon: ({focused, color, size}) => (
              <FontAwesome5 name="arrow-circle-right" size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default App;
