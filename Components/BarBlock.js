import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BarBlock = ({ bar, index }) => {
    const color = bar.color
    

    const barBlockStyle = {
        backgroundColor: color,
    };

    return ( <View style={[styles.barBlock, barBlockStyle]}>
            <Text>
                {index}
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    barBlock: {
        flex: 1,
        width: '25%',
        height: '25%',
    },
});

export default BarBlock
