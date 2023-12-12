import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Podcast from "./podcast/Podcast";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import { splashScreen } from "../portfolio";
import { StyleProvider } from "../contexts/StyleContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import "./Main.scss";
import GameExperiences from "./workExperience/WorkExperience";
import { Fade } from "react-awesome-reveal";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : "light-mode"}>
      <StyleProvider value={{ isDark: isDark, changeTheme: changeTheme }}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Fade duration={2000} triggerOnce={true}>
              <Header />
              <Greeting />

              <Skills />

            </Fade>
            <Fade duration={4000} triggerOnce={true}>
              <Fade duration={2000} direction={'left'} triggerOnce={true}>
                <Education />
              </Fade>
            </Fade>
            <Fade triggerOnce={true}>
            <GameExperiences />
            <StartupProject />
            <Achievement />
            </Fade>
            <Blogs />
            <Talks />
            <Twitter />
            <Podcast />
            <Fade duration={2000} triggerOnce={true}>
            <Fade direction="left" triggerOnce={true}>
            <Profile />
            </Fade>
            </Fade>
            <Fade triggerOnce={true} duration={2000} >
            <Fade direction="down" triggerOnce={true}>
              <Footer />
            </Fade>
            </Fade>
            <ScrollToTopButton />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
