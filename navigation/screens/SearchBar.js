import React,{useState,useEffect} from "react";
import { StyleSheet, TextInput, View, Keyboard, Button,TouchableOpacity,Text } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import { Feather, Entypo } from "@expo/vector-icons";
import Ionicons from 'react-native-vector-icons/Ionicons';


const SearchBar = ({phrase,onSearch }) => {
  const navigation = useNavigation();
  const [searchPhrase, setSearchPhrase] = useState(phrase);
  const clicked = true; 

  useEffect(() => {
    setSearchPhrase(phrase); // Update searchPhrase when the prop changes
  }, [phrase]);

  // console.log("Search phrase searchbar:", phrase);
  const handleSearch = async () => {
    if (searchPhrase.trim()) {
      // Save the search term
      await saveSearchTerm(searchPhrase);
    }
      navigation.navigate('Home1', { searchPhrase: searchPhrase });
    
  };
  

  const saveSearchTerm = async (term) => {
    try {
      // Get existing search terms
      const existingTerms = await AsyncStorage.getItem('searchTerms');
      const searchTerms = existingTerms ? JSON.parse(existingTerms) : [];

      // Add the new term to the list
      if (!searchTerms.includes(term)) {
        searchTerms.push(term);
      }

      // Save the updated list
      await AsyncStorage.setItem('searchTerms', JSON.stringify(searchTerms));
    } catch (error) {
      console.error('Error saving search term:', error);
    }
  };

  const navigateToHome = () => {
    // Navigate to the RecentSearch screen  
    navigation.navigate('HomeStack');
  };

  return (
    <View style={styles.container}>
      {clicked && (
        <View>
          {/* <Button
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              setClicked(false);
            }}
          ></Button> */}
          <TouchableOpacity 
            onPress={() => {
              Keyboard.dismiss();
              navigateToHome();
            }}
            style={styles.cancelTouch}
            >
            <Ionicons name={'arrow-back-sharp'} size={25} color={'white'}   />
          </TouchableOpacity>
        </View>
      )}
      <View
        style={
            styles.searchBar__clicked 
        }
      >
        {/* search Icon */}
        {/* <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        /> */}
        <Ionicons name={'search-sharp'} size={20} color={'black'}  style={ styles.searchicon__clicked} />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          autoFocus = {true}
          onSubmitEditing={() => {
            handleSearch();
            Keyboard.dismiss();
          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {clicked && (
          <Entypo name="cross" size={20} color="black" style={{ padding: 3, marginRight:16,}} onPress={() => {
              setSearchPhrase("")
              
          }}/>
        )}
      </View>
      {/* cancel button, depending on whether the search bar is clicked or not */}
      
      <TouchableOpacity onPress={() => {
              handleSearch();
              Keyboard.dismiss();
            }} style={styles.searchButton}>
        <Text style={styles.searchText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
  },
  searchBar__unclicked: {
    padding: 5,
    flexDirection: "row",
    width: "90%",
    backgroundColor: "#4d4e4d",
    borderRadius: 15,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 5,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  searchicon__unclicked: {
    marginLeft: 2,
  },
  searchicon__clicked: {
    marginLeft: 19,
    paddingRight:16,
    
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
  cancelTouch:{
    marginLeft:-10,
    justifyContent:'flex-end',
    paddingRight:9,
  },
  cancel:{
    fontWeight: 'bold', 
    color:'red',
  },
  searchButton: {
    marginLeft:1,
    paddingRight:4,
  },
  searchText: {
    color: "white",
    fontWeight: "bold",
  },
});
