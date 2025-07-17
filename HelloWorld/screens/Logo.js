import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import monLogo from '../assets/gladDevLogo.png'; // Corrigé ici

export default function Logo() {
  return (
    <View style={styles.container}>
      <Image source={monLogo} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain', // ou 'cover'
  },
});



