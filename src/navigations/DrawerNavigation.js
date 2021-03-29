import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import TabsNavigation from './TabsNavigation';
import SafeAreaWrapper from '../components/SafeAreaWrapper';
import SideMenu from "../components/SideMenu";

import ProfileScreen from "../screens/User/ProfileScreen";
import ProfileFormScreen from "../screens/User/ProfileFormScreen";
import AboutScreen from "../screens/About/AboutScreen";

import {colors} from "../styles/common";

const Drawer = createDrawerNavigator();

const ProfileStack = createStackNavigator();
const AboutStack = createStackNavigator();

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

const AboutStackWrapper = () => (
    <SafeAreaWrapper>
        <AboutStack.Navigator initialRouteName={"About"}>
            <AboutStack.Screen name={"About"} component={AboutScreen} />
        </AboutStack.Navigator>
    </SafeAreaWrapper>
)

const DrawerNavigation = ({route}) => {
    return (
        <Drawer.Navigator
            initialRouteName={"TabsNavigation"}
            drawerPosition={"right"}
            drawerContent={(props) => <SideMenu {...props} />}
            drawerStyle={{
                backgroundColor: colors.darkGreen,
                width: '85%',
            }}
            >
            <Drawer.Screen name={"TabsNavigation"} component={TabsNavigation} />
            <Drawer.Screen name={"AboutStack"} component={AboutStackWrapper} />
        </Drawer.Navigator>

    )
};

export default DrawerNavigation;
