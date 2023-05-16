import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

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
                    size={30}
                    color="#FFFFFF"
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    playButton: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#0D6CEB',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainer: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default PlayButton;