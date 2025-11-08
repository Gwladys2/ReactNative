import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import HeaderStats from '../components/HeaderStats';

import { ScrollView } from 'react-native';



export default function LessonScreen({ navigation }) {
    

    return (
        <ScrollView contentContainerStyle={styles.container}>
            
            <HeaderStats />
           

       <View style={styles.linkContainer}>
                                <Text style={styles.link} onPress={() => navigation.navigate('GrandPedagogue')}> 🌼Freinet 1</Text>
                              <Text style={styles.link} onPress={() => navigation.navigate('GrandPedagogue2')}> 🌼Freinet 2</Text>
                              <Text style={styles.link} onPress={() => navigation.navigate('GrandPedagogue3')}> 🌼Montessori 1</Text>
                               <Text style={styles.link} onPress={() => navigation.navigate('GrandPedagogue4')}> 🌼Montessori 2</Text>
                                <Text style={styles.link} onPress={() => navigation.navigate('GrandPedagogue5')}> 🌼Neill</Text>
                                  <Text style={styles.link} onPress={() => navigation.navigate('CitationNeill')}>🌼Citations Neill</Text>
                                  <Text style={styles.link} onPress={() => navigation.navigate('CitationMontessori')}>🌼Citations Montessori</Text>
                                  <Text style={styles.link} onPress={() => navigation.navigate('CitationFreinet')}>🌼Citations Freinet</Text>
                                
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
               textDecorationLine: 'underline',
               marginHorizontal: 8, // ✅ espace horizontal entre les liens
               fontSize:20
           }
       });
       
       
       