import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Tabbar from './navigation/Tabbar';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome' ;

export default function App() {
  
  return (
       <Tabbar/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
