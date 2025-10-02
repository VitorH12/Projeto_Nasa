
// src/data/libraryData.js
export const libraryData = {
    babilonios: { // CAUSA 1: Manchas Solares - a origem da atividade
        title: "Chapter 1: The Babylonians and the Shadows on the Sun's Face",
        summary: "Journey back in time to ancient Babylonia and explore how they sought signs in the " +
                 "Sun's shadows, and what modern science reveals about Sunspots, " +
                 "the true birthplace of solar energy.",
        coverImage: "/covers/babilonia-cover.png",
        audioSrc: "/audio/babilonia-audio.mp3",
        pages: [
            {
                imageSrc: '/babilonia-1.png',
                imageAlt: 'Kuarasy em um zigurate com os Babilônios',
                storyText: 'On the tallest tower, the priests knelt as the Sun arose. Some drew the sky on clay tablets, engraving its secrets.<br/>"Šamaš! All-seeing eye!" they chanted in chorus. "Guide us with your light!"',
            },
            {
                imageSrc: '/babilonia-2.png',
                imageAlt: 'Kuarasy apontando para o sol com um sacerdote',
                storyText: 'Kuarasy walked among them and asked: "If the Sun sees everything… have you noticed the shadows that sometimes appear on his face?"<br/>The high priest bowed his head: "Yes. Small darknesses that come and go. We think they are signs of his wrath"',
            },
            {
                imageSrc: '/babilonia-2-1.png',
                imageAlt: 'Detalhe de uma mancha solar',
                storyText: 'A young priest, with an apprehensive look, added: "And what happens when the Moon itself, in its dance, covers the Sun completely? Our tablets help us to foresee that fearful day! It is as if the great Šamaš is sick, or has been devoured! So we prepare our most important rituals to ensure that he returns and illuminates the Earth again.!"',
            },
            {
                imageSrc: '/babilonia-3-1.png',
                imageAlt: 'Kuarasy com os sacerdotes babilonios',
                storyText: 'Kuarasy smiled, his eyes shining with ancient wisdom. "It is not anger, nor disease. Think of the small shadows as the sun taking a deep breath, closing its eyes for a moment to focus its energy. And when the moon covers it, it is an embrace, a game of hide-and-seek in the sky."',
            },
            {
                imageSrc: '/babilonia-4.png',
                imageAlt: 'Kuarasy com os sacerdotes babilonios',
                storyText: 'The priests looked at each other in wonder. "So shadows and darkness are not a sign of weakness or illness?" one of them asked.',
            },
            {
                imageSrc: '/babilonia-5.png',
                imageAlt: 'Kuarasy com os sacerdotes babilonios',
                storyText: '"Far from it! — replied Kuarasy. — They are proof of a renewed force. An immense power that hides itself and then reveals itself in great breaths of fire and loud sighs.!"', // Adicionado link para próximos capítulos
                interactiveNote: {
                    buttonText: 'What are these "shadows" on the Sun?',
                    title: '🌑 Sunspots and Eclipses',
                    content: 'Babylonian legends sought to make sense of changes in the sky, like eclipses, which they were very good at predicting! Today, science shows us that the "shadows" on the Sun\'s face are Sunspots (regions of intense magnetic activity and lower temperature), and they appear and disappear in 11-year cycles. It is in Sunspots that much of the energy causing eruptions and other "storms" is generated. Eclipses occur when the Moon positions itself between the Earth and the Sun, blocking its light for a moment. All part of our Sun\'s cosmic show!',
                    realtimeDataText: 'Checking Kuarasy\'s "face" now...',
                    source: 'Source: NOAA SWPC Sunspot Report',
                    moreInfoLink: 'https://www.swpc.noaa.gov/phenomena/sunspotssolar-cycle'
                }
            }
        ]
    },
    maori: { // CAUSA 2: Erupções Solares (Flares) - primeiro efeito das manchas
        title: "Chapter 2: The Māori and the Breaths of Fire",
        summary: "Discover the legend of Kuarasy and the powerful 'breaths of fire' that paint the sky, " +
                 "what science has to say about them, and how they are born from " +
                 "Sunspots.",
        coverImage: "/covers/maori-cover.png",
        audioSrc: "/audio/maori-audio.mp3",
        pages: [
            {
                imageSrc: '/maori-2.png',
                imageAlt: 'Kuarasy na praia com os Māori observando o pôr do sol',
                storyText: 'A canoe cut through the waves. An old Maori man had rescued Kuarasy from the ocean after a long voyage to New Zealand, the home of the Maori. "You came from Tama-nui-te-rā," the old man said reverently. "The Great Sun. We feel it when he sends us a gift." The boy smiled. "Perhaps I am... or perhaps I have always been with you.".',
            },
            {
                imageSrc: '/maori-3.png',
                imageAlt: 'Kuarasy na praia com os Maori',
                storyText: 'The women beat the drums, and the children painted their bodies with the colors of the earth. Everyone sang to the Sun, as if singing to a friend.',
            },
            {
                imageSrc: '/maori-4.png',
                imageAlt: 'Kuarasy com a menina Maori',
                storyText: 'Suddenly, a girl ran up to Kuarasy, excited: — Maui tried to lasso the Sun! He wanted the days to be longer to help the people…<br/> She paused for a moment, thought like a child, and added with a mischievous smile: — … and that way there would also be more time to play!',
            },
            {
                imageSrc: '/maori-5.png',
                imageAlt: 'Kuarasy com a menina Maori',
                storyText: 'Kuarasy knelt before her and asked: — And what would you do if he managed to trap it?<br/> The girl started to laugh, hiding her face with her hands: — Ah… maybe the Sun would get angry!.',
            },
            {
                imageSrc: '/maori-6.png',
                imageAlt: 'Kuarasy com a menina Maori e o velho Maori',
                storyText: 'The old fisherman approached, serious.<br/>— There are days when the Sun says goodbye in a... different way. The sky fills with such an intense red that it seems as if the air itself is on fire. We never understand why',
            },
            {
                imageSrc: '/maori-7.png',
                imageAlt: 'Kuarasy com a menina Maori',
                storyText: "This fire in the sky is the echo of the Sun's breath! The energy that gathers in the Sun's shadows (sunspots) explodes and spreads into light. You do not see this fiery breath directly, but you feel its energy. It is a force so powerful that, when it touches Earth's upper atmosphere, it makes the very air glow with my colors.", // Linka de volta para manchas solares
                interactiveNote: {
                    buttonText: 'What are these "breaths of fire"?',
                    title: '🔆 Solar Flares',
                    content: 'Māori legends tried to explain the mysteries of the sky. Today, science shows us that the Sun has energy explosions called Solar Flares! They originate in Sunspot regions, where magnetic energy accumulates and is suddenly released. Although we cannot see them directly, their radiation can energize the upper atmosphere, intensifying the colors of sunrise and sunset. An intense Flare can also be the beginning of a powerful sigh from the Sun, which we\'ll see next!', // Prepara para CMEs
                    realtimeDataText: 'Connecting to NASA for real-time data...',
                    source: 'Source: NASA DONKI FLR API'
                }
            }
        ]
    },
    incas: { // CAUSA 3: Ejeções de Massa Coronal (CMEs) - o "suspiro forte"
        title: "Chapter 3: The Incas and the Sun's Strong Sigh",
        summary: "Explore the Incas' reverence for the Sun and discover how the Sun's 'strong sighs' " +
                 "can affect Earth, and how they are " +
                 "even more powerful than the 'breaths of fire'.",
        coverImage: "/covers/incas-cover.png",
        audioSrc: "/audio/incas-audio.mp3",
        pages: [
            {
                imageSrc: '/incas-1.png',
                imageAlt: 'Kuarasy no templo do Sol com os Incas',
                storyText: 'It was the time of Inti Raymi. Cusco pulsed with music and colors: drums echoed, feet stamped the earth in circular dances, and adorned llamas paraded before the golden temple.',
            },
            {
                imageSrc: '/incas-2.png',
                imageAlt: 'Kuarasy com o sacerdote inca',
                storyText: 'The Inca raised his arms to the sky: "Inti is our father! All life breathes because his light sustains it!"',
            },
            {
                imageSrc: '/incas-3.png',
                imageAlt: 'Kuarasy com o sacerdote inca',
                storyText: 'Kuarasy, with his gentle glow, smiled. He saw the love and fear in the hearts of the Incas. Approaching those listening, he spoke in a voice that seemed to whisper with the mountain wind. "You love him like children and fear his absence. But did you know that Inti sometimes casts so much energy away from himself that he could, for an instant, make the light of the Earth waver, extinguishing even the brightest flame you have lit?',
            },
            {
                imageSrc: '/incas-4-1.png',
                imageAlt: 'Kuarasy com o sacerdote inca',
                storyText: 'A murmur of astonishment and apprehension ran through the people. The idea of ​​Inti, their protector, causing such darkness was almost inconceivable. A young weaver, wide-eyed, asked softly, "And what would we do without him, even for a brief moment? How would we harvest? How would we live?"?',
            },
            {
                imageSrc: '/incas-5.png',
                imageAlt: 'Kuarasy com o sacerdote inca',
                storyText: 'Kuarasy, with the calm of someone who knows the secrets of the universe, replied: "You would dance in the dark, guided by faith in its return... because the Sun always returns. That is the promise of its existence, even when it shows its most powerful and mysterious side. It is not a punishment, but a demonstration of its immense and constant energy."', // Linka para flares
            },
            {
                imageSrc: '/incas-6.png',
                imageAlt: 'Kuarasy com o sacerdote inca',
                storyText: "A child, who had been watching intently, finally had the courage to look into Kuarasy's golden eyes. - So Inti never truly abandons us? Not even when he breathes so heavily? - Never, Kuarasy replied, touching the top of the child's head. - But he wishes to be understood in his fullness, not just worshipped in his mysteries.",
                interactiveNote: {
                    buttonText: 'What is the Sun\'s "strong sigh"?',
                    title: '☀️ Coronal Mass Ejections (CMEs)',
                    content: 'A long time ago, the Incas celebrated Inti Raymi to ensure the Sun would return after winter. Today, we don\'t fear the Sun disappearing, but that it might give us a very "strong sigh"! The Sun, which is a great ball of fire, sometimes releases a giant "sigh" of plasma (hot gas), called a Coronal Mass Ejection (CME). This "sigh" is so powerful that, if it comes close to Earth, it can cause a magnetic storm. It is a much larger release of material than Solar Flares, which we saw earlier. A CME takes longer to reach Earth, but carries much more energy and matter, potentially causing an even stronger "breath" from the Sun!', // Linka CMEs a Flares e prepara para Vento Solar
                    realtimeDataText: 'Checking for recent CMEs...',
                    source: 'Source: NASA DONKI CME API'
                }
            }
        ]
    },
    egipcios: { // EFEITO 1: Vento Solar e Auroras - o "hálito" constante
        title: "Chapter 4: The Egyptians and Ra's Breath (Solar Wind)",
        summary: "Learn about the god Ra and how the Sun's constant 'breath' creates the beautiful " +
                 "lights of the auroras, with datas, and how 'strong sighs' can " +
                 "intensify this breath.",
        coverImage: "/covers/egito-cover.png",
        audioSrc: "/audio/egipcios-audio.mp3",
        pages: [
            {
                imageSrc: '/egito-1.png',
                imageAlt: 'Kuarasy às margens do Nilo',
                storyText: 'On the banks of the Nile River, the people gathered in celebration. Priests carried golden boats, while children cast flowers upon the waters',
            },
            {
                imageSrc: '/egito-2.png',
                imageAlt: 'Crianças egípcias vendo uma aurora',
                storyText: 'A priestess raised her voice: "Ra is reborn once again! May his boat never fail to cross the sky!"',
            },
            {
                imageSrc: '/egito-3.png',
                imageAlt: 'Kuarasy com a sacerdotisa egípcia',
                storyText: 'Kuarasy moved, smiling.<br/>— You celebrate his voyage, but do you know that, as he sails, Ra blows a constant and invisible breath? A wind that crosses space, made of small particles. And, sometimes, a strong sigh from the Sun (the CMEs) makes this breath even denser and more powerful!', // Linka com CMEs
            },
            {
                imageSrc: '/egito-4.png',
                imageAlt: 'Kuarasy com a sacerdotisa egípcia',
                storyText: 'The priestess shuddered:<br/>— An invisible breath?<br/>— Yes. It dances until it reaches the Earth. And when it arrives... the sky also dances, creating wonderful colors, especially in the distant lands of the north and south.',
            },
            {
                imageSrc: '/egito-5.png',
                imageAlt: 'Kuarasy com a sacerdotisa egípcia',
                storyText: 'A kid, who was listening to the conversation, shouted:<br/>— The colored lights in the sky? Like the paintings of the gods?',
            },
            {
                imageSrc: '/egito-6.png',
                imageAlt: 'Kuarasy com a sacerdotisa egípcia',
                storyText: "-Exactly, said Kuarasy. - You will call them Auroras. They are the gift of Ra's breath, proof that my energy reaches us even in the night. And the stronger my breath or the louder sigh that escapes me, the more vibrant and spectacular these dancing lights will be!", // Linka com CMEs e Vento Solar
                interactiveNote: {
                    buttonText: 'How does the Sun\'s "breath" paint the sky?',
                    title: '🌌 Solar Wind and Auroras',
                    content: 'Egyptian legends celebrated the Sun\'s journey. Today, science knows that the Sun emits a constant "breath" called Solar Wind. This wind is made of particles that come directly from the Sun. When this wind or a "strong sigh" (a CME) hits Earth\'s magnetic shield, it channels these particles towards the poles, which glow and create the magical lights we call Auroras! The intensity of the auroras depends on how strong this "breath" from the Sun is, which can be measured by the Kp Index, a sign that a **storm** may be approaching!', // Prepara para Tempestades Geomagnéticas
                    realtimeDataText: 'Checking aurora forecast...',
                    source: 'Source: NASA DONKI GST API',
                    moreInfoLink: 'https://www.swpc.noaa.gov/content/tips-viewing-aurora'
                }
            }
        ]
    },
    gregos: { // EFEITO 2: Tempestades Geomagnéticas - o impacto do hálito forte
        title: "Chapter 5: The Greeks and Helios' Invisible Storms",
        summary: "Dive into Greek mythology and discover how the ancients viewed the Sun, " +
                 "as well as learning about solar storms and how the Sun's 'breath' " +
                 "and 'strong sighs' can affect Earth.",
        coverImage: "/covers/gregos-cover.png",
        audioSrc: "/audio/gregos-audio.mp3",
        pages: [
            {
                imageSrc: '/gregos-1.png',
                imageAlt: 'Kuarasy com os gregos em um templo',
                storyText: 'On the green hills, philosophers debated under the Sun. Some raised their hands, others pointed to the sky, as if trying to solve a riddle. In the distance, Helios sped by in his chariot of flaming horses. - The Sun is reason! It is order! — proclaimed the men.<br/>— He rises and sets every day, like the perfect compass of the gods.',
            },
            {
                imageSrc: '/gregos-2.png',
                imageAlt: 'Kuarasy com os gregos em um templo',
                storyText: 'Later, after listening to the Greeks, Kuarasy walked up to them, his eyes reflecting both the fire and the calm of the star. "You worship Helios, the sun god, but know that he is also full of surprises," he said firmly. "He unleashes invisible storms that not even the greatest philosopher can foresee, caused by his heavy breathing and sighs!"', // Linka com CMEs e Vento Solar
            },
            {
                imageSrc: '/gregos-3.png',
                imageAlt: 'Kuarasy com os gregos em um templo',
                storyText: 'A curious young man, with a restless look, approached: "Invisible storms? How can something so radiant hide fury?" Kuarasy smiled slightly: "They are winds of fire that run through space. They can silence voices in the air, extinguish lights on Earth, confuse travelers and even harm machines that fly above the clouds. This is the true fury, invisible, but powerful."',
            },
            {
                imageSrc: '/gregos-4.png',
                imageAlt: 'Kuarasy com os gregos em um templo',
                storyText: 'The philosophers looked at each other, uncertain. Some laughed as if it were a distant myth.<br/>"If we can not see it, how can we believe it?" murmured one of them.',
            },
            {
                imageSrc: '/gregos-5.png',
                imageAlt: 'Kuarasy com os gregos em um templo',
                storyText: 'Kuarasy, with the patience of someone who knows the secrets of the universe, replied: "You will call this science! Just like the wind we can not see but feel on our faces, these storms exist. This does not happen because the Sun is fierce, but because it is a living star, full of energy and movement, just like a lion that sleeps peacefully but can roar whenever it wants! And the intensity of this "roar" can be measured, alerting us to its impact!"', // Prepara para Clima Espacial
                interactiveNote: {
                    buttonText: 'What are these "invisible storms"?',
                    title: '🌪️ Geomagnetic Storms and Kp Index',
                    content: 'The ancient Greeks viewed the Sun as a powerful and unchanging god. Today, we know the Sun can be much more dynamic! When the Solar Wind and, especially, CMEs (the "strong sighs") hit Earth\'s magnetic field, they can cause geomagnetic storms. These storms can affect our satellites, power grids, and even radio communication. The Kp Index measures the intensity of these disturbances, and it alerts us to potential impacts on our technology and the visibility of auroras!',
                    realtimeDataText: 'Checking current geomagnetic storm level...',
                    source: 'Source: NASA DONKI GST API'
                }
            }
        ]
    },
    atualmente: { // EFEITO FINAL: Clima Espacial e Impactos Modernos - a grande síntese
        title: "Chapter 6: The Sun Today and Space Weather",
        summary: "Discover how the Sun is currently behaving and how all the " +
                 "phenomena (sunspots, breaths, sighs, and winds) combine to " +
                 "create Space Weather and affect our planet",
        coverImage: "/covers/atuais-cover.png",
        audioSrc: "/audio/atualmente-audio.mp3", // Correção: "atuais" deve ser "atualmente" no caminho do áudio
        pages: [
            {
                imageSrc: '/atualmente-1.png',
                imageAlt: 'Kuarasy olhando para o sol com um tablet',
                storyText: 'In a wide field filled with solar panels, children wore special glasses and gazed at the sky. Scientists, in buildings full of glowing screens, watched every detail of the Sun. And airplanes traced lines across the sky, dependent on the energy and light the Sun gives every day.',
            },
            {
                imageSrc: '/atualmente-2.png',
                imageAlt: 'Kuarasy olhando para o sol com um tablet',
                storyText: "A girl, who had heard all of Kuarasy's stories, turned to him with eyes full of curiosity. </br>-Kuarasy, you told us about the 'shadows' of the Babylonians, the 'fire breaths' of the Maori, the 'heavy sighs' of the Incas, and the 'breath' of Ra that paints the sky... What does all this mean for us today? Kuarasy smiled, and his voice sounded like the gentle warmth of the morning sun. - Everything you have learned, every legend, every mystery... today, scientists have a name for it: <strong>Space Weather</strong>. It is the way my breath, my spots, and my storms travel through space and touch your world.",
            },
            {
                imageSrc: '/atualmente-3.png',
                imageAlt: 'Kuarasy olhando para o sol com um tablet',
                storyText: 'The girl looked at the scientists in the control room and then at the plane in the sky. "So... can space weather really affect us? Like a rainstorm?" "Exactly," Kuarasy said, gesturing to the surrounding scenery. "And that is why you are watching the Sun so carefully today. The fire breaths (flares) can disrupt communications for pilots flying near the poles. And the massive storms can threaten to knock out city lights if power engineers are not vigilant.',
            },
            {
                imageSrc: '/atualmente-4.png',
                imageAlt: 'Kuarasy olhando para o sol com um tablet',
                storyText: '— They can even confuse the GPS signals that guide farmers to their crops and the satellites that carry their voices and videos to the other side of the world.',
            },
            {
                imageSrc: '/atualmente-5-1.png',
                imageAlt: 'Kuarasy olhando para o sol com um tablet',
                storyText: 'And of course, I need to be especially careful with the astronauts, the travelers who come closest to the Sun.',
            },
            {
                imageSrc: '/atualmente-6-1.png',
                imageAlt: 'Kuarasy olhando para o sol com um tablet',
                storyText: 'The girl looked at him in wonder. "So, everything is connected." "It always has been," Kuarasy replied. "Ancient peoples looked at me with respect and tried to understand my messages. Today, you do the same, but with telescopes, satellites, and science. Understanding Space Weather is the modern way of hearing my story."',
            },
            {
                imageSrc: '/atualmente-7-1.png',
                imageAlt: 'Kuarasy olhando para o sol com um tablet',
                storyText: "- And you... who are you really? the girl asked. He knelt, and his golden eyes reflected the sun's brightness. - I am the memory of the sun, the voice of the stars. But in the ancient Tupi language, here in this land, my name is Kuarasy. And Kuarasy means... <strong>Sun</strong>. The children approached, touching hands. And for the first time, the sun did not seem distant. He was a force, a neighbor, a story that everyone could now begin to understand.",
            }
        ]
    }
}