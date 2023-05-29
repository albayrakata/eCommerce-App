import { NavigationContainer } from "@react-navigation/native";
import { StackScreen } from "./navigator/StackScreens";
import TabScreen from "./navigator/TabScreens";
import { store } from "./redux/store";

import React from "react";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
   <TabScreen />
    </NavigationContainer>
    </Provider>
  )
}
export default App