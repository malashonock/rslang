import { useParams, Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

type ChapterPagesSelectorProps = {
  className?: string;
};

const ChapterPagesSelector = ({ className }: ChapterPagesSelectorProps) => {
  const { page } = useParams();

  return (
    <Pagination
      className={className || ''}
      color="primary"
      variant="outlined"
      shape="rounded"
      page={page ? +page : 0}
      count={30}
      renderItem={(item) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <PaginationItem component={Link} to={`pages/${item.page || 1}`} {...item} />
      )}
    />
  );
};

export default ChapterPagesSelector;
