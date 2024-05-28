import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

const SetWeeklyRemindersScreen = () => {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [reminderName, setReminderName] = useState('');
  const [datePickerVisibility, setDatePickerVisibility] = useState(false);
  const [timePickerVisibility, setTimePickerVisibility] = useState(false);

  const handleConfirm = (date: Date) => {
    setSelectedDateTime(date);
    setDatePickerVisibility(false);
    setTimePickerVisibility(false);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const handleSavePress = () => {
    console.log(`Reminder name: ${reminderName}`);
    const formattedDateTime =
      moment(selectedDateTime).format('YYYY-MM-DD') +
      ' ' +
      moment(selectedDateTime).format('HH:mm:ss');
    console.log(`Selected date and time: ${formattedDateTime}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Set Weekly Reminder</Text>
      <View style={styles.form}>
        <Text style={styles.label}>Reminder Name</Text>
        <TextInput
          style={styles.input}
          value={reminderName}
          onChangeText={setReminderName}
        />
        <TouchableOpacity style={styles.button} onPress={showDatePicker}>
          <Text style={styles.buttonText}>Select Day</Text>
        </TouchableOpacity>
        {datePickerVisibility && (
          <DateTimePicker
            testID="datePicker"
            value={selectedDateTime}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={(event, date) => handleConfirm(date)}
          />
        )}
        <TouchableOpacity style={styles.button} onPress={showTimePicker}>
          <Text style={styles.buttonText}>Select Time</Text>
        </TouchableOpacity>
        {timePickerVisibility && (
          <DateTimePicker
            testID="timePicker"
            value={selectedDateTime}
            mode="time"
            is24Hour={true}
            display="default"
            onChange={(event, time) => handleConfirm(time)}
          />
        )}
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSavePress}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  form: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default SetWeeklyRemindersScreen;