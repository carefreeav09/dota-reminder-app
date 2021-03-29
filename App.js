import 'react-native-gesture-handler';

import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootStackNavigator from "./src/navigations/NavigationRoot";

export default function App() {
    return (
        <>
            <StatusBar barStyle={'dark-content'}/>
            <NavigationContainer>
                <RootStackNavigator />
            </NavigationContainer>
        </>
    );
}
