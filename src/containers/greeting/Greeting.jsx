import React, { useContext } from "react";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Tilt from 'react-parallax-tilt';

export default function Greeting() {
  const { isDark } = useContext(StyleContext);

  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1
              className={isDark ? "dark-mode greeting-text" : "greeting-text"}
            >
              {" "}
              {greeting.title}{" "}
              <span className="wave-emoji">{emoji("👋")}</span>
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode greeting-text-p"
                  : "greeting-text-p subTitle"
              }
            >
              {greeting.subTitle}
            </p>
            <SocialMedia />
            <div className="button-greeting-div">
              <Button text="Me contate" href="#contact" />
              {greeting.resumeLink && (
                <Button
                  text="Veja meu resumo"
                  newTab={true}
                  href={greeting.resumeLink}
                />
              )}
            </div>
          </div>
        </div>
          <div className="greeting-image-div">
          <Tilt className="Tilt" tiltMaxAngleX={20} 
        tiltMaxAngleY={20} perspective={1000}
        gyroscope={true} >
              <img
                alt="man sitting on table"
                className="profile"
                src={"/assets/images/profile.png"}
              ></img>
              <div className={isDark ? "profileName-dark-mode" : "profileName"}>ustav#0397</div>
            </Tilt>
            
          </div>
      </div>
    </div>
  );
}
