import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SystResMenu = ({ navigation }) => {
  const niveaux = [
    { label: 'Les Systèmes', screen: 'Systemes' },
    { label: 'Les Réseaux', screen: 'Reseaux' },
    { label: 'Systèmes et Réseaux', screen: 'SystReseaux' },
    
    
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Systèmes et réseaux</Text>
      <Text >Sélectionnez un sujet :</Text>
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

export default SystResMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
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
