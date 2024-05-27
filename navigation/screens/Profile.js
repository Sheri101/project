import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View,ScrollView ,Image } from 'react-native';
import UseInsetStyle from '../../InsetStyle'; 


export default function Profile() {
  const insetStyles = UseInsetStyle();
  return (
    <SafeAreaView style={insetStyles.container}>
      <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={require('../../assets/eco1.jpeg')} // Replace with actual image URL or require() for local images
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>John Doe</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skill Progress</Text>
        {/* Insert skill progress components here */}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skill Categories</Text>
        {/* Insert skill category buttons here */}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        {/* Insert recent activity feed here */}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Achievements</Text>
        {/* Insert achievements showcase here */}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Friends and Connections</Text>
        {/* Insert friends and connections list here */}
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor:'black',
    color:'white',
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 20,
    marginTop: 10,
    color:'white',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color:'white',
  },
});
