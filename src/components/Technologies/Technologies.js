import React from 'react';
import { DiCss3,DiHtml5, DiJavascript, DiMongodb, DiPython, DiReact} from 'react-icons/di';
import { TbBrandNextjs } from "react-icons/tb";
import { FaRobot,FaNodeJs } from "react-icons/fa";
import { LinkContainer, Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { SiExpress } from "react-icons/si";

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
As a passionate developer with a keen interest in both front-end and back-end technologies, I have honed my skills in a diverse set of tools and languages that enable me to build comprehensive, robust, and innovative solutions. My technical toolkit includes extensive experience with:
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
<DiJavascript size="5rem"/>  <br/>
<LinkContainer>
<ListTitle>JAVASCRIPT</ListTitle>
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
<FaNodeJs size="5rem"/>  <br/>
<LinkContainer>
<ListTitle>NODEJS</ListTitle>
</LinkContainer>
</ListItem>

<ListItem>
<SiExpress size="5rem"/>  <br/>
<LinkContainer>
<ListTitle>EXPRESS</ListTitle>
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
