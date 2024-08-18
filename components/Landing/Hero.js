import Image from "next/image.js";
import "./Landing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";

export default function HeroSection() {
  return (
    <div className="LandingContainer">
      <div className="LandingHeroMain">
        <Image
          className="LandingHeroMainImg"
          src="/LandingText.png"
          priority={true}
          sizes={1000}
          width={0}
          height={0}
        />
        <button className="LandingHeroMainAppbutt">
          <p style={{ margin: "auto" }}>Coming Soon!</p>
          <Fragment>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              style={{ fontSize: 40 }}
            />
          </Fragment>
        </button>
        {/* <button className="LandingHeroMainAppbutt" onClick={() => window.open("https://dashboard.hackumass.com/login", "_blank")}>
                    <p style={{ margin: "auto" }}>Applications Open!</p>
                    <Fragment>
                        <FontAwesomeIcon icon={faCircleArrowRight} style={{ fontSize: 40 }} />
                    </Fragment>
                </button> */}
      </div>
      <div className="LandingHeroBuilding">
        <Image
          priority={true}
          className="LandingHeroBuildingImg"
          src="/Building.svg"
          sizes={5000}
          width={0}
          height={0}
        />
      </div>
    </div>
  );
}
