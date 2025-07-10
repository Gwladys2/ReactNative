import AsyncStorage from '@react-native-async-storage/async-storage';

export const loadProgress = async () => {
    try {
        const xp = await AsyncStorage.getItem('xp');
        const lives = await AsyncStorage.getItem('lives');
        const niveau = await AsyncStorage.getItem('niveau');
        return {
            xp: xp !== null ? parseInt(xp, 10) : 0,
            lives: lives !== null ? parseInt(lives, 10) : 5,
            niveau: niveau !== null ? parseInt(niveau, 10) : 1,
        };
    } catch (error) {
        console.error('Erreur lors du chargement de la progression :', error);
        return { xp: 0, lives: 5, niveau:1 };
    }
};

export const saveProgress = async (xp, lives, niveau) => {
    try {
        await AsyncStorage.setItem('xp', xp.toString());
        await AsyncStorage.setItem('lives', lives.toString());
        await AsyncStorage.setItem('niveau', niveau.toString());
    } catch (error) {
        console.error('Erreur lors de la sauvegarde de la progression :', error);
    }
};
