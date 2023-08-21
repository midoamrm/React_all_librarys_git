import Contacts from 'react-native-contacts';
import {PermissionsAndroid} from 'react-native';
import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}
function ContactsScreen(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [contacts, setContacts]: [Contacts.Contact[], any] = useState([]);
  function getContacts() {
    console.log(`Getting contacts`);
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: 'Contacts',
      message: 'This app would like to view your contacts.',
      buttonNeutral: 'Ask Me Later',
      buttonNegative: 'Cancel',
      buttonPositive: 'OK',
    })
      .then(res => {
        console.log('Permission: ', res);
        Contacts.getAll()
          .then(contacts => {
            // work with contacts
            console.log(contacts);
            setContacts(contacts);
          })
          .catch(e => {
            console.log(e);
          });
      })
      .catch(error => {
        console.error('Permission error: ', error);
      });
  }
  function addContact() {
    var newPerson = {
      emailAddresses: [
        {
          label: 'work',
          email: 'mrniet@example.com',
        },
      ],
      familyName: 'Nietzsche',
      givenName: 'Friedrich',
    };
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS, {
      title: 'Contacts',
      message: 'This app would like to view your contacts.',
      buttonNeutral: 'Ask Me Later',
      buttonNegative: 'Cancel',
      buttonPositive: 'OK',
    })
      .then(res => {
        console.log('Permission: ', res);
        Contacts.openContactForm(newPerson).then(contact => {
          console.log(contact);
        });
      })
      .catch(error => {
        console.error('Permission error: ', error);
      });
  }
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Contacts">
            <View style={styles.sectionContainer}>
              <Button title="Get Contacts" onPress={getContacts} />
              <Button title="Add Contact" onPress={addContact} />
              {contacts.map((contact, i) => {
                return (
                  <View style={styles.item} key={i}>
                    <Text style={styles.border}>Name {contact.givenName}</Text>
                    <Text style={styles.border}>
                      Number {contact.phoneNumbers[0]?.number}
                    </Text>
                  </View>
                );
              })}
            </View>
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    flexDirection: 'row',
  },
  border: {
    borderWidth: 1,
    borderColor: '#000',
    margin: 5,
  },
});

export default ContactsScreen;
