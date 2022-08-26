import Feature from './feature/Feature';
import featuresData from './featuresData';
import styles from './FeaturesSection.module.scss';

const FeaturesSection = (): JSX.Element => {
  return (
    <div className={styles.featuresSection}>
      {featuresData.map((feature, index) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Feature imgPosition={index % 2 ? 'right' : 'left'} {...feature} />
      ))}
    </div>
  );
};

export default FeaturesSection;
