// screens/LoadingScreen.js
import React, { useEffect, useContext } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { ProgressContext } from '../context/ProgressContext';

export default function LoadingScreen({ navigation }) {
    const { niveau, loading } = useContext(ProgressContext);

    useEffect(() => {
        if (!loading) {
            switch (niveau) {
                case 1:
                    navigation.replace('Lesson'); // Niveau 1
                    break;
                case 2:
                    navigation.replace('Niveau2');
                    break;
                case 3:
                    navigation.replace('Niveau3');
                    break;
                default:
                    navigation.replace('Home'); // par défaut
            }
        }
    }, [loading]);

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },
});
