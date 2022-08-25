import { Card, Image } from 'react-bootstrap';
import teamMembers from './teamMembers';
import styles from './TeamSection.module.scss';
import github from '../../../assets/github.png';

const TeamSection = (): JSX.Element => {
  return (
    <section>
      <h2 className={styles.teamTitle}>RSSBand</h2>
      <section className={styles.team}>
        {teamMembers.map(({ ghLink, imgSrc, name, role, work }) => (
          <Card className={styles.card}>
            <Card.Img src={imgSrc} alt={`${role}-${name}`} />
            <Card.Body className={styles.cardElements}>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{role}</Card.Text>
              <Card.Text>{work}</Card.Text>
            </Card.Body>
            <Card.Body className={styles.cardFooter}>
              <a href={ghLink} title="Посмотреть Github аккаунт">
                <Image className={styles.logoGitHub} src={github} />
              </a>
            </Card.Body>
          </Card>
        ))}
      </section>
    </section>
  );
};

export default TeamSection;
