import React, { createContext, useState, useContext } from 'react';
import styled from 'styled-components';

const TabContext = createContext();

const TabContainer = styled.div`
  width: 100%;
`;

const TabListWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #e2e8f0;
`;

const TabButton = styled.button`
  padding: 0.5rem 1rem;
  font-weight: 500;
  color: ${(props) => (props.active ? '#3182ce' : '#4a5568')};
  border-bottom: ${(props) => (props.active ? '2px solid #3182ce' : 'none')};
  background-color: transparent;
  transition: all 0.3s ease;

  &:hover {
    color: #2c5282;
  }
`;

const TabPanelWrapper = styled.div`
  padding: 1rem;
`;

export function Tabs({ children, defaultTab }) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      <TabContainer>{children}</TabContainer>
    </TabContext.Provider>
  );
}

export function TabList({ children }) {
  return <TabListWrapper>{children}</TabListWrapper>;
}

export function Tab({ label, value }) {
  const { activeTab, setActiveTab } = useContext(TabContext);
  const isActive = activeTab === value;

  return (
    <TabButton active={isActive} onClick={() => setActiveTab(value)}>
      {label}
    </TabButton>
  );
}

export function TabPanel({ children, value }) {
  const { activeTab } = useContext(TabContext);
  if (activeTab !== value) return null;
  return <TabPanelWrapper>{children}</TabPanelWrapper>;
}

///demo
// import React from 'react';
// import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from './components/Tabs';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

const CardHeader = styled.div`
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid #e2e8f0;
`;

const CardTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
`;

const CardDescription = styled.p`
  color: #718096;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const SubTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 1.25rem;
`;

const ReviewContainer = styled.div`
  margin-top: 1rem;
`;

const ReviewName = styled.p`
  font-weight: 600;
`;

function App() {
  return (
    <Container>
      <Title>Product Dashboard</Title>
      <Card>
        <CardHeader>
          <CardTitle>Product Information</CardTitle>
          <CardDescription>
            View and manage your product details
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultTab="overview">
            <TabList>
              <Tab label="Overview" value="overview" />
              <Tab label="Specifications" value="specs" />
              <Tab label="Reviews" value="reviews" />
            </TabList>
            <TabPanel value="overview">
              <SubTitle>Product Overview</SubTitle>
              <p>
                This is a high-quality product designed to meet all your needs.
                It features cutting-edge technology and sleek design.
              </p>
            </TabPanel>
            <TabPanel value="specs">
              <SubTitle>Product Specifications</SubTitle>
              <List>
                <li>Dimensions: 10" x 5" x 2"</li>
                <li>Weight: 2 lbs</li>
                <li>Material: Aircraft-grade aluminum</li>
                <li>Battery Life: Up to 10 hours</li>
              </List>
            </TabPanel>
            <TabPanel value="reviews">
              <SubTitle>Customer Reviews</SubTitle>
              <ReviewContainer>
                <ReviewName>John D.</ReviewName>
                <p>Great product! Exactly what I needed.</p>
              </ReviewContainer>
              <ReviewContainer>
                <ReviewName>Sarah M.</ReviewName>
                <p>Good quality, but a bit pricey.</p>
              </ReviewContainer>
            </TabPanel>
          </Tabs>
        </CardContent>
      </Card>
    </Container>
  );
}

export default App;
