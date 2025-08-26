import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Footer() {
  const navigation = useNavigation();
  return (
    <View style={styles.footer}>
        <Button
            title="Accueil 🏚️"
            onPress={() => navigation.navigate('Menu')}
            color="#131313ff"
           
            />
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    
    height:100,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'flex-start', // place en haut du footer
    paddingTop: 10,  
  },
  text: {
    color: '#333'
  }
});




