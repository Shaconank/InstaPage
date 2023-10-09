
import { Text, StyleSheet, View, Button } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
export default function ActivityScreen({ navigation }:any) { 
    return (
      <>
      <SafeAreaView style = {styles.container}>
        <Text>Activity screen</Text>
        <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      </SafeAreaView>
      
      </>
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