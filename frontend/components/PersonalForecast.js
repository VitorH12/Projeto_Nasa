// components/PersonalForecast.js
'use client';
import { useState } from 'react';
import styles from './PersonalForecast.module.css';

const getPersonalForecast = (lat, kp) => {
    if (kp < 4) return "A atividade está muito baixa. É muito improvável ver a aurora da sua localização.";
    if (lat < 40) return `Com Kp=${kp}, as auroras provavelmente não serão visíveis em sua latitude (${lat.toFixed(1)}°). Elas ficam mais ao norte.`;
    if (kp >= 7 && lat > 45) return `COM KP=${kp} E SUA LATITUDE DE ${lat.toFixed(1)}°, HÁ UMA ALTA CHANCE! Procure um local escuro e olhe para o norte!`;
    if (kp >= 5 && lat > 50) return `Kp=${kp} em sua latitude de ${lat.toFixed(1)}° significa uma boa chance! Fique de olho no horizonte norte.`;
    return `Com Kp=${kp}, a chance é pequena, mas não impossível em sua latitude (${lat.toFixed(1)}°). Requer condições perfeitas.`;
};

export default function PersonalForecast({ kpValue }) {
    const [location, setLocation] = useState(null);
    const [message, setMessage] = useState('');
    const [isLocating, setIsLocating] = useState(false);

    const handleLocationClick = () => {
        setIsLocating(true);
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                setLocation({ lat });
                const forecastMessage = getPersonalForecast(lat, kpValue);
                setMessage(forecastMessage);
                setIsLocating(false);
            },
            (error) => {
                setMessage("Não foi possível obter sua localização. Por favor, habilite a permissão no seu navegador.");
                setIsLocating(false);
            }
        );
    };

    return (
        <div className={styles.forecastContainer}>
            <h2>Qual minha chance de ver a Aurora?</h2>
            <button onClick={handleLocationClick} disabled={isLocating}>
                {isLocating ? 'Obtendo localização...' : 'Usar Minha Localização'}
            </button>
            {message && <p className={styles.forecastMessage}>{message}</p>}
        </div>
    );
}