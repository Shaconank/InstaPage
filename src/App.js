import {SafeAreaView,Text} from 'react-native';
import * as React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './components/BottomBarNav';


export default function App(){
  return(
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
    
  )
}