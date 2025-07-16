// screens/HomeScreen.js
import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ProgressContext } from '../context/ProgressContext';
import HeaderStats from '../components/HeaderStats';

export default function HomeScreen({ navigation }) {
    const { xp, lives, updateProgress, loading, livesEarnedFromXp } = useContext(ProgressContext);

    const  recommencer=()=>{
         updateProgress(0, 5, 1, true);

    }

    const handleLessonStart = () => {
        navigation.navigate('HomeScreen2');
    };

    const handleRestart = async () => {
        await updateProgress(0, 5, 1, true);
        navigation.navigate('HomeScreen2');
    };

    if (loading) {
        return (
            <View style={styles.container}>
                <Text>Chargement...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <HeaderStats />
            <Text style={styles.title}>Bienvenue sur Glad Dev</Text>
            <Button title="commencer la leçon" onPress={handleLessonStart} color="#ff4444" disabled={lives === 0}/>

            {lives === 0 && (
                <Button title="Recommencer (restaurer les vies)" onPress={handleRestart} color="#ff4444" />
            )
            }
            {xp> 0 && (
                <Button title="Recommencer" onPress={recommencer} color="#ff4444" />
            )
            }
        

        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
    stat: { fontSize: 18, marginBottom: 10 }
});
