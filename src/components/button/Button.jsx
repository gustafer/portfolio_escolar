import React from "react";
import "./Button.scss";

export default function Button({text, className, href, newTab, onClick, children}) {
  return (
    <div className={className} onClick={onClick}>
      <a className="main-button" href={href} target={newTab && "_blank"}>
        {text}{children}
      </a>
    </div>
  );
}
