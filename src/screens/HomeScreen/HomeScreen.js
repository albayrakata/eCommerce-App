import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Config from "react-native-config";
import Header from "../../common/Header";
import AllProductCard from "../../component/AllProductCard";


import useFetch from "../../hooks/useFetch";

const HomeScreen = ({ navigation }) => {
    const { data } = useFetch(Config.ALL_PRODUCTS_API)
    let goDetail = id => {
      navigation.navigate('DetailScreen', {id})
    }
    const renderAllProducts = ({ item }) => <AllProductCard product={item} onPress={() => goDetail(item.id)} />
    return (
        <View style={styles.container}>
            <Header leftIcon={require('../../images/menu.png')}
                rightIcon={require('../../images/shopping-cart.png')}
                title={'ATA SHOP'}
            />
            <FlatList data={data} renderItem={renderAllProducts} numColumns={2} />
        </View>

    )
}
export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})