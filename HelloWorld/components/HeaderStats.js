import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ProgressContext } from '../context/ProgressContext';

export default function HeaderStats() {
    const { xp, lives } = useContext(ProgressContext);

    return (
        <View style={styles.container}>
            <Text style={styles.stat}>❤️ Vies : {lives}</Text>
            <Text style={styles.stat}>⭐ XP : {xp}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f3f3f3',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    stat: {
        fontSize: 16,
        fontWeight: 'bold'
    }
});