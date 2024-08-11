import { useEffect } from "react";
import Button from "./Button";
import PropTypes from "prop-types";

const Hero = () => {
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
    <section className={`self-stretch h-[944px] flex flex-col items-center justify-start relative gap-[60px] text-left text-45xl text-lightest-grey font-heading`}>
      <header className="self-stretch overflow-hidden flex flex-col items-center justify-start py-[15px] px-[60px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] z-[0] text-left text-lg text-lightest-grey font-body" data-animate-on-scroll>
        <div className="self-stretch relative h-28 overflow-hidden shrink-0">
          <div className="absolute top-[32px] right-[0px] w-[848px] h-12">
            <div className="absolute top-[14px] right-[437px] leading-[181.53%] font-medium">
              2023
            </div>
            <div className="absolute top-[15px] right-[513px] leading-[181.53%] font-medium">
              Team
            </div>
            <div className="absolute top-[14px] right-[591px] leading-[181.53%] font-medium">
              Sponsors
            </div>
            <div className="absolute top-[14px] right-[703px] leading-[181.53%] font-medium">
              FAQ
            </div>
            <div className="absolute top-[12px] right-[768px] leading-[181.53%] font-medium">
              About Us
            </div>
            <div className="absolute top-[12px] right-[386px] text-5xl font-font-awesome-5-brands inline-block w-[21px] h-[25px]">
              
            </div>
            <div className="absolute top-[12px] right-[335px] text-5xl font-font-awesome-5-brands inline-block w-[21px] h-[25px]">
              
            </div>
            <div className="absolute top-[12px] right-[283px] text-5xl font-font-awesome-5-brands inline-block w-[22px] h-[25px]">
              
            </div>
            <Button
              propPosition="absolute"
              propTop="calc(50% - 24px)"
              propRight="0px"
              applicationsOpen="Applications Open!"
            />
          </div>
          <img
            className="absolute top-[0px] left-[0px] w-[157px] h-28 overflow-hidden object-cover"
            alt=""
            src="/whitelogo@2x.png"
          />
        </div>
      </header>
      <div className="self-stretch overflow-hidden flex flex-col items-start justify-center py-[15px] px-[60px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] z-[1]" data-animate-on-scroll>
        <h1 className="m-0 relative text-inherit leading-[131.7%] font-semibold font-[inherit]">
          <p className="m-0">An outpost for,</p>
          <p className="m-0">Your Craziest ideas.</p>
        </h1>
        <img
          className="w-[643px] relative h-[136px] object-cover"
          alt=""
          src="/hum-text-large@2x.png"
        />
        <div className="flex flex-col items-start justify-center gap-[15px] text-lg font-body">
          <div className="w-[379px] relative leading-[181.53%] font-medium inline-block">
            November 8-10 | 36 Hours | Amherst, MA
          </div>
          <div className="w-[335px] relative h-[54px] text-center text-5xl text-text-secondary font-heading">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl bg-lightest-grey" />
            <img
              className="absolute top-[calc(50%_-_19px)] right-[20px] w-[38px] h-[38px] overflow-hidden object-cover"
              alt=""
              src="/arrow-rightcircle@2x.png"
            />
            <div className="absolute top-[calc(50%_-_28px)] left-[calc(50%_-_240.5px)] leading-[131.7%] font-semibold flex items-center justify-center w-[451.8px] h-14">
              Apply Now!
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-[120vw] h-[932px] absolute !m-[0] top-[240px] left-[0px] overflow-hidden shrink-0 [&.animate]:animate-[1s_ease_0s_1_normal_forwards_slide-in-bottom] opacity-[0] z-[2]"
        data-animate-on-scroll
      >
        <img
          className=" absolute top-[564.5px] w-[100vw] h-[375.8px] z-[200]"
          alt=""
          src="/bushes.svg"
        />
        <div className="absolute bottom-[209px] w-[120vw] h-[687px]">
          <img
            className="absolute top-[376px] left-[0px] w-[354px] h-[260px] object-cover"
            alt=""
            src="/hotelumass@2x.png"
          />
          <img
            className="absolute top-[407px] left-[230px] w-[606px] h-[269px] object-cover"
            alt=""
            src="/ilc@2x.png"
          />
          <img
            className="absolute top-[233px] left-[761px] w-[401px] h-[454px] object-cover"
            alt=""
            src="/oldchapel@2x.png"
          />
          <img
            className="absolute top-[0px] left-[1090px] w-[283px] h-[687px] object-cover"
            alt=""
            src="/duboislibrary@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
