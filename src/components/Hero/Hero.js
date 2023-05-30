import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row nopadding >
<LeftSection>
  <SectionTitle main center>
  I'm SHONA<br/>

  </SectionTitle>
<SectionText>
Passionate Artificial Intelligence and Data Science Student</SectionText>
<Button>Connect</Button>

</LeftSection>



 </Section>
);

export default Hero;