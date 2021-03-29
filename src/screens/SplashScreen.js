import React from 'react';
import {Dimensions, ImageBackground, StyleSheet, Text, View} from "react-native";

import SplashImage from '../assets/dota2bg.jpg';

const HomeScreen = ({navigation}) => {

    React.useEffect(() => {
        setTimeout(() => {
            navigation.push('DashboardStack')
        }, 3000)
    }, []);

    return (
        <View style={styles.container}>
            <ImageBackground source={SplashImage} style={styles.image}>
            </ImageBackground>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    image: {
        flex: 1,
        resizeMode: "center",
        width: null,
    },
});
