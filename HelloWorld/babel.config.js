module.exports = function(api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            // Tu peux ajouter d'autres plugins ici si besoin
            'react-native-reanimated/plugin', // Ce plugin doit être le dernier de la liste
        ],
    };
};