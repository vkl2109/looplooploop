import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../Constants/colors';

const RecordButton = () => {
    const [isRecording, setIsRecording] = useState(false);

    const handleRecord = () => {
        setIsRecording(!isRecording);
    };

    return (
        <TouchableOpacity
            style={styles.recordingButton}
            onPress={handleRecord}
            activeOpacity={0.8}
        >
            <View style={styles.iconContainer}>
                <FontAwesome
                    name={isRecording ? 'stop' : "circle"}
                    size={40}
                    color="#FFFFFF"
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    // stopButton: {
    //     width: 60,
    //     height: 60,
    //     borderRadius: 30,
    //     backgroundColor: 'black',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    recordingButton: {
        width: 80,
        height: 80,
        borderRadius: "100%",
        backgroundColor: colors.red,
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

export default RecordButton;