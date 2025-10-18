import React, { useContext, useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import questions from '../questions/psychoDevApp/serie1.json';
import { ProgressContext } from '../context/ProgressContext';
import HeaderStats from '../components/HeaderStats';
import Logo from './Logo'; 
import { ScrollView } from 'react-native';



export default function LessonScreen({ navigation }) {
    const { xp, lives, updateProgress } = useContext(ProgressContext);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showRestart, setShowRestart] = useState(false);
    const [niveau, setNiveau]=useState(2);

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
            Alert.alert("Mauvaise réponse", newLives > 0 ? "Essaie encore !" : "Tu n'as plus de vies ! Je te conseille de relire le cours ☝️ et de revenir tenter ta chance😊");
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
         await updateProgress(0, 5, 1, true);
        navigation.navigate('Accueil');
    };



    return (
        <ScrollView contentContainerStyle={styles.container}>
            
            <HeaderStats />
            <Logo/>
            {!showRestart ? (
                <>
                <Text style={styles.link} onPress={() => navigation.navigate('CoursPsychoEducation')}>📖 Voir le cours</Text>
                    <Text style={styles.titre}>Psychologie du développement et de l'éducation: Repères historiques</Text>

                    <Text style={styles.question}>{current.question}</Text>
                    {current.options.map((option, i) => (
                        <Button key={i} title={option} onPress={() => handleAnswer(i)} />
                    ))}
                     
                </>
            ) : (
                <>
                    <Text style={styles.question}>Leçon terminée 🎉</Text>
                    <Button title="revenir à la liste des UE" onPress={() => navigation.navigate('ScienceEducation')} />
                    <Button title="passer aux premières sciences psychologiques" onPress={() => navigation.navigate('PsychoEducation2')} />
                </>
            )}
             <View style={styles.linkContainer}>
             <Text style={styles.link} onPress={() => navigation.navigate('PsychoEducation')}>Repères historiques</Text>
           <Text style={styles.link} onPress={() => navigation.navigate('PsychoEducation2')}>Les 1ères sciences psychologiques</Text>
            <Text style={styles.link} onPress={() => navigation.navigate('PsychoEducation3')}>La théorie freudienne part1</Text>
             <Text style={styles.link} onPress={() => navigation.navigate('PsychoEducation4')}>La théorie freudienne part2</Text>
            </View>

        </ScrollView>
    );
}

  const styles = StyleSheet.create({
    container: { 
        flexGrow: 1,             // ✅ permet à ScrollView de remplir tout l’espace disponible
        padding: 20, 
        justifyContent: 'flex-start' 
    },
    question: { fontSize: 18, marginBottom: 20, fontWeight: 'bold' },
    titre: { textAlign: 'center', fontSize: 20, marginBottom: 20, fontWeight: 'bold', marginTop: 10 
        
    },
    linkContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: 20
    },
    link: {
        fontSize: 16,
        color: '#007BFF',
        textDecorationLine: 'underline',
        marginHorizontal: 8,
        fontSize:18
    }
});
