import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen2 = ({ navigation }) => {
  const niveaux = [
    { label: 'Le HTML niveau débutant', screen: 'HTML 1' },
    { label: 'Le HTML niveau avancé', screen: 'HTML 2' },
    { label: 'Le CSS niveau débutant', screen: 'CSS 1' },
    { label: 'Le CSS niveau avancé', screen: 'CSS 2' },
    { label: 'JAVASCRIPT niveau débutant', screen: 'JAVASCRIPT 1' },
    { label: 'JAVASCRIPT niveau avancé', screen: 'JAVASCRIPT 2' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HTML CSS JAVASCRIPT</Text>
      <Text >Sélectionne un niveau :</Text>
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
