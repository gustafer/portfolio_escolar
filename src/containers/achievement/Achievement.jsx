import React, { useContext } from "react";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import { gamesSection } from "../../portfolio";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import { Carousel } from 'react-responsive-carousel';
import { Fade } from "react-awesome-reveal";

export default function Achievement() {
  const { isDark } = useContext(StyleContext);
  if (!gamesSection.display) {
    return null;
  }
  return (
    <div className="main" id="achievements">
      <div className="achievement-main-div">
        <div className="achievement-header">
          <h1
            className={
              isDark
                ? "dark-mode heading achievement-heading"
                : "heading achievement-heading"
            }
          >
            {gamesSection.title}
            <span className="joystick-emoji">{emoji("🎮")}</span>
           
          </h1 >
          <p
            className={
              isDark
                ? "dark-mode subTitle achievement-subtitle"
                : "subTitle achievement-subtitle"
            }
          >
            {gamesSection.subtitle}
          </p>
        </div>
        <div className="achievement-cards-div d-sm-none">
          {gamesSection.achievementsCards.map((card, i) => {
            return (
              <AchievementCard
                key={i}
                isDark={isDark}
                cardInfo={{
                  title: card.title,
                  description: card.subtitle,
                  image: card.image,
                  imageAlt: card.imageAlt,
                  footer: card.footerLink
                }}
              />
            );
          })}
        </div>
        <div className="achievement-cards-div d-md-none">
          <Carousel
            infiniteLoop
            showArrows
            showStatus={false}
            preventMovementUntilSwipeScrollTolerance={true}
            swipeScrollTolerance={50}
            showThumbs={false}
          >
            {gamesSection.achievementsCards.map((card, i) => {
              return (
                <AchievementCard
                  key={i}
                  isDark={isDark}
                  cardInfo={{
                    title: card.title,
                    description: card.subtitle,
                    image: card.image,
                    imageAlt: card.imageAlt,
                    footer: card.footerLink
                  }}
                />
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
