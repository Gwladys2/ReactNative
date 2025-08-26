import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>
        <Button
            title="Accueil 🏚️"
            onPress={() => navigation.navigate('Accueil')}
            color="#131313ff"
           
            />
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    height: 60,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#333'
  }
});




