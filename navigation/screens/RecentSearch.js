import React,{useState,useEffect} from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StyleSheet, Text, View,TextInput,SafeAreaView,Image,FlatList,TouchableOpacity,ImageBackground} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SearchBar from './SearchBar';
import Entypo from 'react-native-vector-icons/Entypo';
import UseInsetStyle from '../../InsetStyle'; 

export default function RecentSearch(){
    const route = useRoute();
    const insetStyles = UseInsetStyle();
    const navigation = useNavigation();
    const [searchPhrase, setSearchPhrase] = useState('');
    const [recentSearches, setRecentSearches] = useState([]);

    useEffect(() => {
        const { params } = route;
        if (params && params.searchPhrase) {
          setSearchPhrase(params.searchPhrase);
        } else {
          setSearchPhrase("");
        }
      }, [route]);

      useEffect(() => {
        // Fetch recent search terms from AsyncStorage
        const fetchRecentSearches = async () => {
          try {
            const existingTerms = await AsyncStorage.getItem('searchTerms');
            const termsArray = existingTerms ? JSON.parse(existingTerms) : [];
            setRecentSearches(termsArray.reverse());
          } catch (error) {
            console.error('Error retrieving search terms:', error);
          }
        };
        fetchRecentSearches();
      }, []);

      const handleSearchItemPress = (term) => {
        // Perform the search or navigate with the selected term
        setSearchPhrase(term);
        searchBarHandleSearch(term);
        // Optionally navigate to the search results screen with the term
        // navigation.navigate('SearchResults', { searchPhrase: term });
      };

      const saveSearchTerm = async (term) => {
        try {
          const existingTerms = await AsyncStorage.getItem('searchTerms');
          const searchTerms = existingTerms ? JSON.parse(existingTerms) : [];
          if (!searchTerms.includes(term)) {
            searchTerms.push(term);
          }
          await AsyncStorage.setItem('searchTerms', JSON.stringify(searchTerms));
        } catch (error) {
          console.error('Error saving search term:', error);
        }
      };

      const searchBarHandleSearch = async (term) => {
        
          try {
            await saveSearchTerm(term);
            // Implement your search logic or navigation here
            navigation.navigate('Home1', { searchPhrase: term });
          } catch (error) {
            console.error('Error performing search:', error);
          }
        
      };

      const handleDeleteItem = async (index) => {
        // Remove the item from recent searches and update AsyncStorage
        const updatedSearches = [...recentSearches];
        updatedSearches.splice(index, 1);
        setRecentSearches(updatedSearches);
        await AsyncStorage.setItem('searchTerms', JSON.stringify(updatedSearches.reverse())); // Reverse again to store in AsyncStorage
      };

      const renderItem = ({ item, index }) => (
        <View style={styles.itemContainer}>
          <TouchableOpacity
            style={styles.searchItemTouchable}
            onPress={() => handleSearchItemPress(item)}
          >
            <Text style={styles.recentSearchItem}>{item}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.deleteItemTouchable}
            onPress={() => handleDeleteItem(index)}
          >
            <Entypo name={'cross'} size={25} color={'white'}  />
            {/* <Ionicons name="trash-bin-outline" size={20} color="red" /> */}
          </TouchableOpacity>
        </View>
      );
    
    // console.log("Search phrase:", searchPhrase);
    return(
        <View style={insetStyles.container}>
            <View style={styles.container}>
                    
                <SearchBar
                      phrase={searchPhrase}
                      onSearch={searchBarHandleSearch}
                />
              
                <FlatList
                  data={recentSearches}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={renderItem}
                  style={styles.list}
                />
                {/* <View style={styles.button}>
                    <TouchableOpacity style={styles.back} onPress={() => goBack()}><Text>back</Text></TouchableOpacity>
                </View> */}

            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'black',
      color:'white',
      
    },
    back:{
       backgroundColor:'red',
       width:80,
       height:30,
    },
    button:{
      
        alignItems:'center',
        justifyContent:'center',
       
    },
    heading: {
      color: 'white',
      fontSize: 18,
      margin: 10,
    },itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      // borderBottomWidth: 1,
      borderBottomColor: 'grey',
    },
    searchItemTouchable: {
      flex: 1,
    },
    deleteItemTouchable: {
      marginLeft: 10,
    },
    recentSearchItem: {
      flex: 1,
      color: 'white',
      padding: 10,
    },
    list: {
      flex: 1,
    },
  });
  