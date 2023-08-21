/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier

// eslint-disable-next-line no-unused-vars, prettier/prettier
import React ,{ useState, useEffect }from 'react';
import { View, StyleSheet, Platform ,Text} from 'react-native';
import { YMChat } from 'ymchat-react-native';
import messaging from '@react-native-firebase/messaging';
import Icon from 'react-native-vector-icons/Ionicons';
export default function Chatbot() {
// old set up version
   /* console.log('hallo')
    const RNfirebaseConfig = {
        apiKey: "AIzaSyAe3yu26Umg9m3qccIoLGQfiIryNaqGneI",
        projectId: "chat-78d4b",
        storageBucket: "chat-78d4b.appspot.com",
        appId: "1:562118177567:android:a2717b5608b50ece31762a"
      };


      let app;
      app = firebase.initializeApp(RNfirebaseConfig)
      console.log(app)*/

      async function requestUserPermission() {
        const authStatus = await messaging().requestPermission();
        const enabled =
          authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
          authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        if (enabled) {
          console.log('Authorization status:', authStatus);
        }
      }

      async function registerForRemoteMessages() {
        await messaging().registerDeviceForRemoteMessages();
      }

      async function setAutoInitEnabled() {
        await messaging().setAutoInitEnabled();
      }

      useEffect(() => {
        // Assume a message-notification contains a "type" property in the data payload of the screen to open

        messaging().onNotificationOpenedApp(remoteMessage => {
          console.log(
            'Notification caused app to open from background state:',
            remoteMessage.notification,
          );
        });

        // Check whether an initial notification is available
        messaging()
          .getInitialNotification()
          .then(remoteMessage => {
            if (remoteMessage) {
              console.log(
                'Notification caused app to open from quit state:',
                remoteMessage.notification,
              );
            }
          });

        messaging().setBackgroundMessageHandler(async remoteMessage => {
          if (remoteMessage) {
            console.log(
              'Notification',
              remoteMessage.notification,
            );
            return remoteMessage;
          }
        })

        messaging().onMessage((remoteMessage) => {
          console.log(remoteMessage.notification);
        })

        if (Platform.OS == "ios") {
          requestUserPermission();
          // registerForRemoteMessages();
          // setAutoInitEnabled();
        }
      }, []);

      const onPress = () => {
        messaging()
          .getToken()
          .then(token => {
            console.log(token);
            YMChat.setBotId('x1608615889375'); // Default Bot Id
            // ... OTHER Configurations. (refer: https://github.com/yellowmessenger/ymchat-react-native)
            YMChat.setDeviceToken(token);
            YMChat.startChatbot();
          });

      };

return(
// eslint-disable-next-line react/self-closing-comp
<>
<View style={styles.fixToText



}>
<Icon
 onPress={onPress}
  size={200}
  name={Platform.OS === 'android' ? 'body-outline' : 'ios-list'}></Icon>
<Text style={{fontWeight: 'bold', fontSize: 25, color: '#0000FF'}}>
{'Humman Chat'}
</Text>
<Icon
 onPress={onPress}
  size={200}
  name={Platform.OS === 'android' ? 'chatbox-ellipses-outline' : 'ios-list'}></Icon>
<Text style={{fontWeight: 'bold', fontSize: 25, color: '#0000FF'}}>
{'Chat Bot'}
</Text>
</View>

</>

);

// eslint-disable-next-line eol-last
}
const styles = StyleSheet.create({
    fixToText: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'},
  });