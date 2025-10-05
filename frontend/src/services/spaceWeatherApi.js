// src/services/spaceWeatherApi.js

// A chave de API é lida das variáveis de ambiente
const apiKey = "u5NsMGeGaw39nszCF7A1M6WGjPHgejOnVxVbVXBI"

// Datas reutilizáveis
const today = new Date().toISOString().split('T')[0];
const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

// Função para buscar dados de Tempestades Geomagnéticas (GST)
export const fetchGstData = async () => {
    const response = await fetch(`https://api.nasa.gov/DONKI/GST?startDate=${sevenDaysAgo}&endDate=${today}&api_key=${apiKey}`);
    if (!response.ok) throw new Error('Failed to fetch Geomagnetic Storm data');
    return response.json();
};

// Função para buscar dados de Erupções Solares (FLR)
export const fetchFlrData = async () => {
    const response = await fetch(`https://api.nasa.gov/DONKI/FLR?startDate=${sevenDaysAgo}&endDate=${today}&api_key=${apiKey}`);
    if (!response.ok) throw new Error('Failed to fetch Solar Flare data');
    return response.json();
};

// Função para buscar dados de Ejeções de Massa Coronal (CME)
export const fetchCmeData = async () => {
    const response = await fetch(`https://api.nasa.gov/DONKI/CME?startDate=${sevenDaysAgo}&endDate=${today}&api_key=${apiKey}`);
    if (!response.ok) throw new Error('Failed to fetch CME data');
    return response.json();
};

// Função para buscar dados de Manchas Solares
export const fetchSunspotData = async () => {
    const response = await fetch(`https://services.swpc.noaa.gov/json/sunspot_report.json`);
    if (!response.ok) throw new Error('Failed to fetch Sunspot data');
    return response.json();
};