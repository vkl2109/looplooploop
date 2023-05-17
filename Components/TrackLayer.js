import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import BarBlock from './BarBlock';
import { colors } from '../Constants/colors';

const TrackLayer = ({ onPress, track, selectedTrack, trackNumber }) => {

    return (
        <TouchableOpacity
        onPress = {onPress}
            style={selectedTrack === track.id ? styles.selectedTrackLayer : styles.trackLayer}>
            {track.bars.map((bar, index) => (
                <BarBlock
                    bar={bar}
                    trackNumber={trackNumber}
                    beat={index + 1}
                    key={index}
                />
            ))}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    trackLayer: {
        height: '25%',
        width: '100%',
        flexDirection: 'row',
        borderWidth: 3,
        borderColor: 'black',
        marginBottom: 2,
    },
    selectedTrackLayer: {
        height: '25%',
        width: '100%',
        flexDirection: 'row',
        borderWidth: 3,
        borderColor: "yellow",
        // shadowColor: 'yellow',
        // shadowOffset: {
        //     width: 0,
        //     height: 0,
        // },
        // shadowOpacity: 1,
        // shadowRadius: 2,
        // elevation: 5,
    }
});

export default TrackLayer;
