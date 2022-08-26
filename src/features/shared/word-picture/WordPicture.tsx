import { CSSProperties, HTMLAttributes } from 'react';
import { Image } from 'react-bootstrap';
import styles from './WordPicture.module.scss';

interface WordPictureProps extends HTMLAttributes<HTMLElement> {
  imageSrc: string;
  diameter?: string;
}

const WordPicture = ({
  imageSrc,
  diameter = '2rem',
  ...otherProps
}: WordPictureProps): JSX.Element => {
  return (
    <Image
      src={imageSrc}
      className={`${styles.wordPicture} ${otherProps?.className ?? ''}`}
      style={{ '--diameter': diameter } as CSSProperties}
      roundedCircle
      thumbnail
    />
  );
};

export default WordPicture;
