import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

const Footer = () => {
  return (
    <Section id="about1">
      <SectionTitle>About</SectionTitle>
          <FooterWrapper>
            
      <LinkList>
      <LinkColumn> 
      <LinkTitle>E-mail</LinkTitle>
      <LinkItem href='mailto:shona.ad21@bitsathy.ac.in'>shona.ad21@bitsathy.ac.in</LinkItem>
      </LinkColumn>

      
      </LinkList>
<SocialIconsContainer>
<CompanyContainer>
<Slogan>Learn - Try - Execute - Repeat</Slogan>
</CompanyContainer>
<SocialContainer>
<SocialIcons href='https://github.com/sakthivelshona'>
<AiFillGithub size="3rem"></AiFillGithub>
</SocialIcons>

<SocialIcons href='https://www.linkedin.com/in/shona-sakthivel-b61802228/'>
<AiFillLinkedin size="3rem"></AiFillLinkedin>
</SocialIcons>

<SocialIcons href='https://github.com/sakthivelshona'>
<AiFillInstagram size="3rem"></AiFillInstagram>
</SocialIcons>
</SocialContainer>
</SocialIconsContainer>

    </FooterWrapper>
    </Section>
   

  );
};

export default Footer;
