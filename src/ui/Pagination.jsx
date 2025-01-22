import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { usePaginationContext } from '../context/PaginationContext';
import { results_on_the_screen } from '../constants';
import { SET_NEXT_PAGE, SET_PREV_PAGE } from '../actions';

const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const P = styled.p`
  font-size: 1.4rem;
  margin-left: 0.8rem;

  & span {
    font-weight: 600;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const PaginationButton = styled.button`
  background-color: ${({ theme, active }) =>
    active ? `${theme.colors.grey[600]}` : `${theme.colors.grey[50]}`};
  color: ${({ active, theme }) =>
    active ? `${theme.colors.grey[50]}` : 'inherit'};
  border: none;
  border-radius: ${({ theme }) => theme.border_radius.sm};
  font-weight: 500;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.3s;

  &:has(span:last-child) {
    padding-left: 0.4rem;
  }

  &:has(span:first-child) {
    padding-right: 0.4rem;
  }

  & svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover:not(:disabled) {
    background-color: ${({ theme }) => theme.colors.brand[900]};
    color: ${({ theme }) => theme.colors.brand[50]};
  }
`;

function Pagination({ total_results }) {
  const { page, dispatch } = usePaginationContext();

  const current_page = page;
  // const [searchParams, setSearchParams] = useSearchParams();
  // const current_page = !searchParams.get('page')
  //   ? 1
  //   : Number(searchParams.get('page'));

  const num_of_pages_to_cycle_through = Math.ceil(
    total_results / results_on_the_screen
  );

  if (num_of_pages_to_cycle_through <= 1) return null;

  function nextPage() {
    const next =
      current_page === num_of_pages_to_cycle_through
        ? current_page
        : current_page + 1;

    // searchParams.set('page', next);
    // setSearchParams(searchParams);
    dispatch({ type: SET_NEXT_PAGE, payload: { next } });
  }

  function prevPage() {
    const prev = current_page === 1 ? current_page : current_page - 1;

    // searchParams.set('page', prev);
    // setSearchParams(searchParams);
    dispatch({ type: SET_PREV_PAGE, payload: { prev } });
  }

  if (num_of_pages_to_cycle_through <= 1) return null;

  return (
    <StyledPagination>
      <P>
        Showing <span>{(current_page - 1) * results_on_the_screen + 1}</span> to{' '}
        <span>
          {current_page === num_of_pages_to_cycle_through
            ? total_results
            : current_page * results_on_the_screen}
        </span>{' '}
        of <span>{total_results}</span> results
      </P>

      <Buttons>
        <PaginationButton onClick={prevPage} disabled={current_page === 1}>
          <HiChevronLeft /> <span>Previous</span>
        </PaginationButton>

        <PaginationButton
          onClick={nextPage}
          disabled={current_page === num_of_pages_to_cycle_through}
        >
          <span>Next</span>
          <HiChevronRight />
        </PaginationButton>
      </Buttons>
    </StyledPagination>
  );
}

export default Pagination;
