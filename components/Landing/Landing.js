import Image from "next/image.js";
import NavigationBarLand from "../Navbar/Navbar.js";
import './Landing.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight, faArrowCircleRight, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Landing() {
    return (
        <div className="landingpage">
            <NavigationBarLand />
            <div className="LandingContainer">
                <div className="LandingHeroMain">
                    <Image
                        className="LandingHeroMainImg"
                        src="/LandingText.png"
                        sizes={1000}
                        width={0}
                        height={0}
                    />
                    <button className="LandingHeroMainAppbutt">
                        <p style={{margin: "auto"}}>Apply Now!</p>
                        <FontAwesomeIcon icon={faCircleArrowRight} style={{ fontSize: 40 }} />
                    </button>
                </div>
                <div className="LandingHeroBuilding">
                    <Image
                        className="LandingHeroBuildingImg"
                        src="/Buildings.png"
                        sizes={1000}
                        width={0}
                        height={0}
                    />
                </div>
            </div>
        </div>
    );

}