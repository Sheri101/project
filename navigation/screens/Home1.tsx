import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation, NavigationProp, RouteProp } from '@react-navigation/native';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList} from '../Tabbar';
import UseInsetStyle from '../../InsetStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Define types for array items
type MyArrayItem = {
  key: number;
  title: string;
  time: string;
  Message: string;
  image: any;
};

type A2Item = {
  key: number;
  title: string;
  time: string;
  Message: string;
  image: any;
  link:string;
  para:string
  vidtitle:string
};


type HomeScreenProps = StackNavigationProp<RootStackParamList, 'Home1'>;


const myArray: MyArrayItem[] = [
  { key: 0, title: 'EDUCATION', time: '2 hrs', Message: '12 videos', image: require('../../assets/edu1.webp') },
  { key: 1, title: 'COOKING', time: '5 hrs', Message: '19 videos', image: require('../../assets/cook.webp') },
  { key: 2, title: 'EXERCISES', time: '8 hrs', Message: '14 videos', image: require('../../assets/exer1.png') },
  { key: 3, title: 'HEALTH', time: '1 hrs', Message: '21 videos', image: require('../../assets/hp1.jpg') },
  { key: 4, title: 'SPORTS', time: '2 hrs', Message: '9 videos', image: require('../../assets/sports.jpg') },
  { key: 5, title: 'ENTERTAINMENT', time: '1 hrs', Message: '7 videos', image: require('../../assets/ent3.webp') },
  { key: 6, title: 'TECHNICAL', time: '4 hrs', Message: '26 videos', image: require('../../assets/tech1.png') },
  { key: 7, title: 'Economy', time: '3 hrs', Message: '30 videos', image: require('../../assets/eco1.jpeg') },
  { key: 8, title: 'Technology', time: '10 hrs', Message: '40 videos', image: require('../../assets/devices2.jpg') },
  { key: 9, title: 'Communication', time: '3 hrs', Message: '14 videos', image: require('../../assets/comm1.webp') },
];

const a2: A2Item[] = [
  { key: 0, title: 'find determinant', time: '30 min', Message: 'hard',link:'3ROzG6n4yMc',para:'A determinant is a real number associated with every square matrix.The determinant of a square matrix A is denoted by "det A" or | A |.Now, that last one looks like the absolute value of A, but you will have to apply context.If the vertical lines are around a matrix, it means determinant.'
  ,vidtitle:"How to Find determinant:the easy way!", image: require('../../assets/determinant.png') },
  { key: 1, title: 'bake a cake', time: '20 min', Message: 'easy',link:'rqZEWmWy1hQ', para:'hi',vidtitle:"",image: require('../../assets/cook.webp') },
  { key: 2, title: 'dumbbell press', time: '13 min', Message: 'medium',link:'rqZEWmWy1hQ', para:'hi',vidtitle:"",image: require('../../assets/exer1.png') },
  { key: 3, title: 'give cpr', time: '7 min', Message: 'easy',link:'rqZEWmWy1hQ', para:'hi',vidtitle:"",image: require('../../assets/hp1.jpg') },
];

