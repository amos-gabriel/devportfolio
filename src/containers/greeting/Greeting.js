import React, {useContext} from "react";
import {motion} from "framer-motion";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import chillGuy from "../../assets/images/chillGuy.png";
import Spline from '@splinetool/react-spline';

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  const [splineLoading, setSplineLoading] = React.useState(true);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="greet-main"
      id="greeting"
    >
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {greeting.title} <span className="wave-emoji">{emoji("👋")}</span>
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
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contactez-moi" href="#contact" />
                {greeting.resumeLink && (
                  <a
                    href={require("./resume.pdf")}
                    download="resume.pdf"
                    className="download-link-button"
                  >
                    <Button text="Mon CV" />
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <>
                {splineLoading && (
                  <img
                    src={chillGuy}
                    alt="Chill Guy Loading"
                    style={{  objectFit: "contain", zIndex: 2 }}
                  />
                )}
                <Spline 
                  scene="https://prod.spline.design/GqfbbgY0JQHMHa2I/scene.splinecode"
                  onLoad={() => setSplineLoading(false)}
                  style={{ width: "100%", height: "100%", position: "relative", zIndex: 1 }}
                />
              </>
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )}
          </div>
        </div>
    </motion.div>
  );
}
