import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';




const HomeScreen2 = ({ navigation }) => {
  const niveaux = [
    { label: 'Les Grands Pédagogues', screen: 'GrandPedagogue' },
    { label: "Psychologie du développement et de l'éducation", screen: 'PsychoEducation' },
    { label: "Philosophie de l'éducation", screen: 'PhiloEducation' },
    { label: "Lettres et Arts", screen: 'LettresArts' }
   
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
    backgroundColor: '#fff',
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
    backgroundColor: '#4CAF50',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
