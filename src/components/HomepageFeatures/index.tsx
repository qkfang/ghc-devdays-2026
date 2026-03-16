import type {ReactNode} from 'react';
import styles from './styles.module.css';

type WaveItem = {
  label: string;
  title: string;
  period: string;
  gradient: string;
  isActive: boolean;
};

const waves: WaveItem[] = [
  {
    label: 'Wave 1',
    title: 'Pair programmer',
    period: 'Code completion\n(2021-2023)',
    gradient: 'linear-gradient(135deg, #c09fff 0%, #ff90c0 60%, #90c8ff 100%)',
    isActive: false,
  },
  {
    label: 'Wave 2',
    title: 'Beyond pair programmers',
    period: 'Agentic SDLC\n(2024-Present)',
    gradient: 'linear-gradient(135deg, #90ffa0 0%, #3ec860 100%)',
    isActive: true,
  },
  {
    label: 'Wave 3',
    title: 'Teams + agents',
    period: 'Hybrid teams\n(2026+)',
    gradient: 'linear-gradient(135deg, #90c8ff 0%, #c0f4ff 100%)',
    isActive: false,
  },
];

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.wavesSection}>
      <div className={styles.container}>
        <h2 className={styles.wavesTitle}>Riding the waves</h2>

        {/* Timeline */}
        <div className={styles.timelineWrapper}>
          <div className={styles.timelineTrack}>
            <div className={styles.waveNode}>
              <div className={styles.wavePill}>Wave 1</div>
            </div>

            <div className={styles.timelineLine}>
              <div className={styles.timelineDot}></div>
            </div>

            <div className={styles.waveNodeCenter}>
              <div className={styles.todayLabel}>Today</div>
              <div className={styles.wavePillActive}>
                <span className={styles.waveStar}>✦</span> Wave 2
              </div>
            </div>

            <div className={styles.timelineLine}>
              <div className={styles.timelineDot}></div>
            </div>

            <div className={styles.waveNode}>
              <div className={styles.wavePill}>Wave 3</div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className={styles.cardsRow}>
          {waves.map((wave, idx) => (
            <div key={idx} className={styles.cardWrapper}>
              <div
                className={`${styles.card} ${wave.isActive ? styles.cardActive : ''}`}
                style={{background: wave.gradient}}
              >
                <div className={styles.cardLabel}>{wave.title}</div>
              </div>
              <p className={styles.cardPeriod}>{wave.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
