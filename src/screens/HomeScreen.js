
import { Text, StyleSheet, View, Button } from 'react-native';
import React, { Component } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Antdesign from 'react-native-vector-icons/AntDesign';


export default function HomeScreen({ navigation }) { 
    return (
      <SafeAreaView style = {styles.container}>
        <Text style = {styles.textstyle}>Instagram</Text>
        <View style = {styles.heart}>
          <TouchableOpacity  onPress={() => navigation.navigate('Activity')}>
            <Ionicons name = {"heart-outline"} color="black" size = {35} />
          </TouchableOpacity>
        </View>
        <View style = {styles.text}>
          <TouchableOpacity  onPress={() => navigation.navigate('Activity')}>
            <Antdesign name = {"message1"} color="black" size = {28} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      
    
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        display : 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems : 'flex-start',
        backgroundColor: 'white'
    },
    textstyle:{
      fontFamily: 'Vegan Style Personal Use',
      fontSize: Number(30),
      color: 'black',
      alignSelf : 'flex-start',
      paddingLeft: 5,
      
    },
    heart:{
      paddingTop: 14,
      alignSelf: 'flex-start',
      marginLeft:170
    },
    text:{
      paddingTop: 17,
      alignSelf: 'flex-start',
      marginLeft: 20
    }
})