import { Card, Button } from 'react-bootstrap';

type ImagePosition = 'left' | 'right';
interface propFeatures {
  imgPosition: ImagePosition;
  imgURL: string;
  title: string;
  description: string;
}

const Feature = (prop: propFeatures): JSX.Element => {
  const { imgPosition, imgURL, title, description } = prop;
  let usingClassNames = 'd-flex border-0';
  usingClassNames += imgPosition === 'left' ? ' flex-row' : ' flex-row-reverse';
  return (
    <Card style={{ width: '50rem' }} className={usingClassNames}>
      <Card.Img variant="top" src={imgURL} style={{ width: '20rem' }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default Feature;
