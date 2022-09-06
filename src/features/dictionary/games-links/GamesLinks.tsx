import { useState, useMemo } from 'react';
import { Button, Collapse, NavDropdown, Stack } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useParams } from 'react-router-dom';
import { buildQueryString } from '../../../utils/url';

const GamesLinks = (): JSX.Element => {
  const [collapseOpen, setCollapseOpen] = useState(false);
  const { chapter, page } = useParams();

  const searchParams = useMemo(() => {
    return {
      group: chapter ? +chapter - 1 : undefined,
      page: page ? +page - 1 : undefined,
    };
  }, [chapter, page]);

  return (
    <Stack>
      <Button
        variant="link"
        className="text-center fs-6 fw-semibold"
        onClick={() => setCollapseOpen(!collapseOpen)}
        aria-controls="mini-games-links"
        aria-expanded={collapseOpen}
      >
        Psst! Wanna play some games?
      </Button>
      <Collapse in={collapseOpen}>
        <div id="mini-games-links">
          <Stack direction="horizontal" gap={2} className="justify-content-center mt-2">
            <LinkContainer to={`/games/audio-challenge${buildQueryString(searchParams)}`}>
              <Button variant="warning">Play Audio Challenge</Button>
            </LinkContainer>
            <LinkContainer to={`/games/sprint${buildQueryString(searchParams)}`}>
              <Button variant="warning">Play Sprint</Button>
            </LinkContainer>
          </Stack>
        </div>
      </Collapse>
    </Stack>
  );
};

export default GamesLinks;
