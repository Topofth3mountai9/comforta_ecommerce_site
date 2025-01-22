import React from 'react';
import OurContainer from './OurContainer.component';
import Section_header from './section_header.component';
import { services } from '../data';
import styled from 'styled-components';

const OurServicesContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const OurServicesContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const OurServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2.4rem;
  width: 80%;
`;

const ServiceCardContainer = styled.div`
  /* background-color: ${({ theme }) => theme.colors.grey[0]}; */
  background: #f7f7f7;
  box-shadow: ${({ theme }) => theme.box_shadows.md};
  padding: ${({ has_image }) => (has_image ? '0' : '2.4rem')};
  border-radius: ${({ theme }) => theme.border_radius.md};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  text-align: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey[0]};
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.1);
  }
  h4 {
    color: ${({ theme }) => theme.colors.black.black_400};
  }
  p {
    color: ${({ theme }) => theme.colors.grey[600]};
  }
`;
const StyledIcon = styled.div`
  svg {
    color: ${({ theme }) => theme.colors.primary};
    width: 4rem;
    height: 4rem;
  }
`;
const ServiceImage = styled.img`
  width: 100;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.border_radius.md};
`;

function OurServices() {
  const service_elements = services.map((service) => {
    //providing default values for all possible properties
    const {
      id,
      image = '',
      title = '',
      description = '',
      icon = null,
    } = service;
    return (
      <ServiceCardContainer key={id} has_image={!!image}>
        {image ? (
          <ServiceImage src={image} />
        ) : (
          <>
            <StyledIcon>{icon}</StyledIcon>
            <h4>{title}</h4>
            <p>{description}</p>
          </>
        )}
      </ServiceCardContainer>
    );
  });
  return (
    <OurServicesContainer className="mt-32">
      <OurContainer>
        <OurServicesContent>
          <Section_header tag="the best" h2="our services" />
          <OurServicesGrid>{service_elements}</OurServicesGrid>
        </OurServicesContent>
      </OurContainer>
    </OurServicesContainer>
  );
}

export default OurServices;
