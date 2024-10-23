import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

export default function WhyHackUmass() {
  const [active, setActive] = useState(0);

  const images = [
    "/WhyHackUmass/WhyHackers.svg",
    "/WhyHackUmass/WhyDining.svg",
    "/WhyHackUmass/WhyHardware.svg",
    "/WhyHackUmass/WhySponsors.svg",
    "/WhyHackUmass/WhyVenue.svg",
  ];

  const next = useCallback(
    () => setActive((active + 1) % images.length),
    [active, images.length]
  );

  useEffect(() => {
    const interval = setInterval(() => next(), 5000);
    return () => clearInterval(interval);
  }, [next]);

  const handleButtonClick = (index: number) => {
    setActive(index);
  };

  return (
    <div className="LandingAbout" id="aboutus">
      <div className="LandingAboutHeader">
        <h1 className="heading">Why HackUMass?</h1>
        <p className="p1">
          At HackUMass, we strive to provide a fun and welcoming space for STEM
          education and creation for students of all experience levels.
        </p>
      </div>
      <div className="LandingAboutContent">
        <Image
          src={images[active]}
          alt="Why HackUMass"
          width={1000}
          height={750}
          layout="responsive"
        />
      </div>
      <div className="LandingAboutContentButtons">
        {images.map((_, index) => (
          <button
            key={index}
            className="LandingAboutContentButton"
            style={{
              backgroundColor: active === index ? "#ffffff" : "#DCDCDC",
            }}
            onClick={() => handleButtonClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
