import { StyleSheet,TouchableOpacity, } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Profile from "./screens/Profile";
import Home from "./screens/Home";
import Home1 from "./screens/Home1";
import Settings from "./screens/Settings";
import RecentSearch from './screens/RecentSearch';
import SectionDetail from './screens/SectionDetail';
import SkillScreen from './screens/SkillScreen';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';

export type RootStackParamList = {
  HomeStack: undefined;
  Home1:undefined;
  RecentSearch: { searchPhrase: string };
  SectionDetail: { sectionName: string };
  SkillScreen: { link: string };
  SignIn:undefined;
  SignUp:undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const SignInName = "SignIn";
const SignUpName = "SignUp";
const RecentSearchName = "RecentSearch";
const SectionDetailName = "SectionDetail";
const homeName = "Home";
const ProfileName = "Profile";
const settingsName = "Settings";
const SkillScreenName = 'SkillScreen';
const homeName1 = "Home1"

const HomeStack = () => (
  <Tab.Navigator
            initialRouteName={homeName1}
            screenOptions={({ route }) => ({

                tabBarActiveTintColor: '#00FFFF', //#00FFFF
                tabBarInactiveTintColor: 'white',
                tabBarLabelStyle: {  paddingBottom: 7,fontSize: 12 },
                tabBarStyle:styles.TabStyle,
                tabBarButton: (props) => (
                  <TouchableOpacity
                      {...props}
                      onPress={(e) => props.onPress(e)}
                      style={{ flex: 1 }}
                  />
                ),
              
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: string | undefined;;
                    let rn = route.name;
        
                    if (rn === homeName1) {
                    iconName = focused ? 'home' : 'home-outline';
        
                    } else if (rn === ProfileName) {
                    iconName = focused ? 'person-circle' : 'person-circle-outline';
                    size = 27;
        
                    } else if (rn === settingsName) {
                    iconName = focused ? 'settings' : 'settings-outline';
                    }
        
                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
          >
    
            {/* <Tab.Screen name={homeName} component={Home} options={{headerShown:false}}/> */}
            <Tab.Screen name={homeName1} component={Home1} options={{headerShown:false}}/>
            <Tab.Screen name={ProfileName} component={Profile} options={{headerShown:false}}/>
            <Tab.Screen name={settingsName} component={Settings} options={{headerShown:false}}/>
    
          </Tab.Navigator>
);

export default function Tabbar(){
 
    return (
      
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name={SignInName} component={SignIn} options={{ headerShown: false}}/>
            <Stack.Screen name={SignUpName} component={SignUp} options={{ headerShown: false }}/>
            <Stack.Screen name={'HomeStack'} component={HomeStack} options={{ headerShown: false ,animation: 'none'}} />
            <Stack.Screen name={RecentSearchName} component={RecentSearch} options={{ headerShown: false ,animation: 'none' }}/>
            <Stack.Screen name={SectionDetailName} component={SectionDetail} options={{ headerShown: true,headerStyle: {
                backgroundColor: '#00A19B',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },}}/>

            <Stack.Screen name={SkillScreenName} component={SkillScreen} options={{ headerShown: true,headerStyle: {
                backgroundColor: '#00A19B',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },}}/>
          </Stack.Navigator>
        </NavigationContainer>
       
    );
}


const styles = StyleSheet.create({
  TabStyle: {
    padding: 2,
    height: 60,
    backgroundColor:'black',
    borderTopWidth:0.3,
    borderTopColor:'#2e2d2d',
  },
})

//  tabBarActiveTintColor: '#00A19B', //#00A19B
// tabBarInactiveTintColor: 'grey',
// tabBarLabelStyle: {  paddingBottom: 7,fontSize: 12 },
// tabBarStyle:{ padding: 2,height: 60},
// tabBarButton: (props) => (
//   <TouchableOpacity
//       {...props}
//       onPress={() => props.onPress()}
//       style={{ flex: 1 }}
//   />
// ),



// tabBarButton: ({ onPress, accessibilityState, children }) => (
//   <View style={{ flex: 1,alignItems:'center',justifyContent:'center',}}>
//     <TouchableOpacity
//       onPress={onPress}
//       style={{
//         alignItems: 'center',
//         justifyContent: 'center',
//         width: 110, // Adjust width as needed
//         height: 42, // Adjust height as needed
//         backgroundColor: accessibilityState.selected ? '#00A19B' : 'transparent', // Change color when tab is focused
//         borderRadius: 10, // Adjust border radius to make it round
//       }}
//     >
//       {children}
//     </TouchableOpacity>
//   </View>
// ),