export default function Home1({ route }: { route: { params: { searchPhrase?: string } } }) {
  const [searchPhrase, setSearchPhrase] = useState<string>('');
  const insetStyles = UseInsetStyle();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    if (route.params?.searchPhrase) {
      setSearchPhrase(route.params.searchPhrase);
    } else {
      setSearchPhrase('');
    }
  }, [route.params?.searchPhrase]);

  const filteredData = myArray.filter(item =>
    item.title.toLowerCase().includes(searchPhrase.toLowerCase())
  );

  const handlePress = (sectionName: string) => {
    navigation.navigate('SectionDetail', { sectionName });
  };

  const vidhandlePress = (link: string,para:string,vidtitle:string) => {
    navigation.navigate('SkillScreen',{link,para,vidtitle});
  };

  const getTextColor = (message: string) => {
    switch (message) {
      case 'easy':
        return '#00FF00'; // green color for easy
      case 'hard':
        return '#FF0000'; // red color for hard
      case 'medium':
        return '#FFFF00'; // yellow color for medium
      default:
        return '#FFFFFF'; // default white color
    }
  };

  const renderHeader = () => (
    <View style={styles.Hlist}>
      <Text style={styles.topSectionText}>Top videos 🔥</Text>
      <FlatList
        data={a2}
        keyExtractor={item => item.key.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() =>vidhandlePress(item.link,item.para,item.vidtitle)} activeOpacity={0.7} style={styles.HListItems}>
            <ImageBackground style={styles.HImage} source={item.image} resizeMode="stretch">
              <View style={styles.overlay} />
              <Text style={styles.listTitleText}>{item.title}</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.listInfoText}>{item.time} -</Text>
                <Text
                  style={[
                    styles.listInfoText,
                    { color: getTextColor(item.Message), fontWeight: 'bold', borderColor: getTextColor(item.Message) },
                  ]}
                >
                  {item.Message}
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
        horizontal={true}
      />
      <Text style={styles.skillCatgText}>Skill Categories</Text>
    </View>
  );

  const handleRecentSearchNavigation = () => {
    navigation.navigate('RecentSearch', { searchPhrase });
  };

  return (
    <View style={insetStyles.container}>
      <View style={styles.container}>
        <View style={styles.searchBar__container}>
          <TouchableOpacity style={styles.searchBar__unclicked} onPress={handleRecentSearchNavigation}>
            <Ionicons name="search-sharp" size={20} color="black" />
            <Text style={styles.input}>Search</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={filteredData}
          keyExtractor={item => item.key.toString()}
          ListHeaderComponent={renderHeader}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handlePress(item.title)} activeOpacity={0.7} style={styles.VListItems}>
              <ImageBackground style={styles.VImage} source={item.image} resizeMode="stretch">
                <View style={styles.overlay} />
                <Text style={styles.listTitleText}>{item.title}</Text>
                <Text style={styles.listInfoText}>{item.time} - {item.Message}</Text>
              </ImageBackground>
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
          horizontal={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  searchBar__container: {
    margin: 15,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
  },
  searchBar__unclicked: {
    padding: 5,
    flexDirection: 'row',
    width: '99%',
    backgroundColor: '#4d4e4d',
    borderRadius: 15,
    alignItems: 'center',
  },
  input: {
    color: '#2c2b2b',
    fontSize: 20,
    marginLeft: 10,
    width: '90%',
  },
  topSectionText: {
    paddingTop: 22,
    paddingLeft: 17,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    paddingBottom: 5,
  },
  Hlist: {},
  HListItems: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 19,
  },
  HImage: {
    justifyContent: 'center',
    height: 160,
    width: 290,
    borderRadius: 10,
    overflow: 'hidden',
    borderColor: '#00A19B',
    borderWidth: 1.5,
  },
  skillCatgText: {
    marginTop: 15,
    marginBottom: -7,
    paddingTop: 13,
    paddingLeft: 17,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    borderTopColor: '#423f3f',
    borderTopWidth: 1,
  },
  Vlist: {
    backgroundColor: 'black',
    paddingBottom: 55,
  },
  VImage:{
    justifyContent:'center',
    height:138, 
    width:320, 
    borderRadius: 10, 
    overflow: 'hidden',
    borderColor:'#00A19B',
    borderWidth:1.5,
  },
  listTitleText:{
    color:'white',
    fontWeight: 'bold', 
    fontSize: 27,
    paddingLeft:8,
  },
  listInfoText:{
    color:'white',
    paddingLeft:8,
  },
  VListItems:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:12,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Overlay covers the entire ImageBackground
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent black color
    borderRadius: 10,
  },
  recentSearchesContainer: {
    backgroundColor: 'white',
    paddingVertical: 300,
    width:'100%',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  recentSearch:{
    position:'absolute',
    top:0.1,
    backgroundColor:'#62b6e7',
    width:'100%'
    
  },
  recentSearchesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
   
  },
  recentSearchItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  recentSearchText: {
    fontSize: 16,
  },
  
  });
  
  // navigation.navigate('RecentSearch', { searchPhrase });