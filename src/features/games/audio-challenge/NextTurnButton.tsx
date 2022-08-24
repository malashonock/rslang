import { Button } from 'react-bootstrap';

interface NextTurnButtonProps {
  isWordSelected: boolean;
}

const NextTurnButton = ({ isWordSelected }: NextTurnButtonProps): JSX.Element => {
  return (
    <Button variant={isWordSelected ? 'primary' : 'danger'} className="p-2">
      {isWordSelected ? 'Next word →' : 'I give up'}
    </Button>
  );
};

export default NextTurnButton;
