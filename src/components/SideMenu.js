import React from 'react';
import {View, SafeAreaView, TouchableOpacity, Text, StyleSheet} from 'react-native';

import {colors, sizes, fontFamilies} from "../styles/common";

const SideMenu = (props) => (
    <SafeAreaView>
        <View>
            <TouchableOpacity
                style={styles.navItem}
            >
                <Text textStyle={styles.navItemLabel}>
                    I am here
                </Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
);

export default SideMenu;

const styles = StyleSheet.create({
    sideMenuContainer: {
        flex: 1,
        paddingHorizontal: 35,
        paddingTop: 10,
    },
    navSection: {
        paddingTop: 40,
    },
    navItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10
    },
    navItemIcon: {
        fontSize: 17,
        marginRight: 12,
    },
    navItemLabel: {
        fontFamily: fontFamilies.bold,
        color: colors.white,
        fontSize: sizes.size4
    },
    navItemLabelSmaller: {
        color: colors.white,
        fontSize: sizes.size5
    },
});