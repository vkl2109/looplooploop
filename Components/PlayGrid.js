import React from 'react';
import { View, StyleSheet } from 'react-native';
import TrackLayer from './TrackLayer'
import { colors } from '../Constants/colors';

const PlayGrid = (
    // { loopArray }
    ) => {

        const trackOne = [
            { color: colors.green },
            { color: colors.green },
            { color: colors.green },
            { color: colors.green }
        ]
        const trackTwo = [
            { color: colors.green },
            { color: colors.green },
            { color: colors.green },
            { color: colors.green }
        ]
        const trackThree = [
            { color: colors.green },
            { color: colors.yellow },
            { color: colors.red },
            { color: "white" }
        ]
        const trackFour = [
            { color: "white" },
            { color: "white" },
            { color: "white" },
            { color: "white" }
        ]

    const tempLoopArray = [trackOne, trackTwo, trackThree, trackFour]

    return (
        <View style={styles.gridContainer}>

            {tempLoopArray.map((track, index) => (
                <TrackLayer track={track} trackNumber={ index + 1 } key={index} />
            ))}
        
        </View>
    );
};

const styles = StyleSheet.create({
    gridContainer: {
        width: '90%',
        aspectRatio: 1/1,
        borderWidth: 3,
        borderColor: 'black',
        alignSelf: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
});

export default PlayGrid;