import { useEffect } from "react";
import SponsorsCard from "./SponsorsCard";
import Button from "./Button";
import PropTypes from "prop-types";

const Sponsors = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <section
      className={`self-stretch overflow-hidden flex flex-col items-center justify-start gap-[90px] text-center text-45xl text-text-secondary font-heading $`}
    >
      <div
        className="self-stretch flex flex-col items-center justify-start py-0 px-[60px] gap-[30px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0]"
        data-animate-on-scroll
      >
        <div className="self-stretch flex flex-col items-center justify-start gap-[30px]">
          <h1 className="m-0 self-stretch relative text-inherit leading-[131.7%] font-semibold font-[inherit] whitespace-pre-wrap">
            Our Sponsors
          </h1>
          <div className="self-stretch relative text-lg leading-[181.53%] font-medium font-body text-black">
            <span>Want to Sponsor HackUMass? Reach out to us at </span>
            <a
              className="text-darkblue"
              href="mailto:team@hackumass.com"
              target="_blank"
            >
              <span>team@hackumass.com</span>
            </a>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[60px]">
          <SponsorsCard image="/image-15@2x.png" />
          <SponsorsCard image="/image-15@2x.png" />
          <SponsorsCard image="/image-15@2x.png" />
          <SponsorsCard image="/image-151@2x.png" />
          <SponsorsCard image="/image-151@2x.png" />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-center py-0 px-[60px] gap-[90px] text-left text-base text-black font-body md:flex-col md:gap-[90px] md:items-center md:justify-center sm:flex-col sm:gap-[30px] sm:items-center sm:justify-center">
        <div
          className="flex-1 flex flex-col items-start justify-center py-0 px-[60px] gap-[30px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in-left] opacity-[0] md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch"
          data-animate-on-scroll
        >
          <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
            <div className="self-stretch relative leading-[181.53%]">{`Why should you sponsor us? `}</div>
            <div className="self-stretch relative text-sm leading-[204.27%] font-light whitespace-pre-wrap">
              Sponsoring HackUMass is a strategic opportunity to engage with
              some of the brightest minds in technology and innovation. As a
              sponsor, you'll have direct access to a diverse pool of talented
              students and professionals eager to tackle real-world challenges.
              This event serves as a breeding ground for cutting-edge ideas and
              solutions, offering your company a chance to gain fresh
              perspectives and innovative approaches to your business
              challenges.
            </div>
          </div>
          <Button applicationsOpen="Sponsor HackUMass" />
        </div>
        <img
          className="h-[217px] w-[470px] relative overflow-hidden shrink-0 object-contain [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in-right] opacity-[0]"
          alt=""
          src="/sposnsor-us-component@2x.png"
          data-animate-on-scroll
        />
      </div>
      <div
        className="self-stretch flex flex-col items-center justify-start py-0 px-[60px] gap-[30px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0]"
        data-animate-on-scroll
      >
        <div className="self-stretch flex flex-row items-start justify-center">
          <h1 className="m-0 flex-1 relative text-inherit leading-[131.7%] font-semibold font-[inherit] whitespace-pre-wrap">
            Our Partners
          </h1>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-between py-0 px-[60px] sm:flex-col sm:gap-[15px] sm:items-start sm:justify-center">
          <img
            className="w-[217px] relative h-[91px] object-cover"
            alt=""
            src="/image-17@2x.png"
          />
          <img
            className="w-[239px] relative h-[165px] object-cover"
            alt=""
            src="/image-20@2x.png"
          />
          <img
            className="w-[407px] relative h-[202px] object-cover"
            alt=""
            src="/image-13@2x.png"
          />
          <img
            className="w-[564px] relative h-[94px] object-cover"
            alt=""
            src="/image-14@2x.png"
          />
          <img
            className="w-[495px] relative h-[136px] object-cover"
            alt=""
            src="/image-152@2x.png"
          />
          <img
            className="w-[248px] relative h-[275px] object-cover"
            alt=""
            src="/image-16@2x.png"
          />
          <img
            className="w-[452px] relative h-[124px] object-cover"
            alt=""
            src="/image-19@2x.png"
          />
          <img
            className="w-[177px] relative h-44 object-cover"
            alt=""
            src="/image-18@2x.png"
          />
          <img
            className="w-[449px] relative h-[75px] object-cover"
            alt=""
            src="/image-153@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

Sponsors.propTypes = {
  className: PropTypes.string,
};

export default Sponsors;
