import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Vie({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Vous avez perdu Veuillez recommencer...</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, justifyContent: 'center' },
    title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 }
});