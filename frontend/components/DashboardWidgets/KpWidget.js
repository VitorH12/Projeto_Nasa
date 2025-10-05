// components/DashboardWidgets/KpWidget.js
'use client';
import styles from '../../components/AuroraMap.module.css'; // Reutiliza o CSS do AuroraMap para o medidor
export default function KpWidget({ gstData }) {
    if (!gstData || gstData.length === 0) {
        // ... (código de fallback)
    }

    const latestStorm = gstData.sort((a, b) => new Date(b.startTime).getTime() - new Date(a.startTime).getTime())[0];
    const kpValue = latestStorm.allKpIndex?.[0]?.kpIndex ?? 0;
    const numericKp = parseInt(kpValue);
    
    // Gradiente de cores para o medidor
    const getGaugeColor = (kp) => {
        if (kp >= 7) return 'linear-gradient(90deg, #f44336, #e53e3e)'; // Vermelho
        if (kp >= 4) return 'linear-gradient(90deg, #ffc107, #ff9800)'; // Amarelo/Laranja
        return 'linear-gradient(90deg, #4caf50, #81c784)'; // Verde
    };

    return (
        <div className={styles.widget}>
            <h3>Índice Kp Geomagnético</h3>
            <div className={styles.kpGauge}>
                <div 
                    className={styles.kpGaugeFill} 
                    style={{ 
                        transform: `rotate(${numericKp / 18}turn)`, // 0 a 9 -> 0 a 0.5 turn
                        background: getGaugeColor(numericKp)
                    }}
                ></div>
                <div className={styles.kpGaugeCover}>
                    <span className={styles.kpValue}>{kpValue}</span>
                    <span className={styles.kpLabel}>Kp</span>
                </div>
            </div>
            <p>Mede a perturbação do campo magnético da Terra (0-9).</p>
        </div>
    );
}