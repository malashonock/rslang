import Feature from './feature/Feature';
import featuresData from './featuresData';

const FeaturesSection = (): JSX.Element => {
  return (
    <div className="d-flex align-items-lg-center flex-column">
      {featuresData.map((feature, index) => (
        <Feature
          imgPosition={index % 2 ? 'left' : 'right'}
          imgURL={feature.imageURL}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};

export default FeaturesSection;
