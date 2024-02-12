import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';
import Button from '../../styles/GlobalComponents/Button';

const Hero = (props) => {

  const handleDownload = () => {
    const fileUrl = '/resume.pdf';
    window.open(fileUrl);
  };

  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          I'm SHONA 
        </SectionTitle>
        <br/>
        <SectionText>
          Passionate Artificial Intelligence and Data Science Engineer with keen interest in Web Development and Machine Learning.Looking forward to learn new skills
        </SectionText>

        <Button onClick={handleDownload}>Resume</Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;
