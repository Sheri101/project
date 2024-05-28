import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const ContactSupportScreen = () => {
  const handlePhonePress = () => {
    Linking.openURL('tel:+923019094054');
  };

  const handleEmailPress = () => {
    Linking.openURL('mailto:nadeemrana.expert@gmail.com');
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Contact Support</Text> */}
      
      <TouchableOpacity onPress={handlePhonePress} style={styles.contactButton}>
        <Text style={styles.contactText}>Phone</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={handleEmailPress} style={styles.contactButton}>
        <Text style={styles.contactText}>Email</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  contactButton: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  contactText: {
    fontSize: 18,
    color: '#0000EE',
  },
});

export default ContactSupportScreen;