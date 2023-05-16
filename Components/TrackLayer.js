import React from 'react';
import { View, StyleSheet } from 'react-native';
import BarBlock from './BarBlock';

const TrackLayer = ({ track, trackNumber }) => {
    return <View style={styles.trackLayer}>
            {track.map((bar, index) => (
                <BarBlock bar={bar} trackNumber={trackNumber} beat={ index + 1 } key={index} />
            ))}
        </View>;
};


const styles = StyleSheet.create({
    trackLayer: {
        height: '25%',
        width: '100%',
        flexDirection: 'row',
    },
});

export default TrackLayer;