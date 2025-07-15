// context/ProgressContext.js
import React, { createContext, useEffect, useState } from 'react';
import { loadProgress, saveProgress } from '../utils/progress';

export const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
    const [xp, setXp] = useState(0);
    const [lives, setLives] = useState(5);
    const [loading, setLoading] = useState(true);
    const [niveau, setNiveau] = useState(1);
    const [livesEarnedFromXp, setLivesEarnedFromXp] = useState(0); 

    useEffect(() => {
        const fetchProgress = async () => {
            const data = await loadProgress();
            setXp(data.xp);
            setLives(data.lives);
            setNiveau(data.niveau || 1);
            setLivesEarnedFromXp(data.livesEarnedFromXp || 0);
            setLoading(false);
        };
        fetchProgress();
    }, []);

    const updateProgress = async (newXp, newLives, newNiveau = niveau, resetLivesEarned = false) => {
        const currentEarned = Math.floor(newXp / 100);
        let finalLives = newLives;
        let finalLivesEarned = 0;

        if (!resetLivesEarned) {
            const extraLives = currentEarned - livesEarnedFromXp;
            if (extraLives > 0) {
                finalLives += extraLives;
            }
            finalLivesEarned = currentEarned > livesEarnedFromXp ? currentEarned : livesEarnedFromXp;
        }

        setXp(newXp);
        setLives(finalLives);
        setNiveau(newNiveau);
        setLivesEarnedFromXp(finalLivesEarned);

        await saveProgress(newXp, finalLives, newNiveau, finalLivesEarned);
    };

    return (
        <ProgressContext.Provider value={{
            xp,
            lives,
            niveau,
            setNiveau,
            setXp,
            setLives,
            updateProgress,
            loading,
            livesEarnedFromXp
        }}>
            {children}
        </ProgressContext.Provider>
    );
};
