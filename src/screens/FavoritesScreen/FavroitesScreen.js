import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View,Image, TouchableOpacity, RefreshControl, ActivityIndicator } from "react-native";
import { CheckBox } from "@rneui/base";
import { useSelector } from "react-redux";
import Header from "../../common/Header";
import useFetch from "../../hooks/useFetch";
import { Button } from "react-native-paper";
const Favorites= ({navigation})=>{
const items = useSelector(state=>state.wishlist)

const [wishListItems, setWishListItems] = useState(items.data)

let goDetail =id=>{
    navigation.navigate('DetailScreen',{id})
}
    return(
        <View style={styles.container}>
         <Header title={'Wish List'}
         leftIcon={require('../../images/back.png')}
         rightIcon={require('../../images/shopping-cart.png')}
         />
     
         <FlatList 
       
       
         data={wishListItems} 
         renderItem={({item,index})=>{
            return(
            <TouchableOpacity style={styles.wishListItem} onPress={()=>goDetail(item.id)}>
                <Image source={{ uri : item.image}} style={styles.image}/>
                <View>
                    <Text style={styles.wishTitle}>{item.title}</Text>
                    <Text style={styles.wishPrice}>{item.price}</Text>
                </View>
           
            </TouchableOpacity>

            )
         }} />
        </View>
    )
}
export default Favorites;
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        flex:1
    },
    wishListItem:{
        backgroundColor: '#e8f5e9',
        borderWidth: 1,
        borderColor: '#e0e0e0',
        margin: 10,
        flexDirection: 'row',
        borderBottomLeftRadius:11,
        borderTopLeftRadius:11,
  
    },
    image:{
        width: 100,
        minHeight: 100,
        resizeMode: 'contain',
        backgroundColor: 'white',
        borderBottomLeftRadius:10,
        borderTopLeftRadius:10
    },
    wishTitle:{
      
    },
    wishPrice:{
        
    }
   

})