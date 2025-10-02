// src/data/impactStories.js

export const impactStories = {
  astronauta: {
    id: "astronauta",
    icon: "👨‍🚀",
    titulo: "Ana, a Astronauta",
    intro: "Ana sonhava em tocar as estrelas. Hoje, ela vive no espaço, estudando o universo.",
    fenomeno: "Erupções solares (flares) e tempestades de radiação",
    comoAfeta: "Quando o Sol solta rajadas de energia, partículas rápidas podem atingir a nave. Os astronautas precisam se proteger em compartimentos blindados para não receberem doses perigosas de radiação.",
    exemplos: [
      "Astronautas na Estação Espacial Internacional (ISS) já precisaram se abrigar em módulos protegidos durante tempestades solares.",
      "Em futuras missões para a Lua e Marte, a exposição será ainda maior."
    ],
    ilustracao: "/illustrations/astronauta.png"
  },

  fazendeiro: {
    id: "fazendeiro",
    icon: "🌾",
    titulo: "Pedro, o Fazendeiro",
    intro: "Pedro adora plantar milho e usa tecnologia para cuidar bem da terra.",
    fenomeno: "Tempestades geomagnéticas",
    comoAfeta: "Quando o Sol solta uma grande Ejeção de Massa Coronal (CME), o GPS pode ficar confuso. O trator autônomo pode errar as linhas do plantio!",
    exemplos: [
      "Na agricultura de precisão, qualquer erro no GPS pode atrapalhar colheitas inteiras.",
      "Em tempestades fortes, satélites de navegação podem até sair do ar temporariamente."
    ],
    ilustracao: "/illustrations/fazendeiro.png"
  },

  rede: {
    id: "rede",
    icon: "⚡",
    titulo: "Maria, Engenheira de Energia",
    intro: "Maria cuida para que a cidade nunca fique sem luz.",
    fenomeno: "Ejeções de Massa Coronal (CMEs)",
    comoAfeta: "CMEs podem induzir correntes nos cabos da Terra. Transformadores queimam e cidades inteiras podem ficar sem energia.",
    exemplos: [
      "Em 1989, uma tempestade solar derrubou a rede elétrica do Canadá inteiro em poucos segundos.",
      "Hoje, engenheiros monitoram o Sol para proteger a rede com antecedência."
    ],
    ilustracao: "/illustrations/rede.png"
  },

  piloto: {
    id: "piloto",
    icon: "✈️",
    titulo: "Carlos, o Piloto",
    intro: "Carlos já voou para muitos lugares, mas sabe que o céu esconde surpresas.",
    fenomeno: "Erupções solares e vento solar",
    comoAfeta: "Em tempestades solares, os rádios do avião ficam cheios de chiados e o GPS pode falhar, principalmente em voos polares.",
    exemplos: [
      "Companhias aéreas já desviaram voos para evitar rotas sobre os polos durante tempestades solares fortes.",
      "A comunicação com torres de controle pode sumir por alguns minutos."
    ],
    ilustracao: "/illustrations/piloto.png"
  },

  pessoa: {
    id: "pessoa",
    icon: "📱",
    titulo: "Lia, a Pessoa Comum",
    intro: "Lia adora falar no celular e assistir vídeos online.",
    fenomeno: "Tempestades geomagnéticas",
    comoAfeta: "Quando o Sol fica bravo, os satélites podem falhar. Isso derruba sinais de internet, GPS e até celulares.",
    exemplos: [
      "Em 2022, dezenas de satélites Starlink foram perdidos após uma tempestade geomagnética.",
      "Em casos extremos, até transmissões de TV e rádio podem parar."
    ],
    ilustracao: "/illustrations/pessoa.png"
  }
};
