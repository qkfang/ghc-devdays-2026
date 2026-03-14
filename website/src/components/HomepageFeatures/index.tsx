import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  emoji: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'VS Code Labs',
    emoji: '🖥️',
    description: (
      <>
        Five hands-on labs covering TypeScript, Python, Java, and .NET using VS Code Copilot Agent Mode.
      </>
    ),
  },
  {
    title: 'Other IDEs',
    emoji: '🛠️',
    description: (
      <>
        Workshops for Visual Studio, Xcode, and JetBrains with GitHub Copilot integration.
      </>
    ),
  },
  {
    title: 'CLI & Agents',
    emoji: '⌨️',
    description: (
      <>
        CLI lab with Tailspin Toys and the Mona Mayhem coding agents lab.
      </>
    ),
  },
];

function Feature({title, emoji, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <div className={styles.featureEmoji} role="img" aria-label={title}>{emoji}</div>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
