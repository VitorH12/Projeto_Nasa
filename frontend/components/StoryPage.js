// src/components/StoryPage.js
'use client';
import { useState, useEffect, useRef } from 'react'; // Import useRef here
import Image from 'next/image';
import React from 'react';

// Add audioSrc to props
export default function StoryPage({ imageSrc, imageAlt, storyText, interactiveNote, audioSrc, videoSrc }) {
    const [noteVisible, setNoteVisible] = useState(false);
    const [realtimeData, setRealtimeData] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [apiDataLoaded, setApiDataLoaded] = useState(false);

    // Ref for the audio element
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false); // State to control UI play/pause

    // Effect to manage chapter audio playback
    useEffect(() => {
        if (audioRef.current) {
            // Pause previous audio, if any
            audioRef.current.pause();
            audioRef.current.currentTime = 0; // Restart audio

            if (audioSrc) {
                audioRef.current.src = audioSrc;
                audioRef.current.loop = true; // Set to loop
                audioRef.current.volume = 0.5; // Set an initial volume

                // Try to play. Browsers may block auto-play without user interaction.
                audioRef.current.play()
                    .then(() => setIsPlaying(true)) // Update state if playback starts
                    .catch(error => {
                        console.log("Auto-play blocked, user interaction needed:", error);
                        setIsPlaying(false); // Ensure state reflects not playing
                    });
            } else {
                audioRef.current.src = ''; // Clear source if no audio
                setIsPlaying(false);
            }
        }
    }, [audioSrc]); // React when audioSrc changes (i.e., chapter changes)

    // Functions for audio control (optional, can be added to UI)
    const togglePlayPauseAudio = () => {
        if (audioRef.current) {
            if (audioRef.current.paused) {
                audioRef.current.play().then(() => setIsPlaying(true)).catch(e => console.error("Error trying to play audio:", e));
            } else {
                audioRef.current.pause();
                setIsPlaying(false);
            }
        }
    };

    const changeAudioVolume = (e) => {
        if (audioRef.current) {
            audioRef.current.volume = e.target.value;
        }
    };

    // Function to fetch API data
    const fetchRealtimeData = async () => {
        if (!interactiveNote) return;

        // Avoid multiple requests if already loading or if data has already been loaded for this note
        if (isLoading || apiDataLoaded) {
            console.log('API call skipped: already loading or data already loaded for this note.');
            return;
        }

        setIsLoading(true); // Indicate that loading has started
        // Set a temporary 'loading' state for the user to see
        setRealtimeData('Fetching data...');

        const apiKey = "u5NsMGeGaw39nszCF7A1M6WGjPHgejOnVxVbVXBI"; // YOUR KEY HERE!
        if (!apiKey || apiKey.length < 20) {
            setRealtimeData('Error: NASA API Key not configured or invalid in code.');
            setIsLoading(false);
            setApiDataLoaded(true); // Mark as loaded (with error) so it doesn't try again immediately
            return;
        }

        const today = new Date().toISOString().split('T')[0]; // Today's date (YYYY-MM-DD)
        const sevenDaysAgo = new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]; // 7 days ago

        try {
            // Logic for Solar Flares
            if (interactiveNote.title.includes('Solar Flares')) {
                const response = await fetch(`https://api.nasa.gov/DONKI/FLR?startDate=${sevenDaysAgo}&endDate=${today}&api_key=${apiKey}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();

                let apiResultText;
                if (data && data.length > 0) {
                    const latestFlare = data.sort((a, b) => new Date(b.beginTime).getTime() - new Date(a.beginTime).getTime())[0];
                    const flareClass = latestFlare.classType || latestFlare.flr_goescls || 'Unknown';
                    const formattedNote = latestFlare.note ? `A curiosity scientists observed: "${latestFlare.note}"` : '';

                    apiResultText = (
                        `Look what the Sun did recently!\n` +
                        `On ${new Date(latestFlare.beginTime).toLocaleDateString('en-US')}, around ${new Date(latestFlare.beginTime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'UTC' })} UTC,\n` +
                        `there was a huge 'sneeze' of light and energy, a <strong>Class ${flareClass} Solar Flare </strong>! Solar flares are classified by their classes A, B, C, M, and X, with class X being the most energetic and class A the weakest.\n` +
                        `The strongest moment of this 'sneeze' was at ${new Date(latestFlare.peakTime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'UTC' })} UTC.\n` +
                        `It came from a part of the Sun called ${latestFlare.sourceLocation || 'Not specified'}.\n\n` +
                        `${formattedNote}\n\n`
                    );
                } else {
                    apiResultText = 'No solar flares (breaths of fire) detected in the last 7 days.';
                }
                setRealtimeData(apiResultText);

            }
            // ----- Logic for Sunspots (Active Regions) -----
            else if (interactiveNote.title.includes('Sunspots')) {
                function getMagClassDescription(magClass) {
                    if (!magClass) return 'with unknown magnetism';

                    const lowerMagClass = magClass.toLowerCase();

                    // Simplification of magnetic classes for a child-friendly description
                    if (lowerMagClass.includes('delta') || lowerMagClass.includes('gamma') || lowerMagClass === 'd' || lowerMagClass === 'g' || lowerMagClass === 'bg') { 
                        return 'VERY tight and energetic magnetism (potential for large "sneezes")';
                    } else if (lowerMagClass.includes('b') || lowerMagClass === 'b') { 
                        return 'somewhat tight magnetism (potential for medium "sneezes")';
                    } else if (lowerMagClass.includes('alpha') || lowerMagClass === 'a') {
                        return 'calm magnetism (low potential for "sneezes")';
                    }
                    return 'magnetism that scientists are observing';
                }
                try {
                    const response = await fetch(`https://services.swpc.noaa.gov/json/sunspot_report.json`);
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const data = await response.json();
                    let apiResultText = '';
                    if (data && data.length > 0) {
                        // Sort reports by most recent date/time to get the newest observation
                        const sortedReports = data.sort((a, b) => new Date(b.time_tag).getTime() - new Date(a.time_tag).getTime());
                        const latestReport = sortedReports[0]; // The most recent observation

                        // Count the number of unique active regions in the most recent observation (or total)
                        const uniqueRegions = new Set(data.map(spot => spot.Region));
                        const numberOfActiveRegions = uniqueRegions.size;

                        const regionNum = latestReport.Region || 'Unknown';
                        const location = latestReport.Location || 'Not specified';
                        const numSpots = latestReport.Numspot > 0 ? latestReport.Numspot : 'few';
                        const magClass = latestReport.Magclass || 'Not informed';
                        const magDescription = getMagClassDescription(magClass); // <--- Call the new function here!

                        const obsTime = new Date(latestReport.time_tag).toLocaleString('en-US', { dateStyle: 'short', timeStyle: 'short' });

                        // Decide how to present the information
                        if (numberOfActiveRegions > 1) {
                            apiResultText = `NOAA scientists are observing ${numberOfActiveRegions} active regions with "shadows" on the Sun!<br/><br/>` +
                                `The latest observation, from ${obsTime}, details Solar Region #${regionNum}.<br/>` +
                                `It is at ${location}, with ${numSpots} sunspot(s) and has a magnetism of class ${magClass}, characterized as ${magDescription}.<br/>` +
                                `It is in these areas with a lot of 'stored' energy that Kuarasy can have a big "sneeze" (solar flare)!`;
                        } else {
                            apiResultText = `NOAA scientists are observing the "shadows" on the Sun!<br/><br/>` +
                                `The last observation, from ${obsTime}, details Solar Region #${regionNum}.<br/>` +
                                `It is at ${location}, with ${numSpots} sunspot(s) and has a magnetism of class ${magClass}, characterized as ${magDescription}.<br/>` +
                                `This is the main area where Kuarasy is concentrating its energy, potentially having strong "sneezes" (solar flares)!`;
                        }

                    } else {
                        apiResultText = 'No significant active regions (sunspots) detected on the Sun right now. Kuarasy\'s face is "clean" and calm!';
                    }
                    setRealtimeData(apiResultText);
                } catch (error) {
                    console.error("Error fetching sunspot data:", error);
                    setRealtimeData('Error loading sunspot data. Check your connection or API Key. Please try again later.');
                }
            }
            // ----- Logic for Solar Wind and Auroras (GST) -----
            else if (interactiveNote.title.includes('Solar Wind and Auroras')) {
                const response = await fetch(`https://api.nasa.gov/DONKI/GST?startDate=${sevenDaysAgo}&endDate=${today}&api_key=${apiKey}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                const getKpDescription = (kp) => {
                    if (isNaN(kp)) {
                        return "Could not retrieve a Kp Index value. Geomagnetic activity is unknown.";
                    }
                    
                    if (kp <= 2) {
                        return "<b>Low Activity:</b> At this level, auroras are typically far to the north, quite dim, and not very active.";
                    } else if (kp <= 5) {
                        return "<b>Moderate Activity:</b> The aurora moves further from the poles, becomes brighter, and shows more activity. A great show if you're in the right place!";
                    } else if (kp <= 7) {
                        return "<b>High Activity:</b> The aurora expands, becoming very bright and dynamic. It might be possible to see it from the northern edge of the United States.";
                    } else { // Kp 8 or 9
                        return "<b>Extreme Activity (Geomagnetic Storm):</b> The best auroras occur at these levels! They expand towards the equator, becoming very bright and visible to a large number of people.";
                    }
                };

                let apiResultText;
                if (data && data.length > 0) {
                    const latestStorm = data.sort((a, b) => new Date(b.startTime).getTime() - new Date(a.startTime).getTime())[0];
                    const kpValue = latestStorm.allKpIndex && latestStorm.allKpIndex.length > 0 ? latestStorm.allKpIndex[0].kpIndex : 'N/A';
                    const date = latestStorm.startTime ? new Date(latestStorm.startTime).toLocaleDateString('en-US') : 'Unknown date';
                    const time = latestStorm.startTime ? new Date(latestStorm.startTime).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'UTC' }) + ' UTC' : 'Unknown time';
                    const numericKp = parseInt(kpValue, 10);
                    const description = getKpDescription(numericKp);
                    apiResultText = `The most recent geomagnetic storm had a Kp Level of <strong>${kpValue}</strong>, on ${date} around ${time}.<br/><br/>` +
                        `According to NOAA, this means:<br/>${description}<br/><br/>` +
                        `The Kp Index measures the disturbance of Earth's magnetic field (from 0 to 9). High levels (5 and above) mean a much higher chance of seeing the magical lights of the auroras shining in the sky!` +
                        `<br/><br/><hr style="border-top: 1px dashed #ccc; border-bottom: none; margin: 20px 0;" />`
                } else {
                    apiResultText = 'No recent geomagnetic storms detected in the last 7 days. Low chance of auroras.';
                }
                setRealtimeData(apiResultText);
            }
            // ----- LOGIC HERE for Coronal Mass Ejections (CMEs) -----
            else if (interactiveNote.title.includes('Coronal Mass Ejections (CMEs)')) {
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

                        const startTime = new Date(latestCME.startTime).toLocaleString('en-US', { dateStyle: 'short', timeStyle: 'short', timeZone: 'UTC' }) + ' UTC';
                        const speed = analysis.speed ? `${Math.round(analysis.speed)} km/s` : 'Unknown';
                        const halfAngle = analysis.halfAngle ? `${analysis.halfAngle}°` : 'Unknown';
                        const sourceLocation = latestCME.sourceLocation || 'Not specified';
                        const note = latestCME.note || 'No additional details.';

                        let impactStatus = 'No direct Earth impact predicted.';
                        let arrivalTime = '';

                        if (analysis.enlilList && analysis.enlilList.length > 0) {
                            const enlilAnalysis = analysis.enlilList[0];
                            if (enlilAnalysis.isEarthGB) {
                                impactStatus = 'There might be a glancing (light) impact on Earth!';
                            } else if (enlilAnalysis.isEarthMinorImpact || enlilAnalysis.isEarthModerateImpact || enlilAnalysis.isEarthHighImpact) {
                                impactStatus = 'An impact on Earth is predicted!';
                            }

                            if (enlilAnalysis.estimatedShockArrivalTime) {
                                arrivalTime = `<strong>Estimated Arrival:</strong> ${new Date(enlilAnalysis.estimatedShockArrivalTime).toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'short', timeZone: 'UTC' })} UTC.`;
                            } else if (impactStatus !== 'No direct Earth impact predicted.') {
                                arrivalTime = '<strong>No estimated arrival time yet.</strong>';
                            }
                        }

                        apiResultText = (
                            `<h3>Latest Coronal Mass Ejection (CME) Recorded:</h3>` +
                            `<div style="margin-bottom: 1.5rem;">` +
                            `<strong>Start:</strong> ${startTime}<br />` +
                            `<strong>Speed:</strong> ${speed}<br />` +
                            `<strong>Angle:</strong> ${halfAngle}<br />` +
                            `<strong>Origin:</strong> ${sourceLocation}<br />` +
                            `<strong>Earth Impact:</strong> ${impactStatus}<br />` +
                            `${arrivalTime ? `${arrivalTime}<br />` : ''}` +
                            `<em>Scientists' Note:</em> "${note}"` +
                            `</div>`
                        );

                    } else {
                        apiResultText = 'No Coronal Mass Ejection (strong sigh) with accurate analysis detected in the last 7 days.';
                    }
                } else {
                    apiResultText = 'No Coronal Mass Ejection (strong sigh) detected in the last 7 days.';
                }
                setRealtimeData(apiResultText);
            }
            else if (interactiveNote.title.includes('Geomagnetic Storms') || interactiveNote.title.includes('Kp Index')) {
                const response = await fetch(`https://api.nasa.gov/DONKI/GST?startDate=${sevenDaysAgo}&endDate=${today}&api_key=${apiKey}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();

                let apiResultText;
                if (data && data.length > 0) {
                    const latestStorm = data.sort((a, b) => new Date(b.startTime).getTime() - new Date(a.startTime).getTime())[0];
                    const kpValue = latestStorm.allKpIndex && latestStorm.allKpIndex.length > 0 ? latestStorm.allKpIndex[0].kpIndex : null;

                    let impactAnalysis = '';
                    if (kpValue !== null) {
                        if (kpValue >= 8.5) {
                            impactAnalysis = `This Kp level indicates the G5 scale! – The Sun is roaring! 
Today the Sun has enormous energy! It can cause lights to flicker, satellites to get confused, and even some cities to lose power. But if you look up, you'll see incredible auroras, dancing in places they normally don't appear!`;
                        } else if (kpValue >= 7.5) {
                            impactAnalysis = `This Kp level indicates the G4 scale! – The Sun is very agitated! 
The Sun is blowing strong winds. Lights may flicker, radios may crackle, and satellites need to pay attention. But it's also time to see bright and colorful auroras!`;
                        } else if (kpValue >= 6.5) {
                            impactAnalysis = `This Kp level indicates the G3 scale! – The Sun is playing giant!
Some devices may get confused, and auroras may appear further south than usual. It's an invisible, yet magical, storm!`;
                        } else if (kpValue >= 5.5) {
                            impactAnalysis = `This Kp level indicates the G2 scale! – The Sun is excited! 
Small problems in some devices can happen, but nothing serious. Auroras can already be seen in high places, like New York or Idaho.`;
                        } else if (kpValue >= 5.0) {
                            impactAnalysis = `This Kp level indicates the G1 scale! – The Sun is just grumbling a little. 
Everything is calm for most of Earth. Some devices may notice small glitches, and auroras only appear in the northernmost regions, like Michigan and Maine.`;
                        } else {
                            impactAnalysis = `☀️ Calm – Kp=${kpValue.toFixed(1)}  
The Sun is calm, resting and smiling. No invisible storms disrupt Earth today, and everything is safe.`;
                        }

                        apiResultText = `The latest record shows a geomagnetic storm with a Kp Index of ${kpValue.toFixed(1)}.<br/><br/>${impactAnalysis}<br/><br/>` +
                            `🔎 Where does this story come from?  
Information about the Sun and its invisible storms comes from real scientists! They work at NASA and NOAA, observing space with satellites and telescopes.  
The G1 to G5 scale we use is official from NOAA (National Oceanic and Atmospheric Administration), which measures the "Sun's mood" and helps us understand when it is calm or very excited.`;
                    } else {
                        apiResultText = 'Kp could not be calculated this time. Perhaps the Sun is very calm or the data has not arrived yet.<br/><br/>' +
                            `🔎 Even so, NASA and NOAA scientists observe the Sun every day to protect Earth and tell the magical story of the sky!`;
                    }

                } else {
                    apiResultText = 'No significant geomagnetic storms detected in the last 7 days. The Sun and Earth are calm, without major "invisible storms".<br/><br/>' +
                        `🔎 Where does this story come from?  
Even when the Sun is calm, NASA and NOAA scientists observe space every day. The G1–G5 scale shows when it's calm or agitated, helping to protect Earth and understand the magic of the sky.`;
                }

                setRealtimeData(apiResultText);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            setRealtimeData('Error loading data. Check your connection or API Key. Please try again later.');
        } finally {
            setIsLoading(false);
            setApiDataLoaded(true); // Mark that the API attempt for this note has been made.
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
  <div className="page-background">
    <div className="book-page-container">
      {/* LEFT PAGE: VIDEO OR IMAGE */}
      <div className="left-page">
        {videoSrc ? (
          <div className="video-frame">
            {videoSrc.endsWith(".mp4") ? (
              <video
                src={videoSrc}
                width={832}
                height={1248}
                title={imageAlt || "Story video"}
                style={{
                  width: "100%",
                  height: "300px",
                  display: "block",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                controls
                autoPlay
                loop
                muted
              />
            ) : (
              <iframe
                src={videoSrc}
                title={imageAlt || "Story video"}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        ) : imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt || "Page illustration"}
            width={832}
            height={1248}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        ) : null}
      </div>

      {/* RIGHT PAGE: TEXT AND INTERACTIVE NOTE */}
      <div className="right-page">
        <p dangerouslySetInnerHTML={{ __html: storyText }} />

        {interactiveNote && (
          <div className="interactive-section">
            <button onClick={() => setNoteVisible(!noteVisible)}>
              {noteVisible ? "Hide Details" : interactiveNote.buttonText}
            </button>

            {noteVisible && (
    <div className="interactive-note-box">
    <h3>{interactiveNote.title}</h3>
    <p dangerouslySetInnerHTML={{ __html: interactiveNote.content }} />

    {realtimeData && (
      <div
        className="realtime-data"
        dangerouslySetInnerHTML={{
          __html: realtimeData.replace(/\n/g, "<br />"),
        }}
      />
    )}

    {interactiveNote.moreInfoLink && (
      <a
        href={interactiveNote.moreInfoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="more-info-link"
      >
        Learn More &rarr;
      </a>
    )}
    {interactiveNote.source && (
      <em className="source-text">{interactiveNote.source}</em>
    )}
  </div>

            )}
          </div>
        )}
      </div>

      {/* AUDIO CONTROLS */}
      {audioSrc && (
        <div className="audio-controls">
          <audio ref={audioRef} src={audioSrc} />
          <button onClick={togglePlayPauseAudio}>
            {isPlaying ? "⏸️" : "▶️"}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            defaultValue="0.5"
            onChange={changeAudioVolume}
            title="Volume"
          />
        </div>
      )}
    </div>

    <style jsx>{`
      /* === FULL PAGE BACKGROUND === */
      .page-background {
  position: relative;
  min-height: 100vh;
  background: (circle at top left, #0b0b1e, #050517 80%);
  overflow-x: hidden;
}


@keyframes twinkle {
  0%, 100% {
    opacity: 0.1;
  }
  50% {
    opacity: 0.15;
  }
}


      /* === BOOK PAGE CONTAINER === */
      .book-page-container {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: flex-start;
  width: 100%;
  max-width: 1100px;
  margin: 4rem auto;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #444;

  /* === FUNDO ESPACIAL === */
  background: radial-gradient(circle at top left, #0b0b1e, #050517 80%);
  box-shadow: 
    0 0 50px rgba(255, 255, 255, 0.1) inset,
    0 10px 30px rgba(0, 0, 0, 0.5),
    0 0 20px rgba(255, 255, 255, 0.05) inset;

  /* Para dar profundidade e leve brilho */
}

.book-page-container::before {
  content: "";
  position: absolute;
  inset: 0;
  background: url("/stars-bg.webp") repeat;
  background-size: cover;
  opacity: 0.15;
  z-index: 0;
  animation: twinkle 15s infinite ease-in-out;
}

@keyframes twinkle {
  0%, 100% { opacity: 0.15; }
  50% { opacity: 0.25; }
}

/* Garante que as páginas fiquem acima do background */
.book-page-container > * {
  position: relative;
  z-index: 1;
}


      .left-page,
      .right-page {
        width: 50%;
        position: relative;
      }

      .left-page {
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #e0d8c0;
      }

      .right-page {
  position: relative;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-family: "Georgia", serif;
  font-size: 1.4em;
  line-height: 1.7;
  color: #ffffff; /* texto mais claro para contraste espacial */
  border-left: 1px dashed #777;

  /* === BACKGROUND ESPACIAL === */
  background: radial-gradient(circle at top left, #0b0b1e, #050517 80%);
  overflow: hidden;
}

.right-page::before {
  content: "";
  position: absolute;
  inset: 0;
  background: url("/stars-bg.webp") repeat;
  background-size: cover;
  opacity: 0.2;
  z-index: 0;
  animation: twinkle 12s infinite ease-in-out;
}

@keyframes twinkle {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 0.35; }
}

/* garante que o conteúdo fique acima do background */
.right-page > * {
  position: relative;
  z-index: 1;
}


      .interactive-section {
        margin-top: 2rem;
      }

      .interactive-section button {
        background-color: #8b4513;
        color: white;
        border: none;
        padding: 0.8rem 1.5rem;
        border-radius: 5px;
        cursor: pointer;
      }

      .interactive-section button:hover {
        background-color: #a0522d;
      }

      .interactive-note-box {
  margin-top: 1rem;
  padding: 1.2rem;
  background: radial-gradient(circle at top left, #0b0b1e, #050517 90%);
  border-left: 4px solid #6f9fff; /* azul cósmico */
  color: #e0e0ff;
  box-shadow: 0 0 15px rgba(111, 159, 255, 0.4), 0 2px 10px rgba(0, 0, 0, 0.6);
  border-radius: 6px;
  font-family: "Georgia", serif;
  line-height: 1.6;
  position: relative;
  z-index: 2;
}

.interactive-note-box::before {
  content: "";
  position: absolute;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  border-radius: 8px;
  background: radial-gradient(circle, rgba(111, 159, 255, 0.2), transparent 70%);
  z-index: -1;
  animation: glowPulse 3s infinite ease-in-out;
}

@keyframes glowPulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}


      .realtime-data {
        margin-top: 1rem;
        white-space: pre-wrap;
        color: #e8e1ddff;
      }

      .source-text {
        font-size: 0.8em;
        color: #777;
        margin-top: 0.5rem;
        display: block;
      }

      .more-info-link {
        display: inline-block;
        margin-top: 1rem;
        color: #007bff;
        text-decoration: none;
        font-weight: bold;
      }

      .more-info-link:hover {
        text-decoration: underline;
      }

      .audio-controls {
        position: fixed;
        top: 20px;
        right: 20px;
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 15px;
        border-radius: 20px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
        z-index: 1000;
      }

      .audio-controls button {
        border: none;
        background-color: transparent;
        width: 40px;
        height: 40px;
        font-size: 1.1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }

      .audio-controls input[type="range"] {
        width: 100px;
        height: 3px;
        cursor: pointer;
      }

      @media (max-width: 768px) {
        .book-page-container {
          flex-direction: column;
        }

        .left-page,
        .right-page {
          width: 100%;
        }

        .right-page {
          padding: 1.5rem;
          border-left: none;
          border-top: 1px dashed #dcd3b8;
        }

        .audio-controls {
          bottom: 10px;
          top: auto;
          left: 10px;
          right: 10px;
          width: auto;
        }
      }
    `}</style>
  </div>
);
};