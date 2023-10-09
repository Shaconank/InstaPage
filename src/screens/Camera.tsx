
import { Text, StyleSheet, View, Button } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Camera({ navigation }:any) { 
    return (
      <SafeAreaView style = {styles.container}>
        <Text>cameraScreen  </Text>
        <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      </SafeAreaView>
      
      
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        display : 'flex',
        justifyContent: 'center',
        alignItems : 'center',
    }
})