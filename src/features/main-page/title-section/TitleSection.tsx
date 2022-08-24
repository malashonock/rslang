import { Image } from 'react-bootstrap';
import styles from './TitleSection.module.scss';
import img from '../../../assets/english-title.webp';

const TitleSection = () => {
  return (
    <div className={styles.section}>
      <Image className={styles.img} src={img} roundedCircle />
      <p className={styles.slogan}>
        Learn English by playing. Online platform for self-study of English. Always at hand.
      </p>
    </div>
  );
};

export default TitleSection;
