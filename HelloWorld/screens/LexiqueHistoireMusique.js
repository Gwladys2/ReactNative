import React, { useContext, useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import questions from '../questions/HistoireMusique/lexique.json';
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
            Alert.alert("Mauvaise réponse", newLives > 0 ? "Essaie encore !" : "Tu n'as plus de vies ! Je te conseille de relirele le cours ☝️ et de revenir tenter ta chance😊");
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
                    
                    <Text style={styles.titre}>Histoire de la Musique: Le lexique</Text>

                    <Text style={styles.question}>{current.question}</Text>
                    {current.options.map((option, i) => (
                        <Button key={i} title={option} onPress={() => handleAnswer(i)} />
                    ))}
                     
                </>
            ) : (
                <>
                    <Text style={styles.question}>Leçon terminée 🎉</Text>
                    <Button title="revenir à la liste des UE" onPress={() => navigation.navigate('ScienceEducation')} />
                    
                </>
            )}

       <View style={styles.linkContainer}>
                            <Text style={styles.link} onPress={() => navigation.navigate('HistoireMusique')}>✨l’aube de l’âge de la musique classique au XVIIIe siècle</Text>
                                                          <Text style={styles.link} onPress={() => navigation.navigate('HistoireMusique2')}>✨l’aube de l’âge de la musique classique au XVIIIe siècle Partie 2</Text>
                                                            <Text style={styles.link} onPress={() => navigation.navigate('LexiqueHistoireMusique')}>✨Le lexique </Text>
                                                          <Text style={styles.link} onPress={() => navigation.navigate('HistoireMusique3')}>✨Johann Stamitz et sa Symphonie en la majeur</Text>
                                                            <Text style={styles.link} onPress={() => navigation.navigate('HistoireMusique4')}>✨Joseph Haydn Symphonie n°87 en La majeur </Text>
                                                            <Text style={styles.link} onPress={() => navigation.navigate('HistoireMusique5')}>✨Joseph Haydn Symphonie n°8 en sol majeur « Le Soir » </Text>
                                                           <Text style={styles.link} onPress={() => navigation.navigate('HistoireMusique6')}>✨Joseph Haydn Symphonie n°9 en fa mineur « La Passion » </Text>
                                                           <Text style={styles.link} onPress={() => navigation.navigate('HistoireMusique7')}>✨Mozart Symphonie n°25 en sol mineur K.183 </Text>
                                                            <Text style={styles.link} onPress={() => navigation.navigate('HistoireMusique8')}>✨Mozart Symphonie n°35 K.385 Haffner Premier mouvement</Text>
                                                            <Text style={styles.link} onPress={() => navigation.navigate('HistoireMusique9')}>✨Mozart Symphonie n°39 K.543 mi bémol majeur</Text>
                                                             <Text style={styles.link} onPress={() => navigation.navigate('HistoireMusique10')}>✨Mozart Symphonie n°40 K.550 en sol mineur K.183 </Text>
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
    question: { fontSize: 20, marginBottom: 20, fontWeight: 'bold' },
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
        textDecorationLine: 'none',
        marginHorizontal: 8,
        fontSize:20
    }
});
