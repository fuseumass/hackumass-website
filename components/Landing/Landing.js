"use client"
import Image from "next/image.js";
import NavigationBarLand from "../Navbar/Navbar.js";
import './Landing.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import HeroSection from "./Hero.js";
import WhyHackUmass from "./WhyHackUmass.js";

export default function Landing() {
    
    return (
        <div className="landingpage">
            <NavigationBarLand />
            <HeroSection />
            <WhyHackUmass />
            <div className="Sponsors">
                <div className="LandingAboutHeader">
                    <h1 className="heading">Our Sponsors</h1>
                    <p className="p1">Want to Sponsor HackUMass? Reach out to us at <span style={{ color: "#2832C1", cursor: "pointer"}} onClick={() => (window.open("mailto:team@hackumass.com"))}>team@hackumass.com</span></p>
                </div>
                <div className="SponsorImages">
                    <Image src="/Sponsors.png" sizes={2000} width={0} height={0} priority={true} />
                </div>
                <div className="LandingAboutHeader">
                    <h1 className="heading">Our Partners</h1>
                </div>
                <div className="SponsorImages">
                    <Image src="/Partners.png" sizes={2000} width={0} height={0} priority={true} />
                </div>
            </div>
        </div>
    );

}