import React, { useContext, useState, useMemo } from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skillsSection } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import { TypeAnimation } from 'react-type-animation';
import classNames from "classnames";


const skillListing = [
  {
    title: '⚡ Jogos Online ',
    style: 'background-games',
    stylemobile:'skill-background-mobile-games',
    desc: 'Curto jogos competitivos como CS2, Valorant, LoL, COD e Battlebit Remastered. Também curto Terraria, Hades e uns jogos de ritmo. ',
  },
  {
    title: '⚡ Estudo química e progamação web',
    style: 'background-chemistry',
    stylemobile:'skill-background-mobile-chemistry',
    desc: 'Faço curso de química na ETECIA(etec irmã agostina) e aprendendo progamação.'
  },
  {
    title: '⚡ Projetos Open-Source',
    style: 'background-projects',
    stylemobile:'skill-background-mobile-opensource',
    desc: 'Curto desenvolvimento web e jogos, aprendendo atualmente React e C#.'
  },
  {
    title: '⚡ Tênis de mesa',
    style: 'background-tabletennis',
    stylemobile:'skill-background-mobile-tabletennis',
    desc: 'Gosto de praticar tênis de mesa e assistir campeonatos, tambem sou entusiasta em equipamentos.'
  },
  {
    title: '⚡ Artes e design digital',
    style: 'background-art',
    stylemobile:'skill-background-mobile-art',
    desc: 'Curto desenhar e fazer design digital, desde 2015.'
  },
  {
    title: '⚡ Balisong flipping',
    style: 'background-balisong',
    stylemobile:'skill-background-mobile-balisong',
    desc: 'Curto balisongs e adoro aprender manobras novas.'
  },
];

export default function Skills() {

  const [style, setStyle] = useState('background-games');
  const desc = useMemo(() => skillListing.find(filter => filter.style === style)?.desc ?? "nada", [skillListing, style]);


  const { isDark } = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <div className={style}>
        </div>
        <div className={classNames("skills-text-div", skillListing.find(f => f.style === style).stylemobile)}>
          <div className="skills-mobile-background-div">
          <h1
            className={isDark ? "dark-mode skills-heading" : "skills-heading"}
          >
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                'O que gosto?',
                3000,
                'O que eu sei?',
                3000,
                'O que quero?',
                3000,
              ]}
              speed={50}
              style={{ fontSize: '1em' }}
              repeat={Infinity}
            />
          </h1>
          <p
            className={
              isDark
                ? "dark-mode subTitle skills-text-subtitle"
                : "subTitle skills-text-subtitle"
            }
          >
            {skillsSection.subTitle} <br />
          </p>

          <SoftwareSkill />
          {skillListing.map((divListing, idx) => <> <div className="skill-title-clickable" key={idx} onClick={() => setStyle(divListing.style)}>
            {divListing.title}</div>
            {divListing.desc === desc ? <TypeAnimation className="title-desc-clickable"
              sequence={[
                desc,
                3000,
              ]}
              speed={80}
              style={{ fontSize: '1em', marginBottom: '1em' }}
              repeat={Infinity}
            /> : <></>}
          </>
          )}

          <div background="./assets/images/league.png">
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
