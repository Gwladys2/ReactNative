import React, { createContext, useEffect, useState } from 'react';
import { loadProgress, saveProgress } from '../utils/progress';


export const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
    const [xp, setXp] = useState(0);
    const [lives, setLives] = useState(5);
    const [loading, setLoading] = useState(true);
    const [niveau, setNiveau] = useState(1);

    useEffect(() => {
        const fetchProgress = async () => {
            const data = await loadProgress();
            setXp(data.xp);
            setLives(data.lives);
            setNiveau(data.niveau || 1);
            setLoading(false);
        };
        fetchProgress();
    }, []);

    const updateProgress = async (newXp, newLives, newNiveau = niveau) => {
        setXp(newXp);
        setLives(newLives);
        setNiveau(newNiveau);
        await saveProgress(newXp, newLives, newNiveau);
    };

    return (
        <ProgressContext.Provider value={{ xp, lives, niveau, setNiveau, setXp, setLives, updateProgress, loading }}>
            {children}
        </ProgressContext.Provider>
    );
};