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
import GrandPedagogue6 from './screens/GrandPedagogue6';
import GrandPedagogue7 from './screens/GrandPedagogue7';
import GrandPedagogue8 from './screens/GrandPedagogue8';
import GrandPedagogue9 from './screens/GrandPedagogue9';
import GrandPedagogue10 from './screens/GrandPedagogue10';
import GrandPedagogue11 from './screens/GrandPedagogue11';
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
import LettresArts5 from './screens/LettresArts5';
import LettresArts6 from './screens/LettresArts6';
import LettresArts7 from './screens/LettresArts7';
import LettresArts8 from './screens/LettresArts8';
import LettresArts9 from './screens/LettresArts9';
import LettresArts10 from './screens/LettresArts10';
import LettresArts11 from './screens/LettresArts11';



import PsychoEducation2 from './screens/PsychoEducation2';
import PsychoEducation3 from './screens/PsychoEducation3';
import PsychoEducation4 from './screens/PsychoEducation4';
import PsychoEducation5 from './screens/PsychoEducation5';
import PsychoEducation6 from './screens/PsychoEducation6';
import PsychoEducation7 from './screens/PsychoEducation7';
import PsychoEducation8 from './screens/PsychoEducation8';
import PsychoEducation9 from './screens/PsychoEducation9';
import Architecture from './screens/Architecture';
import { ProgressProvider } from './context/ProgressContext';
import Accueil from './screens/HomeScreen2';
import CitationNeill from './screens/CitationNeill';
import CitationMontessori from './screens/CitationMontessori';
import CitationFreinet from './screens/CitationFreinet';
import CoursFreinet1 from './screens/CoursFreinet1';
import CoursFreinet2 from './screens/CoursFreinet2';
import CoursMontessori1 from './screens/CoursMontessori1';
import CoursMontessori2 from './screens/CoursMontessori2';
import CoursNeill from './screens/CoursNeill';
import CoursPhiloEducation from './screens/CoursPhiloEducation';
import CoursPhiloEducation2 from './screens/CoursPhiloEducation2';
import CoursPsychoEducation from './screens/CoursPsychoEducation';
import CoursPsychoEducation2 from './screens/CoursPsychoEducation2';
import CoursPsychoEducation3 from './screens/CoursPsychoEducation3';
import CoursPsychoEducation4 from './screens/CoursPsychoEducation4';
import AnalyseArts from './screens/AnalyseArts';
import AnalyseArts2 from './screens/AnalyseArts2';
import AnalyseArts3 from './screens/AnalyseArts3';
import AnalyseArts4 from './screens/AnalyseArts4';
import AnalyseArts5 from './screens/AnalyseArts5';
import AnalyseArts6 from './screens/AnalyseArts6';
import QuiAditQuoi from './screens/QuiAditQuoi';
import HistoireMusique from './screens/HistoireMusique';
import HistoireMusique2 from './screens/HistoireMusique2';
import HistoireMusique3 from './screens/HistoireMusique3';
import HistoireMusique4 from './screens/HistoireMusique4';
import HistoireMusique5 from './screens/HistoireMusique5';
import HistoireMusique6 from './screens/HistoireMusique6';
import HistoireMusique7 from './screens/HistoireMusique7';
import HistoireMusique8 from './screens/HistoireMusique8';
import HistoireMusique9 from './screens/HistoireMusique9';
import HistoireMusique10 from './screens/HistoireMusique10';
import HistoireMusique11 from './screens/HistoireMusique11';
import HistoireMusique12 from './screens/HistoireMusique12';
import HistoireMusique13 from './screens/HistoireMusique13';
import LexiqueHistoireMusique from './screens/LexiqueHistoireMusique';
import MetierEtudiant1 from './screens/MetierEtudiant1';
import MetierEtudiant2 from './screens/MetierEtudiant2';
import MetierEtudiant3 from './screens/MetierEtudiant3';
import MetierEtudiant4 from './screens/MetierEtudiant4';
import MetierEtudiant5 from './screens/MetierEtudiant5';
import MetierEtudiant6 from './screens/MetierEtudiant6';
import MetierEtudiant7 from './screens/MetierEtudiant7';
import Footer from './components/Footer'; // ton composant Footer



import MenuMedeChin from './screens/medecineChinoise/MenuMedeChin';
import Qi from './screens/medecineChinoise/MTC1/Qi';
import Elements from './screens/medecineChinoise/MTC1/5Elements';
import OrganesEntrailles from './screens/medecineChinoise/MTC1/OrganesEntrailles';
import SangLO from './screens/medecineChinoise/MTC1/SangLO';
import YinYang from './screens/medecineChinoise/MTC1/YinYang';

