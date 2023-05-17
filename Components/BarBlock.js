import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../Constants/colors';


const BarBlock = ({ bar, beat, trackNumber }) => {

    let barColor = "white"

    switch (bar.status){
        case "play":
            barColor = colors.green
            break;
        case "recording":
            barColor = colors.red
            break;
        case "pause":
            barColor = colors.yellow
            break
    } 

    return (<View style={[styles.barBlock, { backgroundColor: barColor }]} >
            {/* <Text style={styles.textStyle}>{beat} / {trackNumber}</Text> */}
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
