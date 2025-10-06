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

  // toca automaticamente ao carregar
  useEffect(() => {
    const audioEl = audioRef.current;
    if (audioEl) {
      audioEl.loop = true;
      audioEl.volume = volume;
      audioEl.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  }, []);

  const togglePlayPause = () => {
    const audioEl = audioRef.current;
    if (!audioEl) return;
    if (audioEl.paused) {
      audioEl.play().then(() => setIsPlaying(true));
    } else {
      audioEl.pause();
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) audioRef.current.volume = newVolume;
  }, []);

  return (
    <>
      <Navbar />
      <audio ref={audioRef} src="/audio/tour-solar.mp3" autoPlay loop />

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
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px',
            zIndex: 1000,
            background: 'rgba(0,0,0,0.25)',
            padding: '10px 12px',
            borderRadius: '20px',
            backdropFilter: 'blur(6px)',
          }}
        >
          <button
            onClick={togglePlayPause}
            style={{
              background: 'linear-gradient(135deg, #facc15, #f59e0b)',
              color: 'black',
              border: 'none',
              width: '42px',
              height: '42px',
              fontSize: '1.4rem',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 8px rgba(255,255,0,0.4)',
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
              background: 'linear-gradient(90deg, #facc15, #fde047)',
              appearance: 'none',
              cursor: 'pointer',
              outline: 'none',
            }}
          />

          {/* Bolinha preta do slider */}
          <style jsx>{`
            input[type="range"]::-webkit-slider-thumb {
              appearance: none;
              width: 14px;
              height: 14px;
              border-radius: 50%;
              background: white;
              cursor: pointer;
            }
            input[type="range"]::-moz-range-thumb {
              width: 14px;
              height: 14px;
              border-radius: 50%;
              background: black;
              cursor: pointer;
            }
          `}</style>

          <span style={{ fontSize: '0.7rem', color: '#facc15aa' }}>Background Music</span>
        </div>

        {/* --- MAPA DO SISTEMA SOLAR --- */}
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
