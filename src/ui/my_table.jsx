import React, { createContext, useContext } from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const TableContext = createContext();

const TitleCommon = styled.div`
  padding: 1.6rem 2.4rem;
  background: ${({ theme }) => theme.colors.secondary};
  /* border-radius: ${({ theme }) => theme.border_radius.lg} !important; */
  color: ${({ theme }) => theme.colors.grey[0]};
  text-transform: capitalize;
`;

const Title = styled(TitleCommon)``;

const StyledTable = styled.div`
  font-size: ${({ theme }) => theme.typography.text.xs};
  background: ${({ theme }) => theme.colors.grey[0]};
  border-radius: ${({ theme }) => theme.border_radius.md};
  overflow: hidden;
  display: flex;
  gap: 2rem;
  gap: 0;

  .title {
    padding: 1.6rem 2.4rem;
    padding-inline: 2.4rem 0;
  }
`;

const CommonColumn = styled.div`
  display: flex;
  flex-flow: column wrap;
  /* display: grid; */
  /* grid-template-rows: ${({ rows }) => rows}; */
  gap: 1rem;
  /* align-items: center; */
`;

const StyledHeader = styled(CommonColumn)`
  /* padding: 1.6rem 2.4rem; */
  /* padding-inline: 2.4rem 0; */
  text-transform: lowercase;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.grey[600]};
  text-transform: capitalize;

  & > div {
    width: 20rem;
    /* width: 165%; */
    border: ${({ theme }) => `.1rem solid ${theme.colors.grey[300]}`};
    border-right: none;

    border-radius: ${({ theme }) => theme.border_radius.md};
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    padding: 1.2rem 2.4rem;
  }

  .title_1 {
    padding-inline: 2.4rem 0 !important;
    border-radius: ${({ theme }) => theme.border_radius.lg} !important;
    border-top-left-radius: ${({ theme }) => theme.border_radius.lg} !important;
    border-top-right-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
  }
`;

const StyledColumn = styled(CommonColumn)`
  /* border: ${({ theme }) => `.1rem solid ${theme.colors.grey[300]}`}; */
  /* border-radius: ${({ theme }) => theme.border_radius.md}; */
  /* padding: 1.6rem 2.4rem; */
  /* padding-inline: 0rem 2.4rem; */

  text-transform: capitalize;

  & > div {
    width: 21rem;
    /* width: 165%; */
    border: ${({ theme }) => `.1rem solid ${theme.colors.grey[300]}`};
    border-left: none;

    border-radius: ${({ theme }) => theme.border_radius.md};
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    padding: 1.2rem 2.4rem;
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${theme.colors.grey[100]};
  }

  .title_2 {
    /* padding-inline: 0rem 2.4rem; */

    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-radius: ${({ theme }) => theme.border_radius.lg} !important;
    border-top-right-radius: ${({ theme }) =>
      theme.border_radius.lg} !important;
    border-top-left-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
  }
`;

const Empty = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`;

const StyledBody = styled.div`
  /* margin: 0.4rem 0; */
  /* font-weight: 600; */
`;

function Table({ children, rows, header_1, header_2 }) {
  return (
    <TableContext.Provider value={{ rows, header_1, header_2 }}>
      <StyledTable>{children}</StyledTable>
    </TableContext.Provider>
  );
}

// function Title({ children }) {}

function Header({ children }) {
  const { rows, header_1 } = useContext(TableContext);
  return (
    <StyledHeader rows={rows}>
      <Title className="title title_1">{header_1}</Title>
      {children}
    </StyledHeader>
  );
}

function Column({ children }) {
  const { rows, header_2 } = useContext(TableContext);
  return (
    <StyledColumn rows={rows}>
      <Title className="title title_2">{header_2}</Title>

      {children}
    </StyledColumn>
  );
}

function Body({ data, render }) {
  console.log(data);
  if (!data.length) return <Empty>No data to show for this item!</Empty>;
  return <StyledBody>{data.map(render)}</StyledBody>;
}

// Table.Title = Title;
Table.Header = Header;
Table.Column = Column;
Table.Body = Body;

export default Table;
