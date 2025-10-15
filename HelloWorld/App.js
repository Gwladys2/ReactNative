import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import ScienceEducation from './screens/ScienceEducation';
import GrandPedagogue from './screens/GrandPedagogue';
import GrandPedagogue2 from './screens/GrandPedagogue2';
import GrandPedagogue3 from './screens/GrandPedagogue3';
import GrandPedagogue4 from './screens/GrandPedagogue4';
import GrandPedagogue5 from './screens/GrandPedagogue5';
import LessonScreen from './screens/LessonScreen';
import Niveau2 from './screens/Niveau2';
import Niveau3 from './screens/Niveau3';
import Niveau4 from './screens/Niveau4';
import Niveau5 from './screens/Niveau5';
import Niveau6 from './screens/Niveau6';
import Menu from './screens/Menu';
import LoadingScreen from "./screens/LoadingScreen";
import Reseaux from './screens/Reseaux';
import SystReseaux from './screens/SystReseaux';
import Systemes from './screens/Systemes';
import SystResMenu from './screens/SystResMenu';
import PsychoEducation from './screens/PsychoEducation';
import PhiloEducation from './screens/PhiloEducation';
import PhiloEducation2 from './screens/PhiloEducation2';
import LettresArts from './screens/LettresArts';
import LettresArts2 from './screens/LettresArts2';
import LettresArts3 from './screens/LettresArts3';
import LettresArts4 from './screens/LettresArts4';
import PsychoEducation2 from './screens/PsychoEducation2';
import PsychoEducation3 from './screens/PsychoEducation3';
import PsychoEducation4 from './screens/PsychoEducation4';
import Architecture from './screens/Architecture';
import { ProgressProvider } from './context/ProgressContext';
import Accueil from './screens/HomeScreen2';
import CitationNeill from './screens/CitationNeill';
import CitationMontessori from './screens/CitationMontessori';



import Footer from './components/Footer'; // ton composant Footer

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ProgressProvider>
      <NavigationContainer>
        {/* Layout global */}
        <View style={styles.container}>

          {/* Navigation = contenu principal */}
          <View style={styles.content}>
            <Stack.Navigator initialRouteName="Menu">
              <Stack.Screen name="Loading" component={LoadingScreen} options={{ headerShown: false }} />
              <Stack.Screen name="ScienceEducation" component={ScienceEducation} />
              <Stack.Screen name="GrandPedagogue" component={GrandPedagogue} />
              <Stack.Screen name="GrandPedagogue2" component={GrandPedagogue2} />
              <Stack.Screen name="GrandPedagogue3" component={GrandPedagogue3} />
              <Stack.Screen name="GrandPedagogue4" component={GrandPedagogue4} />
              <Stack.Screen name="GrandPedagogue5" component={GrandPedagogue5} />
              <Stack.Screen name="PsychoEducation" component={PsychoEducation} />
              <Stack.Screen name="PsychoEducation2" component={PsychoEducation2} />
              <Stack.Screen name="PsychoEducation3" component={PsychoEducation3} />
              <Stack.Screen name="PsychoEducation4" component={PsychoEducation4} />
              <Stack.Screen name="PhiloEducation" component={PhiloEducation} />
              <Stack.Screen name="PhiloEducation2" component={PhiloEducation2} />
              <Stack.Screen name="LettresArts" component={LettresArts} />
              <Stack.Screen name="LettresArts2" component={LettresArts2} />
              <Stack.Screen name="LettresArts3" component={LettresArts3} />
              <Stack.Screen name="LettresArts4" component={LettresArts4} />
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="HTML 1" component={LessonScreen} />
              <Stack.Screen name="Accueil" component={Accueil} />
              <Stack.Screen name="HTML 2" component={Niveau2} />
              <Stack.Screen name="CSS 1" component={Niveau3} />
              <Stack.Screen name="CSS 2" component={Niveau4} />
              <Stack.Screen name="JAVASCRIPT 1" component={Niveau5} />
              <Stack.Screen name="JAVASCRIPT 2" component={Niveau6} />
              <Stack.Screen name="Menu" component={Menu} />
              <Stack.Screen name="Systemes" component={Systemes} />
              <Stack.Screen name="SystResMenu" component={SystResMenu} />
              <Stack.Screen name="Reseaux" component={Reseaux} />
              <Stack.Screen name="SystReseaux" component={SystReseaux} />
              <Stack.Screen name="Architecture" component={Architecture} />
              <Stack.Screen name="CitationNeill" component={CitationNeill} />
              <Stack.Screen name="CitationMontessori" component={CitationMontessori} />

            
            </Stack.Navigator>
          </View>

          {/* Footer global et fixe */}
          <Footer />
        </View>
      </NavigationContainer>
    </ProgressProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1, // occupe tout l’espace sauf le footer
  },
});
