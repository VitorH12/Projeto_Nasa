'use client';

import Navbar from '../../../components/Navbar';

export default function ImpactosPage() {
  const impactos = [
    {
      id: "astronauta",
      icon: "👨‍🚀",
      titulo: "Astronauta",
      descricao: "No espaço, o clima solar pode bagunçar satélites, trajes espaciais e comunicações!",
    },
    {
      id: "fazendeiro",
      icon: "🌾",
      titulo: "Fazendeiro",
      descricao: "O GPS do trator pode falhar, atrapalhando o plantio e a colheita.",
    },
    {
      id: "rede",
      icon: "⚡",
      titulo: "Rede elétrica",
      descricao: "As tempestades solares podem causar apagões e danificar transformadores.",
    },
    {
      id: "piloto",
      icon: "✈️",
      titulo: "Piloto",
      descricao: "O rádio do avião pode ficar cheio de chiados e o GPS pode falhar.",
    },
    {
      id: "pessoa",
      icon: "📱",
      titulo: "Pessoa comum",
      descricao: "Seu celular ou internet podem parar de funcionar por causa do Sol bravo.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="impactos-container">
        <h1 className="main-title">🌌 Como o Sol pode nos afetar?</h1>

        <div className="intro-section">
          <p><strong>O Sol não afeta só o clima da Terra.</strong> Quando ele fica agitado, pode impactar desde astronautas no espaço até nós, aqui embaixo, no dia a dia.</p>
          <p><span className="highlight-text">Esses cartões mostram alguns exemplos de como o clima espacial pode mexer com a nossa vida.</span></p>
        </div>

        <h2 className="cards-heading">Quem pode ser afetado?</h2>

        <div className="impacto-cards-grid">
          {impactos.map((item) => (
            <div key={item.id} className="impacto-card">
              <span className="impacto-icon">{item.icon}</span>
              <h3>{item.titulo}</h3>
              <p>{item.descricao}</p>
            </div>
          ))}
        </div>

        <style jsx>{`
          .impactos-container {
            text-align: center;
            padding: 2rem;
            max-width: 1200px;
            margin: auto;
            font-family: 'Georgia', serif; 
            color: #333; 
            margin-top: 60px;
          }

          .main-title {
            font-size: 2.5em;
            color: #4b0082; 
            margin-bottom: 2rem;
            font-family: 'Comic Sans MS', cursive;
            text-shadow: 2px 2px 6px rgba(0,0,0,0.15);
          }

          .intro-section {
            background: linear-gradient(135deg, #e0d4ff, #f0f8ff);
            border: 1px solid #d0c4f7;
            border-radius: 12px;
            padding: 2rem;
            margin-bottom: 3rem;
            box-shadow: 0 8px 20px rgba(0,0,0,0.1);
            text-align: left;
            line-height: 1.8;
            font-size: 1.1em;
            color: #2f1b47;
          }

          .highlight-text {
            background-color: #ffe0f7;
            padding: 0.1em 0.3em;
            border-radius: 4px;
          }

          .cards-heading {
            font-size: 2em;
            color: #2f1b47;
            margin-top: 2.5rem;
            margin-bottom: 2rem;
            font-family: 'Comic Sans MS', cursive; 
          }

          .impacto-cards-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
          }

          .impacto-card {
            background: #fff;
            border-radius: 12px;
            padding: 1.8rem;
            box-shadow: 0 6px 15px rgba(0,0,0,0.1);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }

          .impacto-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.15);
          }

          .impacto-icon {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            display: block;
          }

          @media (max-width: 768px) {
            .main-title { font-size: 2em; }
            .intro-section { padding: 1.5rem; font-size: 1em; }
            .cards-heading { font-size: 1.6em; }
          }
        `}</style>
      </div>
    </>
  );
}
