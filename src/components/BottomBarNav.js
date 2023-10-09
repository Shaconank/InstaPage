import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Camera from '../screens/Camera';
import ActivityScreen from '../screens/ActivityScreen';
import SearchScreen from '../screens/SearchScreen';
import PostScreen from '../screens/PostScreen';
import ReelsScreen from '../screens/ReelsScreen'
import ProfileScreen from '../screens/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
    return (
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Post') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (route.name === 'Reels') {
            iconName = focused ? 'clapperboard' : 'clapperboard';
            color = focused ? 'black' : 'lightgrey';
            return <FontAwesome6 name = {iconName} size ={size} color ={color}/>;
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={'black'} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
        <Tab.Screen name="Home" component={HomeScreen} options={{headerShown:false, tabBarShowLabel: false}} />
        <Tab.Screen name="Search" component={SearchScreen} options={{headerShown:false, tabBarShowLabel: false}} />
        <Tab.Screen name="Post" component={PostScreen} options={{headerShown:false, tabBarShowLabel: false}} />
        <Tab.Screen name="Reels" component={ReelsScreen} options={{headerShown:false, tabBarShowLabel: false}} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{headerShown:false, tabBarShowLabel: false}} />
        
      </Tab.Navigator>
    );
  }
  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="HomeMain" component={MyTabs} options={{headerShown : false}} />
        <Stack.Screen name="Camera" component={Camera} options={{headerShown : false}}/>
        <Stack.Screen name="Activity" component={ActivityScreen} options={{headerShown : false}}/>
      </Stack.Navigator>
    );
  }

  export default MyStack;