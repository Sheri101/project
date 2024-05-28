import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

interface Props {}
interface State {}

class PrivacyPolicyScreen extends Component<Props, State> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>SkillSphere Privacy Policy</Text>
        <ScrollView style={styles.content}>
          <Text style={styles.paragraph}>
            Welcome to the SkillSphere Privacy Policy. Your privacy is critically important to us.
          </Text>
          <Text style={styles.paragraph}>
            It is SkillSphere's policy to respect your privacy regarding any information we may collect while operating our application. This Privacy Policy applies to the SkillSphere app and outlines how we handle user information.
          </Text>
          <Text style={styles.subheader}>1. Information We Collect</Text>
          <Text style={styles.paragraph}>
            We collect information directly from individuals, from third-parties, and automatically through the SkillSphere app.
          </Text>
          <Text style={styles.subheader}>2. How We Use Information</Text>
          <Text style={styles.paragraph}>
            We use the information we collect to provide, maintain, and improve our services.
          </Text>
          <Text style={styles.subheader}>3. Sharing Information</Text>
          <Text style={styles.paragraph}>
            We do not share personal information with companies, organizations, or individuals outside of SkillSphere except in the following cases:
            (a) With your consent;
            (b) For legal reasons.
          </Text>
          <Text style={styles.subheader}>4. Security</Text>
          <Text style={styles.paragraph}>
            We take reasonable measures to protect your personal information from unauthorized access or against loss, misuse, or alteration.
          </Text>
          <Text style={styles.subheader}>5. Changes to This Privacy Policy</Text>
          <Text style={styles.paragraph}>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </Text>
          <Text style={styles.paragraph}>
            If you have any questions about this Privacy Policy, please contact us.
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

export default PrivacyPolicyScreen;