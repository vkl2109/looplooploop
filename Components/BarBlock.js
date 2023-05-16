import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const BarBlock = ({ bar, beat, trackNumber }) => {
    

    // const barBlockStyle = {
    //     backgroundColor: bar.color,
    // };

    return (<View style={[styles.barBlock, { backgroundColor: bar.color }]} >
            <Text style={styles.textStyle}>
                Track {trackNumber}
            </Text>
            <Text style={styles.textStyle}>
                Beat {beat}
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    barBlock: {
        flex: 1,
        width: '25%',
        height: '100%'
    },
    textStyle: {
        alignSelf: 'center',
        justifyContent: 'center',
    }
});

export default BarBlock
