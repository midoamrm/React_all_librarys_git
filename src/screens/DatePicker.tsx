import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Calendar from '../components/Calendar';
import moment from 'moment-hijri';
import {useEffect, useState} from 'react';

// Two buttons to change the month of the calendar
const TwoButtons = ({change, setCurrentDate, date}: any) => {
  const increaseMonth = () => {
    setCurrentDate(new Date(date.setMonth(date.getMonth() + 1)));
    console.log(date);
    change();
  };
  const decreaseMonth = () => {
    setCurrentDate(new Date(date.setMonth(date.getMonth() - 1)));
    console.log(date);
    change();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={increaseMonth}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={decreaseMonth}>
        <Text style={styles.buttonText}>Prev</Text>
      </TouchableOpacity>
    </View>
  );
};
// Two buttons to change the type of the calendar
const TypeButtons = ({onPress, setType, type}: any) => {
  const hijri = () => {
    setType('hijri');
    onPress();
  };
  const gregorian = () => {
    setType('gregorian');
    onPress();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={hijri}>
        <Text style={styles.buttonText}>Hijri</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={gregorian}>
        <Text style={styles.buttonText}>Gregorian</Text>
      </TouchableOpacity>
    </View>
  );
};
const DatePicker = () => {
  // States
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isVisible, setIsVisible] = useState(false);
  const [type, setType] = useState('gregorian');
  const [show, setShow] = useState(false);
  const [calendar, setCalendar] = useState(<></>);

  // Change the calendar when the type state or date is changed
  const change = () => {
    setCalendar(
      <Calendar
        key={currentDate.toDateString() + type}
        moment={moment}
        type={type}
        monthsCount={1}
        startDate={currentDate}
        onSelectionChange={(date: {to: any}) => {
          if (type === 'hijri') {
            console.log(moment(date.to).format('iYYYY/iM/iD'));
          } else {
            console.log(moment(date.to).format('YYYY/M/D'));
          }
          setIsVisible(false);
        }}
      />,
    );
  };

  // Change the calendar when the type state is changed
  useEffect(() => {
    change();
  }, [type]);

  // Open the Modal when the isVisible state is true
  useEffect(() => {
    setShow(isVisible);
  }, [isVisible]);

  // Return the two buttons and the calendar
  return (
    <View style={styles.listViewContainer}>
      {/* Two button centered one to open a hijri modal and one to open a gregorian modal */}
      <TypeButtons
        onPress={() => {
          setIsVisible(true);
        }}
        setType={setType}
        type={type}
      />
      <Modal visible={show} animationType="slide">
        <TwoButtons
          change={change}
          setCurrentDate={setCurrentDate}
          date={currentDate}
        />
        {calendar}
      </Modal>
    </View>
  );
};

export default DatePicker;

// Styles
const styles = StyleSheet.create({
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
    width: '50%',
    backgroundColor: 'white',
    alignSelf: 'center',
  },
});
