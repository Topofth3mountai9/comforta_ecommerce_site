import { createContext, useContext, useState } from 'react';
import styled, { css } from 'styled-components';

const TabContext = createContext();

const TabRadioContainer = styled.div`
  width: 100%;
  margin-block: 2rem 2.3rem;
`;

const TabButton = styled.div`
  display: flex;
  align-items: center;
`;

const RadioBtn = styled.div`
  background: transparent;
  height: 1.5rem;
  width: 1.5rem;
  border: ${({ theme }) => `.1rem solid ${theme.colors.grey[300]}`};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
`;

const InnerRadioBtn = styled.div`
  /* .inner_radio_btn { */
  height: 0.8rem;
  width: 0.8rem;
  background: ${({ is_active, theme }) =>
    is_active ? theme.colors.primary : 'none'};
  display: none;
  visibility: hidden;
  opacity: 0;
  border-radius: 50%;

  ${({ is_active }) =>
    is_active &&
    css`
      display: block;
      visibility: visible;
      opacity: 1;
    `}/* } */
`;

const TabsListWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin-block: 2rem;
`;

const TabPanelWrapper = styled.div`
  /* padding: 1.5rem; */
  /* padding-block-start: 2rem; */
`;

function TabsRadio({ children, default_tab }) {
  const [active_tab, set_active_tab] = useState(default_tab);

  return (
    <TabContext.Provider value={{ active_tab, set_active_tab }}>
      <TabRadioContainer>{children}</TabRadioContainer>
    </TabContext.Provider>
  );
}

function TabsList({ children }) {
  return <TabsListWrapper>{children}</TabsListWrapper>;
}

function Tab({ label, value }) {
  const { active_tab, set_active_tab } = useContext(TabContext);

  return (
    <TabButton onClick={() => set_active_tab(value)}>
      <RadioBtn>
        <InnerRadioBtn is_active={active_tab === value}></InnerRadioBtn>
      </RadioBtn>
      <span>{label}</span>
    </TabButton>
  );
}

function TabPanel({ children, value }) {
  const { active_tab } = useContext(TabContext);
  if (active_tab !== value) return null;
  return <TabPanelWrapper>{children}</TabPanelWrapper>;
}

TabsRadio.TabsList = TabsList;
TabsRadio.Tab = Tab;
TabsRadio.TabPanel = TabPanel;

export default TabsRadio;
