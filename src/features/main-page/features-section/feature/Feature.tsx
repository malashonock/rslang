import { Card } from 'react-bootstrap';
import styles from './Feature.module.scss';

type Position = 'left' | 'right';

interface FeatureCardProps {
  imgPosition: Position;
  imgURL: string;
  title: string;
  description: string;
}

const Feature = ({ imgPosition, imgURL, title, description }: FeatureCardProps): JSX.Element => {
  const descriptionClassName = imgPosition === 'left' ? styles.featureRight : styles.featureLeft;
  const usingClassNames = imgPosition === 'left' ? styles.featureCardLeft : styles.featureCardRight;
  return (
    <div className={(styles.FeaturesSection, descriptionClassName)}>
      <Card className={usingClassNames}>
        <Card.Img variant="top" src={imgURL} className={styles.imageSize} />
        <Card.Body className={styles.cardBody}>
          <Card.Title style={{ textAlign: imgPosition }}>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Feature;
