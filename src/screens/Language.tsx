import {
  Button,
  I18nManager,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import RNRestart from 'react-native-restart';
import {useLayoutEffect} from 'react';
const Language = ({navigation}: any) => {
  const {t, i18n} = useTranslation();

  return (
    <>
      <View style={styles.wrapper}>
        <View style={styles.sectionWrapper}>
          <Text style={styles.heading}>{t('text0')}</Text>
          <Text style={styles.regularText}>{t('text1')}</Text>
        </View>

        <View style={styles.sectionWrapper}>
          <Button
            title={t('lang1')}
            onPress={() => {
              i18n
                .changeLanguage(i18n.language === 'ar' ? 'en' : 'ar')
                .then(() => {
                  I18nManager.forceRTL(i18n.language === 'ar');
                  RNRestart.Restart();
                });
            }}
          />
        </View>
      </View>
    </>
  );
};

export default Language;
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#f3f3f3',
    flex: 1,
  },
  sectionWrapper: {
    padding: 20,
  },
  heading: {
    fontSize: 20,
    marginBottom: 15,
    textAlign: 'left',
  },
  regularText: {
    textAlign: 'left',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
});
