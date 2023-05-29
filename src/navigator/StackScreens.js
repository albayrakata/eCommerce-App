import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";
import CartScreen from "../screens/CartScreen/CartScreen";

const Stack = createNativeStackNavigator();
const StackScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="DetailScreen" component={DetailScreen} options={{ headerShown: false }} />
            <Stack.Screen name="CartScreen" component={CartScreen} options={{headerShown: false}} />
    </Stack.Navigator>
    )
}

export { StackScreen }