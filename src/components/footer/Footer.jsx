import React, {useContext} from "react";
import "./Footer.scss";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Feito com ❤️, ustav.")}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Open source de{" "}
          <a href="https://github.com/saadpasta/developerFolio">
            developerFolio
          </a>
        </p>
      </div>
  );
}
