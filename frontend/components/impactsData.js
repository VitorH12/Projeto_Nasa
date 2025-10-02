// src/data/impactsData.js

export const impactsData = {
  astronauta: {
    title: "Ana, the Guardian of the Stars",
    summary: "Follow Ana on her journey aboard the Space Station and discover why even astronauts need to protect themselves from the Sun.",
    coverImage: "/illustrations/astronauta.png",
    pages: [
      {
        imageSrc: '/astronauta-1.png',
        imageAlt: 'Ana floating in the International Space Station, looking at Earth through the window.',
        storyText: 'My name is Ana. From the Space Station window, Earth is a silent work of art and the Sun, a constant neighbor. Up here, we live in tune with the rhythms of the cosmos, but also with the moods of our star.'
      },
      {
        imageSrc: '/astronauta-2.png',
        imageAlt: 'A monitor in the space station showing an intense solar flare.',
        storyText: 'Today, the Sun decided to grace us with a show. A powerful eruption, a flash of pure energy. On the monitor, the data confirmed: a solar particle event (SEP) was on its way, traveling at incredible speeds.'
      },
      {
        imageSrc: '/astronauta-3.png',
        imageAlt: 'An illustration showing high-energy particles hitting the Space Station.',
        storyText: 'These particles are the Sun\'s most dangerous "breath" for us. Earth\'s magnetosphere protects us from most of it, but here in orbit we are more exposed. The radiation they carry can penetrate the station\'s hull and is a risk to our health.'
      },
      {
        imageSrc: '/astronauta-4.png',
        imageAlt: 'An archive photo of the ISS crew during the 2003 storms.',
        storyText: 'I remembered the stories of the "Halloween Storms" of 2003, which got that nickname because it was October 28, near Halloween. A series of eruptions so intense that the ISS (International Space Station) crew had to take shelter in more shielded areas of the service module for safety. It\'s not science fiction, it\'s standard procedure.'
      },
      {
        videoSrc: '/videos/halloween-solar.mp4',
        imageAlt: 'Video of the ISS crew during the 2003 Halloween Solar Storms.', // Alt text is still good for accessibility
        storyText: 'SOHOs View of 2003 Halloween Solar Storm.'
      },
      {
        imageSrc: '/astronauta-5.png', 
        imageAlt: 'Ana inside a safe compartment of the station, monitoring the storm, reflecting on past events.',
        storyText: 'Even not having lived through those storms firsthand, their lessons shape every procedure we follow. The information we collect today, the shelters being designed, all of this is to ensure that the next generation of explorers, whether on the Moon or Mars, is always safe. It is a legacy of care and science, so that the Sun, our constant neighbor, is always a source of life, and not an unknown danger.',
        interactiveNote: {
            buttonText: 'Why is radiation the biggest risk?',
            title: 'Impact: Radiation for Astronauts',
            content: 'Solar flares and Solar Particle Events (SEPs) accelerate particles to high speeds. Outside the protection of Earth\'s atmosphere, this radiation is a significant health risk for astronauts. In extreme events, the crew needs to take shelter in compartments with extra shielding. Learning from past events, such as the 2003 Halloween Storms, is crucial for developing more effective protections for future long-duration missions, such as those to the Moon and Mars.',
            source: 'https://www.ncei.noaa.gov/news/great-halloween-solar-storm-2003'
        }
      }
    ]
  },

  rede: {
    title: "Maria and the City Lights",
    summary: "Maria is an energy engineer. See how she protects an entire city from an invisible 'breath' from the Sun.",
    coverImage: "/rede.png",
    pages: [
      {
        imageSrc: '/rede-1.png',
        imageAlt: 'Maria in a control room, observing a large panel showing the city\'s power grid at night.',
        storyText: 'My name is Maria, I am an energy engineer. For me, the city at night is a galaxy of lights that needs to be protected. My job is to ensure that this galaxy never goes out.'
      },
      {
        imageSrc: '/rede-2.png',
        imageAlt: 'A red alert flashing on one of Maria\'s monitors, with the title "Geomagnetic Storm Alert G4-G5".',
        storyText: 'Today, the alert didn\'t come from a local substation, but from space. A severe geomagnetic storm, caused by a Coronal Mass Ejection, was about to hit Earth. It\'s the kind of event that tests the limits of our system.'
      },
      {
        imageSrc: '/rede-3.png',
        imageAlt: 'An illustration showing electrical currents being induced in the ground and entering transmission lines.',
        storyText: 'This storm interacts with Earth\'s magnetic field, inducing abnormal electrical currents in the ground. We call them GICs (Geomagnetically Induced Currents). They flow wherever they can: oil pipelines, railways, and, of course, our long power transmission lines.'
      },
      {
        imageSrc: '/rede-4.png',
        imageAlt: 'A stylized black and white photo of newspapers with headlines about the 1989 power outage in Canada.',
        storyText: 'History taught us the lesson the hard way. On March 13, 1989, a solar storm caused the collapse of the entire Québec power grid in Canada. Six million people were without power for nine hours in freezing cold. This event changed everything.'
      },
      {
        imageSrc: '/rede-5.png',
        imageAlt: 'An old engraving showing telegraph operators scared by sparks coming out of their equipment, representing the Carrington Event.',
        storyText: 'And there is always the shadow of the Carrington Event of 1859, the largest solar storm ever recorded! It ignited telegraph stations and created auroras visible even in the Caribbean. If an event of this magnitude happened today, the consequences for our global infrastructure would be catastrophic.'
      },
      {
        imageSrc: '/rede-6.png',
        imageAlt: 'Maria and her team in a meeting, pointing to maps and making strategic decisions.',
        storyText: 'Recently, in May 2024, there was one of the most important events in space weather history, the "Gannon Storm," a name given in honor of space physicist Jennifer Gannon. It was the largest geomagnetic storm and the first G5, or "severe," geomagnetic storm in over two decades, as well as being the most well-documented in history. It transformed the sky with auroras in unexpected places, such as Portugal. But its effects went far beyond beauty. Satellites were harmed, power grids felt the pressure, and even GPS-guided agricultural tractors went off course. NASA and other agencies learned crucial lessons about how Space Weather affects everything, from the ground to space, and how we need to better prepare for the future.'
      },
      {
        imageSrc: '/rede-7.png',
        imageAlt: 'The city remains fully lit, seen from Maria\'s control room, who smiles in relief with her team.',
        storyText: 'The storm arrived. Our sensors detected elevated GICs, but the transformers held up. The protections worked. The city lights remained on. It\'s a silent battle, fought with planning, science, and a deep respect for the power of the Sun.',
        interactiveNote: {
            buttonText: 'Understand the Threat to the Power Grid',
            title: '⚡️ Real Threat: Geomagnetically Induced Currents (GICs)',
            content: 'Geomagnetic storms generate electrical currents in the ground (GICs) that can enter high-voltage power grids. This extra energy can overload and damage transformers, leading to widespread power outages. Space weather monitoring is crucial for operators to take preventive measures.',
            source: 'https://d2pn8kiwq2w21t.cloudfront.net/original_images/infographicsuploadsinfographicsfull11469.jpg',
        }
      }
    ]
  },

  piloto: {
    title: "Carlos and the Polar Route",
    summary: "Fly with Carlos, an experienced pilot, and discover the challenges space weather poses to flights over the poles.",
    coverImage: "/illustrations/piloto.png",
    pages: [
      {
        imageSrc: '/piloto-1.png',
        imageAlt: 'Carlos in an airplane cockpit, flying over a frozen arctic landscape under an aurora.',
        storyText: 'My name is Carlos, I am a commercial pilot. Flying over the Arctic is one of the most beautiful and efficient routes in the world. But here, at the top of the planet, the veil that protects us from space is thinner. We feel the effects of space weather more directly.'
      },
      {
        imageSrc: '/piloto-2.png',
        imageAlt: 'The radio in Carlos\'s cockpit emitting only static, while the GPS display shows "Weak Signal".',
        storyText: 'We received a solar flare alert before takeoff. Now, in flight, the effects have begun. High-frequency (HF) radio communication was full of static. It\'s like trying to hear someone in the middle of a waterfall. The GPS also began to show inaccuracies.'
      },
      {
        imageSrc: '/piloto-3.png',
        imageAlt: 'An illustration showing how solar particles affect the ionosphere over Earth\'s poles.',
        storyText: 'Solar flares release so much energy that they disturb the upper part of our atmosphere and can cause radio blackouts. Geomagnetic storms shake the ionosphere and disrupt satellite signals, as if the connection becomes unstable. On routes near the poles, where Earth\'s magnetic field protects less, these effects arrive faster and we are the first to feel them.'
      },
      {
        imageSrc: '/piloto-4.png',
        imageAlt: 'Flight map showing the original route over the pole and the new route diverted to the south.',
        storyText: 'This is not just a theory. During the intense "Gannon Storm", the Federal Aviation Administration issued warnings. Several airlines diverted their transatlantic flights to lower latitudes as a precaution.'
      },
      {
        imageSrc: '/piloto-5.png',
        imageAlt: '',
        storyText: 'Following protocol, we received a new route from air traffic control, further south, away from the main impact zone. It increases flight time, but safety is non-negotiable. Flying is not just about taking a plane from point A to B, it\'s about managing risks, including those that come from the Sun.',
        interactiveNote: {
            buttonText: 'How does the Sun impact aviation?',
            title: '✈️ Impact: Aviation and Polar Routes',
            content: 'Space weather affects aviation in three main ways: HF radio communication blackouts, degradation of satellite navigation systems (GNSS), and increased radiation exposure for the crew. To mitigate risks during intense solar events, flights on polar routes are often diverted to lower altitudes and latitudes.',
            source: 'https://www.faa.gov/nextgen/programs/weather/awrp/space-weather#:~:text=SWx%20can%20hinder%20communication%20within,need%20for%20long%2Drange%20communication.'
        }
      }
    ]
  },

  fazendeiro: {
    title: "Pedro and the Smart Tractor",
    summary: "Pedro uses cutting-edge technology on his farm, but what happens when that technology relies on signals from space?",
    coverImage: "/illustrations/fazendeiro.png",
    pages: [
        {
            imageSrc: '/fazendeiro-1.png',
            imageAlt: 'Pedro observing his autonomous tractor planting in perfect rows in a corn field.',
            storyText: 'I am Pedro, and this is my farm. In the past, we guided ourselves by the sun and fences. Today, I use precision agriculture. My tractor is guided by GPS and plants each seed with centimeter accuracy. Technology helps me feed the world.'
        },
        {
            imageSrc: '/fazendeiro-2.png',
            imageAlt: 'Pedro\'s tablet showing a geomagnetic storm alert superimposed on the farm map.',
            storyText: 'But today, my navigation system is unstable. The tractor, which normally follows a perfect line, is hesitant. I received an alert on my phone: "Geomagnetic storm in progress. GPS signals may be affected".'
        },
        {
            imageSrc: '/fazendeiro-3.png',
            imageAlt: 'An illustration showing Earth\'s ionosphere being disturbed and distorting satellite signals.',
            storyText: 'The same storm that paints the sky with auroras also stirs the ionosphere, the layer of the atmosphere through which satellite signals travel. This disturbance can delay and distort signals, causing the receiver on my tractor to calculate a wrong position.'
        },
        {
            imageSrc: '/fazendeiro-4.png',
            imageAlt: 'The tractor making a wrong turn, leaving the correct planting line.',
            storyText: 'For me, an error of a few meters can mean wasted seeds, fertilizers, and ultimately, a smaller harvest. It\'s not a matter of life or death, but it\'s a direct economic impact. And it\'s not just me. Think of ships, planes, and even the map app you use.'
        },
        {
            imageSrc: '/fazendeiro-5.png',
            imageAlt: 'Pedro at the wheel of the tractor, taking manual control with a determined smile.',
            storyText: 'During the strong storm of May 2024, that\'s exactly what happened. There were reports of disruptions affecting satellite-guided tractors in the agricultural sector. For now, I\'m going to turn off the autopilot and rely on my own eyes. It\'s a good reminder that, even with all the technology, we are still connected to the cycles of nature and the Sun.',
            interactiveNote: {
                buttonText: 'How does the Sun affect GPS?',
                title: '🌾 Impact: Navigation Systems (GNSS)',
                content: 'Geomagnetic storms disturb Earth\'s ionosphere, which can introduce errors and unavailability in signals from navigation systems like GPS. This has a direct impact on sectors that rely on high-precision positioning, such as modern agriculture, aviation, and logistics.',
                source: 'https://science.nasa.gov/science-research/heliophysics/what-nasa-is-learning-from-the-biggest-geomagnetic-storm-in-20-years/#:~:text=Descubra%20mais%20t%C3%B3picos%20da%20NASA'
            }
        }
    ]
  },

  pessoa: {
    title: "Lia and the Disconnected World",
    summary: "Lia's life is on her phone. Discover what happens when the satellites that connect our world are hit by a solar storm.",
    coverImage: "/pessoa-cover.png",
    pages: [
      {
        imageSrc: '/pessoa-1.png',
        imageAlt: 'Lia sitting in a cafe, trying to use her phone, which shows "No Internet Signal".',
        storyText: 'My name is Lia. My world is here, in the palm of my hand. I talk to my friends, watch videos, work. Everything depends on one thing: connection. And today, that connection is failing.'
      },
      {
        imageSrc: '/pessoa-2.png',
        imageAlt: 'An illustration of communication satellites in low orbit being hit by a wave of energy from the Sun.',
        storyText: 'Up there, in low orbit, hundreds of satellites form an invisible web that connects us. They are the backbone of our digital world. But they are also vulnerable.'
      },
      {
        imageSrc: '/pessoa-3.png',
        imageAlt: 'A Starlink satellite reentering the atmosphere and burning up, like a shooting star.',
        storyText: 'In February 2022, this became clear. A geomagnetic storm, considered moderate, heated and expanded Earth\'s upper atmosphere. Atmospheric drag increased so much that it knocked out 40 newly launched Starlink satellites. They reentered the atmosphere and disintegrated.'
      },
      {
        imageSrc: '/pessoa-4.png',
        imageAlt: 'Lia\'s phone in her pocket, as she talks to a friend in person at the cafe.',
        storyText: 'Forty satellites. It\'s a huge loss and a perfect example of how space weather has a direct economic impact. For me, it means slower internet today. For companies, it means millions of dollars lost and the need to design more robust constellations.'
      },
      {
        imageSrc: '/pessoa-5.png',
        imageAlt: 'Lia putting away her phone and observing the world around her, smiling.',
        storyText: 'Perhaps it\'s a good time to disconnect a bit. It\'s fascinating to think that a storm happening 150 million kilometers away can affect my internet signal. Our connected world is, at the same time, incredibly powerful and surprisingly fragile.',
        interactiveNote: {
            buttonText: 'How are satellites affected?',
            title: '📱 Impact: Satellites and Mega Constellations',
            content: 'Geomagnetic storms can heat the thermosphere, increasing atmospheric drag on satellites in low orbit. This can cause altitude loss and premature re-entry. Additionally, radiation can damage electronic components, forcing satellites into "safe mode" and interrupting services.',
            source: 'https://www.bbc.com/news/world-60317806'
        }
      }
    ]
  }
};