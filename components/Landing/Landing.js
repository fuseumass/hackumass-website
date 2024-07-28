"use client"
import Image from "next/image.js";
import NavigationBarLand from "../Navbar/Navbar.js";
import './Landing.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

export default function Landing() {
    useEffect(() => {
        const why1 = document.getElementById("why1");
        const why2 = document.getElementById("why2");
        const why3 = document.getElementById("why3");
        const why4 = document.getElementById("why4");
        const why5 = document.getElementById("why5");
        const buttwhy1 = document.getElementById("buttwhy1");
        const buttwhy2 = document.getElementById("buttwhy2");
        const buttwhy3 = document.getElementById("buttwhy3");
        const buttwhy4 = document.getElementById("buttwhy4");
        const buttwhy5 = document.getElementById("buttwhy5");

        why1.style.display = "flex";
        buttwhy1.style.backgroundColor = "#ffffff";
        why2.style.display = "none";
        why3.style.display = "none";
        why4.style.display = "none";
        why5.style.display = "none";

        const interval = setInterval(() => {
            if (why1.style.display === "flex") {
                why1.style.display = "none";
                why2.style.display = "flex";
                buttwhy1.style.backgroundColor = "#DCDCDC";
                buttwhy2.style.backgroundColor = "#ffffff";
            } else if (why2.style.display === "flex") {
                why2.style.display = "none";
                why3.style.display = "flex";
                buttwhy2.style.backgroundColor = "#DCDCDC";
                buttwhy3.style.backgroundColor = "#ffffff";
            } else if (why3.style.display === "flex") {
                why3.style.display = "none";
                why4.style.display = "flex";
                buttwhy3.style.backgroundColor = "#DCDCDC";
                buttwhy4.style.backgroundColor = "#ffffff";
            } else if (why4.style.display === "flex") {
                why4.style.display = "none";
                why5.style.display = "flex";
                buttwhy4.style.backgroundColor = "#DCDCDC";
                buttwhy5.style.backgroundColor = "#ffffff";
            } else if (why5.style.display === "flex") {
                why5.style.display = "none";
                why1.style.display = "flex";
                buttwhy5.style.backgroundColor = "#DCDCDC";
                buttwhy1.style.backgroundColor = "#ffffff";
            }
            console.log(why1.style.display, why2.style.display, why3.style.display, why4.style.display, why5.style.display);
        }, 5000);

        return () => {
            clearInterval(interval);
        };

    }, [])
    
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
                        <p style={{ margin: "auto" }}>Apply Now!</p>
                        <FontAwesomeIcon icon={faCircleArrowRight} style={{ fontSize: 40 }} />
                    </button>
                </div>
                <div className="LandingHeroBuilding">
                    <Image
                        className="LandingHeroBuildingImg"
                        src="/Buildings.png"
                        sizes={5000}
                        width={0}
                        height={0}
                    />
                </div>
            </div>
            <div className="LandingAbout">
                <div className="LandingAboutHeader">
                    <h1>Why HackUMass?</h1>
                    <p>Welcome to HackUMass, a 36-hour hackathon where college students come together to learn, connect, and build their dream projects.</p>
                </div>
                <div className="LandingAboutContent">
                    <Image src="/WhyHackers.png"  id="why1" sizes={2000} width={0} height={0} priority={true} />
                    <Image src="/WhyDining.png"   id="why2" sizes={2000} width={0} height={0} priority={true} />
                    <Image src="/WhyHardware.png" id="why3" sizes={2000} width={0} height={0} priority={true} />
                    <Image src="/WhySponsors.png" id="why4" sizes={2000} width={0} height={0} priority={true} />
                    <Image src="/WhyVenue.png"    id="why5" sizes={2000} width={0} height={0} priority={true} />
                </div>
                <div className="LandingAboutContentButtons">
                    <button className="LandingAboutContentButton" id="buttwhy1"></button>
                    <button className="LandingAboutContentButton" id="buttwhy2"></button>
                    <button className="LandingAboutContentButton" id="buttwhy3"></button>
                    <button className="LandingAboutContentButton" id="buttwhy4"></button>
                    <button className="LandingAboutContentButton" id="buttwhy5"></button>
                </div>
            </div>
        </div>
    );

}