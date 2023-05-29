import React, { useState } from "react";
import {  Image, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import styles from './AllProductCard.style'
import { CheckBox } from "@rneui/base";


const AllProductCard = ({ product, onPress }) => {
    const [checked, setState] = useState(false)
    const toggleCheckbox = () => setState(!checked);
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <View style={styles.favIcon}>
                    <CheckBox style={styles.favIcon}
                        checked={checked}
                        checkedIcon="heart"
                        uncheckedIcon="heart-o"
                        checkedColor="red"
                        onPress={toggleCheckbox}/>
                </View>
                <Image source={{ uri: product.image }} style={styles.image} />
                <View style={styles.body_container}>
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={styles.price}>{product.price}₺</Text>
                </View>

            </View>
        </TouchableWithoutFeedback>
    )
}
export default AllProductCard;