import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';

const HomeScreen2 = ({ navigation }) => {
  const niveaux = [
    { label: 'Les Grands Pédagogues', screen: 'GrandPedagogue' },
    { label: "Psychologie du développement et de l'éducation", screen: 'PsychoEducation' },
    { label: "Philosophie de l'éducation", screen: 'PhiloEducation' },
    { label: "Lettres et Arts", screen: 'LettresArts' },
    { label: "Analyse de l'Arts", screen: 'AnalyseArts' },
    { label: "Histoire de la musique", screen: 'HistoireMusique' },
    { label: "Métier de l'étudiant", screen: 'MetierEtudiant1' },
    { label: "Faire face aux inégalités", screen: 'inegalite' }
  ];

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>Choisis ta matière :</Text>

      {niveaux.map(({ label, screen }) => (
        <TouchableOpacity
          key={label}
          style={styles.button}
          onPress={() => navigation.navigate(screen)}
        >
          <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default HomeScreen2;


const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingBottom: 40, // important pour éviter le footer
  },
  title: {
    fontSize: 15,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  button: {
    width: '80%',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

