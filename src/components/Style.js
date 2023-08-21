import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },

  listViewContainer: {
    //flex:1,
    // height: '100%',
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  weekDayNames: {
    // width: '100%',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  weekDayNamesItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  month: {
    paddingBottom: 10,
  },
  monthHeader: {
    paddingTop: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  monthDays: {
    width: '100%',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  common: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
