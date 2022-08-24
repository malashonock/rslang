import Feature from './feature/Feature';
import featuresData from './featuresData';

const Features = (): JSX.Element => {
  const featureComponents = featuresData.map((feature, index) => (
    <Feature
      imgPosition={index % 2 ? 'left' : 'right'}
      imgURL={feature.imageURL}
      title={feature.title}
      description={feature.description}
    />
  ));
  return <div className="d-flex align-items-lg-center flex-column">{featureComponents}</div>;
};

export default Features;
