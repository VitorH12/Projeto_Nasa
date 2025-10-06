'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import Navbar from '../../../components/Navbar';
import { labActivities } from '../../data/labActivities';
import styles from './laboratorio.module.css';

// Activity Card component
function ActivityCard({ activity }) {
    return (
        <a href={activity.link} target="_blank" rel="noopener noreferrer" className={styles.card}>
            <div className={styles.cardHeader}>
                <span className={styles.cardSource}>{activity.source}</span>
                <span className={styles.cardType}>{activity.type}</span>
            </div>
            <h3 className={styles.cardTitle}>{activity.title}</h3>
            <p className={styles.cardDescription}>{activity.description}</p>
            <div className={styles.cardFooter}>
                Access Activity &rarr;
            </div>
        </a>
    );
}

export default function LabPage() {
    const [selectedTopic, setSelectedTopic] = useState('all');
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.3);

    // Tentar tocar automaticamente ao carregar
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
        if (audioEl.paused) audioEl.play().then(() => setIsPlaying(true));
        else {
            audioEl.pause();
            setIsPlaying(false);
        }
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (audioRef.current) audioRef.current.volume = newVolume;
    };

    // Filter activities by topic
    const filteredActivities = useMemo(() => {
        if (selectedTopic === 'all') {
            return labActivities;
        }
        return labActivities.filter(activity => activity.topic === selectedTopic);
    }, [selectedTopic]);

    return (
        <>
            <Navbar />

            {/* --- ÁUDIO DE FUNDO --- */}
            <audio ref={audioRef} src="/audio/space-lab.mp3" autoPlay loop />

            {/* Controles flutuantes no canto superior direito */}
            <div
                style={{
                    position: 'fixed',
                    top: '80px',
                    right: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    zIndex: 1000,
                    background: 'transparent',
                    padding: '6px 12px',
                    backdropFilter: 'blur(6px)',
                }}
            >
                <button
                    onClick={togglePlayPause}
                    style={{
                        background: 'transparent',
                        color: '#facc15',
                        width: '36px',
                        height: '36px',
                        border: '2px solid rgba(255,255,255,0.5)',

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
                <span style={{ fontSize: '0.65rem', color: '#facc15aa' }}>
            Background Music</span>
            </div>

            <main className={styles.labContainer}>
                {/* --- INTRO SECTION --- */}
                <header className={styles.header}>
                    <h1>Space Exploration Lab</h1>
                    <p className={styles.introText}>
                        Welcome, explorer! Here, science leaves the screen and comes into your home. 
                        Inspired by the amazing educational resources from NASA and NOAA, 
                        we've gathered a collection of fun, hands-on activities for you to become a true space weather scientist.
                    </p>
                    <p className={styles.safetyNote}>
                        <strong>A note for our young explorers: </strong> 
                        Some of these activities may require materials like scissors or small magnets. 
                        Always ask a parent, guardian, or teacher for help and supervision. 
                        The best science is safe science!
                    </p>
                </header>

                {/* --- ACTIVITY GRID --- */}
                <div className={styles.activityGrid}>
                    {filteredActivities.map(activity => (
                        <ActivityCard key={activity.id} activity={activity} />
                    ))}
                </div>
            </main>
        </>
    );
}
