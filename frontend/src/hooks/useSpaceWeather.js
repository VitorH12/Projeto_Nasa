// src/hooks/useSpaceWeather.js
'use client';
import { useState, useEffect } from 'react';
// Importa as funções do nosso novo serviço!
import { fetchGstData, fetchFlrData, fetchCmeData, fetchSunspotData } from '../services/spaceWeatherApi';

export function useSpaceWeather() {
    const [weatherData, setWeatherData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAllData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                // Busca tudo em paralelo usando as funções do serviço
                const [gst, flr, cme, sunspots] = await Promise.all([
                    fetchGstData(),
                    fetchFlrData(),
                    fetchCmeData(),
                    fetchSunspotData()
                ]);

                setWeatherData({ gst, flr, cme, sunspots });

            } catch (err) {
                setError(err.message);
                console.error("Error fetching space weather data:", err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchAllData();
    }, []);

    return { weatherData, isLoading, error };
}