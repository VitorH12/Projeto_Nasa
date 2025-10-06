'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Navbar from '../../../components/Navbar';
import { solarSystemData } from '../../data/solarSystemData';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './tour-solar.module.css';

const orderedPlanetKeys = [
  "mercury", "venus", "earth", "mars", "jupiter", "europa",
  "saturn", "titan", "uranus", "neptune", "triton"
];

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
        {planet.sourceLink && (
          <a href={planet.sourceLink} target="_blank" rel="noopener noreferrer" className={styles.sourceLink}>
            Learn More at NASA.gov &rarr;
          </a>
        )}
      </div>
      <motion.button onClick={onClose} className={styles.closeButton} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.3 } }}>
        ×
      </motion.button>
    </motion.div>
  );
}

export default function TourSolarPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedPlanetData = selectedId ? solarSystemData[selectedId] : null;

  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.2);
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
        setUserHasInteracted(true);
      }).catch(error => console.log("Audio play failed on interaction:", error));
    }
  };

  const togglePlayPause = useCallback(() => {
    const audioEl = audioRef.current;
    if (!audioEl) return;
    if (audioEl.paused) audioEl.play().then(() => setIsPlaying(true));
    else {
      audioEl.pause();
      setIsPlaying(false);
    }
  }, []);

  const handleVolumeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) audioRef.current.volume = newVolume;
  }, []);

  return (
    <>
      <Navbar />
      <main className={styles.tourContainer}>
        <header className={styles.header}>
          <h1>Weather on Solar System</h1>
          <p>Each planet in our solar system has its own unique weather. But one thing is certain: Only Earth has a weather we can live with.</p>
          <p style={{ fontSize: "0.9rem", color: "#a0aec0", marginTop: "1rem" }}>
            Inspired by NASA’s{" "}
            <a href="https://spaceplace.nasa.gov/weather-on-other-planets/en/" target="_blank" rel="noopener noreferrer" style={{ color: "#81d4fa", textDecoration: "underline" }}>
              Weather on Other Planets
            </a>{" "}
            article.
          </p>
        </header>

        {/* --- CONTROLES DE ÁUDIO FIXO --- */}
        <div
          style={{
            position: 'fixed',
            top: '80px',
            right: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            zIndex: 1000,
            background: 'rgba(0,0,0,0.25)',
            padding: '6px 12px',
            borderRadius: '20px',
            backdropFilter: 'blur(6px)',
          }}
        >
          <audio ref={audioRef} />
          <button
            onClick={togglePlayPause}
            style={{
              background: 'transparent',
              color: '#facc15',
              border: '2px solid rgba(255,255,255,0.5)',

              width: '36px',
              height: '36px',
              fontSize: '1.4rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {isPlaying ? '⏸️' : '▶️'}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            style={{
              width: '120px',
              height: '6px',
              borderRadius: '6px',
              background: 'linear-gradient(90deg, #ff6ec7, #6ec1ff)',
              appearance: 'none',
              cursor: 'pointer',
              outline: 'none',
            }}
          />
        </div>

        <div className={styles.solarSystemMap}>
          <div className={styles.sun} />
          {orderedPlanetKeys.map(key => {
            const planetData = solarSystemData[key];
            if (!planetData) return null;
            return (
              <motion.div
                key={key}
                layoutId={key}
                className={styles.planetIcon}
                style={{ top: planetData.position.top, left: planetData.position.left }}
                onClick={() => setSelectedId(key)}
                title={`Explore ${planetData.name}`}
              >
                <Image src={planetData.image} alt={planetData.name} layout="fill" objectFit="cover" />
                <span className={styles.planetName}>{planetData.name}</span>
              </motion.div>
            );
          })}
        </div>

        <AnimatePresence>
          {selectedId && (
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
                layoutId={selectedId}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}
