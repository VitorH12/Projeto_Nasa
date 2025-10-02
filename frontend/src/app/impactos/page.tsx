// /src/app/impactos/page.tsx
'use client';

import Navbar from '../../../components/Navbar'; // Ajuste o caminho se necessário
import Link from 'next/link';
import { impactsDirectory } from '../../../components/impactsDirectory'; // Usamos o diretório de resumos aqui
import './impactos.css'; // Vamos criar este arquivo de CSS a seguir

export default function ImpactosPage() {
  return (
    <>
      <Navbar />
      <main className="impactos-container">
        <div className="impactos-header">
          <h1 className="main-title">🌌 How Does the Sun Affect Us?</h1>
          <p className="subtitle">
            Solar activity impacts essential technologies in our daily lives.
Click on a character to discover their story and the real-life events that affected them.
          </p>
        </div>

        <div className="impacto-cards-grid">
          {impactsDirectory.map((personagem) => (
            // Cada card é um link para a sua respectiva página de história
            <Link href={`/impactos/${personagem.id}`} key={personagem.id} className="card-link">
              <div className="impacto-card">
                <div className="card-header">
                  <span className="impacto-icon">{personagem.icon}</span>
                  <h3>{personagem.title}</h3>
                </div>
                <p className="card-summary">{personagem.summary}</p>
                <div className="card-tags">
                  {personagem.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}