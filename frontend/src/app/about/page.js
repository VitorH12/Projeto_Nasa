// src/app/about/page.js
import React from 'react';
import Head from 'next/head';
import Navbar from '../../../components/Navbar'; // Ajuste o caminho conforme necessário

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: '#0f172a', minHeight: '100vh' }}>
      <Head>
        <title>About Ocllo Space - Space Weather Story</title>
        <meta name="description" content="Learn about the Ocllo Space project, its mission to explain space weather, and the sources used." />
      </Head>

      <Navbar /> {/* A Navbar é adicionada aqui */}

      <div style={{
        fontFamily: "'Poppins', sans-serif",
        color: '#e2e8f0', // Texto claro para contraste com o fundo escuro
        padding: '2rem',
        maxWidth: '900px',
        margin: '0 auto',
        lineHeight: '1.6',
      }}>
        <h1 style={{
          fontSize: '2.8rem',
          fontWeight: 'bold',
          color: '#facc15', // Amarelo solar para os títulos
          marginBottom: '1.5rem',
          textAlign: 'center',
        }}>
          About Ocllo Space
        </h1>

        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', textAlign: 'center' }}>
          Welcome to Ocllo Space, your digital journey into the fascinating world of space weather!
        </p>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2rem', color: '#facc15', marginBottom: '1rem' }}>
            Our Mission
          </h2>
          <p>
            Our mission is to demystify "space weather" and make it accessible and engaging for everyone, especially younger audiences. We believe that understanding the Sun's activity and its impacts on Earth is crucial in our increasingly technology-dependent world. Through captivating stories and interactive elements, we aim to educate and inspire the next generation of space enthusiasts and scientists.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2rem', color: '#facc15', marginBottom: '1rem' }}>
            What is Space Weather?
          </h2>
          <p>
            "Space weather" refers to the dynamic conditions in space that are influenced by the Sun, such as solar flares, coronal mass ejections (CMEs), and the solar wind. These phenomena can create spectacular auroras, but also have significant effects on our technology and daily lives – from affecting satellite communications and GPS accuracy to disrupting power grids and posing risks to astronauts.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2rem', color: '#facc15', marginBottom: '1rem' }}>
            Our Storytelling Approach
          </h2>
          <p>
            We've crafted a digital children's story that explores the Sun's moods and the varying impacts of space weather on different people: from astronauts orbiting Earth to farmers relying on GPS, pilots navigating polar routes, engineers protecting our power grids, and even everyday individuals using their smartphones. Each narrative highlights a unique challenge and the incredible science behind it.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2rem', color: '#facc15', marginBottom: '1rem' }}>
            Data and Resources
          </h2>
          <p>
            The content and data presented in Ocllo Space are based on publicly available information from leading space agencies and scientific institutions. We primarily draw from:
          </p>
          <ul style={{ listStyleType: 'disc', marginLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="https://www.nasa.gov/" target="_blank" rel="noopener noreferrer" style={{ color: '#60a5fa', textDecoration: 'none' }}>NASA (National Aeronautics and Space Administration)</a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="https://www.noaa.gov/" target="_blank" rel="noopener noreferrer" style={{ color: '#60a5fa', textDecoration: 'none' }}>NOAA (National Oceanic and Atmospheric Administration)</a>
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <a href="https://www.swpc.noaa.gov/" target="_blank" rel="noopener noreferrer" style={{ color: '#60a5fa', textDecoration: 'none' }}>NOAA Space Weather Prediction Center (SWPC)</a>
            </li>
          </ul>
          <p style={{ marginTop: '1rem' }}>
            These organizations provide real-time data, historical records, and educational resources that inform our understanding of space weather and its effects.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '2rem', color: '#facc15', marginBottom: '1rem' }}>
            Acknowledgements
          </h2>
          <p>
            This project was developed as part of a challenge to creatively communicate complex scientific concepts. We extend our gratitude to the scientific community for their continuous efforts in space weather research and monitoring, which makes projects like Ocllo Space possible.
          </p>
        </section>

        <p style={{ fontSize: '1.1rem', textAlign: 'center', marginTop: '3rem' }}>
          Thank you for joining us on this cosmic adventure!
        </p>
      </div>
    </div>
  );
}