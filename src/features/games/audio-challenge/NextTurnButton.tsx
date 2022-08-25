import { HTMLAttributes, MouseEvent } from 'react';
import { Button } from 'react-bootstrap';

interface NextTurnButtonProps extends HTMLAttributes<HTMLButtonElement> {
  isWordSelected: boolean;
  isLastTurn: boolean;
  onClick: (event: MouseEvent) => void;
}

const NextTurnButton = ({
  isWordSelected,
  isLastTurn,
  onClick,
}: NextTurnButtonProps): JSX.Element => {
  return (
    <Button variant={isWordSelected ? 'primary' : 'danger'} className="p-2" onClick={onClick}>
      {isWordSelected ? (isLastTurn ? 'Show results' : 'Next word →') : 'I give up'}
    </Button>
  );
};

export default NextTurnButton;
