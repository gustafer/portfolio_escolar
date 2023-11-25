import React, {useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skillsSection } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import { TypeAnimation } from 'react-type-animation';

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
          <div className="skills-image-div">  
          </div>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              <TypeAnimation
  sequence={[
    // Same substring at the start will only be typed once, initially
    'O que eu gosto e faço?',
    3000,
    'O que eu sei fazer?',
    3000,
    'O que gosto de fazer?',
    3000,
    'O que eu quero fazer?',
    3000,
  ]}
  speed={50}
  style={{ fontSize: '1em' }}
  repeat={Infinity}
/>
              {skillsSection.title}{" "}
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
            <div background="./assets/images/league.png">
              {skillsSection.skills.map((skills, i) => {
                return (
                  <p
                    key={i}
                    className={
                      isDark
                        ? "dark-mode subTitle skills-text"
                        : "subTitle skills-text"
                    }
                  >
                    {skills}
                  </p>
                );
              })}
            </div>
          </div>
      </div>
    </div>
  );
}
