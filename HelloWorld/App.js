import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LessonScreen from './screens/LessonScreen';
import Niveau2 from './screens/Niveau2';
import Niveau3 from './screens/Niveau3';
import Niveau4 from './screens/Niveau4';
import Niveau5 from './screens/Niveau5';
import Niveau6 from './screens/Niveau6';
import LoadingScreen from "./screens/LoadingScreen";
import { ProgressProvider } from './context/ProgressContext';
import Accueil from './screens/HomeScreen2';



const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <ProgressProvider>
        <NavigationContainer>
            <Stack.Navigator id="rootStack" initialRouteName="Accueil">
                <Stack.Screen name="Loading" component={LoadingScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="HTML 1" component={LessonScreen} />
                <Stack.Screen name="Accueil" component={Accueil} />
                <Stack.Screen name="HTML 2" component={Niveau2} />
                <Stack.Screen name="CSS 1" component={Niveau3} />
                <Stack.Screen name="CSS 2" component={Niveau4} />
                <Stack.Screen name="JAVASCRIPT 1" component={Niveau5} />
                <Stack.Screen name="JAVASCRIPT 2" component={Niveau6} />
            </Stack.Navigator>
        </NavigationContainer>
        </ProgressProvider>
    );
}