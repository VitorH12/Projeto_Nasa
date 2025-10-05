// app/laboratorio/tour-solar/page.tsx
'use client';

import React, { useState, useEffect, useRef, useCallback} from 'react';
import Navbar from '../../../components/Navbar';
import { solarSystemData } from '../../data/solarSystemData';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './tour-solar.module.css';

// Array com a ordem dos planetas
const orderedPlanetKeys = [
  "mercury", 
  "venus", 
  "earth", 
  "mars", 
  "jupiter", 
  "europa",
  "saturn",
  "titan",
  "uranus",
  "neptune",
  "triton"
];

// O InfoPanel agora recebe o layoutId para a animação
// app/laboratorio/tour-solar/page.tsx

function InfoPanel({ planet, onClose, layoutId }) {
    if (!planet) return null;
    return (
        <motion.div layoutId={layoutId} className={styles.infoPanel}>
            <div className={styles.panelImage}>
                <Image src={planet.image} alt={planet.name} layout="fill" objectFit="cover" />
            </div>
            <div className={styles.panelContent}>
                <h2>{planet.name}</h2>
                <div className={styles.statBox}>{planet.stat}</div>
                <p>{planet.description}</p>

                {/* --- TRECHO DO LINK ADICIONADO AQUI --- */}
                {planet.sourceLink && (
                    <a 
                        href={planet.sourceLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={styles.sourceLink}
                    >
                        Learn More at NASA.gov &rarr;
                    </a>
                )}
            </div>
            <motion.button 
              onClick={onClose} 
              className={styles.closeButton}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.3 } }}
            >
                ×
            </motion.button>
        </motion.div>
    );
}

export default function TourSolarPage() {
    // O estado agora vai guardar o ID do planeta para o layoutId
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const selectedPlanetData = selectedId ? solarSystemData[selectedId] : null;
    // --- LÓGICA DE ÁUDIO SIMPLIFICADA ---
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.2);
    // Novo estado para controlar se o usuário já interagiu com a página
    const [userHasInteracted, setUserHasInteracted] = useState(false);
    useEffect(() => {
  const audioEl = audioRef.current;
  if (audioEl) {
    audioEl.src = "/audio/tour-solar.mp3";
    audioEl.volume = volume;
    audioEl.loop = true;
  }

  const handleInteraction = () => handleFirstInteraction();
  window.addEventListener("click", handleInteraction, { once: true });
  window.addEventListener("keydown", handleInteraction, { once: true });

  return () => {
    window.removeEventListener("click", handleInteraction);
    window.removeEventListener("keydown", handleInteraction);
  };
}, []);

    const handleFirstInteraction = () => {
        if (!userHasInteracted && audioRef.current && audioRef.current.paused) {
            audioRef.current.play().then(() => {
                setIsPlaying(true);
                setUserHasInteracted(true); // Marca que a interação já aconteceu
            }).catch(error => {
                console.log("Audio play failed on interaction:", error);
            });
        }
    };
    const togglePlayPause = useCallback(() => {
        const audioEl = audioRef.current;
        if (!audioEl) return;
        if (audioEl.paused) {
            audioEl.play().then(() => setIsPlaying(true));
        } else {
            audioEl.pause();
            setIsPlaying(false);
        }
    }, []);

    const handleVolumeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
    }, []);
    // --- FIM DA LÓGICA DE ÁUDIO ---

    return (
        <>
            <Navbar />
            <main className={styles.tourContainer}>
                <header className={styles.header}>
                    <h1>Weather on Other Planets</h1>
                    <p>
                        Each planet in our solar system has its own unique weather.
                        But one thing is certain: Only Earth has a weather we can live with.
                    </p>
                    <p style={{ fontSize: "0.9rem", color: "#a0aec0", marginTop: "1rem" }}>
                        This page was inspired by and adapted from NASA’s{" "}
                        <a 
                            href="https://spaceplace.nasa.gov/weather-on-other-planets/en/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={{ color: "#81d4fa", textDecoration: "underline" }}
                        >
                            Weather on Other Planets
                        </a>{" "}
                        article.
                    </p>
                </header>


                <div className={styles.solarSystemMap}>
                    <div className={styles.sun} />
                    
                    {orderedPlanetKeys.map(key => {
                        const planetData = solarSystemData[key];
                        if (!planetData) return null;
                        return (
                            // O botão agora é um motion.div com o layoutId
                            <motion.div
                                key={key}
                                layoutId={key}
                                className={styles.planetIcon}
                                style={{ top: planetData.position.top, left: planetData.position.left }}
                                onClick={() => setSelectedId(key)}
                                title={`Explore ${planetData.name}`}
                            >
                                <Image 
                                    src={planetData.image} 
                                    alt={planetData.name} 
                                    layout="fill" 
                                    objectFit="cover"
                                />
                                <span className={styles.planetName}>{planetData.name}</span>
                            </motion.div>
                        );
                    })}
                </div>
                <div className={styles.audioControls}>
                    <button onClick={togglePlayPause} title={isPlaying ? "Pause" : "Play"}>
                        {isPlaying ? '⏸️' : '▶️'}
                    </button>
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={handleVolumeChange}
                        className={styles.volumeSlider}
                        title="Volume"
                    />
                </div>

                {/* AnimatePresence cuida das animações de entrada e saída */}
                <AnimatePresence>
                    {selectedId && (
                        // Adicionamos um fundo para clicar e fechar
                        <motion.div 
                            className={styles.panelBackdrop}
                            onClick={() => setSelectedId(null)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <InfoPanel 
                                planet={selectedPlanetData} 
                                onClose={() => setSelectedId(null)}
                                layoutId={selectedId} // Passamos o ID para a animação
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
                <audio ref={audioRef} />

            </main>
        </>
    );
}