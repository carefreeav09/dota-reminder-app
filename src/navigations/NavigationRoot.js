import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import SafeAreaWrapper from "../components/SafeAreaWrapper";

import HomeScreen from "../screens/SplashScreen";
import DrawerNavigation from "./DrawerNavigation";

const SplashStack = createStackNavigator();

const RootStack = createStackNavigator();

const SplashStackWrapper = () => (
    <SafeAreaWrapper>
        <SplashStack.Navigator
            initialRouteName="Splash"
            screenOptions={{
                headerShown: false
            }}
        >
            <SplashStack.Screen name="Splash" component={HomeScreen}/>
        </SplashStack.Navigator>
    </SafeAreaWrapper>
);

const RootStackNavigator = (props) => {
    return (
        <RootStack.Navigator initialRouteName={"SplashStack"} screenOptions={{
            headerShown: false,
        }}>
            <RootStack.Screen name={"SplashStack"} component={SplashStackWrapper}/>
            <RootStack.Screen name={"DashboardStack"} component={DrawerNavigation} />
        </RootStack.Navigator>
    )
};

export default RootStackNavigator;
