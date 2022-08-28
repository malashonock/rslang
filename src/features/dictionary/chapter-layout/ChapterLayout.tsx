import { Outlet } from 'react-router-dom';

const ChapterLayout = () => {
  return (
    <div>
      <p>buttons to switch chapter pages</p>
      <Outlet />
    </div>
  );
};

export default ChapterLayout;
