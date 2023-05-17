import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TrackLayer from './TrackLayer'
import { colors } from '../Constants/colors';

const PlayGrid = () => {

    const trackOneBars = [
        { status: "play" },
        { status: "play" },
        { status: "play" },
        { status: "play" }
    ]
    const trackTwoBars = [
        { status: "play" },
        { status: "play" },
        { status: "play" },
        { status: "play" }
    ]
    const trackThreeBars = [
        { status: "play" },
        { status: "pause" },
        { status: "recording" },
        { status: "empty" }
    ]
    const trackFourBars = [
            { color: "empty" },
            { color: "empty" },
            { color: "empty" },
            { color: "empty" }
        ]

    const tempTracksArray = [
        {
            id: 1,
            bars: trackOneBars
        }, 
        {
            id: 2,
            bars: trackTwoBars
        }, 
        {
            id: 3,
            bars: trackThreeBars
        }, 
        {
            id: 4,
            bars: trackFourBars
        }
    ]

    const [selectedTrack, setSelectedTrack] = useState()
    const handleTrackPress = (id) => {setSelectedTrack(id); console.log(selectedTrack)}

    return (
        <View style={styles.gridContainer}>

            {tempTracksArray.map((track, index) => (
                <TrackLayer onPress={() => handleTrackPress(track.id)} track={track} trackNumber={index + 1} key={index} selectedTrack={selectedTrack}/>
            ))}
        
        </View>
    );
};

const styles = StyleSheet.create({
    gridContainer: {
        width: '90%',
        aspectRatio: 1/1,
        // borderWidth: 3,
        // borderColor: 'black',
        alignSelf: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
});

export default PlayGrid;