// app/simulador/page.tsx
'use client';

import React, { useState } from 'react';
import Navbar from '../../../components/Navbar';
import StormSelector from '../../../components/StormSelector'; // Criaremos a seguir
import styles from './simulador.module.css'; // O CSS que criaremos
import PersonaImpacts from '../../../components/personaImpacts'; // Criaremos a seguir
export default function SimuladorPage() {
    // O estado 'stormLevel' guardará o nível da tempestade, de 1 (fraca) a 5 (extrema)
    const [stormLevel, setStormLevel] = useState(1);

    return (
        <>
            <Navbar />
            <main className={styles.simuladorContainer}>
                <header className={styles.header}>
                    <h1>Simulador de Impacto do Clima Espacial</h1>
                    <p>
                        Arraste o seletor para ver como diferentes níveis de tempestade geomagnética
                        (escala G1 a G5) afetam nosso mundo.
                    </p>
                </header>

                <StormSelector
                    currentLevel={stormLevel}
                    onLevelChange={setStormLevel}
                />

                <PersonaImpacts
                    stormLevel={stormLevel}
                />
            </main>
        </>
    );
}