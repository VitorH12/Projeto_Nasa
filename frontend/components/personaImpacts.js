// components/PersonaImpacts.js
'use client';

// Dados dos impactos para cada persona e nível de tempestade
const impactsData = {
    astronauta: [
        "Nenhum impacto significativo. Operações normais.", // G1
        "Monitoramento de radiação intensificado. Atividades extraveiculares (caminhadas espaciais) podem ser adiadas.", // G2
        "Alerta de radiação. Possível necessidade de se abrigar em áreas mais protegidas da estação.", // G3
        "Risco elevado de radiação. Atividades extraveiculares canceladas. Sistemas da estação podem apresentar falhas.", // G4
        "Perigo extremo de radiação. Tripulação em abrigo de emergência. Risco de danos permanentes a sistemas da estação." // G5
    ],
    piloto: [
        "Nenhum impacto nas rotas. Comunicação normal.", // G1
        "Comunicações de rádio em alta frequência (HF) podem apresentar ruído em rotas polares.", // G2
        "Desvio de rotas polares para latitudes mais baixas é recomendado para evitar falhas de comunicação.", // G3
        "Comunicação HF interrompida em rotas polares. Sistemas de navegação por satélite (GPS) podem ser imprecisos.", // G4
        "Blackout completo de rádio HF em grandes áreas. Erros de GPS significativos. Voos em altas latitudes são inviáveis." // G5
    ],
    operadorDeRede: [
        "Flutuações fracas na rede elétrica podem ocorrer.", // G1
        "Sistemas de alta latitude podem experimentar alarmes de tensão.", // G2
        "Correções de tensão podem ser necessárias. Falsos alarmes podem ser acionados em alguns dispositivos de proteção.", // G3
        "Problemas generalizados de controle de tensão. Risco de danos a transformadores.", // G4
        "Controle de tensão generalizado e problemas de proteção do sistema. Risco de blecautes e colapso da rede." // G5
    ],
    publicoGeral: [
        "Auroras podem ser vistas em altas latitudes (ex: Alasca, Canadá).", // G1
        "Auroras visíveis em latitudes mais baixas (ex: norte dos EUA).", // G2
        "Auroras visíveis em latitudes ainda mais baixas (ex: Illinois, Oregon). GPS pode ser afetado.", // G3
        "Auroras espetaculares visíveis em locais incomuns (ex: Alabama, norte da Califórnia).", // G4
        "Auroras incríveis visíveis em latitudes muito baixas (ex: Flórida, sul do Texas). Blecautes de rádio generalizados." // G5
    ]
};

export default function PersonaImpacts({ stormLevel }) {
    // O índice do array corresponde ao nível da tempestade - 1
    const impactIndex = stormLevel - 1;

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', backgroundColor: '#ba4545ff', padding: '1.5rem', borderRadius: '15px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
            {/* Card do Astronauta */}
            <div className="persona-card" style={{ backgroundColor: '#150f0fff' }}>

                <h3>🧑‍🚀 Astronauta</h3>
                <p>{impactsData.astronauta[impactIndex]}</p>
            </div>

            {/* Card do Piloto */}
            <div className="persona-card">
                <h3>✈️ Piloto</h3>
                <p>{impactsData.piloto[impactIndex]}</p>
            </div>

            {/* Card do Operador de Rede */}
            <div className="persona-card">
                <h3>⚡ Operador de Rede Elétrica</h3>
                <p>{impactsData.operadorDeRede[impactIndex]}</p>
            </div>

            {/* Card do Público Geral */}
            <div className="persona-card">
                <h3>🌍 Você (Público Geral)</h3>
                <p>{impactsData.publicoGeral[impactIndex]}</p>
            </div>

            {/* Estilos para os cards (você pode mover para um arquivo CSS) */}
            <style jsx>{`
                .persona-card {
                    background: #f8f9fa;
                    border: 1px solid #e9ecef;
                    border-radius: 15px;
                    padding: 1.5rem;
                    text-align: center;
                    transition: all 0.3s ease;
                }
                .persona-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 20px rgba(0,0,0,0.08);
                }
                .persona-card h3 {
                    margin-top: 0;
                    font-size: 1.3rem;
                }
            `}</style>
        </div>
    );
}