import { createContext, useContext, useState } from 'react';
import styled from 'styled-components';

const TabContext = createContext();

const TabContainer = styled.div`
  max-width: ${({ theme }) => theme.containers.max_width_sm};
  margin-inline: auto;
  min-height: 70vh;
  width: 100%;
  width: 80%;
`;

const AllTags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const IndividualTag = styled.div`
  font-size: ${({ theme }) => theme.typography.text.xs};
  font-weight: 600;
  background: none;
  padding: 0.6em 1.2em;
  border-radius: ${({ theme }) => theme.border_radius.pill};
  border: ${({ theme, is_active }) =>
    is_active
      ? `.2rem solid ${theme.colors.primary}`
      : `.2rem solid ${theme.colors.grey[200]}`};
  color: ${({ theme, is_active }) =>
    is_active ? theme.colors.primary : theme.colors.grey.great};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    /* background: ${({ theme }) => theme.colors.grey[200]}; */
    opacity: 0.8;
  }
`;

const WantedContentContainer = styled.div`
  /* background: ${({ theme }) => theme.colors.grey[200]}; */
  min-height: 60vh;
  color: ${({ theme }) => theme.colors.grey.great};
  padding: 2rem;
  border-radius: 0.5rem;
`;

function Tab({ children, tabs }) {
  const [active_tab, set_active_tab] = useState(0);
  const [current_tab_content, set_current_tab_content] = useState(
    tabs[0].content
  );

  return (
    <TabContext.Provider
      value={{
        active_tab,
        set_active_tab,
        current_tab_content,
        set_current_tab_content,
        tabs,
      }}
    >
      <TabContainer>{children}</TabContainer>
    </TabContext.Provider>
  );
}

function Tags() {
  const { active_tab, set_active_tab, set_current_tab_content, tabs } =
    useContext(TabContext);

  const tab_tag_elements = tabs.map((tab, index) => {
    const { key, title, content } = tab;
    return (
      <IndividualTag
        key={key}
        is_active={active_tab === index}
        onClick={() => {
          set_active_tab(index);
          set_current_tab_content(content);
        }}
      >
        {title}
      </IndividualTag>
    );
  });

  return <AllTags>{tab_tag_elements}</AllTags>;
}

function Content() {
  const { current_tab_content } = useContext(TabContext);

  return <WantedContentContainer>{current_tab_content}</WantedContentContainer>;
}

Tab.Tags = Tags;
Tab.Content = Content;

export default Tab;
