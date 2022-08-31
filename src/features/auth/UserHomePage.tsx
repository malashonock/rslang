import { useAppSelector } from '../../store/hooks';

const UserHomePage = (): JSX.Element => {
  const { name } = useAppSelector((state) => state.authorization);
  return (
    <>
      <h2>{name}</h2>
      <p>User Information for Update</p>
    </>
  );
};

export default UserHomePage;
