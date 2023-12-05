import React from 'react';
import { DiCss3,DiHtml5, DiJavascript, DiMongodb, DiPython, DiReact} from 'react-icons/di';
import { TbBrandNextjs } from "react-icons/tb";
import { FaRobot } from "react-icons/fa";
import { LinkContainer, Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';


/*<ListItem>
<DiReact size="5rem"/><br/>
<LinkContainer>
<ListTitle>REACT.JS</ListTitle>
<ListParagraph>
Experience with <br/>
database
</ListParagraph>
</LinkContainer>
</ListItem>*/


const Technologies = () =>  (
  <Section id="tech">
<SectionDivider/>
<br/><br/>
<SectionTitle>Technologies</SectionTitle><br/>
<SectionText>
  I have worked on few technologies
</SectionText>
<List>

<ListItem>
<DiHtml5 size="5rem"/><br/>
<LinkContainer>
<ListTitle>HTML</ListTitle>
</LinkContainer>
</ListItem>

<ListItem>
<DiReact size="5rem"/><br/>
<LinkContainer>
<ListTitle>REACT.JS</ListTitle>
</LinkContainer>
</ListItem>


<ListItem>
<TbBrandNextjs size="5rem"/><br/>
<LinkContainer>
<ListTitle>NEXT.JS</ListTitle>
</LinkContainer>
</ListItem>

<ListItem>
<DiCss3 size="5rem"/><br/>
<LinkContainer>
<ListTitle>CSS</ListTitle>
</LinkContainer>
</ListItem>



<ListItem>
<DiJavascript size="5rem"/>  <br/>
<LinkContainer>
<ListTitle>JAVASCRIPT</ListTitle>
</LinkContainer>
</ListItem>


<ListItem>
<FaRobot size="5rem"/><br/>
<LinkContainer>
<ListTitle>MACHINE<br/>  LEARNING</ListTitle>
</LinkContainer>
</ListItem>

<ListItem>
<DiPython size="5rem"/><br/>
<LinkContainer>
<ListTitle>PYTHON</ListTitle>
</LinkContainer>
</ListItem>


<ListItem>
<DiMongodb size="5rem"/><br/>
<LinkContainer>
<ListTitle>MONGODB</ListTitle>
</LinkContainer>
</ListItem>





</List>

  </Section>
);

export default Technologies;
