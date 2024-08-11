import { useEffect } from "react";
import PropTypes from "prop-types";

const SponsorsCard = ({image}) => {
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
    <div
      className={`h-[156px] w-[323px] relative [&.animate]:animate-[1s_ease_0s_1_normal_forwards_fade-in-bottom] opacity-[0]`}
      data-animate-on-scroll
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xl bg-lightest-grey" />
      <img
        className="absolute h-[62.5%] w-[88.98%] top-[18.78%] right-[5.54%] bottom-[18.72%] left-[5.48%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={image}
      />
    </div>
  );
};

SponsorsCard.propTypes = {
  className: PropTypes.string,
  image15: PropTypes.string,
};

export default SponsorsCard;
