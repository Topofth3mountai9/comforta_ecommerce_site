import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: ${({ theme }) => theme.colors.black.black_400}; */
  margin-bottom: 0;
  margin-top: 5rem;
  /* padding-block: 4rem; */
  /* border-top: 0.1rem solid #444; */
  color: ${({ theme }) => theme.colors.grey[300]};
`;

const FooterContent = styled.div`
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer className="bg-stone-900  flex_items align_middle align_horizontal mt_">
      {/* <OurContainer> */}
      <FooterContent>
        <p className="text_xs">
          Copyright &copy; 2024. All Rights Reserved | Made By{' '}
          <span className="text_primary text_tiny">Topofthemountain</span>
        </p>
      </FooterContent>
      {/* </OurContainer> */}
    </FooterContainer>
  );
}

export default Footer;
