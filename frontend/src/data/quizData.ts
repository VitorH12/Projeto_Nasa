// src/data/quizData.ts
import { Question } from '../app/quiz/quiz'; // Imports the Question interface

export const quizData: Question[] = [
    // --- Chapter 1: Sunspots (Babylonians) ---
    {
        id: 'q1',
        question: "What solar phenomenon did the Babylonians interpret as 'shadows on the Sun's face,' which science today calls?",
        options: [
            "Solar Flares",
            "Sunspots",
            "Auroras",
            "Solar Wind"
        ],
        correctAnswer: "Sunspots",
        explanation: "The 'shadows' are Sunspots, cooler and darker regions on the Sun's surface caused by intense magnetic activity. They are the origin of many solar phenomena.",
        relatedChapterId: 'babylonians'
    },
    {
        id: 'q2',
        question: "Sunspots are regions on the Sun's surface that are:",
        options: [
            "Hotter and brighter than the rest of the Sun",
            "Cooler and darker than the rest of the Sun",
            "Places where the Sun is 'sick' or weak",
            "Just optical illusions in Earth's atmosphere"
        ],
        correctAnswer: "Cooler and darker than the rest of the Sun",
        explanation: "Sunspots are areas where strong magnetic fields inhibit heat transport to the surface, making them cooler and, consequently, darker than the surrounding regions.",
        relatedChapterId: 'babylonians'
    },
    {
        id: 'q3',
        question: "Why are Sunspots considered the 'cradle' of most solar activity?",
        options: [
            "Because it's where the Sun 'sleeps' and recovers energy",
            "Because they are regions of intense and complex magnetic activity that can be released",
            "Because they attract meteors that collide with the Sun",
            "Because they are temporary black holes on the solar surface"
        ],
        correctAnswer: "Because they are regions of intense and complex magnetic activity that can be released",
        explanation: "Sunspots are locations where magnetic fields are extremely strong and tangled. The sudden release of this magnetic energy can lead to solar flares and coronal mass ejections.",
        relatedChapterId: 'babylonians'
    },
    {
        id: 'q4',
        question: "Besides Sunspots, what other celestial phenomenon were the Babylonians very good at predicting, interpreting it as an 'embrace' between the Moon and the Sun?",
        options: [
            "The passing of comets",
            "The occurrence of auroras",
            "Eclipses",
            "The changing of the seasons"
        ],
        correctAnswer: "Eclipses",
        explanation: "The Babylonians were talented astronomers and could predict solar and lunar eclipses with remarkable accuracy, interpreting them within their system of omens.",
        relatedChapterId: 'babylonians'
    },
    {
        id: 'q5',
        question: "Sunspots appear and disappear in cycles of approximately how many years?",
        options: [
            "1 year",
            "5 years",
            "11 years",
            "100 years"
        ],
        correctAnswer: "11 years",
        explanation: "Sunspot activity follows a solar cycle of approximately 11 years, varying from a minimum (few spots) to a maximum (many spots and greater solar activity).",
        relatedChapterId: 'babylonians'
    },

    // --- Chapter 2: Solar Flares (Māori) ---
    {
        id: 'q6',
        question: "When the Sun has 'breaths of fire,' as the Māori described, what is actually happening?",
        options: [
            "Coronal Mass Ejections (CMEs)",
            "Solar Wind",
            "Solar Flares",
            "Geomagnetic Storms"
        ],
        correctAnswer: "Solar Flares",
        explanation: "The Māori's 'breaths of fire' refer to Solar Flares, which are bursts of radiation on the Sun's surface. They release energy and can affect Earth's atmosphere.",
        relatedChapterId: 'maori'
    },
    {
        id: 'q7',
        question: "Solar Flares are primarily releases of:",
        options: [
            "Plasma and physical matter",
            "Cold wind",
            "Radiation and light",
            "Water and vapor"
        ],
        correctAnswer: "Radiation and light",
        explanation: "Flares are explosions of electromagnetic radiation (light, X-rays, UV) that travel at the speed of light. Although they can be accompanied by particle ejections, their main feature is the release of radiation.",
        relatedChapterId: 'maori'
    },
    {
        id: 'q8',
        question: "How can Solar Flares affect Earth, even without being seen directly?",
        options: [
            "By causing earthquakes",
            "By drastically increasing the planet's average temperature",
            "By energizing the upper atmosphere and intensifying the colors of dawn and sunset",
            "By blocking sunlight for days"
        ],
        correctAnswer: "By energizing the upper atmosphere and intensifying the colors of dawn and sunset",
        explanation: "Radiation from flares can ionize Earth's upper atmosphere, affecting radio communications and, more subtly, altering how sunlight is scattered, which can intensify the colors of the sky.",
        relatedChapterId: 'maori'
    },
    {
        id: 'q9',
        question: "Solar Flares are classified into categories (A, B, C, M, X). What does the 'X' class indicate?",
        options: [
            "A very weak and insignificant eruption",
            "A medium-intensity eruption",
            "An eruption of extreme power and energy",
            "An eruption that only occurs during the day"
        ],
        correctAnswer: "An eruption of extreme power and energy",
        explanation: "The classification of flares is logarithmic, where the X-class represents the most intense and energetically powerful eruptions, capable of causing significant impacts on Earth.",
        relatedChapterId: 'maori'
    },
    {
        id: 'q10',
        question: "Where do Solar Flares generally originate on the Sun?",
        options: [
            "At the Sun's north pole",
            "In the deepest part of the solar core",
            "In Sunspot regions",
            "Randomly anywhere on the photosphere"
        ],
        correctAnswer: "In Sunspot regions",
        explanation: "Flares are magnetic explosions that occur above Sunspots, where the magnetic fields are most complex and can reconnect, releasing large amounts of energy.",
        relatedChapterId: 'maori'
    },

    // --- Chapter 3: Coronal Mass Ejections (CMEs) (Incas) ---
    {
        id: 'q11',
        question: "The Sun's 'strong sighs,' which the Incas feared for their ability to 'make the Earth's light falter,' are known scientifically as:",
        options: [
            "Sunspots",
            "Solar Wind",
            "Coronal Mass Ejections (CMEs)",
            "Auroras"
        ],
        correctAnswer: "Coronal Mass Ejections (CMEs)",
        explanation: "The 'strong sighs' are Coronal Mass Ejections (CMEs), large clouds of plasma and magnetic fields ejected from the Sun. They are slower than flares but carry more matter and can cause geomagnetic storms.",
        relatedChapterId: 'incas'
    },
    {
        id: 'q12',
        question: "A Coronal Mass Ejection (CME) is primarily composed of:",
        options: [
            "Light and ultraviolet radiation",
            "Plasma (hot ionized gas) and magnetic fields",
            "Meteorites and space dust",
            "Water and ice"
        ],
        correctAnswer: "Plasma (hot ionized gas) and magnetic fields",
        explanation: "CMEs are large clouds of solar plasma (charged particles) and magnetic fields that are ejected from the solar corona into interplanetary space.",
        relatedChapterId: 'incas'
    },
    {
        id: 'q13',
        question: "What is the main difference between a Solar Flare and a Coronal Mass Ejection (CME)?",
        options: [
            "Flares are invisible, and CMEs are always visible to the naked eye",
            "Flares are primarily radiation; CMEs are matter (plasma) and magnetic fields",
            "CMEs cause earthquakes; Flares cause tsunamis",
            "Flares are slower than CMEs"
        ],
        correctAnswer: "Flares are primarily radiation; CMEs are matter (plasma) and magnetic fields",
        explanation: "Flares are bursts of electromagnetic energy that travel at the speed of light. CMEs are explosions of matter (plasma) that travel more slowly but carry much more mass.",
        relatedChapterId: 'incas'
    },
    {
        id: 'q14',
        question: "If a CME is directed towards Earth, what is the main risk it presents?",
        options: [
            "A drastic increase in global temperature",
            "Damage to satellites, power grids, and communication/GPS systems",
            "The creation of new holes in the ozone layer",
            "Attracting asteroids into Earth's orbit"
        ],
        correctAnswer: "Damage to satellites, power grids, and communication/GPS systems",
        explanation: "CMEs can induce electrical currents in long conductors (like power grids), disturb Earth's magnetic field (affecting satellites and GPS), and cause radio blackouts.",
        relatedChapterId: 'incas'
    },
    {
        id: 'q15',
        question: "CMEs are the main cause of what type of 'storm' that can affect Earth?",
        options: [
            "Sandstorms",
            "Snowstorms",
            "Geomagnetic storms",
            "Thunderstorms"
        ],
        correctAnswer: "Geomagnetic storms",
        explanation: "When a CME hits Earth's magnetic field, it can cause a geomagnetic storm, which is a major disturbance of the Earth's magnetosphere.",
        relatedChapterId: 'incas'
    },

    // --- Chapter 4: Solar Wind and Auroras (Egyptians) ---
    {
        id: 'q16',
        question: "What is Ra's 'invisible breath,' which the Egyptians observed and Kuarasy said made the sky 'dance' with colors, to science?",
        options: [
            "Geomagnetic Storms",
            "Sunspots",
            "Solar Flares",
            "Solar Wind and Auroras"
        ],
        correctAnswer: "Solar Wind and Auroras",
        explanation: "The 'invisible breath' is the Solar Wind, a constant stream of particles from the Sun. When it interacts with Earth's magnetic field, it causes the Auroras, the beautiful dancing lights in the sky, especially visible at the poles.",
        relatedChapterId: 'egipcios'
    },
    {
        id: 'q17',
        question: "The Solar Wind is composed of:",
        options: [
            "Space air and oxygen",
            "Charged particles (electrons, protons) from the Sun",
            "Reflected sunlight",
            "Space water vapor"
        ],
        correctAnswer: "Charged particles (electrons, protons) from the Sun",
        explanation: "The Solar Wind is a continuous stream of charged particles, primarily electrons and protons, that are ejected from the solar corona into space.",
        relatedChapterId: 'egipcios'
    },
    {
        id: 'q18',
        question: "What is the most spectacular natural phenomenon caused by the interaction of the Solar Wind (and CMEs) with Earth's magnetic field?",
        options: [
            "Rainbows",
            "Eclipses",
            "Auroras (Borealis and Australis)",
            "Mirages"
        ],
        correctAnswer: "Auroras (Borealis and Australis)",
        explanation: "When charged particles from the Solar Wind and CMEs hit Earth's magnetic field, they are channeled towards the poles and interact with atmospheric gases, producing the colorful lights of the Auroras.",
        relatedChapterId: 'egipcios'
    },
    {
        id: 'q19',
        question: "Why are Auroras most visible near Earth's poles?",
        options: [
            "Because that's where the Sun is closest to the Earth",
            "Because Earth's magnetic fields channel solar particles to these regions",
            "Because the atmosphere is denser at the poles",
            "Because the ice reflects the lights better"
        ],
        correctAnswer: "Because Earth's magnetic fields channel solar particles to these regions",
        explanation: "Earth's magnetic field acts as a shield, but it is weaker at the poles, allowing charged particles from the Solar Wind to penetrate the atmosphere and cause the Auroras.",
        relatedChapterId: 'egipcios'
    },
    {
        id: 'q20',
        question: "What does the Kp Index measure, and how does it relate to Auroras?",
        options: [
            "The temperature of the solar surface; higher temperatures mean more auroras",
            "The amount of clouds in the sky; more clouds mean more auroras",
            "The disturbance of Earth's magnetic field; high levels mean a greater chance of auroras",
            "The wind speed in Earth's atmosphere; strong winds cause auroras"
        ],
        correctAnswer: "The disturbance of Earth's magnetic field; high levels mean a greater chance of auroras",
        explanation: "The Kp Index is a scale that measures the disturbance of Earth's magnetic field. Higher Kp levels (usually 5 and up) indicate greater geomagnetic activity and, consequently, a higher probability of auroras occurring and being visible.",
        relatedChapterId: 'egipcios'
    },

    // --- Chapter 5: Geomagnetic Storms (Greeks) ---
    {
        id: 'q21',
        question: "How did the Greeks try to understand the 'invisible storms' Kuarasy mentioned, and what does modern science use to measure them?",
        options: [
            "Through rituals with Helios and eclipse observations",
            "By observing Sunspots and Flares",
            "With the Kp Index, which measures geomagnetic storms",
            "By analyzing the Solar Wind and Aurora formation"
        ],
        correctAnswer: "With the Kp Index, which measures geomagnetic storms",
        explanation: "The 'invisible storms' are Geomagnetic Storms, caused by intense solar winds and CMEs. Modern science measures them using the Kp Index, which indicates the disturbance in Earth's magnetic field and the potential for technological impacts.",
        relatedChapterId: 'gregos'
    },
    {
        id: 'q22',
        question: "The 'invisible storms' that can 'silence voices on the air and turn off lights on Earth' are known as:",
        options: [
            "Cosmic sandstorms",
            "Geomagnetic storms",
            "Neutrino storms",
            "Lunar dust storms"
        ],
        correctAnswer: "Geomagnetic storms",
        explanation: "Geomagnetic storms are disturbances in Earth's magnetic field that can have various impacts, including radio blackouts and problems with power grids.",
        relatedChapterId: 'gregos'
    },
    {
        id: 'q23',
        question: "Which of the following is not a potential effect of an intense geomagnetic storm on Earth?",
        options: [
            "Damage to orbiting satellites",
            "Disruption of GPS signals",
            "Power outages in electrical grids",
            "Accelerated plant growth"
        ],
        correctAnswer: "Accelerated plant growth",
        explanation: "Geomagnetic storms affect technology but do not have a direct, proven effect on plant growth.",
        relatedChapterId: 'gregos'
    },
    {
        id: 'q24',
        question: "What did Kuarasy mean by 'The Sun is a living star, full of energy and movement, just like a lion that sleeps peacefully but can roar whenever it wants!'?",
        options: [
            "That the Sun has an unpredictable and evil temperament",
            "That the Sun is a living being with emotions",
            "That the Sun, despite seeming calm, has immense and dynamic power that can be released suddenly",
            "That the Sun emits audible sounds in space"
        ],
        correctAnswer: "That the Sun, despite seeming calm, has immense and dynamic power that can be released suddenly",
        explanation: "The metaphor describes the Sun's nature as a star that, although it appears stable, is extremely active and can release large amounts of energy in events like flares and CMEs.",
        relatedChapterId: 'gregos'
    },
    {
        id: 'q25',
        question: "What is Earth's main natural 'protection' against the particles and magnetic fields of solar storms?",
        options: [
            "The ozone layer",
            "Earth's dense atmosphere",
            "The Earth's magnetic field (magnetosphere)",
            "The oceans"
        ],
        correctAnswer: "The Earth's magnetic field (magnetosphere)",
        explanation: "Earth's magnetosphere acts as a shield, deflecting most of the charged particles from the Sun and protecting life and technology on the surface.",
        relatedChapterId: 'gregos'
    },

    // --- Chapter 6: The Sun Today (Currently) ---
    {
        id: 'q26',
        question: "What term do scientists use today to describe how all of the Sun's phenomena (spots, flares, CMEs, and solar wind) interact and affect the Earth?",
        options: [
            "Solar Meteorology",
            "Atmospheric Geophysics",
            "Space Weather",
            "Terrestrial Astrophysics"
        ],
        correctAnswer: "Space Weather",
        explanation: "The term 'Space Weather' is used to describe the conditions on the Sun and in space that can affect systems and technologies on Earth. It encompasses all solar phenomena and their effects on our planet.",
        relatedChapterId: 'atualmente'
    },
    {
        id: 'q27',
        question: "Why is it important for us, in the modern era, to monitor and understand Space Weather?",
        options: [
            "To predict the weather on Earth more accurately",
            "To protect astronauts, satellites, power grids, and communication/GPS systems",
            "To know when the Sun will 'burn out'",
            "To control the speed of light"
        ],
        correctAnswer: "To protect astronauts, satellites, power grids, and communication/GPS systems",
        explanation: "Space Weather can have significant impacts on our technological infrastructure, making monitoring crucial to mitigate risks to critical systems.",
        relatedChapterId: 'atualmente'
    },
    {
        id: 'q28',
        question: "What modern tools are used to observe the Sun and predict Space Weather events?",
        options: [
            "Compasses and astrolabes",
            "Space telescopes, satellites, and ground-based monitoring",
            "Ancient star maps and naked-eye observations",
            "Hourglasses and sundials"
        ],
        correctAnswer: "Space telescopes, satellites, and ground-based monitoring",
        explanation: "NASA and other agencies use a wide range of advanced instruments, including satellites like the SDO (Solar Dynamics Observatory) and ground-based observatories, to constantly monitor the Sun.",
        relatedChapterId: 'atualmente'
    },
    {
        id: 'q29',
        question: "According to Kuarasy, what is the 'modern way of hearing my story'?",
        options: [
            "Worshipping the Sun in ancient temples",
            "Dancing for the Sun at sunset",
            "Understanding Space Weather through science and technology",
            "Consulting oracles and omens"
        ],
        correctAnswer: "Understanding Space Weather through science and technology",
        explanation: "Kuarasy suggests that modern science and technology provide the tools to decipher and understand solar phenomena in a way that goes beyond ancient legends.",
        relatedChapterId: 'atualmente'
    },
    {
        id: 'q30',
        question: "Why are astronauts a group that needs 'special care' regarding Space Weather?",
        options: [
            "Because they need a space tan",
            "Because they are more exposed to solar radiation and energetic particles outside the protection of Earth's atmosphere and magnetosphere",
            "Because spaceships are made of materials that attract Sunspots",
            "Because the Solar Wind pushes their ships out of orbit"
        ],
        correctAnswer: "Because they are more exposed to solar radiation and energetic particles outside the protection of Earth's atmosphere and magnetosphere",
        explanation: "Outside of Earth, astronauts and space equipment are directly exposed to radiation and particles from solar events, making Space Weather prediction vital for their safety and for the success of missions.",
        relatedChapterId: 'atualmente'
    }
];