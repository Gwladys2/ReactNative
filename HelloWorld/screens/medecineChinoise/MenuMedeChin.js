import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';




const HomeScreen2 = ({ navigation }) => {
  const niveaux = [
    { label: 'Théorie fondamentale', screen: 'Qi' },
    { label: "Les méridiens", screen: 'PointAcup' },
    { label: "Le diagnostique chinois", screen: 'PhiloEducation' },
    { label: "La diététique chinoise", screen: 'LettresArts' },
    { label: "Les procédés acupuncturaux", screen: 'AnalyseArts' },
    { label: "Le TuiNa", screen: 'HistoireMusique' },
    { label: "Sémiologie et traitements MTC", screen: 'MetierEtudiant1' }
  ];

  return (
    <View style={styles.container}>
     
    
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
     
    </View>
  );
};

export default HomeScreen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#82b1eeff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
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
    backgroundColor: '#af4c98ff',
    alignItems: 'center',
  },
  buttonText: {
    color: '#efe3e8ff',
    fontSize: 18,
  },
});
