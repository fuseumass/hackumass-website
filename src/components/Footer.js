import { useEffect } from "react";
import PropTypes from "prop-types";

const Footer = () => {
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
      className={`self-stretch flex flex-col items-center justify-end pt-0 px-[30px] pb-[60px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in-bottom] opacity-[0] text-left text-base text-text-secondary font-body `}
      data-animate-on-scroll
    >
      <div className="self-stretch flex flex-col items-center justify-end py-0 px-[90px] gap-[60px]">
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-[250px]">
          <div className="self-stretch relative h-[101px]">
            <input
              className="border-accent-blue border-[3px] border-solid [outline:none] bg-lightest-grey absolute h-[63.37%] w-full top-[0%] right-[0%] bottom-[36.63%] left-[0%] rounded-81xl box-border"
              type="text"
            />
            <div className="absolute top-[calc(50%_-_34.5px)] left-[32px] w-[556px] h-[33px]">
              <div className="absolute top-[calc(50%_-_16.5px)] left-[0px] leading-[181.53%] flex items-center w-[556px] h-[33px]">
                Enter your email address to be the first to know when
                applications open
              </div>
            </div>
            <img
              className="absolute h-[calc(100%_-_55px)] top-[9px] right-[9px] bottom-[46px] max-h-full w-[46px] object-cover"
              alt=""
              src="/buttonicon@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-row items-center justify-between text-5xl font-font-awesome-5-brands">
            <div className="w-[30.5px] relative font-font-awesome-5-free inline-block h-[25px] shrink-0">
              
            </div>
            <div className="w-[26.7px] relative inline-block h-[25px] shrink-0">
              
            </div>
            <div className="w-[26.7px] relative inline-block h-[25px] shrink-0">
              
            </div>
            <div className="w-7 relative inline-block h-[25px] shrink-0"></div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-between text-lg sm:flex-col sm:gap-[15px] sm:items-center sm:justify-start">
          <div className="flex flex-row items-center justify-start gap-[30px]">
            <div className="w-0.5 relative border-text-secondary border-r-[2px] border-solid box-border h-[148px]" />
            <div className="flex flex-col items-start justify-center gap-[26px]">
              <div className="relative leading-[181.53%] font-medium">
                HackUMass XII
              </div>
              <div className="relative leading-[181.53%] font-medium">
                Why HackUMass
              </div>
              <div className="relative leading-[181.53%] font-medium">
                Sponsors
              </div>
            </div>
          </div>
          <img
            className="w-[191px] h-[142px] object-cover"
            alt=""
            src="/hackumass-logo@2x.png"
          />
          <div className="flex flex-row items-center justify-end gap-[30px]">
            <div className="flex flex-col items-end justify-center gap-[26px]">
              <div className="relative leading-[181.53%] font-medium text-right">
                FAQ
              </div>
              <div className="relative leading-[181.53%] font-medium">Team</div>
              <div className="relative leading-[181.53%] font-medium">
                Contact Us
              </div>
            </div>
            <div className="w-0.5 relative border-text-secondary border-r-[2px] border-solid box-border h-[148px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
