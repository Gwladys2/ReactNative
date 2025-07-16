import React, { useContext, useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import questions from '../questions/serie4.json';
import { ProgressContext } from '../context/ProgressContext';
import HeaderStats from '../components/HeaderStats';



export default function LessonScreen({ navigation }) {
    const { xp, lives, updateProgress } = useContext(ProgressContext);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showRestart, setShowRestart] = useState(false);
    const [niveau, setNiveau]=useState(4);

    const handleAnswer = async (index) => {
        const current = questions[currentIndex];
        const explication = current.explication || current.explications || "Pas d'explication disponible.";

        if (index === current.answerIndex) {
            Alert.alert("Bonne réponse!", explication);
            const newXp = xp + 10;
            await updateProgress(newXp, lives,3); // Pas de changement de vie
            if (currentIndex + 1 < questions.length) {
                setCurrentIndex(currentIndex + 1);
            } else {
                setShowRestart(true);
                Alert.alert("Félicitations !", "Tu as terminé la leçon !");
            }
        } else {
            const newLives = Math.max(0, lives - 1);

            const newXp = newLives === 0 ? 0 : xp;

            await updateProgress(newXp, newLives);
            Alert.alert("Mauvaise réponse", newLives > 0 ? "Essaie encore !" : "Tu n'as plus de vies !");
            if (newLives === 0) {
                navigation.navigate('Home');
            }

        }
    };

    const restartQuiz = () => {
        setCurrentIndex(0);
        setShowRestart(false);
    };

    const current = questions[currentIndex];


    const handleRestart = async () => {
        await updateProgress(0, 5);
        navigation.navigate('HomeScreen2');
    };

    return (
        <View style={styles.container}>
            <HeaderStats />
            {!showRestart ? (
                <>
                    <Text style={styles.question}>Le CSS niveau avancé </Text>

                    <Text style={styles.question}>{current.question}</Text>
                    {current.options.map((option, i) => (
                        <Button key={i} title={option} onPress={() => handleAnswer(i)} />
                    ))}
                     <Button
                                            title="Retour à la sélection des niveaux"
                                            onPress={() => navigation.navigate('HomeScreen2')}
                                            color="#ff4444"
                                        />
                </>
            ) : (
                <>
                    <Text style={styles.question}>Leçon terminée 🎉</Text>
                    <Button title="revenir au niveau 3" onPress={() => navigation.navigate('Niveau3')} />
                    <Button title="passer au niveau 5" onPress={() => navigation.navigate('Niveau5')} />
                    <Button title="Recommencer à  0" onPress={handleRestart} color="#ff4444" />
                </>
            )}

        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, justifyContent: 'center' },
    question: { fontSize: 20, marginBottom: 20, fontWeight: 'bold' }
});
