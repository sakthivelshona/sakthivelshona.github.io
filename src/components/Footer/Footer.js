import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin ,AiFillTwitterCircle} from 'react-icons/ai';
import Button from '../../styles/GlobalComponents/Button';
import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

const Footer = () => {
  return (
    <Section id="about1">
      <SectionDivider/><br/><br/>
      <SectionTitle>Contact</SectionTitle>
          <FooterWrapper>
            
      <LinkList>
      <LinkColumn> 
      <LinkTitle>E-mail</LinkTitle>
      <LinkItem href='mailto:shona.ad21@bitsathy.ac.in'>shona.ad21@bitsathy.ac.in</LinkItem>
      </LinkColumn>

      <LinkColumn> 
      <LinkTitle>Medium</LinkTitle>
      <LinkItem href='https://medium.com/@shona446'>shona446</LinkItem>
      </LinkColumn>

      <LinkColumn> 
      <LinkTitle>CodeChef</LinkTitle>
      <LinkItem href='https://www.codechef.com/users/shona_446'>shona_446</LinkItem>
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

<SocialIcons href='https://www.linkedin.com/in/shona-sakthivel/'>
<AiFillLinkedin size="3rem"></AiFillLinkedin>
</SocialIcons>

<SocialIcons href='https://twitter.com/SakthivelShona'>
<AiFillTwitterCircle size="3rem"></AiFillTwitterCircle>
</SocialIcons>
</SocialContainer>
</SocialIconsContainer>

    </FooterWrapper>
    </Section>
   

  );
};

export default Footer;
