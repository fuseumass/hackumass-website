import { useEffect } from "react";
import Question from "./Question";
import PropTypes from "prop-types";

const FAQ = ({ className = "" }) => {
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
      className={`self-stretch flex flex-col items-center justify-start gap-[90px] [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in] opacity-[0] text-center text-45xl text-text-secondary font-heading ${className}`}
      data-animate-on-scroll
    >
      <div className="flex flex-col items-center justify-start py-0 px-[60px]">
        <h1 className="m-0 self-stretch relative text-inherit leading-[131.7%] font-semibold font-[inherit]">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start py-0 px-[60px] gap-[60px] lg:pl-[30px] lg:pr-[30px] lg:box-border md:gap-[15px] sm:gap-[15px] sm:pl-[30px] sm:box-border">
        <div className="self-stretch flex flex-row items-center justify-between py-0 px-[90px] md:flex-col md:gap-[30px] md:items-start md:justify-start">
          <Question />
          <Question />
        </div>
        <div className="self-stretch flex flex-row items-center justify-between py-0 px-[90px] md:flex-col md:gap-[15px] md:items-start md:justify-start">
          <Question />
          <Question />
        </div>
        <div className="self-stretch flex flex-row items-center justify-between py-0 px-[90px] md:flex-col md:gap-[15px] md:items-start md:justify-start">
          <Question />
          <Question />
        </div>
        <div className="self-stretch flex flex-row items-center justify-between py-0 px-[90px] md:flex-col md:gap-[15px] md:items-start md:justify-start">
          <Question />
          <Question />
        </div>
      </div>
    </section>
  );
};

FAQ.propTypes = {
  className: PropTypes.string,
};

export default FAQ;
