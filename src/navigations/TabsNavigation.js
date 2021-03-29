import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DashboardScreen from "../screens/Dashboard/DashboardScreen";
import RecentMatches from "../screens/Recent/RecentMatches";
import SafeAreaWrapper from "../components/SafeAreaWrapper";

import { colors} from "../styles/common";

const Tab = createBottomTabNavigator();

const DashboardStack = createStackNavigator();
const RecentStack = createStackNavigator();

const HomeStackComponent = (props) => {
    return (
        <DashboardStack.Navigator
            initialRouteName="Home"
        >
            <DashboardStack.Screen name="Home" component={DashboardScreen} />
        </DashboardStack.Navigator>
    );
};

const RecentStackComponent = (props) => {
    return (
        <RecentStack.Navigator
            initialRouteName="Recent"
        >
            <RecentStack.Screen name="Recent" component={RecentMatches} />
        </RecentStack.Navigator>
    );
};

const TabsNavigation = () => {
    return (
        <SafeAreaWrapper>
            <Tab.Navigator
                activeBackgroundColor={colors.backgroundPrimary}
                screenOptions={{
                    backgroundColor: colors.backgroundPrimary,
                }}
                tabBarOptions={{
                    showLabel: false,
                    activeTintColor: colors.green,
                    inactiveTintColor: colors.gray1,
                    style: {
                        elevation: 3,
                        borderTopWidth: 1,
                        shadowColor: colors.black,
                        shadowOffset: { height: 1 },
                        shadowOpacity: 0.55,
                        shadowRadius: 8,
                        paddingTop: 15,
                        paddingBottom: 12,
                        height: 50,
                    },
                }}
            >
                <Tab.Screen name={"Home"} component={HomeStackComponent} />
                <Tab.Screen name={"Recent"} component={RecentStackComponent} />
            </Tab.Navigator>
        </SafeAreaWrapper>
    );
};

export default TabsNavigation;