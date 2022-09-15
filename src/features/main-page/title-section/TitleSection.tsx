import styles from './TitleSection.module.scss';

const TitleSection = () => {
  return (
    <div className={styles.section}>
      <div className={styles.title}>
        <p className={styles.firstTitleLine}>online-</p>
        <p className={styles.secondTitleLine}>
          platform<span className={styles.secondTitleLineDot}>.</span>
        </p>
      </div>
      <p className={styles.subtitle}>for learning English</p>
      <p className={styles.description}>
        Non-boring online English learning with games and interesting tasks at any time convenient
        for you.
      </p>
    </div>
  );
};

export default TitleSection;
