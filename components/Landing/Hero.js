import Image from "next/image.js";
import "./Landing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="LandingContainer">
      <div className="LandingHeroMain">
        <motion.div
          initial={{ x: -300, opacity: 0 }} // Start position from left
          animate={{ x: 0, opacity: 1 }} // End position
          transition={{ duration: 1 }} // Animation duration
        >
                <h1 className="LandingHeroMainSubTitle">An outpost for,</h1>
                <h1 className="LandingHeroMainSubTitle">Your craziest Ideas</h1>
                <h1 className="LandingHeroMainTitle">Hack<span>UMass XII</span></h1>
                <h1 className="LandingHeroMainLead">Nov 8-10 | 36 Hours | Amherst, MA</h1>
        </motion.div>
        <motion.button
          className="LandingHeroMainAppbutt"
          onClick={() =>
            window.open("https://dashboard.hackumass.com/login", "_blank")
          }
          initial={{ x: -300, opacity: 0 }} // Start position from left
          animate={{ x: 0, opacity: 1 }} // End position
          transition={{ duration: 1 }} // Animation duration
        >
          <p style={{ margin: "auto" }}>Apply Now!</p>
          <Fragment>
            <FontAwesomeIcon
              className="LandingHeroMainAppRightButton"
              icon={faCircleArrowRight}
              style={{ fontSize: "2.3vw", padding: 0 }}
            />
          </Fragment>
        </motion.button>
      </div>
      <motion.div
        className="LandingHeroBuilding"
        initial={{ y: 400, opacity: 0 }} // Start position from bottom
        animate={{ y: 0, opacity: 1 }} // End position
        transition={{ duration: 1.5 }} // Animation duration
      >
        <Image
          priority={true}
          className="LandingHeroBuildingImg"
          src="/Building.svg"
          sizes={5000}
          width={0}
          height={0}
        />
      </motion.div>
    </div>
  );
}
