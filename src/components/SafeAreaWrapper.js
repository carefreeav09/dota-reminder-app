import React from 'react';
import { View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

const SafeAreaWrapper = ({ children }) => {
    const insets = useSafeAreaInsets();
    return (
        <SafeAreaProvider>
            <View
                style={{
                    paddingTop: insets.top,
                    backgroundColor: '#fff',
                    flex: 1,
                }}
            >
                {children}
            </View>
            <View
                style={{
                    paddingBottom: insets.bottom,
                    backgroundColor: '#fff',
                    flex: 0,
                }}
            />
        </SafeAreaProvider>
    );
};

SafeAreaWrapper.defaultProps = {
    children: null,
};

export default SafeAreaWrapper;
