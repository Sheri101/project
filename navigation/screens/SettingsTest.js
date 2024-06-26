import UseInsetStyle from '../../InsetStyle'; 

import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default function Settings() {
  const insetStyles = UseInsetStyle();

  const [notifications, setNotifications] = useState(true);
  const [reminders, setReminders] = useState(false);
  const [content, setContent] = useState('English');
  return (
    <View style={insetStyles.container}>
      <ScrollView style={styles.container}>
      <View style={styles.settingsContainer}>

        <View style={styles.membershipContainer}>
          <Text style={styles.settingsTitle}>Membership</Text>
          <Text style={styles.settingsText}>Free Membership</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Upgrade</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.notificationsContainer}>
          <Text style={styles.settingsTitle}>Notifications</Text>
          <Text style={styles.settingsText}>Personalized Notifications</Text>
          <TouchableOpacity style={styles.button}
            onPress={() => setNotifications(!notifications)}
          >
            <Text style={styles.buttonText}>Notifications</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.notificationsContainer}>
            <Text style={styles.toggleText}>
              Turn On notifications to get
              updates just for you.{"\n"}
              No spam! We promise.
            </Text>
        </View>


        <View style={styles.weeklyRemindersContainer}>
          <Text style={styles.settingsTitle}>Weekly Reminders</Text>
          <TouchableOpacity style={styles.button}
            onPress={() => setReminders(!reminders)}
          >
            <Text style={styles.buttonText}>Reminders</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.notificationsContainer}>
            <Text style={styles.toggleText}>
                Set aside time every week for learning
            </Text>
        </View>

        <View style={styles.contentPreferencesContainer}>
          <Text style={styles.settingsTitle}>Content Preferences</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={content}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) => setContent(itemValue)}
            >
              <Picker.Item label="English" value="English" />
              <Picker.Item label="French" value="French" />
              <Picker.Item label="Spanish" value="Spanish" />
            </Picker>
          </View>
        </View>

        <View style={styles.blockedContentContainer}>
          <Text style={styles.settingsText}>Blocked Content</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Manage</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.getInTouchContainer}>
          <Text style={styles.settingsText}>Get In Touch</Text>
          <TouchableOpacity style={styles.button}
          >
            <Text style={styles.buttonText}>Contact Support</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.logoutcontainer}>
          <TouchableOpacity style={styles.logoutButton}
            onPress={() => setlogoutstate(logout)}
          >
            <Text style={styles.buttonText}>LOGOUT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    settingsContainer: {
      padding: 20,
    },
    settingsTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    membershipContainer: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      marginBottom: 20,
    },
    settingsText: {
      fontSize: 16,
      marginBottom: 10,
    },
    button: {
      backgroundColor: '#4CAF50',
      padding: 10,
      borderRadius: 10,
      alignItems: 'center',
    },
    logoutButton: {
      backgroundColor: '#4CAF50',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      width: '30%'
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
    notificationsContainer: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      marginBottom: 20,
    },
    toggleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 10,
    },
    toggleText: {
      fontSize: 14,
    },
    noSpamText: {
      marginTop: 5,
      fontSize: 14,
      color: '#555',
    },
    weeklyRemindersContainer: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      marginBottom: 20,
    },
    contentPreferencesContainer: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      marginBottom: 20,
    },
    pickerContainer: {
      height: 50,
      width: '100%',
    },
    picker: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      marginBottom: 20,
      height: 50,
      width: '10%',
    },
    blockedContentContainer: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      marginBottom: 20,
    },
    getInTouchContainer: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      marginBottom: 40,
    },
    logoutcontainer: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      marginBottom: 20,
    }
});