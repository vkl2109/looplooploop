import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import BarBlock from './BarBlock';

const TrackLayer = ({ track, trackNumber }) => {
    const [selected, setSelected] = useState(false);

    const handlePress = () => {
        setSelected(!selected);
    };

    return (
        <TouchableOpacity
            style={selected ? styles.selectedTrackLayer : styles.trackLayer}
            onPress={handlePress}
        >
            {track.map((bar, index) => (
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
        zIndex: 5,
    },
    selectedTrackLayer: {
        height: '25%',
        width: '100%',
        flexDirection: 'row',
        borderWidth: 3,
        borderColor: 'yellow',
    },
});

export default TrackLayer;
