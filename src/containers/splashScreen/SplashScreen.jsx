import React, { useContext } from "react";
import "./SplashScreen.scss";
import { greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import { Fade } from "react-awesome-reveal";

export default function SplashScreen() {
  const { isDark } = useContext(StyleContext);
  return (
    <div className={isDark ? "dark-mode splash-container" : "splash-container"}>
      <div className="splash-animation-container">
      </div>
      <Fade>

      <div className="splash-title-container">
          <span className="grey-color"> &lt;</span>
          <span className="splash-title">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
      </div>
      </Fade>

    </div>
  );
}
