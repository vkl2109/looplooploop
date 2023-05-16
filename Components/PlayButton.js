import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../Constants/colors';

const PlayButton = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <TouchableOpacity
            style={styles.playButton}
            onPress={handlePlay}
            activeOpacity={0.8}
        >
            <View style={styles.iconContainer}>
                <FontAwesome
                    name={isPlaying ? 'pause' : 'play'}
                    size={40}
                    color="#FFFFFF"
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    playButton: {
        width: 80,
        height: 80,
        borderRadius: "100%",
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainer: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default PlayButton;