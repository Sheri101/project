import { StatusBar } from 'expo-status-bar';

import React,{useState,useEffect } from 'react';
import { StyleSheet, Text, View,FlatList,TouchableOpacity,ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import UseInsetStyle from '../../InsetStyle'; 
import Ionicons from 'react-native-vector-icons/Ionicons';


const myArray = [
  { key:0,
    title:'EDUCATION',
    time:'2 hrs',
    Message : '12 videos',
    image: require('../../assets/edu1.webp')
  },
  { key:1,
    title:'COOKING',
    time:'5 hrs',
    Message : '19 videos',
    image: require('../../assets/cook.webp')
  },
  { key:2,
    title:'EXERCISES',
    time:'8 hrs',
    Message : '14 videos',
    image: require('../../assets/exer1.png')
  },
  { key:3,
    title:'HEALTH',
    time:'1 hrs',
    Message : '21 videos',
    image: require('../../assets/hp1.jpg')
  },
  { key:4,
    title:'SPORTS',
    time:'2 hrs',
    Message : '9 videos',
    image: require('../../assets/sports.jpg')
  },
  { key:5,
    title:'ENTERTAINMENT',
    time:'1 hrs',
    Message  : '7 videos',
    image: require('../../assets/ent3.webp')
  },
  { key:6,
    title:'TECHNICHAL',
    time:'4 hrs',
    Message : '26 videos',
    image: require('../../assets/tech1.png')
  },
  { key:7,
    title:'Economy',
    time:'3 hrs',
    Message : '30 videos',
    image: require('../../assets/eco1.jpeg')
  },
  { key:8,
    title:'Technology',
    time:'10 hrs',
    Message  : '40 videos',
    image: require('../../assets/devices2.jpg')
  },
  { key:9,
    title:'Communication',
    time:'3 hrs',
    Message : '14 videos',
    image: require('../../assets/comm1.webp')
  },
]

const a2 = [
  { key:0,
    title:'find determinant',
    time:'30 min',
    Message : 'hard',
    image: require('../../assets/ent2.jpg')
  },
  { key:1,
    title:'bake a cake',
    time:'20 min',
    Message : 'easy',
    image: require('../../assets/cook.webp')
  },
  { key:2,
    title:'dumbell press',
    time:'13 min',
    Message : 'medium',
    image: require('../../assets/exer1.png')
  },
  { key:3,
    title:'give cpr',
    time:'7 min',
    Message : 'easy',
    image: require('../../assets/hp1.jpg')
  },
  
]

// const recentSearches = ['Math', 'Science', 'History'];

export default function Home({route}) {
  const [txt, setTxt] = useState('');
 
  const insetStyles = UseInsetStyle();
  const navigation = useNavigation();
  
  const [searchPhrase, setSearchPhrase] = useState('');

  useEffect(() => {
    const { params } = route;
    if (params && params.searchPhrase) {
      setSearchPhrase(params.searchPhrase);
    } else {
      setSearchPhrase("");
    }
  }, [route]);

  const filteredData = myArray.filter(item =>
    item.title.toLowerCase().includes(searchPhrase.toLowerCase())
  );

  
  const handlePress = (sectionName) => {
     navigation.navigate('SectionDetail',{sectionName});
  };

  const vidhandlePress = () => {
    navigation.navigate('SkillScreen');  
  };


  const getTextColor = (message) => {
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

  function renderHeader(){
    return(
      <View style={styles.Hlist}>
        <Text style={styles.topSectionText}>Top videos 🔥</Text>
        <FlatList 
        data={a2}
        keyExtractor={item=>item.key}
        renderItem={({item}) => (
          
            <TouchableOpacity onPress={vidhandlePress} activeOpacity={0.7} style={styles.HListItems}>
                  <ImageBackground style={[styles.HImage,]} source={item.image} resizeMode="stretch">
                  <View style={styles.overlay} />
                    <Text style={styles.listTitleText}>{item.title}</Text>
                    <View style={{flexDirection:'row'}}><Text style={styles.listInfoText}>{item.time} -</Text>
                      <Text style={[styles.listInfoText,{ color: getTextColor(item.Message), fontWeight:'bold',borderColor:getTextColor(item.Message), }]}>{item.Message}</Text>
                    </View>
                  </ImageBackground>
            </TouchableOpacity> 
        )}
        showsVerticalScrollIndicator={false}
        horizontal={true}
      />
      <Text style={styles.skillCatgText}>Skill Categories</Text>
    </View>
    )
  }

  const handleRecentSearchNavigation = () =>{
    // console.log("Search phrase home:", searchPhrase);
    navigation.navigate('RecentSearch',{searchPhrase});
  };

  return (
    <View style={insetStyles.container}>
      <View style={styles.container}>

        <View style={styles.searchBar__container}> 
          <TouchableOpacity style={styles.searchBar__unclicked} onPress={handleRecentSearchNavigation}>
            <Ionicons name={'search-sharp'} size={20} color={'black'} />
            <Text style={styles.input}>Search</Text>
          </TouchableOpacity>
        </View>

          <FlatList 
            data={filteredData}
            keyExtractor={item=>item.key}
            ListHeaderComponent={renderHeader}
            renderItem={({item}) => ( 
                <TouchableOpacity onPress={() =>handlePress(item.title)} activeOpacity={0.7} style={styles.VListItems}>
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
}

const styles = StyleSheet.create({
  
container:{
  flex:1,
  backgroundColor:'black',
},
searchBar__container: {
  margin: 15,
  justifyContent: "flex-start",
  alignItems: "center",
  flexDirection: "row",
  width: "90%",
},
searchBar__unclicked: {
  padding: 5,
  flexDirection: "row",
  width: "99%",
  backgroundColor: "#4d4e4d",
  borderRadius: 15,
  alignItems: "center",
},
input: {
  color:'#2c2b2b',
  fontSize: 20,
  marginLeft: 10,
  width: "90%",
},
topSectionText:{
  paddingTop:22,
  paddingLeft:17,
  color:'white',
  fontWeight: 'bold', 
  fontSize: 25,
  paddingBottom:5,
},
Hlist:{
  // borderBottomColor:'#423f3f',
  // borderBottomWidth:1,
  // marginBottom:10,
},
HListItems:{
  justifyContent:'center',
  alignItems:'center',
  paddingLeft:19,
},
HImage:{
  justifyContent:'center',
  height:160, 
  width:290, 
  borderRadius: 10, 
  overflow: 'hidden',
  borderColor:'#00A19B',
  borderWidth:1.5,
  
},
skillCatgText:{
  marginTop:15,
  marginBottom:-7,
  paddingTop:13,
  paddingLeft:17,
  color:'white',
  fontWeight: 'bold', 
  fontSize: 25,
  borderTopColor:'#423f3f',
  borderTopWidth:1,
},
Vlist:{
  backgroundColor:'black',  
  paddingBottom:55,

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

