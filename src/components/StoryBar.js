import { View,Image, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import React from 'react'


const userPhotos = [
    {id : '1' , userName : 'Ching Chong', image: require('../assets/pexels-clara-ngo-3866555.jpg')},
    {id : '2' , userName : 'Chong Ching', image: require('../assets/pexels-daniel-xavier-1239291.jpg')},
    {id : '3' , userName : 'Ding Dong' , image : require('../assets/pexels/')}
]
export default function (){
    return(
    <View>
        <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
          </View>
        )}
      />
    </View>)
}

const style = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
      }
})