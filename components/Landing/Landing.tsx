"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; /* eslint-disable import/first */

import "./Landing.css";

import NavigationBarLand from "../Navbar/Navbar";
import HeroSection from "./Hero";
import WhyHackUmass from "./WhyHackUmass";
import Sponsors from "./Sponsors";
import OurTeam from "./OurTeam";
import Faq from "./Faq";
import Footer from "./Footer";

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
