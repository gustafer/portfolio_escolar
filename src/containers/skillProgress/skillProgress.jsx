import React from "react";
import "./Progress.scss";
import { illustration, techStack } from "../../portfolio";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function StackProgress() {
  if (techStack.viewSkillBars) {
    return (
      <div className="skills-container">
        <div className="skills-bar">
          <h1 className="skills-heading">ss</h1>
          {techStack.experience.map((exp, i) => {
            const progressStyle = {
              width: exp.progressPercentage
            };
            return (
              <div key={i} className="skill">
                <p>{exp.Stack}</p>
                <div className="meter">
                  <span style={progressStyle}></span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="skills-image">
          <img
            alt="Skills"
            src={"/assets/images/stars.svg"}
          />

        </div>
      </div>
    );
  }
  return null;
}
