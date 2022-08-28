import { Outlet } from 'react-router-dom';

const ChapterLayout = () => {
  return (
    <>
      <p>buttons to switch chapter pages</p>
      <Outlet />
    </>
  );
};

export default ChapterLayout;
