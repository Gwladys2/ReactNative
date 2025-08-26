// screens/HomeScreen.js
import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ProgressContext } from '../context/ProgressContext';
import HeaderStats from '../components/HeaderStats';
import Logo from '../screens/Logo'; 

export default function HomeScreen({ navigation }) {
    const { xp, lives, updateProgress, loading, livesEarnedFromXp } = useContext(ProgressContext);

    const  recommencer=()=>{
         updateProgress(0, 5, 1, true);

    }

    const handleLessonStart = () => {
        navigation.navigate('Accueil');
    };

    const handleRestart = async () => {
        await updateProgress(0, 5, 1, true);
        navigation.navigate('Menu');
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
            <Logo />
            <Text style={styles.title}>Bienvenue !</Text>
            <Text style={styles.montexte}>On a toujours une chance de recommencer 🎉</Text>
            <Text>-------------------------------------------------</Text>
            <Text style={styles.montexte}>À chaque 100 XP gagnés, une nouvelle vie est ajoutée.</Text>

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
    container: { flex: 1,  justifyContent: 'flex-start', alignItems: 'center' },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
    stat: { fontSize: 18, marginBottom: 10 },
    montexte: { marginBottom: 20, marginTop:20, justifyContent:'center',}
});
