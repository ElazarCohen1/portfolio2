'use client';

import React, { useState } from 'react';
import Skill from './skill'
import python_logo from '@/public/langage/python.png'
import java_logo from '@/public/langage/java.png'
import php_logo from '@/public/langage/php.png'
import c_logo from '@/public/langage/C.png'
import haskell_logo from '@/public/langage/haskell.png'
import nasm_logo from '@/public/langage/nasm.png'
import bash_logo from '@/public/langage/bash.png'


import tailwind_logo from '@/public/langage/tailwind.png'
import html_logo from '@/public/langage/html.png'
import css_logo from '@/public/langage/css.png'
import flutter_logo from '@/public/langage/flutter.png'
import react_logo from'@/public/langage/react.png' 
import sql_logo from '@/public/langage/sql.png' 
import nextjs_logo from '@/public/langage/nextjs.png'
import typescript_logo from '@/public/langage/typescript.png'

import git_logo from '@/public/langage/git.png'
import github_logo from '@/public/langage/github.png'
import vscode_logo from '@/public/langage/vscode.png'
import figma_logo from '@/public/langage/figma.png'




const SkillsMenu = () => {
  const skillsProg = [
    { name: 'Python', imageUrl: python_logo},
    { name: 'Java', imageUrl:  java_logo},
    { name: 'PHP', imageUrl:  php_logo},
    { name: 'C', imageUrl: c_logo },
    {name: "Haskell",imageUrl:haskell_logo},
    {name: "Nasm",imageUrl:nasm_logo},
    {name: "Bash",imageUrl:bash_logo},


  ];

  const skillsWeb = [
    { name: 'HTML', imageUrl:  html_logo},
    { name: 'CSS', imageUrl:  css_logo},
    {name : 'SQL',imageUrl:sql_logo },
    { name: 'Flutter', imageUrl: flutter_logo },
    { name: 'React', imageUrl: react_logo},
    { name: 'Tailwind', imageUrl: tailwind_logo},
    {name:"Nextjs", imageUrl: nextjs_logo},
    {name:"TypeScript", imageUrl: typescript_logo}


  ];

  const skillsUtils = [
    { name: 'Git', imageUrl:  git_logo},
    { name: 'Github', imageUrl:  github_logo},
    { name: 'VsCode', imageUrl: vscode_logo},
    {name: 'Figma', imageUrl: figma_logo}
  ];

  const [selectedSet, setSelectedSet] = useState('set1');

  const showSkills = (set:string) => {
    setSelectedSet(set);
  };

  return (
    <div>
      <div className="menu">
        <div className="menu-item" onClick={() => showSkills('set1')}>Programmation</div>
        <div className="menu-item" onClick={() => showSkills('set2')}>Web</div>
        <div className="menu-item" onClick={() => showSkills('set3')}>Outils</div>
      </div>
      <div id="skills-container" className="skills-container">
        {selectedSet === 'set1' && skillsProg.map((skill, index) => (
          <div key={index} className="skill" >
            <Skill name={skill.name} imageUrl={skill.imageUrl} />
          </div>
        ))}
        {selectedSet === 'set2' && skillsWeb.map((skill, index) => (
          <div key={index} className="skill">
            <Skill name={skill.name} imageUrl={skill.imageUrl} />
          </div>
        ))}
        {selectedSet === 'set3' && skillsUtils.map((skill, index) => (
          <div key={index} className="skill">
            <Skill name={skill.name} imageUrl={skill.imageUrl} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsMenu;
