import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';

const Statistics = (): JSX.Element => {
  const userAuth = useAppSelector((state) => state.authorization);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userAuth.authorizeStatus) navigate('/auth');
  });

  return (
    <div className="card mt-5">
      <div className="card-body">Goal</div>
    </div>
  );
};

export default Statistics;
