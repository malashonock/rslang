import { Card } from 'react-bootstrap';

type ImagePosition = 'left' | 'right';
interface propFeatures {
  imgPosition: ImagePosition;
  imgURL: string;
  title: string;
  description: string;
}

const Feature = (prop: propFeatures): JSX.Element => {
  const { imgPosition, imgURL, title, description } = prop;
  const align = imgPosition === 'left' ? 'start' : `end`;
  const divAlign = `d-flex justify-content-${align}`;
  let usingClassNames = 'd-flex border-0 justify-content-between';
  usingClassNames += imgPosition === 'left' ? ' flex-row' : ' flex-row-reverse';
  return (
    <div style={{ width: '50rem' }} className={divAlign}>
      <Card style={{ width: '30rem' }} className={usingClassNames}>
        <Card.Img variant="top" src={imgURL} style={{ width: '5rem' }} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Feature;
