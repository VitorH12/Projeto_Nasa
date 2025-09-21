// src/components/StoryPage.js
'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import React from 'react'; // Importe React para usar React.Fragment

export default function StoryPage({ imageSrc, imageAlt, storyText, interactiveNote }) {
    const [noteVisible, setNoteVisible] = useState(false);
    // Inicializamos realtimeData como string vazia ou com o placeholder, mas o useEffect principal lidará com isso
    const [realtimeData, setRealtimeData] = useState(''); 
    const [isLoading, setIsLoading] = useState(false);
    // Novo estado para controlar se os dados da API para esta NOTA já foram carregados
    const [apiDataLoaded, setApiDataLoaded] = useState(false);

    // Função para buscar dados da API
    const fetchRealtimeData = async () => {
        if (!interactiveNote) return;

        // Evita múltiplas requisições se já estiver carregando ou se já carregou os dados para esta nota
        if (isLoading || apiDataLoaded) {
            console.log('API call skipped: already loading or data already loaded for this note.');
            return;
        }

        setIsLoading(true); // Indica que o carregamento começou
        // Define um estado temporário para 'carregando' para o usuário ver
        setRealtimeData('Buscando dados da NASA...'); 

        const apiKey = "u5NsMGeGaw39nszCF7A1M6WGjPHgejOnVxVbVXBI"; // SUA CHAVE AQUI! 
        if (!apiKey || apiKey.length < 20) { 
            setRealtimeData('Erro: API Key da NASA não configurada ou inválida no código.');
            setIsLoading(false);
            setApiDataLoaded(true); // Marca como carregado (com erro) para não tentar de novo imediatamente
            return;
        }

        const today = new Date().toISOString().split('T')[0]; // Data de hoje (YYYY-MM-DD)
        const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]; // 7 dias atrás

        try {
            // Lógica para Erupções Solares (Flares)
            if (interactiveNote.title.includes('Erupções Solares (Flares)')) {
                const response = await fetch(`https://api.nasa.gov/DONKI/FLR?startDate=${sevenDaysAgo}&endDate=${today}&api_key=${apiKey}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();

                let apiResultText;
                if (data && data.length > 0) {
                    const latestFlare = data.sort((a, b) => new Date(b.beginTime).getTime() - new Date(a.beginTime).getTime())[0];
                    const flareClass = latestFlare.classType || latestFlare.flr_goescls || 'Desconhecida';
                    const formattedNote = latestFlare.note ? `Uma curiosidade que os cientistas viram: "${latestFlare.note}"` : '';
                    
                    apiResultText = (
                        `Olha só o que o Sol fez recentemente!\n` +
                        `No dia ${new Date(latestFlare.beginTime).toLocaleDateString('pt-BR')}, por volta das ${new Date(latestFlare.beginTime).toLocaleTimeString('pt-BR', {hour: '2-digit', minute: '2-digit', timeZone: 'UTC'})} UTC,\n` +
                        `houve um grande 'espirro' de luz e energia, uma Erupção Solar de Classe ${flareClass}! As erupções solares são classificadas pelas suas classes A, B, C, M e X, com a classe X a ser a mais energética e a classe A a mais fraca\n` + 
                        `O momento mais forte desse 'espirro' foi às ${new Date(latestFlare.peakTime).toLocaleTimeString('pt-BR', {hour: '2-digit', minute: '2-digit', timeZone: 'UTC'})} UTC.\n` +
                        `Ele veio de uma parte do Sol chamada ${latestFlare.sourceLocation || 'Não especificada'}.\n\n` +
                        `${formattedNote}\n\n`
                    );
                } else {
                    apiResultText = 'Nenhuma erupção solar (sopro de fogo) detectada nos últimos 7 dias.';
                }
                setRealtimeData(apiResultText);

            } 
            // ----- Lógica para Manchas Solares (Active Regions) -----
            else if (interactiveNote.title.includes('Manchas Solares')) {
                function getMagClassDescription(magClass) {
                    if (!magClass) return 'com magnetismo desconhecido';

                    const lowerMagClass = magClass.toLowerCase();

                    // Simplificação das classes magnéticas para uma descrição infantil
                    if (lowerMagClass.includes('delta') || lowerMagClass.includes('gamma')) { // BG-D, GD, BGD, G, etc.
                        return '**magnetismo MUITO apertado e cheio de energia** (potencial para grandes "espirros")';
                    } else if (lowerMagClass.includes('b')) { // B, BG, BD
                        return 'magnetismo um pouco apertado (potencial para "espirros" médios)';
                    } else if (lowerMagClass.includes('alpha') || lowerMagClass === 'a') { // A
                        return '**magnetismo calmo** (baixo potencial para "espirros")';
                    }
                    return '**magnetismo que os cientistas estão observando**';
                }
                try {
                    const response = await fetch(`https://services.swpc.noaa.gov/json/sunspot_report.json`);
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const data = await response.json();
                    
                    let apiResultText = '';
                    if (data && data.length > 0) {
                        // Ordena os relatórios pela data/hora mais recente para pegar a observação mais nova
                        const sortedReports = data.sort((a, b) => new Date(b.time_tag).getTime() - new Date(a.time_tag).getTime());
                        const latestReport = sortedReports[0]; // A observação mais recente

                        // Contar o número de regiões ativas únicas na observação mais recente (ou no total)
                        const uniqueRegions = new Set(data.map(spot => spot.Region));
                        const numberOfActiveRegions = uniqueRegions.size;

                        const regionNum = latestReport.Region || 'Desconhecido';
                        const location = latestReport.Location || 'Não especificada';
                        const numSpots = latestReport.Numspot > 0 ? latestReport.Numspot : 'poucas';
                        const magClass = latestReport.Magclass || 'Não informada';
                        const magDescription = getMagClassDescription(magClass); // <--- Chama a nova função aqui!

                        const obsTime = new Date(latestReport.time_tag).toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' });

                        // Decidir como apresentar a informação
                        if (numberOfActiveRegions > 1) {
                            apiResultText = `Os cientistas do NOAA estão observando ${numberOfActiveRegions} regiões ativas com "sombras" no Sol!<br/><br/>` +
                                            `A mais recente observação, de ${obsTime}, detalha a Região Solar #${regionNum}.<br/>` +
                                            `Ela está em ${location}, com ${numSpots} mancha(s) solar(es) e tem um magnetismo de classe ${magClass}, que se caracteriza como um ${magDescription}.<br/>` +
                                            `É nessas áreas com muita energia 'guardada' que Kuarasy pode ter um grande "espirro" (erupção solar)!`;
                        } else {
                             apiResultText = `Os cientistas do NOAA estão observando as "sombras" no Sol!<br/><br/>` +
                                            `A última observação, de **${obsTime}**, detalha a **Região Solar #${regionNum}**.<br/>` +
                                            `Ela está em **${location}**, com **${numSpots} mancha(s) solar(es)** e tem um **magnetismo de classe ${magClass}, que se caracteriza como um ${magDescription}**.<br/>` +
                                            `Essa é a principal área onde Kuarasy está concentrando sua energia, podendo ter "espirros" fortes (erupções solares)!`;
                        }

                    } else {
                        apiResultText = 'Nenhuma região ativa (mancha solar) significativa detectada no Sol agora. Kuarasy está com o rosto "limpo" e calmo!';
                    }
                    setRealtimeData(apiResultText);
                } catch (error) {
                    console.error("Erro ao buscar dados de manchas solares:", error);
                    setRealtimeData('Erro ao carregar dados de manchas solares. Verifique sua conexão ou a API Key. Tente novamente mais tarde.');
                }
            }
            // ----- Lógica para Vento Solar e Auroras (GST) -----
            else if (interactiveNote.title.includes('Vento Solar e Auroras')) {
                const response = await fetch(`https://api.nasa.gov/DONKI/GST?startDate=${sevenDaysAgo}&endDate=${today}&api_key=${apiKey}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();

                let apiResultText;
                if (data && data.length > 0) {
                    const latestStorm = data.sort((a, b) => new Date(b.startTime).getTime() - new Date(a.startTime).getTime())[0];
                    const kpValue = latestStorm.allKpIndex && latestStorm.allKpIndex.length > 0 ? latestStorm.allKpIndex[0].kpIndex : 'N/A';
                    apiResultText = `A tempestade geomagnética mais recente teve um **Nível Kp de ${kpValue}**.<br/><br/>` +
                      `O Índice Kp mede a agitação do campo magnético da Terra (de 0 a 9). Níveis altos (de 5 para cima) significam uma chance muito maior de ver as luzes mágicas das auroras brilhando no céu!`;
                } else {
                    apiResultText = 'Nenhuma tempestade geomagnética recente detectada nos últimos 7 dias. Baixa chance de auroras.';
                }
                setRealtimeData(apiResultText);
            }
            // ----- LÓGICA AQUI para Ejeções de Massa Coronal (CMEs) -----
            else if (interactiveNote.title.includes('Ejeções de Massa Coronal (CMEs)')) {
                const response = await fetch(`https://api.nasa.gov/DONKI/CME?startDate=${sevenDaysAgo}&endDate=${today}&api_key=${apiKey}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();

                let apiResultText; 
                if (data && data.length > 0) {
                    const relevantCMEs = data.filter(cme => 
                        cme.cmeAnalyses && cme.cmeAnalyses.length > 0 && cme.cmeAnalyses[0].isMostAccurate
                    ).sort((a, b) => new Date(b.startTime).getTime() - new Date(a.startTime).getTime());

                    if (relevantCMEs.length > 0) {
                        const latestCME = relevantCMEs[0]; 
                        const analysis = latestCME.cmeAnalyses[0]; 

                        const startTime = new Date(latestCME.startTime).toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short', timeZone: 'UTC' }) + ' UTC';
                        const speed = analysis.speed ? `${Math.round(analysis.speed)} km/s` : 'Desconhecida';
                        const halfAngle = analysis.halfAngle ? `${analysis.halfAngle}°` : 'Desconhecido';
                        const sourceLocation = latestCME.sourceLocation || 'Não especificada';
                        const note = latestCME.note || 'Sem detalhes adicionais.';

                        let impactStatus = 'Não há previsão de impacto direto na Terra.';
                        let arrivalTime = '';

                        if (analysis.enlilList && analysis.enlilList.length > 0) {
                            const enlilAnalysis = analysis.enlilList[0];
                            if (enlilAnalysis.isEarthGB) {
                                impactStatus = 'Pode haver um impacto de "raspão" (leve) na Terra!';
                            } else if (enlilAnalysis.isEarthMinorImpact || enlilAnalysis.isEarthModerateImpact || enlilAnalysis.isEarthHighImpact) {
                                impactStatus = 'Há previsão de um impacto na Terra!';
                            }

                            if (enlilAnalysis.estimatedShockArrivalTime) {
                                arrivalTime = `<strong>Previsão de Chegada:</strong> ${new Date(enlilAnalysis.estimatedShockArrivalTime).toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short', timeZone: 'UTC' })} UTC.`;
                            } else if (impactStatus !== 'Não há previsão de impacto direto na Terra.') {
                                arrivalTime = '<strong>Ainda não há previsão de horário de chegada.</strong>';
                            }
                        }

                        apiResultText = (
                            `<h3>Última Ejeção de Massa Coronal (CME) Registrada:</h3>` + 
                            `<div style="margin-bottom: 1.5rem;">` + 
                            `<strong>Início:</strong> ${startTime}<br />` +
                            `<strong>Velocidade:</strong> ${speed}<br />` +
                            `<strong>Ângulo:</strong> ${halfAngle}<br />` +
                            `<strong>Origem:</strong> ${sourceLocation}<br />` +
                            `<strong>Impacto na Terra:</strong> ${impactStatus}<br />` +
                            `${arrivalTime ? `${arrivalTime}<br />` : ''}` +
                            `<em>Observação dos Cientistas:</em> "${note}"` +
                            `</div>`
                        );

                    } else {
                        apiResultText = 'Nenhuma Ejeção de Massa Coronal (suspiro forte) com análise precisa detectada nos últimos 7 dias.';
                    }
                } else {
                    apiResultText = 'Nenhuma Ejeção de Massa Coronal (suspiro forte) detectada nos últimos 7 dias.';
                }
                setRealtimeData(apiResultText);
            }
            else if (interactiveNote.title.includes('Tempestades Geomagnéticas') || interactiveNote.title.includes('Índice Kp')) {
    const response = await fetch(`https://api.nasa.gov/DONKI/GST?startDate=${sevenDaysAgo}&endDate=${today}&api_key=${apiKey}`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    let apiResultText;
    if (data && data.length > 0) {
        const latestStorm = data.sort((a, b) => new Date(b.startTime).getTime() - new Date(a.startTime).getTime())[0];
        const kpValue = latestStorm.allKpIndex && latestStorm.allKpIndex.length > 0 ? latestStorm.allKpIndex[0].kpIndex : 'N/A';
        
        let impactAnalysis = '';
        if (kpValue >= 7) {
            impactAnalysis = `**CUIDADO! Nível MUITO ALTO!** Isso pode realmente "silenciar vozes" e "apagar luzes": há risco de grandes interrupções em redes elétricas, problemas sérios em sinais de rádio e GPS, e satélites podem ser afetados. E sim, você veria auroras espetaculares se estivesse no lugar certo!`;
        } else if (kpValue >= 5) {
            impactAnalysis = `**Nível MODERADO.** Pode causar algumas falhas em redes elétricas fracas e problemas em sistemas de navegação. As comunicações de rádio podem ficar "com chiado". Também é uma ótima condição para ver auroras!`;
        } else {
            impactAnalysis = `**Nível CALMO.** Atualmente, o campo magnético da Terra está estável, com baixo risco de impactos tecnológicos. As "tempestades invisíveis" de Kuarasy estão tranquilas agora.`;
        }

        apiResultText = `O último registro mostra uma tempestade geomagnética com **Índice Kp de ${kpValue}**.<br/><br/>` +
                      `**A ciência nos diz:** ${impactAnalysis}`;

    } else {
        apiResultText = 'Nenhuma tempestade geomagnética significativa detectada nos últimos 7 dias. O Sol e a Terra estão calmos, sem grandes "tempestades invisíveis".';
    }
    setRealtimeData(apiResultText);
}
        } catch (error) {
            console.error("Erro ao buscar dados da API da NASA:", error);
            setRealtimeData('Erro ao carregar dados. Verifique sua conexão ou a API Key. Tente novamente mais tarde.');
        } finally {
            setIsLoading(false); 
            setApiDataLoaded(true); // Marca que a tentativa de carregar a API para esta nota foi feita.
        }
    };

    // Efeito para buscar dados da API quando a nota se torna visível (e os dados ainda não foram carregados)
    useEffect(() => {
        // Só tenta buscar se a nota está visível, se há interactiveNote e se ela realmente precisa de dados em tempo real
        if (noteVisible && interactiveNote && interactiveNote.realtimeDataText) {
            // Se os dados da API para esta nota ainda não foram carregados
            if (!apiDataLoaded) {
                fetchRealtimeData();
            }
        } 
        // Quando a nota é escondida, queremos resetar 'apiDataLoaded' para que, se ela for aberta novamente,
        // uma nova chamada API possa ser feita para obter os dados mais recentes.
        else if (!noteVisible) {
            setApiDataLoaded(false); 
        }
    }, [noteVisible, interactiveNote, apiDataLoaded, isLoading]); // Removido 'realtimeData' daqui

    // Efeito para definir o realtimeData inicial (placeholder) quando o componente é montado ou a interactiveNote muda
    useEffect(() => {
        if (interactiveNote && interactiveNote.realtimeDataText) {
            setRealtimeData(interactiveNote.realtimeDataText);
            setApiDataLoaded(false); // Garante que, se a nota mudar (nova página com nova nota), os dados precisarão ser carregados novamente
        } else {
            setRealtimeData(''); // Limpa o realtimeData se não houver nota interativa ou realtimeDataText
            setApiDataLoaded(false);
        }
    }, [interactiveNote]); // Depende apenas de interactiveNote

    return (
        <div className="book-page-container">
            <div className="left-page">
                <Image 
                    src={imageSrc} 
                    alt={imageAlt} 
                    width={832}
                    height={1248}
                    style={{
                        width: '100%',
                        height: 'auto', // A altura se ajusta para manter a proporção
                        display: 'block',
                        objectFit: 'cover', 
                        objectPosition: 'center',
                    }}
                />
            </div>
            <div className="right-page">
                <p dangerouslySetInnerHTML={{ __html: storyText }}></p>
                
                {interactiveNote && (
                    <div className="interactive-section">
                        <button 
                            onClick={() => { setNoteVisible(!noteVisible); }} 
                            disabled={isLoading} 
                        >
                            {isLoading ? 'Carregando...' : (noteVisible ? 'Esconder Detalhes' : interactiveNote.buttonText)}
                        </button>
                        {noteVisible && (
                            <div className="interactive-note-box">
                                <h3>{interactiveNote.title}</h3>
                                <p dangerouslySetInnerHTML={{ __html: interactiveNote.content }}></p>
                                
                                {interactiveNote.realtimeDataText && (
                                    <div className="realtime-data" dangerouslySetInnerHTML={{ __html: (realtimeData || '').replace(/\n/g, '<br />') }} />
                                )}
                                
                                {interactiveNote.moreInfoLink && (
                                    <a
                                        href={interactiveNote.moreInfoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="more-info-link"
                                    >
                                        Saiba Mais no NASAs &rarr;
                                    </a>
                                )}
                                
                                {interactiveNote.source && <em className="source-text">{interactiveNote.source}</em>}
                            </div>
                        )}
                    </div>
                )}
            </div>

            <style jsx>{`
                /* --- MUDANÇAS PRINCIPAIS AQUI --- */
                .book-page-container {
                    display: flex;
                    align-items: flex-start; /* Alinha os itens ao topo */
                    width: 100%;
                    max-width: 1100px;
                    margin: 2rem auto;
                    background-color: #fdfaf1;
                    border-radius: 8px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.2), 0 0 10px rgba(0,0,0,0.1) inset;
                    overflow: hidden;
                    border: 1px solid #dcd3b8;
                }
                .left-page, .right-page {
                    width: 50%;
                    position: relative;
                }

                .left-page {
                    padding: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #e0d8c0;
                    /* A altura da imagem vai ditar a altura desta div */
                }

                .right-page {
                    padding: 3rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start; /* Alinha o conteúdo ao topo */
                    font-family: 'Georgia', serif;
                    font-size: 1.1em;
                    line-height: 1.7;
                    color: #4a4a4a;
                    border-left: 1px dashed #dcd3b8;
                    min-height: 100%; /* Garante que a borda se estenda se a imagem for muito alta */
                }
                /* --- FIM DAS MUDANÇAS --- */
                
                .interactive-section { margin-top: 2rem; }
                button {
                    background-color: #8b4513; color: white; border: none;
                    padding: 0.8rem 1.5rem; border-radius: 5px; cursor: pointer;
                    font-size: 0.9em; transition: background-color 0.3s ease;
                }
                button:hover:not(:disabled) { background-color: #a0522d; }
                button:disabled {
                    background-color: #c5bba8;
                    cursor: not-allowed;
                }
                .interactive-note-box { 
                    margin-top: 1rem; padding: 1rem; background-color: #f5f0e1;
                    border-left: 4px solid #8b4513;
                }
                .interactive-note-box h3 {
                    color: #8b4513;
                    font-size: 1.2em;
                    display: block;
                    margin-bottom: 0.5rem;
                }

                .realtime-data { 
                    font-weight: normal;
                    color: #5c4033;
                    white-space: pre-wrap;
                    margin-top: 1rem;
                }
                .realtime-data strong {
                    font-weight: bold;
                    color: #c23b22;
                }
                .source-text { font-size: 0.8em; color: #777; margin-top: 0.5rem; display: block; }

                .more-info-link {
                    display: inline-block;
                    margin-top: 1rem;
                    color: #007bff;
                    text-decoration: none;
                    font-weight: bold;
                    transition: color 0.3s ease;
                }
                .more-info-link:hover {
                    color: #0056b3;
                    text-decoration: underline;
                }

                @media (max-width: 768px) {
                    .book-page-container {
                        flex-direction: column;
                    }
                    .left-page, .right-page {
                        width: 100%;
                    }
                    .right-page {
                        padding: 1.5rem;
                        border-left: none;
                        border-top: 1px dashed #dcd3b8;
                    }
                }
            `}</style>
        </div>
    );
}