    import React,{useEffect} from 'react';
    import { useNavigation, useRoute } from '@react-navigation/native';
    import { StyleSheet, Text, View,FlatList,TouchableOpacity,ImageBackground} from 'react-native';
    import { StackNavigationProp } from '@react-navigation/stack';
    import { EDUCATION, COOKING, HEALTH, EXERCISES } from './SectionData';
    import { RootStackParamList} from '../Tabbar';
    import UseInsetStyle from '../../InsetStyle'; 
    import SkillScreen from './SkillScreen';
    
    type SectionDetailNavigationProp = StackNavigationProp<RootStackParamList, 'SectionDetail'>;

    
    const sectionDataMap = {
        EDUCATION,
        COOKING,
        HEALTH,
        EXERCISES,
      };
    export default function SectionDetail(){
        
        const navigation = useNavigation<SectionDetailNavigationProp>();
        // const insetStyles = UseInsetStyle();
        const route = useRoute();
        const { sectionName } = route.params as { sectionName: string };

        const Data = sectionDataMap[sectionName];
        useEffect(() => {
            // Set the header title dynamically
            navigation.setOptions({ title: sectionName });
        }, [navigation, sectionName]);

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
        
        const handlePress = (link: string,para:string,vidtitle:string) => {
             navigation.navigate('SkillScreen',{link,para,vidtitle});
        };

        return(
        
                <View style={styles.container}>
                    {/* <Text style={{color:'white'}}>hi</Text> */}
                    
                        <FlatList 
                            data={Data}
                            keyExtractor={item=>item.key.toString()}
                            // ListHeaderComponent={renderHeader}
                            renderItem={({item}) => ( 
                                <TouchableOpacity onPress={() =>handlePress(item.link,item.para,item.vidtitle)} activeOpacity={0.7} style={styles.VListItems}>
                                <ImageBackground style={styles.VImage} source={item.image} resizeMode="stretch">
                                <View style={styles.overlay} />
                                    <Text style={styles.listTitleText}>{item.title}</Text>
                                    <View style={{flexDirection:'row'}}><Text style={styles.listInfoText}>{item.time} -</Text>
                                        <Text style={[styles.listInfoText,{ color: getTextColor(item.Message), fontWeight:'900',borderColor:getTextColor(item.Message), }]}>{item.Message}</Text>
                                    </View>                                
                                    </ImageBackground>
                                </TouchableOpacity> 
                            
                            )}
                            showsVerticalScrollIndicator={false}
                            horizontal={false}
                        />
                        {/* <View style={styles.button}>
                            <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}><Text>back</Text></TouchableOpacity>
                        </View> */}
                    
                </View>
       
        );
    };



    const styles = StyleSheet.create({
        container: {
        flex:1,
        backgroundColor:'black',
        },
        list:{backgroundColor:'yellow'},
        back:{
        backgroundColor:'red',
        width:80,
        height:30,
        },
        button:{
            alignItems:'center',
            justifyContent:'center', 
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
            fontWeight: '900', 
            fontSize: 27,
            paddingLeft:8,
        },
        listInfoText:{
            color:'white',
            paddingLeft:8,
            fontWeight: '900', 
        },
        VListItems:{
            justifyContent:'center',
            alignItems:'center',
            marginTop:12,
        },
        overlay: {
            ...StyleSheet.absoluteFillObject, // Overlay covers the entire ImageBackground
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black color
            borderRadius: 10,
        },
    });
    