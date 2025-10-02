// src/data/quizData.ts
import { Question } from '../app/quiz/quiz'; // Importa a interface Question

export const quizData: Question[] = [
    // --- Capítulo 1: Manchas Solares (Babilônios) ---
    {
        id: 'q1',
        question: "Qual fenômeno solar os Babilônios interpretavam como 'sombras no rosto do Sol' e que hoje a ciência chama de?",
        options: [
            "Erupções Solares (Flares)",
            "Manchas Solares",
            "Auroras",
            "Vento Solar"
        ],
        correctAnswer: "Manchas Solares",
        explanation: "As 'sombras' são as Manchas Solares, regiões mais frias e escuras na superfície do Sol causadas por intensa atividade magnética. Elas são a origem de muitos fenômenos solares.",
        relatedChapterId: 'babilonios'
    },
    {
        id: 'q2',
        question: "As Manchas Solares são regiões na superfície do Sol que são:",
        options: [
            "Mais quentes e brilhantes que o resto do Sol",
            "Mais frias e escuras que o resto do Sol",
            "Locais onde o Sol está 'doente' ou fraco",
            "Apenas ilusões de ótica na atmosfera da Terra"
        ],
        correctAnswer: "Mais frias e escuras que o resto do Sol",
        explanation: "As Manchas Solares são áreas onde fortes campos magnéticos inibem o transporte de calor para a superfície, tornando-as mais frias e, consequentemente, mais escuras do que as regiões circundantes.",
        relatedChapterId: 'babilonios'
    },
    {
        id: 'q3',
        question: "Por que as Manchas Solares são consideradas o 'berço' de grande parte da atividade solar?",
        options: [
            "Porque é onde o Sol 'dorme' e recupera energia",
            "Porque elas são as regiões de intensa e complexa atividade magnética, que pode ser liberada",
            "Porque atraem meteoros que colidem com o Sol",
            "Porque são buracos negros temporários na superfície solar"
        ],
        correctAnswer: "Porque elas são as regiões de intensa e complexa atividade magnética, que pode ser liberada",
        explanation: "As Manchas Solares são locais onde os campos magnéticos são extremamente fortes e emaranhados. A súbita liberação dessa energia magnética pode levar a erupções solares e ejeções de massa coronal.",
        relatedChapterId: 'babilonios'
    },
    {
        id: 'q4',
        question: "Além das Manchas Solares, qual outro fenômeno celeste os Babilônios eram muito bons em prever, interpretando-o como um 'abraço' entre a Lua e o Sol?",
        options: [
            "A passagem de cometas",
            "A ocorrência de auroras",
            "Eclipses",
            "A mudança das estações"
        ],
        correctAnswer: "Eclipses",
        explanation: "Os Babilônios eram astrônomos talentosos e podiam prever eclipses solares e lunares com notável precisão, interpretando-os dentro de seu sistema de presságios.",
        relatedChapterId: 'babilonios'
    },
    {
        id: 'q5',
        question: "As Manchas Solares aparecem e desaparecem em ciclos de aproximadamente quantos anos?",
        options: [
            "1 ano",
            "5 anos",
            "11 anos",
            "100 anos"
        ],
        correctAnswer: "11 anos",
        explanation: "A atividade das Manchas Solares segue um ciclo solar de aproximadamente 11 anos, variando de um mínimo (poucas manchas) a um máximo (muitas manchas e maior atividade solar).",
        relatedChapterId: 'babilonios'
    },

    // --- Capítulo 2: Erupções Solares (Flares) (Māori) ---
    {
        id: 'q6',
        question: "Quando o Sol tem 'sopros de fogo', como os Māori descreviam, o que realmente está acontecendo?",
        options: [
            "Ejeções de Massa Coronal (CMEs)",
            "Vento Solar",
            "Erupções Solares (Flares)",
            "Tempestades Geomagnéticas"
        ],
        correctAnswer: "Erupções Solares (Flares)",
        explanation: "Os 'sopros de fogo' dos Māori referem-se às Erupções Solares (Flares), que são explosões de radiação na superfície do Sol. Elas liberam energia e podem afetar a atmosfera da Terra.",
        relatedChapterId: 'maori'
    },
    {
        id: 'q7',
        question: "As Erupções Solares (Flares) são principalmente liberações de:",
        options: [
            "Plasma e matéria física",
            "Vento frio",
            "Radiação e luz",
            "Água e vapor"
        ],
        correctAnswer: "Radiação e luz",
        explanation: "Flares são explosões de radiação eletromagnética (luz, raios-X, UV) que viajam na velocidade da luz. Embora possam ser acompanhadas por ejeções de partículas, a característica principal é a liberação de radiação.",
        relatedChapterId: 'maori'
    },
    {
        id: 'q8',
        question: "Como as Erupções Solares (Flares) podem afetar a Terra, mesmo não sendo vistas diretamente?",
        options: [
            "Causando terremotos",
            "Aumentando a temperatura média do planeta drasticamente",
            "Energizando a alta atmosfera e intensificando as cores do amanhecer e pôr do sol",
            "Bloqueando a luz do Sol por dias"
        ],
        correctAnswer: "Energizando a alta atmosfera e intensificando as cores do amanhecer e pôr do sol",
        explanation: "A radiação de flares pode ionizar a alta atmosfera da Terra, afetando comunicações de rádio e, de forma mais sutil, alterando a forma como a luz solar é dispersa, o que pode intensificar as cores do céu.",
        relatedChapterId: 'maori'
    },
    {
        id: 'q9',
        question: "As Erupções Solares são classificadas em categorias (A, B, C, M, X). O que a classe 'X' indica?",
        options: [
            "Uma erupção muito fraca e sem importância",
            "Uma erupção de intensidade média",
            "Uma erupção de extrema potência e energia",
            "Uma erupção que ocorre apenas durante o dia"
        ],
        correctAnswer: "Uma erupção de extrema potência e energia",
        explanation: "A classificação de flares é logarítmica, onde a classe X representa as erupções mais intensas e energeticamente poderosas, capazes de causar impactos significativos na Terra.",
        relatedChapterId: 'maori'
    },
    {
        id: 'q10',
        question: "Onde as Erupções Solares geralmente se originam no Sol?",
        options: [
            "No polo norte do Sol",
            "Na parte mais profunda do núcleo solar",
            "Nas regiões de Manchas Solares",
            "Aleatoriamente em qualquer parte da fotosfera"
        ],
        correctAnswer: "Nas regiões de Manchas Solares",
        explanation: "As flares são explosões magnéticas que ocorrem acima das Manchas Solares, onde os campos magnéticos são mais complexos e podem se reconectar e liberar grandes quantidades de energia.",
        relatedChapterId: 'maori'
    },

    // --- Capítulo 3: Ejeções de Massa Coronal (CMEs) (Incas) ---
    {
        id: 'q11',
        question: "Os 'suspiros fortes' do Sol, que os Incas temiam por sua capacidade de 'fazer a luz da Terra vacilar', são conhecidos cientificamente como:",
        options: [
            "Manchas Solares",
            "Vento Solar",
            "Ejeções de Massa Coronal (CMEs)",
            "Auroras"
        ],
        correctAnswer: "Ejeções de Massa Coronal (CMEs)",
        explanation: "Os 'suspiros fortes' são Ejeções de Massa Coronal (CMEs), grandes nuvens de plasma e campo magnético ejetadas do Sol. Elas são mais lentas que as flares, mas carregam mais matéria e podem causar tempestades geomagnéticas.",
        relatedChapterId: 'incas'
    },
    {
        id: 'q12',
        question: "Uma Ejeção de Massa Coronal (CME) é composta principalmente de:",
        options: [
            "Luz e radiação ultravioleta",
            "Plasma (gás quente ionizado) e campo magnético",
            "Meteoritos e poeira espacial",
            "Água e gelo"
        ],
        correctAnswer: "Plasma (gás quente ionizado) e campo magnético",
        explanation: "CMEs são grandes nuvens de plasma solar (partículas carregadas) e campos magnéticos que são ejetadas da coroa solar para o espaço interplanetário.",
        relatedChapterId: 'incas'
    },
    {
        id: 'q13',
        question: "Qual a principal diferença entre uma Erupção Solar (Flare) e uma Ejeção de Massa Coronal (CME)?",
        options: [
            "Flares são invisíveis e CMEs são sempre visíveis a olho nu",
            "Flares são principalmente radiação, CMEs são matéria (plasma) e campo magnético",
            "CMEs causam terremotos, Flares causam tsunamis",
            "Flares são mais lentas que CMEs"
        ],
        correctAnswer: "Flares são principalmente radiação, CMEs são matéria (plasma) e campo magnético",
        explanation: "Flares são explosões de energia eletromagnética que viajam na velocidade da luz. CMEs são explosões de matéria (plasma) que viajam mais lentamente, mas carregam muito mais massa.",
        relatedChapterId: 'incas'
    },
    {
        id: 'q14',
        question: "Se uma CME se dirige à Terra, qual o principal risco que ela apresenta?",
        options: [
            "Aumento drástico da temperatura global",
            "Danos a satélites, redes elétricas e sistemas de comunicação/GPS",
            "Criação de novos buracos na camada de ozônio",
            "Atração de asteroides para a órbita terrestre"
        ],
        correctAnswer: "Danos a satélites, redes elétricas e sistemas de comunicação/GPS",
        explanation: "CMEs podem induzir correntes elétricas em cabos longos (como redes elétricas), perturbar o campo magnético da Terra (afetando satélites e GPS) e causar interrupções de rádio.",
        relatedChapterId: 'incas'
    },
    {
        id: 'q15',
        question: "As CMEs são os principais causadores de qual tipo de 'tempestade' que pode afetar a Terra?",
        options: [
            "Tempestades de areia",
            "Tempestades de neve",
            "Tempestades geomagnéticas",
            "Tempestades de raios"
        ],
        correctAnswer: "Tempestades geomagnéticas",
        explanation: "Quando uma CME atinge o campo magnético da Terra, ela pode causar uma tempestade geomagnética, que é uma grande perturbação do campo magnético terrestre.",
        relatedChapterId: 'incas'
    },

    // --- Capítulo 4: Vento Solar e Auroras (Egípcios) ---
    {
        id: 'q16',
        question: "O que o 'hálito invisível' de Rá, que os Egípcios observavam e que Kuarasy disse que fazia o céu 'dançar' com cores, é para a ciência?",
        options: [
            "Tempestades Geomagnéticas",
            "Manchas Solares",
            "Erupções Solares (Flares)",
            "Vento Solar e Auroras"
        ],
        correctAnswer: "Vento Solar e Auroras",
        explanation: "O 'hálito invisível' é o Vento Solar, um fluxo constante de partículas do Sol. Quando interage com o campo magnético da Terra, ele causa as Auroras, as lindas luzes dançantes no céu, especialmente visíveis nos polos.",
        relatedChapterId: 'egipcios'
    },
    {
        id: 'q17',
        question: "O Vento Solar é composto por:",
        options: [
            "Ar e oxigênio do espaço",
            "Partículas carregadas (elétrons, prótons) do Sol",
            "Luz do Sol refletida",
            "Vapor de água espacial"
        ],
        correctAnswer: "Partículas carregadas (elétrons, prótons) do Sol",
        explanation: "O Vento Solar é um fluxo contínuo de partículas carregadas, principalmente elétrons e prótons, que são ejetadas da coroa solar para o espaço.",
        relatedChapterId: 'egipcios'
    },
    {
        id: 'q18',
        question: "Qual o fenômeno natural mais espetacular causado pela interação do Vento Solar (e CMEs) com o campo magnético da Terra?",
        options: [
            "Arco-íris",
            "Eclipses",
            "Auroras (Boreal e Austral)",
            "Miragens"
        ],
        correctAnswer: "Auroras (Boreal e Austral)",
        explanation: "Quando as partículas carregadas do Vento Solar e das CMEs atingem o campo magnético da Terra, elas são canalizadas para os polos e interagem com os gases da atmosfera, produzindo as luzes coloridas das Auroras.",
        relatedChapterId: 'egipcios'
    },
    {
        id: 'q19',
        question: "Por que as Auroras são mais visíveis perto dos polos da Terra?",
        options: [
            "Porque é onde o Sol está mais próximo da Terra",
            "Porque os campos magnéticos da Terra canalizam as partículas solares para essas regiões",
            "Porque a atmosfera é mais densa nos polos",
            "Porque o gelo reflete melhor as luzes"
        ],
        correctAnswer: "Porque os campos magnéticos da Terra canalizam as partículas solares para essas regiões",
        explanation: "O campo magnético da Terra atua como um escudo, mas é mais fraco nos polos, permitindo que as partículas carregadas do Vento Solar penetrem na atmosfera e causem as Auroras.",
        relatedChapterId: 'egipcios'
    },
    {
        id: 'q20',
        question: "O que o Índice Kp mede e como ele se relaciona com as Auroras?",
        options: [
            "A temperatura da superfície solar; temperaturas mais altas significam mais auroras",
            "A quantidade de nuvens no céu; mais nuvens significam mais auroras",
            "A agitação do campo magnético da Terra; níveis altos significam maior chance de auroras",
            "A velocidade do vento na atmosfera terrestre; ventos fortes causam auroras"
        ],
        correctAnswer: "A agitação do campo magnético da Terra; níveis altos significam maior chance de auroras",
        explanation: "O Índice Kp é uma escala que mede a perturbação do campo magnético da Terra. Níveis mais altos de Kp (geralmente de 5 para cima) indicam maior atividade geomagnética e, consequentemente, uma maior probabilidade de ocorrência e visibilidade de auroras.",
        relatedChapterId: 'egipcios'
    },

    // --- Capítulo 5: Tempestades Geomagnéticas (Gregos) ---
    {
        id: 'q21',
        question: "Como os Gregos tentavam entender as 'tempestades invisíveis' que Kuarasy mencionou, e o que a ciência moderna usa para medi-las?",
        options: [
            "Através de rituais com Hélio e observações de eclipses",
            "Pela observação de Manchas Solares e Flares",
            "Com o Índice Kp, que mede tempestades geomagnéticas",
            "Analisando o Vento Solar e a formação de Auroras"
        ],
        correctAnswer: "Com o Índice Kp, que mede tempestades geomagnéticas",
        explanation: "As 'tempestades invisíveis' são as Tempestades Geomagnéticas, causadas por intensos ventos solares e CMEs. A ciência moderna as mede usando o Índice Kp, que indica a perturbação no campo magnético da Terra e o potencial de impacto tecnológico.",
        relatedChapterId: 'gregos'
    },
    {
        id: 'q22',
        question: "As 'tempestades invisíveis' que podem 'silenciar vozes no ar e apagar luzes na Terra' são conhecidas como:",
        options: [
            "Tempestades de areia cósmica",
            "Tempestades geomagnéticas",
            "Tempestades de neutrinos",
            "Tempestades de poeira lunar"
        ],
        correctAnswer: "Tempestades geomagnéticas",
        explanation: "Tempestades geomagnéticas são perturbações no campo magnético da Terra que podem ter diversos impactos, incluindo interrupções de rádio e problemas em redes elétricas.",
        relatedChapterId: 'gregos'
    },
    {
        id: 'q23',
        question: "Qual dos seguintes não é um efeito potencial de uma tempestade geomagnética intensa na Terra?",
        options: [
            "Danos a satélites em órbita",
            "Interrupção de sinais de GPS",
            "Queda de energia em redes elétricas",
            "Crescimento acelerado de plantas"
        ],
        correctAnswer: "Crescimento acelerado de plantas",
        explanation: "Tempestades geomagnéticas afetam a tecnologia, mas não têm um efeito direto e comprovado no crescimento de plantas.",
        relatedChapterId: 'gregos'
    },
    {
        id: 'q24',
        question: "O que Kuarasy quis dizer com 'O Sol é uma estrela viva, cheia de energia e movimento, assim como um leão que dorme tranquilo, mas pode rugir quando quiser!'?",
        options: [
            "Que o Sol tem um temperamento imprevisível e maligno",
            "Que o Sol é um ser vivo com emoções",
            "Que o Sol, apesar de parecer calmo, tem um poder imenso e dinâmico que pode ser liberado de repente",
            "Que o Sol emite sons audíveis no espaço"
        ],
        correctAnswer: "Que o Sol, apesar de parecer calmo, tem um poder imenso e dinâmico que pode ser liberado de repente",
        explanation: "A metáfora descreve a natureza do Sol como uma estrela que, embora pareça estável, é extremamente ativa e pode liberar grandes quantidades de energia em eventos como flares e CMEs.",
        relatedChapterId: 'gregos'
    },
    {
        id: 'q25',
        question: "Qual é a principal 'proteção' natural da Terra contra as partículas e campos magnéticos das tempestades solares?",
        options: [
            "A camada de ozônio",
            "A atmosfera densa da Terra",
            "O campo magnético terrestre (magnetosfera)",
            "Os oceanos"
        ],
        correctAnswer: "O campo magnético terrestre (magnetosfera)",
        explanation: "A magnetosfera da Terra atua como um escudo, desviando a maioria das partículas carregadas do Sol e protegendo a vida e a tecnologia na superfície.",
        relatedChapterId: 'gregos'
    },

    // --- Capítulo 6: O Sol Hoje (Atualmente) ---
    {
        id: 'q26',
        question: "Qual termo os cientistas usam hoje para descrever como todos os fenômenos do Sol (manchas, erupções, CMEs e vento solar) interagem e afetam a Terra?",
        options: [
            "Meteorologia Solar",
            "Geofísica Atmosférica",
            "Clima Espacial",
            "Astrofísica Terrestre"
        ],
        correctAnswer: "Clima Espacial",
        explanation: "O termo 'Clima Espacial' é usado para descrever as condições no Sol e no espaço que podem afetar sistemas e tecnologias na Terra. Ele engloba todos os fenômenos solares e seus efeitos em nosso planeta.",
        relatedChapterId: 'atualmente'
    },
    {
        id: 'q27',
        question: "Por que é importante para nós, na era moderna, monitorar e entender o Clima Espacial?",
        options: [
            "Para prever o clima na Terra com mais precisão",
            "Para proteger astronautas, satélites, redes elétricas e sistemas de comunicação/GPS",
            "Para saber quando o Sol vai se 'apagar'",
            "Para controlar a velocidade da luz"
        ],
        correctAnswer: "Para proteger astronautas, satélites, redes elétricas e sistemas de comunicação/GPS",
        explanation: "O Clima Espacial pode ter impactos significativos em nossa infraestrutura tecnológica, sendo crucial o monitoramento para mitigar riscos a sistemas críticos.",
        relatedChapterId: 'atualmente'
    },
    {
        id: 'q28',
        question: "Quais ferramentas modernas são usadas para observar o Sol e prever eventos do Clima Espacial?",
        options: [
            "Bússolas e astrolábios",
            "Telescópios espaciais, satélites e monitoramento em solo",
            "Mapas estelares antigos e observações a olho nu",
            "Ampulhetas e relógios de sol"
        ],
        correctAnswer: "Telescópios espaciais, satélites e monitoramento em solo",
        explanation: "A NASA e outras agências utilizam uma vasta gama de instrumentos avançados, incluindo satélites como o SDO (Solar Dynamics Observatory) e observatórios terrestres, para monitorar o Sol constantemente.",
        relatedChapterId: 'atualmente'
    },
    {
        id: 'q29',
        question: "Segundo Kuarasy, qual é a 'forma moderna de ouvir a minha história'?",
        options: [
            "Adorar o Sol em templos antigos",
            "Dançar para o Sol ao pôr do sol",
            "Entender o Clima Espacial através da ciência e tecnologia",
            "Consultar oráculos e presságios"
        ],
        correctAnswer: "Entender o Clima Espacial através da ciência e tecnologia",
        explanation: "Kuarasy sugere que a ciência e a tecnologia modernas oferecem as ferramentas para decifrar e compreender os fenômenos solares de uma forma que vai além das lendas antigas.",
        relatedChapterId: 'atualmente'
    },
    {
        id: 'q30',
        question: "Por que os astronautas são um grupo que precisa de 'cuidado especial' em relação ao Clima Espacial?",
        options: [
            "Porque eles precisam de bronzeado espacial",
            "Porque estão mais expostos à radiação solar e às partículas energéticas fora da proteção da atmosfera e magnetosfera terrestre",
            "Porque as espaçonaves são feitas de materiais que atraem Manchas Solares",
            "Porque o Vento Solar empurra suas naves para fora de órbita"
        ],
        correctAnswer: "Porque estão mais expostos à radiação solar e às partículas energéticas fora da proteção da atmosfera e magnetosfera terrestre",
        explanation: "Fora da Terra, astronautas e equipamentos espaciais estão diretamente expostos à radiação e partículas de eventos solares, tornando a previsão do Clima Espacial vital para sua segurança e para o sucesso das missões.",
        relatedChapterId: 'atualmente'
    }
];