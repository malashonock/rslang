import { Outlet } from 'react-router-dom';
import ChaptersSelector from './chapters-selector/ChaptersSelector';

const Dictionary = (): JSX.Element => {
  return (
    <div className="dictionary">
      <ChaptersSelector />
      <Outlet />
    </div>
  );
};

export default Dictionary;
