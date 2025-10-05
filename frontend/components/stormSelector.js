// components/StormSelector.js
'use client';
import styles from '../app/simulador/simulador.module.css'; // Importa o CSS

const stormLabels = ["G1 (Fraca)", "G2 (Moderada)", "G3 (Forte)", "G4 (Severa)", "G5 (Extrema)"];

export default function StormSelector({ currentLevel, onLevelChange }) {
    // Cria a classe de cor dinâmica (ex: 'g1', 'g2')
    const stormClass = `g${currentLevel}`;

    return (
        <div className={styles.stormSelector}>
            <input
                type="range"
                min="1"
                max="5"
                value={currentLevel}
                onChange={(e) => onLevelChange(Number(e.target.value))}
                className={styles.slider}
            />
            {/* Aplica a classe de cor ao label */}
            <div className={`${styles.stormLabel} ${styles[stormClass]}`}>
                {stormLabels[currentLevel - 1]}
            </div>
        </div>
    );
}