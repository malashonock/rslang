import { Pagination } from 'react-bootstrap';
import styles from './ChapterPagesSelector.module.scss';

interface PagesSelectorProps {
  currentPage: number;
}

const ChapterPagesSelector = ({ currentPage }: PagesSelectorProps) => {
  if (currentPage <= 3) {
    return (
      <Pagination className={styles.wrapper} size="sm">
        {currentPage === 0 ? <Pagination.Prev disabled /> : <Pagination.Prev />}

        {currentPage === 0 ? (
          <Pagination.Item active>1</Pagination.Item>
        ) : (
          <Pagination.Item>1</Pagination.Item>
        )}

        {currentPage === 1 ? (
          <Pagination.Item active>2</Pagination.Item>
        ) : (
          <Pagination.Item>2</Pagination.Item>
        )}

        {currentPage === 2 ? (
          <Pagination.Item active>3</Pagination.Item>
        ) : (
          <Pagination.Item>3</Pagination.Item>
        )}

        {currentPage === 3 ? (
          <Pagination.Item active>4</Pagination.Item>
        ) : (
          <Pagination.Item>4</Pagination.Item>
        )}

        {currentPage === 4 ? (
          <Pagination.Item active>5</Pagination.Item>
        ) : (
          <Pagination.Item>5</Pagination.Item>
        )}

        <Pagination.Ellipsis disabled />
        <Pagination.Item>{30}</Pagination.Item>
        <Pagination.Next />
      </Pagination>
    );
  }
  if (currentPage > 3 && currentPage < 26) {
    return (
      <Pagination className={styles.wrapper} size="sm">
        <Pagination.Prev />
        <Pagination.Item>1</Pagination.Item>
        <Pagination.Ellipsis disabled />

        <Pagination.Item>{currentPage}</Pagination.Item>
        <Pagination.Item active>{currentPage + 1}</Pagination.Item>
        <Pagination.Item>{currentPage + 2}</Pagination.Item>

        <Pagination.Ellipsis disabled />
        <Pagination.Item>30</Pagination.Item>

        <Pagination.Next />
      </Pagination>
    );
  }
  if (currentPage >= 26) {
    return (
      <Pagination className={styles.wrapper} size="sm">
        <Pagination.Prev />
        <Pagination.Item>1</Pagination.Item>
        <Pagination.Ellipsis disabled />

        {currentPage === 25 ? (
          <Pagination.Item active>26</Pagination.Item>
        ) : (
          <Pagination.Item>26</Pagination.Item>
        )}

        {currentPage === 26 ? (
          <Pagination.Item active>27</Pagination.Item>
        ) : (
          <Pagination.Item>27</Pagination.Item>
        )}

        {currentPage === 27 ? (
          <Pagination.Item active>28</Pagination.Item>
        ) : (
          <Pagination.Item>28</Pagination.Item>
        )}

        {currentPage === 28 ? (
          <Pagination.Item active>29</Pagination.Item>
        ) : (
          <Pagination.Item>29</Pagination.Item>
        )}

        {currentPage === 29 ? (
          <Pagination.Item active>30</Pagination.Item>
        ) : (
          <Pagination.Item>30</Pagination.Item>
        )}

        {currentPage === 29 ? <Pagination.Next disabled /> : <Pagination.Next />}
      </Pagination>
    );
  }

  return null;
};

export default ChapterPagesSelector;
