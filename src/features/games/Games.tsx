import { Outlet } from 'react-router-dom';

const Games = (): JSX.Element => {
  return (
    <>
      <h2>Games:</h2>
      <Outlet />
    </>
  );
};

export default Games;
