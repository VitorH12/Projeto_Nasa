// components/AuroraMap.js
'use client';
import Image from 'next/image';
import styles from './AuroraMap.module.css';

// Esta função calcula o tamanho e posição do "oval" da aurora
const getOvalStyle = (kp) => {
    if (kp <= 1) return { height: '15%', top: '0%', opacity: 0.5 };
    if (kp === 2) return { height: '20%', top: '5%', opacity: 0.6 };
    if (kp === 3) return { height: '25%', top: '8%', opacity: 0.7 };
    if (kp === 4) return { height: '30%', top: '10%', opacity: 0.8 };
    if (kp === 5) return { height: '40%', top: '12%', opacity: 0.9 };
    if (kp === 6) return { height: '45%', top: '15%', opacity: 1 };
    if (kp === 7) return { height: '55%', top: '18%', opacity: 1 };
    if (kp >= 8) return { height: '65%', top: '20%', opacity: 1 };
    return { height: '10%', top: '0%', opacity: 0.4 };
};

export default function AuroraMap({ kpValue }) {
    const ovalStyle = getOvalStyle(kpValue);

    return (
        <div className={styles.mapContainer}>
            <Image
                src="/world-dark.png" // Você precisa de uma imagem de mapa escura em /public
                alt="Mapa do Mundo"
                layout="fill"
                objectFit="contain"
            />
            <div className={styles.auroraOval} style={ovalStyle}></div>
            <p className={styles.mapLabel}>Visibilidade Estimada da Aurora</p>
        </div>
    );
}