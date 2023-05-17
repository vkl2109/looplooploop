import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const BarBlock = ({ bar, beat, trackNumber }) => {

    return (<View style={[styles.barBlock, { backgroundColor: bar.color }]} >
            {/* <Text style={styles.textStyle}>
                {beat} / {trackNumber}
            </Text> */}
        </View>
    )
};

const styles = StyleSheet.create({
    barBlock: {
        flex: 1,
        width: '25%',
        height: '100%',
        justifyContent: 'center',
        borderWidth: 1.5,
        borderColor: 'black',
    },
    textStyle: {
        alignSelf: 'center',
        justifyContent: 'center',
    }
});

export default BarBlock
