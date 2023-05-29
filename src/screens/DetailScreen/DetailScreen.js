
import React from "react";
import { Text, View, Image, ScrollView,useState, TouchableOpacity, StyleSheet } from "react-native";
import Config from "react-native-config";
import CustomButton from "../../common/CustomButton";
import Header from "../../common/Header";
import useFetch from "../../hooks/useFetch";
import styles from './DetailScreen.style'
import { useNavigation } from "@react-navigation/native";
import { CheckBox } from "@rneui/base";
import { useDispatch } from "react-redux";
import { addItemToWishList } from "../../redux/slices/WishListSlice";
import { addItemToCartList } from "../../redux/slices/CartListSlice";

const DetailScreen = ({ route }) => {
    const navigation = useNavigation();
    const { id } = route.params
    const { data } = useFetch(`${Config.ALL_PRODUCTS_API}/${id}`);
    const dispatch = useDispatch();

    return (
          
        <ScrollView>
            <View style={styles.conatiner} >
            <Header
              goBack={() => {
                navigation.goBack();
               }}
                leftIcon={require('../../images/back.png')}
                rightIcon={require('../../images/shopping-cart.png')}
                title={'Product Detail'}
               onClickLeftIcon={()=>{
                navigation.goBack();
               }}
                />
  
                <Image source={{ uri: data.image }} style={styles.img} />
                <TouchableOpacity style={styles.wishList} onPress={()=>{
                    dispatch(addItemToWishList(data))
                }}>
                    <Image source={require('../../images/heart.png')} style={styles.icon}/>
                </TouchableOpacity>
                <View style={styles.body_container} >
                    <Text style={styles.title} >{data.title}</Text>
                    <Text style={styles.desc}>{data.description}</Text>
                <Text style={styles.category_name}>{data.category}</Text>
                <Text style={styles.price}> Price: {data.price} ₺</Text>
              

                </View>
                <CustomButton bg={'#FF9A0C'} title={'Add to Chart'} color={'#fff'}
                onClick={()=>{
                    dispatch(addItemToCartList(data))
                }}
                />
            </View>
        </ScrollView>
    )
}
export default DetailScreen