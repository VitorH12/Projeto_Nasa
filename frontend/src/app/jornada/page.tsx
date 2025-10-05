// app/jornada/page.tsx
'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '../../../components/Navbar';
import styles from '../jornada/jornada.module.css';

// Componente para o texto que aparece e desaparece
const AnimatedText = ({ children, range }) => {
    const { scrollYProgress } = useScroll();
    // Agora só interpolamos entre 0 e 1 (2 pontos)
    const opacity = useTransform(scrollYProgress, range, [0, 1]);
    return <motion.p style={{ opacity }} className={styles.storyText}>{children}</motion.p>;
};

export default function JornadaPage() {
    // Usamos uma referência para o container que terá o scroll
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Mapeia o progresso do scroll para a posição X da CME
    // A CME começa a se mover em 20% do scroll e termina em 80%
    const cmeX = useTransform(scrollYProgress, [0.2, 0.8], ["5%", "85%"]);
    const cmeScale = useTransform(scrollYProgress, [0.2, 0.8], [0.5, 1.5]);

    return (
        <>
            <Navbar />
            {/* Este é o "trilho" invisível que gera a barra de rolagem */}
            <div ref={targetRef} className={styles.scrollContainer}>
                {/* Este é o "palco" que fica fixo na tela enquanto rolamos */}
                <div className={styles.stickyContainer}>
                    {/* Elementos animados */}
                    <motion.div className={styles.sol} />
                    <motion.div className={styles.terra} />
                    <motion.div 
                        className={styles.cme} 
                        style={{ x: cmeX, scale: cmeScale }} 
                    />

                    {/* Textos que aparecem e somem em diferentes pontos do scroll */}
                    <div className={styles.textOverlay}>
                        <AnimatedText range={[0.05, 0.15]}>
                            Tudo começa no Sol, uma estrela de imensa energia...
                        </AnimatedText>

                        <AnimatedText range={[0.2, 0.3]}>
                            De repente, uma Ejeção de Massa Coronal (CME) é disparada de sua superfície.
                        </AnimatedText>

                        <AnimatedText range={[0.4, 0.5]}>
                            Viajando a mais de 1.000 km/s, a nuvem de plasma cruza o sistema solar.
                        </AnimatedText>

                        <AnimatedText range={[0.75, 0.85]}>
                            Após dias, ela se aproxima da Terra...
                        </AnimatedText>

                        <AnimatedText range={[0.88, 0.98]}>
                            ...e colide com nosso escudo, a magnetosfera, gerando as magníficas auroras.
                        </AnimatedText>
                    </div>
                </div>
            </div>
        </>
    );
}
