'use client'
import React, { useRef, useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../../../components/Navbar';

export default function AboutPage() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

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

  const handleVolumeChange = (e) => {
    const vol = parseFloat(e.target.value);
    setVolume(vol);
    if (audioRef.current) audioRef.current.volume = vol;
  };

  return (
    <div style={{ backgroundColor: '#0f172a', minHeight: '100vh', position: 'relative' }}>
      <Head>
        <title>About Ocllo Space - Space Weather Story</title>
        <meta
          name="description"
          content="Learn about the Ocllo Space project, its mission to explain space weather, and the sources used."
        />
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
        <audio ref={audioRef} src="/audio/about.mp3" loop />
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
        <span style={{ fontSize: '0.65rem', color: '#facc15aa' }}>
            Background Music</span>
      </div>

      {/* --- CONTEÚDO DA PÁGINA --- */}
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
          About Ocllo Space
        </h1>

        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', textAlign: 'center' }}>
          Welcome to Ocllo Space, your digital journey into the fascinating world of space weather!
        </p>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2rem', color: '#facc15', marginBottom: '1rem' }}>Our Mission</h2>
          <p>
            Our mission is to demystify "space weather" and make it accessible and engaging for
            everyone, especially younger audiences. We believe that understanding the Sun's activity
            and its impacts on Earth is crucial in our increasingly technology-dependent world.
            Through captivating stories and interactive elements, we aim to educate and inspire the
            next generation of space enthusiasts and scientists.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2rem', color: '#facc15', marginBottom: '1rem' }}>What is Space Weather?</h2>
          <p>
            "Space weather" refers to the dynamic conditions in space that are influenced by the
            Sun, such as solar flares, coronal mass ejections (CMEs), and the solar wind. These
            phenomena can create spectacular auroras, but also have significant effects on our
            technology and daily lives – from affecting satellite communications and GPS accuracy to
            disrupting power grids and posing risks to astronauts.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2rem', color: '#facc15', marginBottom: '1rem' }}>Our Storytelling Approach</h2>
          <p>
            We've crafted a digital children's story that explores the Sun's moods and the varying
            impacts of space weather on different people: from astronauts orbiting Earth to farmers
            relying on GPS, pilots navigating polar routes, engineers protecting our power grids,
            and even everyday individuals using their smartphones. Each narrative highlights a
            unique challenge and the incredible science behind it.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2rem', color: '#facc15', marginBottom: '1rem' }}>Data and Resources</h2>
          <p>
            The content and data presented in Ocllo Space are based on publicly available information
            from leading space agencies and scientific institutions. We primarily draw from:
          </p>
          <ul style={{ listStyleType: 'disc', marginLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <a
                href="https://www.nasa.gov/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#60a5fa', textDecoration: 'none' }}
              >
                NASA (National Aeronautics and Space Administration)
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a
                href="https://www.noaa.gov/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#60a5fa', textDecoration: 'none' }}
              >
                NOAA (National Oceanic and Atmospheric Administration)
              </a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a
                href="https://www.swpc.noaa.gov/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#60a5fa', textDecoration: 'none' }}
              >
                NOAA Space Weather Prediction Center (SWPC)
              </a>
            </li>
          </ul>
          <p style={{ marginTop: '1rem' }}>
            These organizations provide real-time data, historical records, and educational
            resources that inform our understanding of space weather and its effects.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2rem', color: '#facc15', marginBottom: '1rem' }}>Acknowledgements</h2>
          <p>
            This project was developed as part of a challenge to creatively communicate complex
            scientific concepts. We extend our gratitude to the scientific community for their
            continuous efforts in space weather research and monitoring, which makes projects like
            Ocllo Space possible.
          </p>
        </section>

        {/* NOVA SEÇÃO ADICIONADA */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', color: '#facc15', marginBottom: '1rem' }}>
            Future Vision & Collaboration
          </h2>
          <p>
            This project was built on a deep admiration for NASA's mission to democratize knowledge.
            We believe the next frontier of space exploration is not just technological, but
            educational. <strong>'Ocllo Space'</strong> is our contribution to this frontier: a
            demonstration of how complex data can be transformed into interactive experiences that
            inspire curiosity.
          </p>
          <p style={{ marginTop: '1rem' }}>
            The door is always open for conversations with other enthusiasts, educators, and
            professionals in the field who share this vision. If you are interested in our approach
            or have ideas for future collaborations, we would love to connect.
          </p>
        </section>

        <p
          style={{
            fontSize: '1.1rem',
            textAlign: 'center',
            marginTop: '3rem',
          }}
        >
          Thank you for joining us on this cosmic adventure!
        </p>
      </div>
      <style jsx>{`
        .audio-controls {
          position: fixed;
          top: 80px;
          right: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
          background: transparent; /* só transparente */
          padding: 5px 10px;
          border-radius: 20px;
          z-index: 1000;
        }

        .audio-controls button {
          background: transparent;
          color: #facc15;
          border: none;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1.2em;
        }

        .audio-controls input[type='range'] {
          width: 100px;
          height: 5px;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .audio-controls {
            top: 10px;
            right: 10px;
            gap: 5px;
          }

          .audio-controls input[type='range'] {
            width: 80px;
          }
        }
      `}</style>
    </div>
    
  );
}
