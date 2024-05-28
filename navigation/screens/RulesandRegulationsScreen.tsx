import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

interface Props {}
interface State {}

class RulesAndRegulations extends Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>SkillSphere Rules and Regulations</Text>
        <ScrollView style={styles.content}>
          <Text style={styles.paragraph}>
            Welcome to the SkillSphere Rules and Regulations. Please read these rules carefully.
          </Text>
          <Text style={styles.subheader}>1. General Rules</Text>
          <Text style={styles.paragraph}>
            All users must adhere to the general guidelines set forth by SkillSphere.
          </Text>
          <Text style={styles.subheader}>2. User Conduct</Text>
          <Text style={styles.paragraph}>
            Users are expected to behave respectfully and responsibly.
          </Text>
          <Text style={styles.subheader}>3. Content Guidelines</Text>
          <Text style={styles.paragraph}>
            All content must be appropriate and relevant to the purpose of the platform.
          </Text>
          <Text style={styles.subheader}>4. Privacy and Security</Text>
          <Text style={styles.paragraph}>
            Users must respect the privacy and security of others.
          </Text>
          <Text style={styles.subheader}>5. Changes to Rules</Text>
          <Text style={styles.paragraph}>
            SkillSphere reserves the right to modify these rules at any time.
          </Text>
          <Text style={styles.paragraph}>
            If you have any questions about these rules, please contact us.
          </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  content: {
    flex: 1,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
  },
  subheader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 1,
  },
});

export default RulesAndRegulations;