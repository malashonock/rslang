import Feature from './feature/Feature';
import featuresData from './featuresData';
import styles from './FeaturesSection.module.scss';

const FeaturesSection = (): JSX.Element => {
  return (
    <div className={styles.featuresSection}>
      {featuresData.map((feature, index) => (
        <Feature
          imgPosition={index % 2 ? 'right' : 'left'}
          imgURL={feature.imageURL}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};

export default FeaturesSection;