import PointAcup from './screens/medecineChinoise/MTC2/PointAcupuncture';
import MeridiensOrdin from './screens/medecineChinoise/MTC2/MeridiensOrdin';
import PointSpeciaux from './screens/medecineChinoise/MTC2/PointSpeciaux';
import RenMaiDuMai from './screens/medecineChinoise/MTC2/RenMaiDuMai';

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
               <Stack.Screen name="GrandPedagogue6" component={GrandPedagogue6} />
                <Stack.Screen name="GrandPedagogue7" component={GrandPedagogue7} />
                 <Stack.Screen name="GrandPedagogue8" component={GrandPedagogue8} />
                  <Stack.Screen name="GrandPedagogue9" component={GrandPedagogue9} />
                   <Stack.Screen name="GrandPedagogue10" component={GrandPedagogue10} />
                    <Stack.Screen name="GrandPedagogue11" component={GrandPedagogue11} />
              <Stack.Screen name="PsychoEducation" component={PsychoEducation} />
              <Stack.Screen name="PsychoEducation2" component={PsychoEducation2} />
              <Stack.Screen name="PsychoEducation3" component={PsychoEducation3} />
              <Stack.Screen name="PsychoEducation4" component={PsychoEducation4} />
              <Stack.Screen name="PsychoEducation5" component={PsychoEducation5} />
              <Stack.Screen name="PsychoEducation6" component={PsychoEducation6} />
              <Stack.Screen name="PsychoEducation7" component={PsychoEducation7} />
              <Stack.Screen name="PsychoEducation8" component={PsychoEducation8} />
              <Stack.Screen name="PsychoEducation9" component={PsychoEducation9} />
              <Stack.Screen name="PhiloEducation" component={PhiloEducation} />
              <Stack.Screen name="PhiloEducation2" component={PhiloEducation2} />

              <Stack.Screen name="LettresArts" component={LettresArts} />
              <Stack.Screen name="LettresArts2" component={LettresArts2} />
              <Stack.Screen name="LettresArts3" component={LettresArts3} />
              <Stack.Screen name="LettresArts4" component={LettresArts4} />
              <Stack.Screen name="LettresArts5" component={LettresArts5} />
              <Stack.Screen name="LettresArts6" component={LettresArts6} />
              <Stack.Screen name="LettresArts7" component={LettresArts7} />
              <Stack.Screen name="LettresArts8" component={LettresArts8} />
              <Stack.Screen name="LettresArts9" component={LettresArts9} />
              <Stack.Screen name="LettresArts10" component={LettresArts10} />
              <Stack.Screen name="LettresArts11" component={LettresArts11} />

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
              <Stack.Screen name="CitationFreinet" component={CitationFreinet} />
              <Stack.Screen name="CoursFreinet1" component={CoursFreinet1} />
                <Stack.Screen name="CoursFreinet2" component={CoursFreinet2} />
                <Stack.Screen name="CoursMontessori1" component={CoursMontessori1} />
                <Stack.Screen name="CoursMontessori2" component={CoursMontessori2} />
                <Stack.Screen name="CoursNeill" component={CoursNeill} />
                <Stack.Screen name="CoursPhiloEducation" component={CoursPhiloEducation} />
                <Stack.Screen name="CoursPhiloEducation2" component={CoursPhiloEducation2} />
                <Stack.Screen name="CoursPsychoEducation" component={CoursPsychoEducation} />
                <Stack.Screen name="CoursPsychoEducation2" component={CoursPsychoEducation2} />
                <Stack.Screen name="CoursPsychoEducation3" component={CoursPsychoEducation3} />
                <Stack.Screen name="CoursPsychoEducation4" component={CoursPsychoEducation4} />
                <Stack.Screen name="QuiAditQuoi" component={QuiAditQuoi} />
                <Stack.Screen name="AnalyseArts" component={AnalyseArts} />
                <Stack.Screen name="AnalyseArts2" component={AnalyseArts2} />
                <Stack.Screen name="AnalyseArts3" component={AnalyseArts3} />
                <Stack.Screen name="AnalyseArts4" component={AnalyseArts4} />
                <Stack.Screen name="AnalyseArts5" component={AnalyseArts5} />
                <Stack.Screen name="AnalyseArts6" component={AnalyseArts6} />
                 <Stack.Screen name="HistoireMusique" component={HistoireMusique} />
                 <Stack.Screen name="HistoireMusique2" component={HistoireMusique2} />
                 <Stack.Screen name="HistoireMusique3" component={HistoireMusique3} />
                 <Stack.Screen name="HistoireMusique4" component={HistoireMusique4} />
                 <Stack.Screen name="HistoireMusique5" component={HistoireMusique5} />
                 <Stack.Screen name="HistoireMusique6" component={HistoireMusique6} />
                 <Stack.Screen name="HistoireMusique7" component={HistoireMusique7} />
                 <Stack.Screen name="HistoireMusique8" component={HistoireMusique8} />
                 <Stack.Screen name="HistoireMusique9" component={HistoireMusique9} />
                 <Stack.Screen name="HistoireMusique10" component={HistoireMusique10} />
                 <Stack.Screen name="HistoireMusique11" component={HistoireMusique11} />
                  <Stack.Screen name="HistoireMusique12" component={HistoireMusique12} />
                   <Stack.Screen name="HistoireMusique13" component={HistoireMusique13} />
                 <Stack.Screen name="LexiqueHistoireMusique" component={LexiqueHistoireMusique} />
                 <Stack.Screen name="MetierEtudiant1" component={MetierEtudiant1} />
                 <Stack.Screen name="MetierEtudiant2" component={MetierEtudiant2} />
                 <Stack.Screen name="MetierEtudiant3" component={MetierEtudiant3} />
                 <Stack.Screen name="MetierEtudiant4" component={MetierEtudiant4} />
                 <Stack.Screen name="MetierEtudiant5" component={MetierEtudiant5} />
                 <Stack.Screen name="MetierEtudiant6" component={MetierEtudiant6} />
                 <Stack.Screen name="MetierEtudiant7" component={MetierEtudiant7} />

                 <Stack.Screen name="Qi" component={Qi} />
                 <Stack.Screen name="MenuMedeChin" component={MenuMedeChin} />
                 <Stack.Screen name="Elements" component={Elements} />
                 <Stack.Screen name="OrganesEntrailles" component={OrganesEntrailles} />
                 <Stack.Screen name="SangLO" component={SangLO} />
                 <Stack.Screen name="YinYang" component={YinYang} />

                 <Stack.Screen name="PointAcup" component={PointAcup} />
                 <Stack.Screen name="MeridiensOrdin" component={ MeridiensOrdin} />
                 <Stack.Screen name="PointSpeciaux" component={PointSpeciaux} />
                 <Stack.Screen name="RenMaiDuMai" component={RenMaiDuMai} />
               



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
