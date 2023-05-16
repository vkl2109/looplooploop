import React from 'react';
import { View, StyleSheet } from 'react-native';

const ButtonBar = ({ children }) => {
    return <View style={styles.buttonBar}>{children}</View>;
};

const styles = StyleSheet.create({
    buttonBar: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: '5%'
    },
});

export default ButtonBar;