import React from 'react';
import { View, StyleSheet } from 'react-native';
import TrackLayer from './TrackLayer'

const PlayGrid = (
    // { loopArray }
    ) => {

        const trackOne = [
            { color: "green" },
            { color: "green" },
            { color: "green" },
            { color: "green" }
        ]
        const trackTwo = [
            { color: "green" },
            { color: "green" },
            { color: "green" },
            { color: "green" }
        ]
        const trackThree = [
            { color: "green" },
            { color: "yellow" },
            { color: "red" },
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