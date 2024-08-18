"use client"
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

import NavigationBarLand from "../Navbar/Navbar.js";
import HeroSection from "./Hero.js";
import WhyHackUmass from "./WhyHackUmass.js";
import OurTeam from './OurTeam.js';
import Sponsors from "./Sponsors.js";

import './Landing.css';

import Faq from './Faq.js';
import Footer from './Footer.js';


export default function Landing() {

    return (
        <div className="landingpage dark">
            <NavigationBarLand />
            <HeroSection />
            <WhyHackUmass />
            <Sponsors />
            <Faq />
            <OurTeam />
            <Footer />
        </div>
    );
}