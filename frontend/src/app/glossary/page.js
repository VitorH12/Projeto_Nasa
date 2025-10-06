'use client';

import React, { useRef, useState } from 'react';
import Head from 'next/head';
import Navbar from '../../../components/Navbar';

export default function GlossaryPage() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) audioRef.current.volume = newVolume;
  };

  const terms = [
    {
      term: 'Space Weather',
      definition: 'Refers to the dynamic conditions in space, particularly around Earth, that are influenced by solar activity (like solar flares, CMEs, and solar wind). These conditions can affect technology in space and on Earth.',
      simplified: 'It\'s like the "weather" of space, caused by the Sun\'s activity, which can affect our world and our devices.'
    },
    {
      term: 'Solar Flare',
      definition: 'A sudden, intense burst of radiation from the Sun\'s surface, often associated with sunspots. They release enormous amounts of energy and light.',
      simplified: 'A giant "sneeze" or "flash" of light and energy from the Sun.'
    },
    {
      term: 'Coronal Mass Ejection (CME)',
      definition: 'A large expulsion of plasma and magnetic field from the Sun\'s corona. CMEs can travel through space and, if directed towards Earth, can cause geomagnetic storms.',
      simplified: 'A "strong sigh" or "burp" of hot gas and magnetic bubbles from the Sun, traveling through space.'
    },
    {
      term: 'Solar Wind',
      definition: 'A continuous flow of charged particles (plasma) released from the Sun\'s corona, constantly streaming outwards through the solar system.',
      simplified: 'The Sun\'s constant "breath," a gentle but continuous stream of tiny particles.'
    },
    {
      term: 'Geomagnetic Storm',
      definition: 'A major disturbance of Earth\'s magnetosphere that occurs when there is a very efficient exchange of energy from the solar wind into the space environment surrounding Earth. These storms can cause auroras and impact technology.',
      simplified: 'An "invisible storm" around Earth, caused by the Sun\'s strong breath or burps, that can make auroras and affect devices.'
    },
    {
      term: 'Kp Index',
      definition: 'A planetary index of geomagnetic activity, ranging from 0 to 9, which quantifies the magnitude of geomagnetic storms. Higher Kp values indicate stronger disturbances.',
      simplified: 'A number (from 0 to 9) that tells us how "grumpy" or "excited" the Sun\'s breath is making Earth\'s magnetic shield. Higher numbers mean more excitement!'
    },
    {
      term: 'GICs (Geomagnetically Induced Currents)',
      definition: 'Electric currents induced in long conductors (like power lines, pipelines, railway tracks) on Earth\'s surface during geomagnetic storms. They can overload and damage transformers.',
      simplified: 'Extra "invisible electricity" that flows through power lines and other long metal objects on Earth when the Sun\'s invisible storm is strong, sometimes causing problems.'
    },
    {
      term: 'SEPs (Solar Energetic Particles)',
      definition: 'High-energy particles (protons, electrons, heavy ions) accelerated by solar flares or CMEs. They pose radiation hazards, especially to astronauts and spacecraft.',
      simplified: 'Tiny, super-fast particles thrown out by the Sun\'s sneezes or burps. They carry a lot of energy and can be dangerous for astronauts.'
    },
    {
      term: 'Ionosphere',
      definition: 'A region of Earth\'s upper atmosphere where atoms and molecules are ionized by solar radiation. It plays a crucial role in radio communication and GPS signals.',
      simplified: 'A special layer high up in Earth\'s atmosphere that can be bouncy for radio waves and tricky for GPS signals when the Sun is active.'
    },
    {
      term: 'Aurora',
      definition: 'Natural light displays in the sky, primarily seen in high-latitude regions (around the Arctic and Antarctic). They are caused by disturbances in the magnetosphere due to the solar wind.',
      simplified: 'Beautiful dancing lights in the sky (like nature\'s light show), usually near the North and South Poles, caused by the Sun\'s particles hitting Earth\'s shield.'
    }
  ];

  return (
    <div style={{ backgroundColor: '#0f172a', minHeight: '100vh', position: 'relative' }}>
      <Head>
        <title>Glossary - Ocllo Space</title>
        <meta name="description" content="A glossary of key terms related to space weather and its impacts." />
      </Head>

      <Navbar />

      {/* --- CONTROLES DE ÁUDIO FIXOS --- */}
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
        <audio ref={audioRef} src="/audio/glossary.mp3" loop />
        <button
          onClick={toggleMusic}
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

      <div
        style={{
          fontFamily: "'Poppins', sans-serif",
          color: '#e2e8f0',
          padding: '2rem',
          maxWidth: '900px',
          margin: '0 auto',
          lineHeight: '1.6',
        }}
      >
        <h1
          style={{
            fontSize: '2.8rem',
            fontWeight: 'bold',
            color: '#facc15',
            marginBottom: '1.5rem',
            textAlign: 'center',
          }}
        >
          Space Weather Glossary
        </h1>

        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', textAlign: 'center' }}>
          Here are some important words to help you understand the amazing world of the Sun and space weather!
        </p>

        <div style={{ display: 'grid', gap: '2rem' }}>
          {terms.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#1e293b',
                padding: '1.5rem',
                borderRadius: '10px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.4)',
                borderLeft: '5px solid #facc15',
              }}
            >
              <h2
                style={{
                  fontSize: '1.8rem',
                  fontWeight: 'bold',
                  color: '#facc15',
                  marginBottom: '0.8rem',
                }}
              >
                {item.term}
              </h2>
              <p style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
                <strong>Definition:</strong> {item.definition}
              </p>
              <p style={{ fontSize: '1rem' }}>
                <strong>Simplified:</strong> {item.simplified}
              </p>
            </div>
          ))}
        </div>

        <p style={{ fontSize: '1rem', textAlign: 'center', marginTop: '3rem', color: '#94a3b8' }}>
          Understanding these terms helps us better comprehend the Sun's powerful influence on our planet.
        </p>
      </div>
    </div>
  );
}
