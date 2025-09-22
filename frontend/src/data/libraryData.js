// src/data/libraryData.js
export const libraryData = {
    maori: {
        title: "Capítulo 1: Os Māori e os Sopros de Fogo",
        summary: "Descubra a lenda de Kuarasy e os poderosos 'sopros de fogo' que pintam o céu, e o que a ciência da NASA tem a dizer sobre eles.",
        coverImage: "/covers/maori-cover.png",
        pages: [
            {
                imageSrc: '/maori-1.jpeg',
                imageAlt: 'Kuarasy sendo resgatado por um pescador Māori',
                storyText: 'Era uma vez um menino que brilhava. Não era um brilho comum — era um brilho que nascia de dentro, como se guardasse o próprio céu em seu peito. Ele não sabia seu nome, nem de onde vinha. Tudo que sabia... é que precisava seguir a luz.',
            },
            {
                imageSrc: '/maori-2.png',
                imageAlt: 'Kuarasy na praia com os Māori observando o pôr do sol',
                storyText: 'Uma canoa cortou as ondas. Um velho Māori o resgatou.<br/>— Você veio de Tama-nui-te-rā — disse o velho com reverência. — O Grande Sol. Sentimos quando ele nos envia um presente.<br/>O menino sorriu: — Talvez eu seja... ou talvez eu sempre tenha estado com vocês.',
            },
            {
                imageSrc: '/maori-3.png',
                imageAlt: 'Kuarasy na praia com os Maori',
                storyText: 'Na praia, o povo dançava ao ritmo dos tambores. As crianças, com os corpos pintados com as cores da terra, cantavam para o Sol poente.',
            },
            {
                imageSrc: '/maori-4.png',
                imageAlt: 'Kuarasy com a menina Maori',
                storyText: 'Uma menina de olhos curiosos correu até Kuarasy:<br/>— Nossas lendas dizem que o herói Maui tentou laçar o Sol! Ele queria que os dias fossem mais longos para poder brincar!',
            },
            {
                imageSrc: '/maori-5.png',
                imageAlt: 'Kuarasy com a menina Maori',
                storyText: 'Kuarasy ajoelhou-se diante dela:<br/>— E o que vocês fariam se conseguissem prendê-lo?<br/>— Ah... talvez o Sol ficasse bravo! — disse ela, rindo.',
            },
            {
                imageSrc: '/maori-6.png',
                imageAlt: 'Kuarasy com a menina Maori e o velho Maori',
                // Percepção mais plausível (cores do céu)
                storyText: 'O velho pescador aproximou-se, sério.<br/>— Há dias em que o Sol se despede de uma forma... diferente. O céu se enche de um vermelho tão intenso que parece que o próprio ar está em chamas. Nunca entendemos o porquê.',
            },
            {
                imageSrc: '/maori-7.png',
                imageAlt: 'Kuarasy com a menina Maori',
                // Conexão poética de Kuarasy
                storyText: 'Kuarasy ergueu os olhos dourados:<br/>— Esse fogo no céu é o eco da respiração do Sol! Vocês não veem esse sopro de fogo diretamente, mas sentem sua energia. É uma força tão poderosa que, ao tocar a sua atmosfera, faz o próprio ar brilhar com as minhas cores.',
                interactiveNote: {
                    buttonText: 'O que são esses "sopros de fogo"?',
                    title: '🔆 Erupções Solares (Flares)',
                    // Nota interativa mais clara
                    content: 'As lendas dos Māori tentavam explicar os mistérios do céu. Hoje, a ciência nos mostra que o Sol tem explosões de energia chamadas Erupções Solares! Embora não possamos vê-las diretamente, a radiação delas pode energizar a alta atmosfera, intensificando as cores do amanhecer e do pôr do sol.',
                    realtimeDataText: 'Conectando à NASA para dados em tempo real...',
                    source: 'Fonte: API DONKI FLR da NASA'
                }
            }
        ]
    },
    babilonios: {
        title: "Capítulo 2: Os Babilônios e as Sombras no Coração do Sol",
        summary: "Viaje no tempo para a antiga Babilônia e explore como eles buscavam sinais nos céus, e o que a ciência moderna revela sobre as Manchas Solares.",
        coverImage: "/covers/babilonia-cover.png",
        pages: [
            {
                imageSrc: '/babilonia-1.png',
                imageAlt: 'Kuarasy em um zigurate com os Babilônios',
                storyText: 'No alto de um zigurate, sob um céu estrelado, sacerdotes desenhavam o cosmos em tabuletas de argila.<br/>"Šamaš! Olho que tudo vê!", clamavam ao Sol nascente.',
            },
            {
                imageSrc: '/babilonia-2.png',
                imageAlt: 'Kuarasy apontando para o sol com um sacerdote',
                // Diálogo mais plausível, focado em presságios
                storyText: 'Kuarasy caminhou entre eles, curioso.<br/>— Vocês dizem que o Sol tudo vê... mas já notaram as pequenas sombras em seu rosto?<br/>O sumo-sacerdote suspirou:<br/>— Sim. Escuridões que aparecem e somem. Para nós, são sinais de sua ira, momentos de descontentamento.',
            },
            {   imageSrc: '/babilonia-2-1.png',
                imageAlt: 'Detalhe de uma mancha solar',
                storyText: 'Um jovem sacerdote, com um olhar apreensivo, acrescentou: "— E quando a própria Lua, em sua dança, o cobre completamente? Nossas tabuletas nos ajudam a prever esse dia temível! É como se o grande Šamaš estivesse doente, ou fosse devorado! Então preparamos nossos mais importantes rituais para garantir que ele retorne e ilumine a Terra novamente!',

            },
            {
                imageSrc: '/babilonia-3-1.png',
                imageAlt: 'Kuarasy com os sacerdotes babilonios',
                // Resposta de Kuarasy
                storyText: 'Kuarasy sorriu, seus olhos brilhando com uma sabedoria antiga.<br/>— Não são ira, nem doença. Pensem nas pequenas sombras como o Sol respirando fundo, fechando seus olhos por um instante. E quando a Lua o cobre, é um abraço, um jogo de esconde-esconde no céu. Ele está apenas concentrando sua energia.',
            },
            {
                imageSrc: '/babilonia-4.png',
                imageAlt: 'Kuarasy com os sacerdotes babilonios',
                storyText: 'Os sacerdotes se entreolharam, maravilhados.<br/>— Então as sombras e a escuridão não são um sinal de fraqueza ou doença? — perguntou um deles.',
            },
            {
                imageSrc: '/babilonia-5.png',
                imageAlt: 'Kuarasy com os sacerdotes babilonios',
                storyText: '— Longe disso! — respondeu Kuarasy. — São a prova de uma força que se renova. Um poder imenso que se oculta para depois se revelar em grandes sopros de fogo!',
                interactiveNote: {
                    buttonText: 'O que são essas "sombras" no Sol?',
                    title: '🌑 Manchas Solares e Eclipses',
                    // Nota interativa mais clara
                    content: 'As lendas babilônicas buscavam dar sentido às mudanças no céu, como eclipses, que eles eram muito bons em prever! Hoje, a ciência nos mostra que as "sombras" no rosto do Sol são as Manchas Solares (regiões de intensa atividade magnética e com baixa temperatura), e além disso elas aparecem e desaparecem em ciclos de 11 anos. Já os eclipses são quando a Lua se posiciona entre a Terra e o Sol, bloqueando sua luz por um momento. Tudo parte do show cósmico do nosso Sol!',
                    realtimeDataText: 'Verificando o "rosto" de Kuarasy agora...', 
                    source: 'Fonte: Relatório de Manchas Solares NOAA SWPC',
                    moreInfoLink: 'https://www.swpc.noaa.gov/phenomena/sunspots'
                }
                
            }
        ]
    },
    egipcios: {
        title: "Capítulo 3: Os Egípcios e o Hálito de Rá",
        summary: "Aprenda sobre o deus Rá e como o 'vento solar' do Sol cria as lindas luzes das auroras, com dados da NASA.",
        coverImage: "/covers/egito-cover.png",
        pages: [
            {
                imageSrc: '/egito-1.png',
                imageAlt: 'Kuarasy às margens do Nilo',
                storyText: 'Às margens do Nilo, multidões cantavam para Rá enquanto sacerdotes carregavam barcas douradas em sua homenagem.',
            },
            {
                imageSrc: '/egito-2.png',
                imageAlt: 'Crianças egípcias vendo uma aurora',
                storyText: 'Uma sacerdotisa ergueu a voz:<br/>— Rá nasce outra vez! Que sua barca dourada nunca falhe em sua jornada pelo céu!',
            },
            {
                imageSrc: '/egito-3.png',
                imageAlt: 'Kuarasy com a sacerdotisa egípcia',
                storyText: 'Kuarasy se aproximou, sorrindo.<br/>— Vocês celebram sua viagem, mas sabem que, enquanto ele navega, Rá sopra um hálito constante e invisível? Um vento que cruza o espaço.',
            },
            {
                imageSrc: '/egito-4.png',
                imageAlt: 'Kuarasy com a sacerdotisa egípcia',
                storyText: 'A sacerdotisa estremeceu:<br/>— Um hálito invisível?<br/>— Sim. Ele dança até chegar à Terra. E quando chega... o céu também dança.',
            },
            {
                imageSrc: '/egito-5.png',
                imageAlt: 'Kuarasy com a sacerdotisa egípcia',
                storyText: 'Um menino, que ouvia a conversa, gritou:<br/>— As luzes coloridas no céu? Como as pinturas dos deuses?',
            },
            {
                imageSrc: '/egito-6.png',
                imageAlt: 'Kuarasy com a sacerdotisa egípcia',
                storyText: '— Exatamente — disse Kuarasy. — Vocês as chamarão de Auroras. São o presente do hálito de Rá, uma prova de que sua energia nos alcança mesmo durante a noite.',
                interactiveNote: {
                    buttonText: 'Como o "hálito" do Sol pinta o céu?',
                    title: '🌌 Vento Solar e Auroras',
                    // Nota interativa mais clara
                    content: 'As lendas egípcias celebravam a jornada do Sol. Hoje, a ciência sabe que o Sol emite um "hálito" constante, chamado Vento Solar. Quando esse vento atinge o escudo magnético da Terra, ele canaliza partículas para os polos, que brilham e criam as luzes mágicas que chamamos de Auroras!',
                    realtimeDataText: 'Verificando a previsão de auroras...',
                    source: 'Fonte: API DONKI GST da NASA'
                }
            }
        ]
    },
    incas: {
        title: "Capítulo 4: Os Incas e o Coração Ardente do Sol",
        summary: "Explore a reverência dos Incas pelo Sol e descubra como as tempestades solares podem afetar a Terra, com insights da NASA.",
        coverImage: "/covers/incas-cover.png",
        pages: [
            {
                imageSrc: '/incas-1.png',
                imageAlt: 'Kuarasy no templo do Sol com os Incas',
                storyText: 'No coração das montanhas andinas, onde o ar é fino e o Sol parece mais próximo, era o grande festival de Inti Raymi. Cusco, a majestosa capital do Império Inca, vibrava com a música suave das flautas e o ritmo forte dos tambores, enquanto o povo se reunia para a mais importante celebração do ano.',

            },
            {
                imageSrc: '/incas-2.png',
                imageAlt: 'Kuarasy com o sacerdote inca',
                storyText: 'O Inca ergueu os braços: — Inti é nosso pai! Tudo que vive deve a ele sua luz!',
            },
            {
                imageSrc: '/incas-3.png',
                imageAlt: 'Kuarasy com o sacerdote inca',
                storyText: 'Kuarasy, com seu brilho gentil, sorriu. Ele via o amor e o temor nos corações dos Incas. Aproximando-se daqueles que estavam ouvindo, falou com uma voz que parecia sussurrar com o vento da montanha.<br/>— Vocês o amam como filhos e temem sua ausência. Mas sabiam que Inti, às vezes, lança tanta energia para longe de si que poderia, por um instante, fazer a luz da Terra vacilar, apagando até mesmo a chama mais forte que vocês acenderam?',
            },
            {
                imageSrc: '/incas-4-1.png',
                imageAlt: 'Kuarasy com o sacerdote inca',
                storyText: 'Um murmúrio de espanto e apreensão correu pelo povo. A ideia de Inti, seu protetor, causando uma escuridão tão grande era quase inconcebível. Uma jovem tecelã, com os olhos arregalados, perguntou baixinho:<br/>— E o que faríamos sem ele, mesmo que por um breve momento? Como colheríamos? Como viveríamos?',
            },
            {
                imageSrc: '/incas-5.png',
                imageAlt: 'Kuarasy com o sacerdote inca',
                storyText: 'Kuarasy, com a calma de quem conhece os segredos do universo, respondeu:<br/>— Vocês dançariam no escuro, guiados pela fé em seu retorno... porque o Sol sempre volta. Essa é a promessa de sua existência, mesmo quando ele mostra seu lado mais poderoso e misterioso. Não é um castigo, mas uma demonstração de sua imensa e constante energia.',
            },
            {
                imageSrc: '/incas-6.png',
                imageAlt: 'Kuarasy com o sacerdote inca',
                storyText: 'Uma criança, que observava atentamente, finalmente teve coragem de olhar nos olhos dourados de Kuarasy.<br/>— Então Inti nunca nos abandona de verdade? Nem quando ele respira tão forte?<br/>— Nunca — respondeu Kuarasy, tocando o topo da cabeça da criança. — Mas ele deseja ser compreendido em sua plenitude, não apenas adorado em seus mistérios.',
                interactiveNote: {
                    buttonText: 'O que é o "suspiro" tão forte do Sol?',
                    title: '☀️ Ejeções de Massa Coronal (CMEs)',
                    content: 'Há muito tempo, os Incas celebravam o Inti Raymi para ter certeza de que o Sol voltaria depois do inverno. Hoje, não temos medo que o Sol suma, mas que ele nos dê um "espirro" muito forte! O Sol, que é uma grande estrela de fogo, às vezes solta um "suspiro" gigante de plasma, chamado Ejeção de Massa Coronal (EMC), que é um tipo de gás quente. Esse "suspiro" é tão forte que, se chegar perto da Terra, pode causar uma tempestade magnética. Essa tempestade confunde nossos aparelhos, como satélites, GPS e redes de luz, e pode causar "apagões" temporários na nossa tecnologia. Mas não se preocupe, a Terra tem um escudo mágico, o campo magnético, que nos protege muito bem!',
                    realtimeDataText: 'Verificando as CMEs recentes...',
                    source: 'Fonte: API DONKI CME da NASA'
                } 
            }
        ]
    },
    gregos: {
        title: "Capítulo 5: Os Gregos e o Fôlego de Hélio",
        summary: "Mergulhe na mitologia grega e descubra como os antigos viam o Sol, além de aprender sobre as tempestades solares!.",
        coverImage: "/covers/gregos-cover.png",
        pages: [
            {
                imageSrc: '/gregos-1.png',
                imageAlt: 'Kuarasy com os gregos em um templo',
                storyText: 'Em colinas verdes, filósofos discutiam. Crianças brincavam sob o Sol. No horizonte, Hélio conduzia sua carruagem de cavalos flamejantes. <br/>— O Sol é razão! É ordem! — proclamavam os homens.<br/>— Ele nasce e se põe todos os dias, como o compasso perfeito dos deuses.',
            },
            {
                imageSrc: '/gregos-2.png',
                imageAlt: 'Kuarasy com os gregos em um templo',
                storyText: 'Mais tarde após ouvir os gregos, Kuarasy caminhou até eles, seus olhos refletindo tanto o fogo quanto a calma do astro. <br/>— Vocês veneram Hélio, o Deus Sol, mas saibam que ele também é cheio de surpresas — disse com voz firme. — Ele lança tempestades invisíveis que nem o maior filósofo pode prever',
            },
            {
                imageSrc: '/gregos-3.png',
                imageAlt: 'Kuarasy com os gregos em um templo',
                storyText: 'Um jovem curioso, de olhar inquieto, se aproximou:— Tempestades invisíveis? Como algo tão radiante pode esconder fúria?<br/> Kuarasy sorriu de leve: — São ventos de fogo que correm pelo espaço. Eles podem silenciar vozes no ar, apagar luzes na Terra, confundir viajantes e até prejudicar máquinas que voam sobre as nuvens.',
            },
            {
                imageSrc: '/gregos-4.png',
                imageAlt: 'Kuarasy com os gregos em um templo',
                storyText: 'Os filósofos se entreolharam, inseguros. Alguns riram como se fosse um mito distante.<br/>— Se não podemos ver, como acreditar? — murmurou um deles.',

            },
            {
                imageSrc: '/gregos-5.png',
                imageAlt: 'Kuarasy com os gregos em um templo',
                storyText: 'Kuarasy, com a paciência de quem conhece os segredos do universo, respondeu:<br/>— Vocês chamarão isso de ciência! Assim como o vento que não vemos, mas sentimos em nossos rostos, essas tempestades existem. Isso não acontece pelo Sol ser brabo, mas porque ele é uma estrela viva, cheia de energia e movimento, assim como um leão que dorme tranquilo, mas pode rugir quando quiser!.',
                interactiveNote: {
                    buttonText: 'O que são essas "tempestades invisíveis"?',
                    title: '🌪️ Tempestades Geomagnéticas',
                    content: 'Os gregos antigos viam o Sol como um deus poderoso e imutável. Hoje, sabemos que o Sol pode ser muito mais dinâmico! Ele às vezes solta grandes explosões de energia que viajam pelo espaço como tempestades invisíveis. Quando essas tempestades chegam perto da Terra, podem causar tempestades geomagnéticas, que podem afetar nossos satélites, redes de energia e até mesmo a comunicação por rádio. Mas também são responsáveis por criar as lindas auroras que podemos ver perto dos polos!',
                    realtimeDataText: 'Verificando as tempestades geomagnéticas recentes...',
                    source: 'Fonte: API DONKI GST da NASA'
                } 
            }
        ]
    }     

};