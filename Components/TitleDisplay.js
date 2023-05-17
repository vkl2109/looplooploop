import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Dimensions } from 'react-native';

const TitleDisplay = () => {
    
    const getCurrentDateTime = () => {
        const options = { weekday: 'long', timeStyle: 'short', month: 'long', day: 'numeric' };
        return new Date().toLocaleString(undefined, options);
    };

    const [title, setTitle] = useState(getCurrentDateTime());
    const [editing, setEditing] = useState(false);

    const toggleEditing = () => {
        setEditing(!editing);
    };

    const handleTitleChange = (newTitle) => {
        setTitle(newTitle);
    };

    const getAbbreviatedTitle = () => {
        const maxLength = 20; // Maximum length of abbreviated title
        if (title.length > maxLength) {
            return title.substring(0, maxLength) + '...';
        }
        return title;
    };

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={toggleEditing}>
            <View style={styles.container}>
                {editing ? (
                    <TextInput
                        value={title}
                        onChangeText={handleTitleChange}
                        autoFocus
                        style={styles.textInput}
                    />
                ) : (
                    <Text style={styles.title}>{getAbbreviatedTitle()}</Text>
                )}
            </View>
        </TouchableOpacity>
    );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        width: width * 0.6,
        backgroundColor: 'white',
        padding: 3,
        marginBottom: 10,
        borderRadius: 3,
    },
    title: {
        color: 'black',
        fontSize: 25,
    },
    textInput: {
        color: 'black',
        fontSize: 25,
        padding: 5,
        width: '100%',
    },
});

export default TitleDisplay;
