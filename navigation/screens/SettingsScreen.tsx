import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Linking,
  Switch
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

interface SettingsScreenProps {
  navigation: NavigationProp<ParamListBase>;
}

interface SettingsScreenState {
  notifications: boolean;
  reminders: boolean;
  selectedLanguage: string;
}

export default class SettingsScreen extends Component<SettingsScreenProps, SettingsScreenState> {
  constructor(props: SettingsScreenProps) {
    super(props);
    this.state = {
      notifications: false,
      reminders: false,
      selectedLanguage: 'English'
    };
  }

  handleManageReminders = () => {
    this.props.navigation.navigate('SettingsStack',{screen:'SetWeeklyRemindersScreen'});
  };

  handleSubscription = () => {
    this.props.navigation.navigate('SettingsStack',{screen:'SubscriptionScreen'});
  };

  handleLogout = () =>{

    this.props.navigation.navigate('SignIn');
  }

  handlePrivacyPolicy = () =>{

    this.props.navigation.navigate('SettingsStack',{screen:'PrivacypolicyScreen'});
  }

  handleContactSupport = () => {
    this.props.navigation.navigate('SettingsStack',{screen:'ContactSupportScreen'});
  };

  handleEmailPress = () => {
    Linking.openURL('mailto:nadeemrana.expert@gmail.com');
  };

  handleNotifications = () => {
    this.setState(prevState => ({
      notifications: !prevState.notifications
    }), () => {
      console.log(`Notifications are ${this.state.notifications}`);
    });
  };

  handleTermsOfService = () => {
    this.props.navigation.navigate('SettingsStack',{screen:'TermsOfService'});
  };

  handleRulesAndRegulations = () =>{
    this.props.navigation.navigate('SettingsStack',{screen:'RulesandRegulationsScreen'});
  }

  render() {
    const { notifications, selectedLanguage } = this.state;

    return (
      <ScrollView style={styles.container}>
        <View style={styles.settingsContainer}>

          <View style={styles.categoriescontainer}>
            <Text style={styles.settingsTitle}>Membership</Text>
            <View style={styles.itemsContainer}>
              <Text style={styles.settingsText}>Free Membership</Text>
              <TouchableOpacity style={styles.button}
                onPress={this.handleSubscription}>
                <Text style={styles.buttonText}>Upgrade</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* notifications container */}
          <View style={styles.categoriescontainer}>
            <Text style={styles.settingsTitle}>Notifications</Text>
            <View style={styles.itemsContainer}>
              <Text style={styles.settingsText}>Personalized Notifications</Text>
              <TouchableOpacity style={styles.button}
                onPress={this.handleNotifications}
              >
                <Text style={styles.buttonText}>{notifications ? 'Turn on' : 'Turn off'}</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.toggleText}>
              Turn On notifications to get
              updates just for you.{"\n"}
              No spam! We promise.
            </Text>
            <View style={styles.itemsContainer}>
              <Text style={styles.settingsText}>Weekly Reminders</Text>
              <TouchableOpacity style={styles.button}
                onPress={this.handleManageReminders}
              >
                <Text style={styles.buttonText}>Manage</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.toggleText}>
              Set aside time every week for learning
            </Text>
          </View>

          <View style={styles.categoriescontainer}>
            <Text style={styles.settingsTitle}>Content Preferences</Text>
            <View style={styles.itemsContainer}>
              <Text style={styles.settingsText}>Language</Text>
              <View style={styles.pickerContainer}>
                <Picker
                  selectionColor={'black'}
                  dropdownIconRippleColor={'white'}
                  mode={'dialog'}
                  dropdownIconColor={'black'}
                  selectedValue={selectedLanguage}
                  onValueChange={(itemValue) =>
                    this.setState({ selectedLanguage: itemValue })
                  }>
                  <Picker.Item label="English" value="English" style={{ color: 'black', fontWeight: 'bold' }} />
                  <Picker.Item label="French" value="French" style={{ color: 'black', fontWeight: 'bold' }} />
                  <Picker.Item label="Spanish" value="Spanish" style={{ color: 'black', fontWeight: 'bold' }} />
                  <Picker.Item label="Portuguese" value="Portuguese" style={{ color: 'black', fontWeight: 'bold' }} />
                  <Picker.Item label="German" value="German" style={{ color: 'black', fontWeight: 'bold' }} />
                  <Picker.Item label="Hindi" value="Hindi" style={{ color: 'black', fontWeight: 'bold' }} />
                  <Picker.Item label="Dutch" value="Dutch" style={{ color: 'black', fontWeight: 'bold' }} />
                </Picker>
              </View>
            </View>
            <View style={styles.itemsContainer}>
              <Text style={styles.settingsText}>Blocked Content</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Manage</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Get in touch */}
          <Text style={styles.settingsTitle}>Get In Touch</Text>
          <View style={styles.touchableNonButtonElements}>
            <TouchableOpacity
              onPress={this.handleContactSupport}
            >
              <Text style={styles.touchableText}>Contact Support</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.touchableNonButtonElements}>
            <TouchableOpacity
              onPress={this.handleEmailPress}
            >
              <Text style={styles.touchableText}>Share Feedback</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.settingsTitle}>About</Text>
          <View style={styles.touchableNonButtonElements}>
            <TouchableOpacity
              onPress={this.handleTermsOfService}
            >
              <Text style={styles.touchableText}>Terms of Service</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.touchableNonButtonElements}>
            <TouchableOpacity
                onPress={this.handlePrivacyPolicy}
            >
              <Text style={styles.touchableText}>Privacy Policy</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.touchableNonButtonElements}>
            <TouchableOpacity
                onPress={this.handleRulesAndRegulations}
            >
              <Text style={styles.touchableText}>Rules and Regulations</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.logoutButton}>
            <TouchableOpacity style={styles.touchableText}
              onPress={this.handleLogout}
            >
              <Text style={styles.logoutText}>Sign Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  settingsContainer: {
    padding: 20,
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  settingsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  settingsText: {
    fontSize: 16,
    marginBottom: 10,
  },
  categoriescontainer: {
    flexDirection: 'column',
    marginBottom: 40,
  },
  itemsContainer: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
    gap: 60,
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    alignSelf: 'flex-end',
  },
  touchableText: {
    padding: 10,
    color: 'black',
    fontSize: 25,
  },
  touchableNonButtonElements: {
    flexDirection: 'row',
    marginBottom: 20,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  toggleText: {
    fontSize: 14,
    paddingBottom: 20,
  },
  noSpamText: {
    marginTop: 5,
    fontSize: 14,
    color: '#555',
  },
  pickerContainer: {
    height: 40,
    justifyContent: 'center',
    width: '55%',
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  logoutButton: {
    flexDirection: 'row',
    padding: 15,
    marginBottom: 20,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutText: {
    color: 'green',
    fontSize: 25,
  }
});