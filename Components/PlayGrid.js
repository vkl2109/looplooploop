import React from 'react';
import { View, StyleSheet } from 'react-native';
import BarBlock from './BarBlock';

const PlayGrid = ({ loopArray }) => {
    return (
        <View style={styles.gridContainer}>
            {loopArray.map((bar, index) => (
                <BarBlock bar={bar} index={index} key={index} />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    gridContainer: {
        width: '90%',
        aspectRatio: 1/1,
        borderWidth: 1,
        borderColor: 'grey',
        alignSelf: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
});

export default PlayGrid;