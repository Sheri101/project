import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';


export default function TermsOfService() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Terms of Service</Text>
        <Text style={styles.date}>Date of Last Revision: Apr 12, 2024</Text>
        
        <Text style={styles.sectionTitle}>ARBITRATION NOTICE/CLASS ACTION WAIVER:</Text>
        <Text style={styles.text}>
          PLEASE REVIEW THESE TERMS OF SERVICE CAREFULLY. YOU AGREE THAT DISPUTES BETWEEN YOU AND SkillSphere WILL BE RESOLVED 
          BY BINDING, INDIVIDUAL ARBITRATION (INCLUDING CLAIMS THAT AROSE OR WERE ASSERTED BEFORE THE EFFECTIVE DATE OF THESE 
          TERMS), AND YOU WAIVE ANY RIGHT TO PARTICIPATE IN A CLASS-ACTION LAWSUIT OR CLASS-WIDE ARBITRATION OR A TRIAL BY JURY.
          THESE TERMS EXPLAIN SOME EXCEPTIONS AND HOW YOU CAN OPT OUT OF ARBITRATION. BY AGREEING TO THESE TERMS, YOU EXPRESSLY 
          ACKNOWLEDGE THAT YOU HAVE READ AND UNDERSTOOD ALL OF THESE TERMS AND HAVE TAKEN TIME TO CONSIDER THE CONSEQUENCES OF THIS
          IMPORTANT DECISION.
        </Text>

        <Text style={styles.sectionTitle}>1. Acceptance of Terms</Text>
        <Text style={styles.text}>
          These Terms constitute a legally binding agreement between you and SkillSphere, a Punjab, Pakistan corporation, and its
          subsidiaries, representatives, affiliates, officers, and directors (collectively, “[SkillSphere]”, “we,” “us,” or “our”)
          governing your use of [SkillSphere]’s website and service, or services directly related to [SkillSphere]’s website and 
          service, including (without limitation) all websites, mobile applications, and other interactive properties through which 
          such services are delivered (collectively, the “Service” or “Services”).
        </Text>

        <Text style={styles.sectionTitle}>2. Privacy Policy</Text>
        <Text style={styles.text}>
          By accessing and/or using our Services, whether or not you register for a membership, you are agreeing to the Terms,
          the terms and conditions of our Privacy Policy, and any other legal notices, policies, and procedures relating to the 
          Services that we may publish from time to time (collectively, the “Governing Documents”). These documents are carefully 
          reviewed files. If you do not agree, please cease access and/or use the Services. If there is a conflict between these 
          Terms and any other terms and conditions covering a specific area of the Services, the latter terms and conditions shall 
          control unless they expressly state otherwise.
        </Text>

        <Text style={styles.sectionTitle}>3. Modifications to Terms</Text>
        <Text style={styles.text}>
          [APP NAME] reserves the right to modify these Terms at any time. Your continued use of the Service after any such changes constitutes your acceptance of the new Terms. If you do not agree to any of these Terms or any future Terms, do not use or access (or continue to access) the Service.
        </Text>

        <Text style={styles.sectionTitle}>4. Use of the Service</Text>
        <Text style={styles.text}>
          You may use the Service only in compliance with these Terms and all applicable local, state, national, and international laws, rules, and regulations.
        </Text>

        <Text style={styles.sectionTitle}>5. Termination</Text>
        <Text style={styles.text}>
          [APP NAME] may terminate your access to the Service, without cause or notice, which may result in the forfeiture and destruction of all information associated with your account. All provisions of these Terms that, by their nature, should survive termination, shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
        </Text>

        <Text style={styles.sectionTitle}>6. Contact Information</Text>
        <Text style={styles.text}>
          If you have any questions about these Terms, please contact us at [support_email@appname.com].
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  date: {
    fontSize: 12,
    marginBottom: 20,
    fontFamily: 'verdana', // Change the font family
    fontWeight: '100', // Make the text bold
    fontStyle: 'italic', // Italicize the text
    color: '#4A90E2', // Change the text color
    fontVariant: ['small-caps'], // Apply small-caps variant
    letterSpacing: 0.5, // Add some spacing between letters
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
});