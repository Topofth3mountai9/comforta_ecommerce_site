import React from 'react';
import { company_info, company_socials } from '../../data';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../styles/theme';

const ContactLeftWrapper = styled.div``;

const Header = styled.div`
  p {
    margin-block: 2.5rem 2rem;
    width: 85%;
    line-height: 1.8;
  }
`;

const Svg = styled.svg`
  color: ${({ color }) => `${color}`};
  /* width: 1.5rem;
  height: 1.5rem; */
`;

const IndividualContactWrapper = styled.div`
  .info {
    .our_label {
      color: ${({ theme }) => theme.colors.grey.e};
    }
    .more {
      color: ${({ theme }) => theme.colors.black.black_400};
    }
  }
`;

const IconWrapper = styled.div`
  height: 5rem;
  width: 5rem;
  background: ${({ bg }) => `${bg}`};
  border-radius: ${({ theme }) => theme.border_radius.md};
  color: ${({ color }) => `${color}`};
  svg {
    /* width: 1.5rem;
    height: 1.5rem; */
    /* color: ${({ color }) => `${color}`}; */
  }
`;

const SocialMediaIconWrapper = styled(Link)`
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.light_primary};

  svg {
    color: ${({ theme }) => theme.colors.primary};
    width: 1.5rem;
    height: 1.5rem;
  }
`;

function Individual_contact({
  icon,
  label,
  info,
  colors: { main, light_main },
}) {
  return (
    <IndividualContactWrapper className="flex_items g_1 align_middle">
      <IconWrapper
        bg={light_main}
        color={main}
        className={`bg-[${main}] flex_items align_middle align_horizontal`}
      >
        {/* <Svg color={main}>{icon}</Svg> */}
        {icon}
      </IconWrapper>
      <div className="info flex_items flex_column">
        <span className="our_label text_xs">{label}</span>
        <span className="more">{info}</span>
      </div>
    </IndividualContactWrapper>
  );
}

const SocialMedia = ({ icon, url }) => {
  return (
    <SocialMediaIconWrapper
      to={url}
      className="flex_items align_middle align_horizontal"
    >
      {icon}
    </SocialMediaIconWrapper>
  );
};

function ContactLeft() {
  const individual_contact_elements = company_info.map((individual) => (
    <Individual_contact key={individual.id} {...individual} />
  ));
  const social_media_elements = company_socials.map((social) => (
    <SocialMedia key={social.id} {...social} />
  ));
  return (
    <ContactLeftWrapper>
      <Header>
        <h2>Get in touch</h2>
        <p className={`text-[#454545]`}>
          Wer'e here for you every step of the way. Whether you have questions,
          need order assistance, or want to share feedback, our friendly
          customer support team is ready to assist. Our team is here to help!
          Reach out to us via
        </p>
      </Header>
      <div className="our_info flex_items flex_column g_1 mb_32">
        {individual_contact_elements}
      </div>
      <div className="stay_connected">
        <h3 className="mb_16">Stay connected</h3>
        <div className="our_socials flex_items g_1">
          {social_media_elements}
        </div>
      </div>
    </ContactLeftWrapper>
  );
}

export default ContactLeft;
