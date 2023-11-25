import React, { useContext, useState } from "react";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Tilt from 'react-parallax-tilt';
import { useEffect } from "react";
import { useRef } from "react";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  const [isToggle, setIsToggle] = useState(false);
  const divFaceFront = useRef(null);

  const handleToggle = () => {
    setIsToggle(isTog => !isTog);

    // console.log('aaaaaa clicou ')
  }

  useEffect(() => {
    if (isToggle)
      setTimeout(() => {
        divFaceFront.current.classList.add("d-none");
      }, 300);
    else divFaceFront.current.classList.remove("d-none");

  }, [isToggle])

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
              
              {greeting.title}<span className="wave-emoji">{emoji("🤙")}</span>{}
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
              {greeting.resumeLink 
              // && (
              //   <Button
              //     text="Contas Lol"
              //     newTab={false}
              //     href={greeting.resumeLink}
              //     className="botao"
              //   />
              // )
              }
              <Button onClick={handleToggle}><i className="fa-solid fa-music"></i></Button>


            </div>
          </div>
        </div>
        <div className="greeting-image-div" >
          <div className={`greeting-image-inner  ${isToggle ? 'is-flipped' : ''}`}>
            <div ref={divFaceFront} className="card__face--front">
              <Tilt className="Tilt" tiltMaxAngleX={20}
                tiltMaxAngleY={20} perspective={1000} >
                <img
                  alt="man sitting on table"
                  className="profile"
                  src={"/assets/images/profile3.png"}
                draggable={false}
                
                ></img>
                <div className={isDark ? "profileName-dark-mode" : "profileName"}></div>
              </Tilt>
            </div>
            <div className="card__face--back">
              <iframe className="spotify" style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/track/6wsqVwoiVH2kde4k4KKAFU?utm_source=generator&theme=0"
                width="60%" height="452" frameBorder="0" allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
                >
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
