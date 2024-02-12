import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 'Winner', text: "Infocruise'22 Paper Presentation", },
  { number: 'Winner', text: 'Kho-Kho Intercollege Sports Meet' },
  { number: 'Runner', text: 'Talentum Taerid - Wordsmith'},
  { number: 'Bronze Medal', text: 'BRICS 2023 - AI Computer Visinn Application', },
  { number: 'Finalist', text: 'BRICS Skills Competition 2022- AR/VR', },
];

const Acomplishments = () => (
 <Section id="accomplishments">
  <SectionTitle>Achievements</SectionTitle>
  <Boxes>
{data.map((card,index)=>(

  <Box key={index}>
<BoxNum>{card.number}</BoxNum><br/>
<BoxText>{card.text}</BoxText>

  </Box>
))}

  </Boxes>
 </Section>
);

export default Acomplishments;
