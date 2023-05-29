import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { StackScreen } from "./StackScreens";
import Favorites from "../screens/FavoritesScreen/FavroitesScreen";
import { Icon } from "@rneui/base";

const Tab = createMaterialBottomTabNavigator();
const TabScreen = () =>{
    return(
        <Tab.Navigator
        initialRouteName="Home"
        activeColor="#F39111"
        inactiveColor="grey"
        barStyle={{ backgroundColor: 'white' }}
        >
            <Tab.Screen name="Home" component={StackScreen}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                  <Icon name="home" color={color} />
                )
              }}
    
            />
            <Tab.Screen name="Favorites" component={Favorites} 
             options={{
                tabBarLabel: 'Favorites',
                tabBarIcon: ({ color }) =>(
                  <Icon name="favorite" color={color}/>
                )
              }}
    />
        </Tab.Navigator>
    )
}
export default TabScreen