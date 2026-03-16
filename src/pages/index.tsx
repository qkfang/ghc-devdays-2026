import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.iconList}>
        {/* Copilot globe icon */}
        <div className={clsx(styles.iconBox, styles.iconBoxGreen)}>
          <svg viewBox="0 0 100 100" width="56" height="56" fill="none">
            <circle cx="50" cy="50" r="36" stroke="rgba(255,255,255,0.85)" strokeWidth="3"/>
            <line x1="14" y1="50" x2="86" y2="50" stroke="rgba(255,255,255,0.85)" strokeWidth="3"/>
            <line x1="50" y1="14" x2="50" y2="86" stroke="rgba(255,255,255,0.85)" strokeWidth="3"/>
            <path d="M50 14 Q68 50 50 86 Q32 50 50 14Z" fill="rgba(255,255,255,0.35)" stroke="rgba(255,255,255,0.7)" strokeWidth="2"/>
          </svg>
        </div>
        {/* Gradient decorative box */}
        <div className={clsx(styles.iconBox, styles.iconBoxGradient)}></div>
        {/* Upload / arrow-up icon */}
        <div className={clsx(styles.iconBox, styles.iconBoxGreen)}>
          <svg viewBox="0 0 100 100" width="56" height="56" fill="none">
            <path d="M50 72 L50 30 M30 50 L50 28 L70 50" stroke="white" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="26" y="72" width="48" height="7" rx="3.5" fill="white"/>
          </svg>
        </div>
        {/* Four-leaf clover icon */}
        <div className={clsx(styles.iconBox, styles.iconBoxDarkGreen)}>
          <svg viewBox="0 0 100 100" width="56" height="56" fill="none">
            <ellipse cx="50" cy="30" rx="14" ry="22" fill="rgba(150,255,150,0.9)"/>
            <ellipse cx="70" cy="50" rx="22" ry="14" fill="rgba(150,255,150,0.9)"/>
            <ellipse cx="50" cy="70" rx="14" ry="22" fill="rgba(150,255,150,0.9)"/>
            <ellipse cx="30" cy="50" rx="22" ry="14" fill="rgba(150,255,150,0.9)"/>
            <circle cx="50" cy="50" r="8" fill="rgba(100,220,100,0.9)"/>
          </svg>
        </div>
      </div>
      <div className={styles.verticalDivider}></div>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div className={styles.heroBanner}>
      <div className={styles.heroTop}>
        <Sidebar />
        <div className={styles.heroContent}>
          <Heading as="h1" className={styles.heroTitle}>
            GitHub Copilot<br />Dev Days
          </Heading>
          <div className={styles.wifiSection}>
            <p className={styles.wifiText}>
              WiFi: <span className={styles.highlighted}>MSFTEvent</span>
            </p>
            <p className={styles.wifiText}>Choose Event Code option</p>
            <p className={styles.wifiText}>
              Code: <span className={styles.highlighted}>xxxxxx</span>
            </p>
          </div>
          <div className={styles.buttons}>
            <Link
              className={styles.browseButton}
              to="/ghc-dev-day-2026/docs/intro">
              Browse Labs →
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.heroBottom}>
        <div className={styles.panel}></div>
        <div className={styles.panel}></div>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Hands-on labs for GitHub Copilot Dev Days 2026">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
