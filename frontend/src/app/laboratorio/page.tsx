'use client';

import React, { useState, useMemo } from 'react';
import Navbar from '../../../components/Navbar';
import { labActivities } from '../../data/labActivities';
import styles from './laboratorio.module.css';

// Activity Card component
function ActivityCard({ activity }) {
    return (
        <a href={activity.link} target="_blank" rel="noopener noreferrer" className={styles.card}>
            <div className={styles.cardHeader}>
                <span className={styles.cardSource}>{activity.source}</span>
                <span className={styles.cardType}>{activity.type}</span>
            </div>
            <h3 className={styles.cardTitle}>{activity.title}</h3>
            <p className={styles.cardDescription}>{activity.description}</p>
            <div className={styles.cardFooter}>
                Access Activity &rarr;
            </div>
        </a>
    );
}

export default function LabPage() {
    const [selectedTopic, setSelectedTopic] = useState('all');

    // Filter activities by topic
    const filteredActivities = useMemo(() => {
        if (selectedTopic === 'all') {
            return labActivities;
        }
        return labActivities.filter(activity => activity.topic === selectedTopic);
    }, [selectedTopic]);

    return (
        <>
            <Navbar />
            <main className={styles.labContainer}>
                {/* --- INTRO SECTION --- */}
                <header className={styles.header}>
                    <h1>Space Exploration Lab</h1>
                    <p className={styles.introText}>
                        Welcome! Here, science leaves the screen and comes into your home. 
                        Inspired by the amazing educational resources from NASA and NOAA, 
                        we've gathered a collection of fun, hands-on activities for you to become a true space weather scientist.
                    </p>
                    <p className={styles.safetyNote}>
                        <strong>A note for our young explorers: </strong> 
                        Some of these activities may require materials like scissors or small magnets. 
                        Always ask a parent, guardian, or teacher for help and supervision. 
                        The best science is safe science!
                    </p>
                </header>

                {/* --- FILTERS (optional future expansion) --- */}

                {/* --- ACTIVITY GRID --- */}
                <div className={styles.activityGrid}>
                    {filteredActivities.map(activity => (
                        <ActivityCard key={activity.id} activity={activity} />
                    ))}
                </div>
            </main>
        </>
    );
}
