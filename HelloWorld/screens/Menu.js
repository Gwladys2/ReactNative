import React, { useContext, useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import Logo from '../screens/Logo';



export default function MonAccueil({ navigation }) {
    

    return (
        <View style={styles.container}>
            <Logo/>
            <Text style ={styles.titre}>Choisissez le sujet qui vous intéresse</Text>
             <Button
                    title="Langages de programmation"
                    onPress={() => navigation.navigate('Accueil')}
                    color="#ff4444"
                    />
             <Button
                    title="Systèmes et Réseaux"
                    onPress={() => navigation.navigate('SystResMenu')}
                    color="#8f44ffff" 
                    />  
                
             <Button
                    title="Architecture de l'ordinateur"
                    onPress={() => navigation.navigate('Architecture')}
                    color="#4498ffff"
                    />   
             <Button
                    title="Science de l'Education"
                    onPress={() => navigation.navigate('ScienceEducation')}
                    color="#04152bff"
                    /> 

                    <Button
                    title="Medecine chinoise"
                    onPress={() => navigation.navigate('MenuMedeChin')}
                    color="#a7bf20ff"
                    />      
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, justifyContent: 'flex-start' },
    question: { fontSize: 20, marginBottom: 20, fontWeight: 'bold'},
    titre:{textAlign: 'center', fontSize: 20, marginBottom: 20, fontWeight: 'bold', marginTop:10}
});
