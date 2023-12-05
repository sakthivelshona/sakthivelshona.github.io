import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin,AiFillTwitterCircle } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { AiOutlineDoubleRight } from "react-icons/ai";

import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span} from './HeaderStyles';

const Header = () =>  (

<Container>
<Div1>
    <a style={{display :"flex",alignItems:"center",color:"white",marginBottom:'10'}}>
    <AiOutlineDoubleRight size="3rem"/>  <Span>Portfolio</Span>
   </a>

  </Div1>

<Div2>

<li>
  <Link href="#projects">
<NavLink>Projects</NavLink>
  </Link>
</li>

<li>
  <Link href="#tech">
<NavLink>Technologies</NavLink>
  </Link>
</li>

<li>
  <Link href="#accomplishments">
<NavLink>Achievements</NavLink>
  </Link>
</li>
<li>
  <Link href="#about1">
<NavLink>Contact</NavLink>
  </Link>
</li>
</Div2>

<Div3>

<SocialIcons href='https://github.com/sakthivelshona'>
<AiFillGithub size="3rem"></AiFillGithub>
</SocialIcons>

<SocialIcons href='https://www.linkedin.com/in/shona-sakthivel/'>
<AiFillLinkedin size="3rem"></AiFillLinkedin>
</SocialIcons>

<SocialIcons href='https://twitter.com/SakthivelShona'>
<AiFillTwitterCircle size="3rem"></AiFillTwitterCircle>
</SocialIcons>

</Div3>
  </Container>


  
);

export default Header;
