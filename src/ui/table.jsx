import { createContext, useContext } from 'react';
import styled from 'styled-components';
import { respond_to } from '../helpers/breakpoints';

const StyledTable = styled.div`
  border: ${({ theme }) => `1px solid ${theme.colors.grey[200]}`};

  font-size: 1.4rem;
  background-color: ${({ theme }) => `${theme.colors.grey[0]}`};
  border-radius: 7px;
  overflow: hidden;
`;

const CommonRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  /* column-gap: 2.4rem; */
  /* column-gap: 8.4rem; */
  gap: 2.4rem;
  align-items: center;
  transition: none;

  //added
  ${respond_to('768')} {
    grid-template-columns: 1fr;
    gap: 1.6rem;
    text-align: left;
  }
`;

const StyledHeader = styled(CommonRow)`
  /* padding: 1.6rem 2.4rem; */
  padding: 1.4rem 3.5rem;

  background-color: ${({ theme }) => `${theme.colors.grey[50]}`};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.grey[100]}`};
  text-transform: uppercase;
  letter-spacing: 0.6px;
  font-weight: 600;
  /* color: ${({ theme }) => `${theme.colors.grey[600]}`}; */
  color: ${({ theme }) => `${theme.colors.grey[600]}`};
  //added
  align-items: center;
  justify-items: baseline;

  //added
  ${respond_to('768')} {
    display: none; //hide headers on mobile
  }
`;

const StyledRow = styled(CommonRow)`
  /* padding: 1.6rem 2.4rem; */
  //added
  align-items: center;
  text-align: center;
  background: ${({ theme }) => theme.colors.grey[50]};
  letter-spacing: 0.1px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.grey[600]};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.grey[100]}`};
  padding: 1.4rem 3.5rem;
  justify-items: baseline;

  &:hover,
  &:active {
    background: ${({ theme }) => theme.colors.grey[100]};
  }

  &:not(:last-child) {
    border-bottom: ${({ theme }) => `1px solid ${theme.colors.grey[100]}`};
  }

  ${respond_to('768')} {
    padding: 2rem;
    grid-template-columns: 1fr;
    gap: 1.6rem;

    > div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &::before {
        content: attr(data-label);
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.6px;
      }
    }
  }
`;

const StyledBody = styled.section`
  margin: 0.4rem 0;
`;

const Footer = styled.footer`
  background-color: ${({ theme }) => `${theme.colors.grey[50]}`};
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  /* This will hide the footer when it contains no child elements. Possible thanks to the parent selector :has 🎉 */
  &:not(:has(*)) {
    display: none;
  }
`;

const Empty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`;

const TableContext = createContext();

function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable role="table">{children}</StyledTable>
    </TableContext.Provider>
  );
}

function Header({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <StyledHeader role="row" columns={columns} as="header">
      {children}
    </StyledHeader>
  );
}
function Row({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <StyledRow role="row" columns={columns}>
      {children}
    </StyledRow>
  );
}

function Body({ data, render }) {
  if (!data.length) return <Empty>No data to show at the moment</Empty>;

  return <StyledBody>{data.map(render)}</StyledBody>;
}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = Footer;

export default Table;
