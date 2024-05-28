import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface SubscriptionScreenProps {}
interface SubscriptionScreenState {}

class SubscriptionScreen extends Component<SubscriptionScreenProps, SubscriptionScreenState> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Start Your Free Month of Membership</Text>
        <Text style={styles.subtitle}>
          Get unlimited access to thousands of classes on-demand and on-the-go. Cancel anytime.
        </Text>
        
        <Text style={styles.pickPlan}>Pick a Plan</Text>
        
        <View style={styles.planContainer}>
          <View style={[styles.planBox, styles.planBoxSelected]}>
            <Text style={styles.planPrice}>PKR6000.00/year</Text>
            <Text style={styles.planMonthly}>Just PKR600.25/month</Text>
            <Text style={styles.planSave}>SAVE 70%</Text>
          </View>
          <View style={styles.planBox}>
            <Text style={styles.planPrice}>PKR4000.00/month</Text>
          </View>
        </View>
        
        <TouchableOpacity style={styles.freeTrialButton}>
          <Text style={styles.freeTrialButtonText}>Start Your Free Trial</Text>
        </TouchableOpacity>
        
        <Text style={styles.footerText}>Your first month is free. Then PKR13,659.00 per year.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 20,
  },
  pickPlan: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  planContainer: {
    marginVertical: 20,
  },
  planBox: {
    padding: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  planBoxSelected: {
    borderColor: '#000',
  },
  planPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  planMonthly: {
    fontSize: 14,
    color: '#888',
  },
  planSave: {
    fontSize: 14,
    color: '#00f',
  },
  freeTrialButton: {
    backgroundColor: '#00e676',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  freeTrialButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 20,
    color: '#888',
  },
});

export default SubscriptionScreen;