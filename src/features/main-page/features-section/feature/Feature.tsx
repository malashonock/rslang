import { Card } from 'react-bootstrap';
import styles from './Feature.module.scss';

type Position = 'left' | 'right';

interface FeatureCardProps {
  imgPosition: Position;
  imageURL: string;
  title: string;
  description: string;
}

const Feature = ({ imgPosition, imageURL, title, description }: FeatureCardProps): JSX.Element => {
  const descriptionClassName =
    imgPosition === 'left' ? styles.featurePositionRight : styles.featurePositionLeft;
  const descriptionOfImage =
    imgPosition === 'left' ? styles.featureCardLeft : styles.featureCardRight;
  return (
    <div className={(styles.FeaturesSection, descriptionClassName)}>
      <Card className={descriptionOfImage}>
        <Card.Img variant="top" src={imageURL} className={styles.imageSize} />
        <Card.Body className={styles.cardBody}>
          <Card.Title style={{ textAlign: imgPosition }}>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Feature;
