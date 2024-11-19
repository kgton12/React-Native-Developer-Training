import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home/Home";
import { Form } from "../screens/Form/Form";

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="Form" component={Form} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export type RootStackParamList = {
    Home: undefined;
    Form: undefined;
};

export default AppNavigator;
