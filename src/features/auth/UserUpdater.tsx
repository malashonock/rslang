import { useAppSelector } from '../../hooks';

const UserUpdater = (): JSX.Element => {
  const { name } = useAppSelector((state) => state.authorization);
  return (
    <>
      <h2>{name}</h2>
      <p>User Information for Update</p>
    </>
  );
};

export default UserUpdater;
