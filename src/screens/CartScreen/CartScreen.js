import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, RefreshControl, ActivityIndicator } from "react-native";
import { CheckBox } from "@rneui/base";
import { useSelector } from "react-redux";
import Header from "../../common/Header";
import useFetch from "../../hooks/useFetch";
import { Button } from "react-native-paper";
const CartScreen = ({ navigation }) => {
    const items = useSelector(state => state.cart)
    const [cartItems, setCartItems] = useState(items.data)
    let goDetail = id => {
        navigation.navigate('DetailScreen', { id })
    }
    return (
        <View style={styles.container}>
            <Header title={'Cart List'}
                leftIcon={require('../../images/back.png')}
                rightIcon={require('../../images/shopping-cart.png')}
            />
            <FlatList
                data={cartItems}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity style={styles.wishListItem} onPress={() => goDetail(item.id)}>
                            <Image source={{ uri: item.image }} style={styles.image} />
                            <View style={styles.body_container}>
                                <Text style={styles.wishTitle}>{item.title}</Text>
                                <View style={styles.qtyView}>
                                    <Text style={styles.wishPrice}>Price: {item.price}₺</Text>
                                    <TouchableOpacity style={styles.btn}>
                                        <Text>-</Text>
                                    </TouchableOpacity>
                                       <Text>{item.qty}</Text>
                                    <TouchableOpacity style={styles.btn}>
                                        <Text>+</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>

                    )
                }} />
        </View>
    )
}
export default CartScreen;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1
    },
    wishListItem: {
        backgroundColor: '#e8f5e9',
        borderWidth: 1,
        borderColor: '#e0e0e0',
        margin: 10,
        flexDirection: 'row',
        borderBottomLeftRadius: 11,
        borderTopLeftRadius: 11,

    },
    image: {
        width: 100,
        minHeight: 100,
        resizeMode: 'contain',
        backgroundColor: 'white',
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10
    },
    wishTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    wishPrice: {
        fontSize: 18,
        color: 'green',
        fontWeight: '600'
    },
    body_container: {
        padding: 5,
        justifyContent: 'space-between',
    },
    qtyView:{
      flexDirection:'row',
      alignItems:'center'
    },
    btn:{
        borderWidth:0.5,
        padding:5,
        width:30,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        marginLeft:10
    }


})