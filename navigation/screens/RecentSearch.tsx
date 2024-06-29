import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute,RouteProp } from '@react-navigation/native';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SearchBar from './SearchBar';
import Entypo from 'react-native-vector-icons/Entypo';
import UseInsetStyle from '../../InsetStyle';

import { RootStackParamList } from '../Tabbar';
import { StackNavigationProp } from '@react-navigation/stack';

type RecentSearchNavigationProp = StackNavigationProp<RootStackParamList, 'RecentSearch'>;
type RecentSearchRouteProp = RouteProp<RootStackParamList, 'RecentSearch'>;

const RecentSearch: React.FC = () =>  {
  const route = useRoute<RecentSearchRouteProp>();
  const insetStyles = UseInsetStyle();
  const navigation = useNavigation<RecentSearchNavigationProp>();
  const [searchPhrase, setSearchPhrase] = useState<string>('');
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  useEffect(() => {
    const { params } = route;
    if (params && params.searchPhrase) {
      setSearchPhrase(params.searchPhrase);
    } else {
      setSearchPhrase('');
    }
  }, [route]);

  useEffect(() => {
    const fetchRecentSearches = async () => {
      try {
        const existingTerms = await AsyncStorage.getItem('searchTerms');
        const termsArray: string[] = existingTerms ? JSON.parse(existingTerms) : [];
        setRecentSearches(termsArray.reverse());
      } catch (error) {
        console.error('Error retrieving search terms:', error);
      }
    };
    fetchRecentSearches();
  }, []);

  const handleSearchItemPress = (term: string) => {
    setSearchPhrase(term);
    searchBarHandleSearch(term);
  };

  const saveSearchTerm = async (term: string) => {
    try {
      const existingTerms = await AsyncStorage.getItem('searchTerms');
      const searchTerms: string[] = existingTerms ? JSON.parse(existingTerms) : [];
      if (!searchTerms.includes(term)) {
        searchTerms.push(term);
      }
      await AsyncStorage.setItem('searchTerms', JSON.stringify(searchTerms));
    } catch (error) {
      console.error('Error saving search term:', error);
    }
  };

  const searchBarHandleSearch = async (term: string) => {
    try {
      await saveSearchTerm(term);
      navigation.navigate('Home1', { searchPhrase: term });
    } catch (error) {
      console.error('Error performing search:', error);
    }
  };

  const handleDeleteItem = async (index: number) => {
    const updatedSearches = [...recentSearches];
    updatedSearches.splice(index, 1);
    setRecentSearches(updatedSearches);
    await AsyncStorage.setItem('searchTerms', JSON.stringify(updatedSearches.reverse()));
  };

  const renderItem = ({ item, index }: { item: string; index: number }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity style={styles.searchItemTouchable} onPress={() => handleSearchItemPress(item)}>
        <Text style={styles.recentSearchItem}>{item}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteItemTouchable} onPress={() => handleDeleteItem(index)}>
        <Entypo name={'cross'} size={25} color={'white'} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={insetStyles.container}>
      <View style={styles.container}>
        <SearchBar phrase={searchPhrase} onSearch={searchBarHandleSearch} />
        <FlatList data={recentSearches} keyExtractor={(item, index) => index.toString()} renderItem={renderItem} style={styles.list} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    color: 'white',
  },
  back: {
    backgroundColor: 'red',
    width: 80,
    height: 30,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    color: 'white',
    fontSize: 18,
    margin: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
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
export default RecentSearch;