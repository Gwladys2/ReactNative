import React, { useContext, useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import questions from '../../questions/LettresArts2/AnalyseArt2/serie1.json';
import { ProgressContext } from '../../context/ProgressContext';
import HeaderStats from '../../components/HeaderStats';
import Logo from '../Logo';
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
                    
                    <Text style={styles.titre}>Analyse des arts partie 2:  L’Humanisme et l’esthétique de l’idéal classique</Text>

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
                                 <Text style={styles.link} onPress={() => navigation.navigate('AnalyseArt2Part')}> L’Humanisme et l’esthétique de l’idéal classique </Text>
                                 <Text style={styles.link} onPress={() => navigation.navigate('LettresArts2Part2')}></Text>
                                <Text style={styles.link} onPress={() => navigation.navigate('GrandPedagogue3')}></Text>
                                 <Text style={styles.link} onPress={() => navigation.navigate('GrandPedagogue4')}></Text>
                               <Text style={styles.link} onPress={() => navigation.navigate('GrandPedagogue5')}></Text>
                                <Text style={styles.link} onPress={() => navigation.navigate('GrandPedagogue6')}></Text>
                                                                                          
                               </View>
       
               
                             </ScrollView>
           );
       }
       const styles = StyleSheet.create({
           container: { 
               flexGrow: 1, 
               padding: 20, 
               justifyContent: 'flex-start' 
           },
           question: { 
               fontSize: 20, 
               marginBottom: 20, 
               fontWeight: 'bold' 
           },
           titre: { 
               textAlign: 'center', 
               fontSize: 20, 
               marginBottom: 20, 
               fontWeight: 'bold', 
               marginTop: 10 
           },
           linkContainer: {
               flexDirection: 'row',        // ✅ aligne les liens horizontalement
               justifyContent: 'center',    // ✅ centre la ligne de liens
               flexWrap: 'wrap',            // ✅ permet le retour à la ligne si trop long
               marginTop: 20
           },
           link: {
               fontSize: 16,
               color: '#007BFF',
               textDecorationLine: 'none',
               marginHorizontal: 8, // ✅ espace horizontal entre les liens
               fontSize:20
           }
       });
       
       
       