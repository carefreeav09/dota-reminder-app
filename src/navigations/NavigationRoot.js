import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import SafeAreaWrapper from "../components/SafeAreaWrapper";

import HomeScreen from "../screens/SplashScreen";
import ProfileFormScreen from "../screens/User/ProfileFormScreen";
import ProfileScreen from "../screens/User/ProfileScreen";
import RecentMatches from "../screens/Recent/RecentMatches";

const SplashStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const RecentStack = createStackNavigator();

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

const ProfileStackWrapper = () => (
    <SafeAreaWrapper>
        <ProfileStack.Navigator initialRouteName="Profile">
            <ProfileStack.Screen name={"Profile"} component={ProfileScreen} options={{
                header: "I am header"
            }}/>
            <ProfileStack.Screen name={"ProfileForm"} component={ProfileFormScreen} options={{
                header: "Profile Form"
            }}/>
        </ProfileStack.Navigator>
    </SafeAreaWrapper>
);

const RecentStackWrapper = () => (
    <RecentStack.Navigator initialRouteName="">
        <RecentStack.Screen name={"Recent"} component={RecentMatches} options={{
            header: "I am recent matches"
        }}/>
    </RecentStack.Navigator>
);

const RootStackNavigator = (props) => {
    return (
        <RootStack.Navigator initialRouteName={"SplashStack"} screenOptions={{
            headerShown: false,
        }}>
            <RootStack.Screen name={"SplashStack"} component={SplashStackWrapper}/>
            {/*<RootStack.Screen name={"ProfileStack"} component={ProfileStackWrapper} />*/}
            {/*<RootStack.Screen name={"RecentStack"} component={RecentStackWrapper} />*/}
        </RootStack.Navigator>
    )
};

export default RootStackNavigator;
