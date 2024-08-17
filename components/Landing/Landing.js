"use client"
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

import NavigationBarLand from "../Navbar/Navbar.js";
import HeroSection from "./Hero.js";
import WhyHackUmass from "./WhyHackUmass.js";
import Sponsors from "./Sponsors.js";

import './Landing.css';

import Image from "next/image.js";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faSquareFacebook, faSquareXTwitter, faSquareInstagram } from "@fortawesome/free-brands-svg-icons";


export default function Landing() {

    return (
        <div className="landingpage">
            <NavigationBarLand />
            <HeroSection />
            <WhyHackUmass />
            <Sponsors />
            <div className="FAQ" id="faq">
                <div className="LandingAboutHeader">
                    <h1 className="heading">Frequently Asked Questions</h1>
                </div>
                <div className="FAQContent">
                    <div className="FAQContentItem">
                        <h3 className="FAQContentItemHeading"> <FontAwesomeIcon icon={faCaretRight} /> &nbsp;&nbsp;What is a hackathon?</h3>
                        <p className="FAQContentItemText">A hackathon is where students bring their cool ideas to life. Over the course of 36 hours, participants can use software and/or hardware to build their idea and win prizes, whether as a team or as an individual.</p>
                    </div>
                    <div className="FAQContentItem">
                        <h3 className="FAQContentItemHeading"> <FontAwesomeIcon icon={faCaretRight} /> &nbsp;&nbsp;What is a hackathon?</h3>
                        <p className="FAQContentItemText">A hackathon is where students bring their cool ideas to life. Over the course of 36 hours, participants can use software and/or hardware to build their idea and win prizes, whether as a team or as an individual.</p>
                    </div>
                    <div className="FAQContentItem">
                        <h3 className="FAQContentItemHeading"> <FontAwesomeIcon icon={faCaretRight} /> &nbsp;&nbsp;What is a hackathon?</h3>
                        <p className="FAQContentItemText">A hackathon is where students bring their cool ideas to life. Over the course of 36 hours, participants can use software and/or hardware to build their idea and win prizes, whether as a team or as an individual.</p>
                    </div>
                    <div className="FAQContentItem">
                        <h3 className="FAQContentItemHeading"> <FontAwesomeIcon icon={faCaretRight} /> &nbsp;&nbsp;What is a hackathon?</h3>
                        <p className="FAQContentItemText">A hackathon is where students bring their cool ideas to life. Over the course of 36 hours, participants can use software and/or hardware to build their idea and win prizes, whether as a team or as an individual.</p>
                    </div>
                    <div className="FAQContentItem">
                        <h3 className="FAQContentItemHeading"> <FontAwesomeIcon icon={faCaretRight} /> &nbsp;&nbsp;What is a hackathon?</h3>
                        <p className="FAQContentItemText">A hackathon is where students bring their cool ideas to life. Over the course of 36 hours, participants can use software and/or hardware to build their idea and win prizes, whether as a team or as an individual.</p>
                    </div>
                    <div className="FAQContentItem">
                        <h3 className="FAQContentItemHeading"> <FontAwesomeIcon icon={faCaretRight} /> &nbsp;&nbsp;What is a hackathon?</h3>
                        <p className="FAQContentItemText">A hackathon is where students bring their cool ideas to life. Over the course of 36 hours, participants can use software and/or hardware to build their idea and win prizes, whether as a team or as an individual.</p>
                    </div>
                    <div className="FAQContentItem">
                        <h3 className="FAQContentItemHeading"> <FontAwesomeIcon icon={faCaretRight} /> &nbsp;&nbsp;What is a hackathon?</h3>
                        <p className="FAQContentItemText">A hackathon is where students bring their cool ideas to life. Over the course of 36 hours, participants can use software and/or hardware to build their idea and win prizes, whether as a team or as an individual.</p>
                    </div>
                    <div className="FAQContentItem">
                        <h3 className="FAQContentItemHeading"> <FontAwesomeIcon icon={faCaretRight} /> &nbsp;&nbsp;What is a hackathon?</h3>
                        <p className="FAQContentItemText">A hackathon is where students bring their cool ideas to life. Over the course of 36 hours, participants can use software and/or hardware to build their idea and win prizes, whether as a team or as an individual.</p>
                    </div>
                </div>
            </div>
            <div className="Footer">
                <div className="FooterEmailSub">
                    <input className="FooterEmailSubInput" placeholder="Enter your email address to be the first to know when applications open!"></input>
                    <Image src="/buttonIcon.png" sizes={2000} width={0} height={0} priority={true} />
                </div>
                <div className="FooterSocials">
                    <Link
                        rel="noopener noreferrer" target="_blank"
                        smooth="true"
                        href="https://www.facebook.com/HackUMass/"
                        className="social-links"
                    >
                        <FontAwesomeIcon icon={faSquareEnvelope} />
                    </Link>

                    <Link
                        smooth="true"
                        rel="noopener noreferrer" target="_blank"
                        href="https://www.facebook.com/HackUMass/"
                        className="social-links"
                    >
                        <FontAwesomeIcon icon={faSquareFacebook} />
                    </Link>
                    <Link
                        smooth="true"
                        rel="noopener noreferrer" target="_blank"
                        href="https://www.facebook.com/HackUMass/"
                        className="social-links"
                    >
                        <FontAwesomeIcon icon={faSquareXTwitter} />
                    </Link>
                    <Link
                        smooth="true"
                        rel="noopener noreferrer" target="_blank"
                        href="https://www.facebook.com/HackUMass/"
                        className="social-links"
                    >
                        <FontAwesomeIcon icon={faSquareInstagram} />
                    </Link>
                </div>
                <div className="FooterContent">
                    <div className="FooterContentLeft">
                        <p>HackUMass XII</p>
                        <p>Why HackUMass</p>
                        <p style={{marginBottom: "0"}}>Sponsors</p>
                    </div>
                    <Image src="/FullBlueLogo.png" sizes={2000} width={0} height={0} priority={true} />
                    <div className="FooterContentRight">
                        <p>FAQ</p>
                        <p>Team</p>
                        <p style={{ marginBottom: "0" }}>Contact Us</p>
                    </div>
                </div>
            </div>
        </div>
    );
}