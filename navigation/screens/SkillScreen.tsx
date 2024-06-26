import React,{useEffect} from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StyleSheet, Text, View,FlatList,TouchableOpacity,ImageBackground} from 'react-native';
// import YoutubePlayer from 'react-native-youtube-iframe';
import YoutubeIframe from 'react-native-youtube-iframe';
import { RootStackParamList} from '../Tabbar';

type SkillScreenRouteProp = RouteProp<RootStackParamList, 'SkillScreen'>;


export default function SkillScreen(){
    const route = useRoute<SkillScreenRouteProp>();
    const { link,para,vidtitle } = route.params;
    
    // const navigation = useNavigation();
    

    return(
        <View style={styles.container}>
            <View><YoutubeIframe
                height={230}
                width={360}
                play={true}
                videoId={link}

            />
            <Text style={styles.vidTitle}>{vidtitle}</Text>
            <Text style={{color:'white'}}>{para}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    flex:1,
    backgroundColor:'black',
    },
    vidTitle:{
    padding:6,
    color:'white',
    fontWeight: '900', 
    fontSize: 25,
    },
});
