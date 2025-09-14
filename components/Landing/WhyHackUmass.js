import { useEffect } from "react";
import Image from "next/image.js";

export default function WhyHackUmass() {
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

    // Initialize the first image as visible
    why1.classList.add("active");
    
    // Add event listeners to buttons
    const setActive = (activeIndex) => {
      [why1, why2, why3, why4, why5].forEach((why, index) => {
        if (index === activeIndex) {
          why.classList.add("active");
        } else {
          why.classList.remove("active");
        }
      });

      [buttwhy1, buttwhy2, buttwhy3, buttwhy4, buttwhy5].forEach((butt, index) => {
        butt.style.backgroundColor = index === activeIndex ? "#ffffff" : "#DCDCDC";
      });
    };

    buttwhy1.addEventListener("click", () => setActive(0));
    buttwhy2.addEventListener("click", () => setActive(1));
    buttwhy3.addEventListener("click", () => setActive(2));
    buttwhy4.addEventListener("click", () => setActive(3));
    buttwhy5.addEventListener("click", () => setActive(4));

    const interval = setInterval(() => {
      const currentIndex = [why1, why2, why3, why4, why5].findIndex((why) => why.classList.contains("active"));
      const nextIndex = (currentIndex + 1) % 5;
      setActive(nextIndex);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="LandingAbout" id="aboutus">
      <div className="LandingAboutHeader">
        <h1 className="heading">Why HackUMass?</h1>
        <p className="p1">HackUMass is the perfect place for students of all backgrounds and experience levels to dive into the world of technology. As a beginner-friendly hackathon, we provide hands-on workshops and dedicated mentorship to teach you the skills you need to apply technology in your field. Over the course of 36 hours, you’ll have the chance to collaborate with like-minded students from across the country, build an exciting project with our support, and compete for amazing prizes. Beyond the competition, HackUMass is also an incredible opportunity to network with industry professionals, gain real-world experience, and join a vibrant community of innovators who share your passion for learning and creating.
</p>
      </div>
      <div className="LandingAboutContent">
        <Image
          src="/WhyHackUmass/WhyHackers.svg"
          id="why1"
          sizes={2000}
          width={0}
          height={0}
          priority={true}
        />
        <Image
          src="/WhyHackUmass/WhyDining.svg"
          id="why2"
          sizes={2000}
          width={0}
          height={0}
          priority={true}
        />
        <Image
          src="/WhyHackUmass/WhyHardware.svg"
          id="why3"
          sizes={2000}
          width={0}
          height={0}
          priority={true}
        />
        <Image
          src="/WhyHackUmass/WhySponsors.svg"
          id="why4"
          sizes={2000}
          width={0}
          height={0}
          priority={true}
        />
        <Image
          src="/WhyHackUmass/WhyVenue.svg"
          id="why5"
          sizes={2000}
          width={0}
          height={0}
          priority={true}
        />
      </div>
      <div className="LandingAboutContentButtons">
        <button className="LandingAboutContentButton" id="buttwhy1"></button>
        <button className="LandingAboutContentButton" id="buttwhy2"></button>
        <button className="LandingAboutContentButton" id="buttwhy3"></button>
        <button className="LandingAboutContentButton" id="buttwhy4"></button>
        <button className="LandingAboutContentButton" id="buttwhy5"></button>
      </div>
    </div>
  );
}
