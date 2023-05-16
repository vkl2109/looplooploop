import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

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
                    size={30}
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
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'red',
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

export default RecordButton;